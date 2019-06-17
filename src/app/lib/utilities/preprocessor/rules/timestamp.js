/* eslint-disable no-use-before-define */
import deepClone from '../../../json/deepClone';
import deepGet from '../../../json/deepGet';

const augmentWithTimestamp = jsonRaw => {
  // safely get deeply nested JSON values
  const firstPublished = deepGet(['metadata', 'firstPublished'], jsonRaw);
  const lastPublished = deepGet(['metadata', 'lastPublished'], jsonRaw);
  const hasBlocks = deepGet(['content', 'model', 'blocks'], jsonRaw);
  const canRenderTimestamp = firstPublished && lastPublished && hasBlocks;

  if (canRenderTimestamp) {
    // construct a new block from the metadata
    const timestampBlock = {
      type: 'timestamp',
      model: {
        firstPublished,
        lastPublished,
      },
    };
    return insertTimestampBlock(jsonRaw, timestampBlock);
  }

  return jsonRaw;
};

export default augmentWithTimestamp;

/**
 * Where the `timestampBlock` is inserted in the payload is dependent on the
 * presence or absence of a `headline` block, and other factors.
 * @param {Object} json
 * @param {Object} timestampBlock
 */
const insertTimestampBlock = (originalJson, timestampBlock) => {
  const json = deepClone(originalJson); // make a copy so we don't corrupt the input
  const { headlineBlocks, mainBlocks } = splitBlocksByHeadline(
    json.content.model.blocks,
  );

  if (headlineBlocks.length > 0) {
    if (imageOrAresMediaFirst(mainBlocks)) {
      json.content.model.blocks = [
        ...headlineBlocks,
        mainBlocks[0],
        timestampBlock,
        ...mainBlocks.slice(1),
      ];
    } else {
      json.content.model.blocks = [
        ...headlineBlocks,
        timestampBlock,
        ...mainBlocks,
      ];
    }
  } else {
    // put timestamp block in as the first element
    json.content.model.blocks.unshift(timestampBlock);
  }
  return json;
};

const splitBlocksByHeadline = blocks => {
  const headlineIndexPlusOne =
    blocks.findIndex(({ type }) => type === 'headline') + 1;

  const headlineBlocks = blocks.slice(0, headlineIndexPlusOne);
  const mainBlocks = blocks.slice(headlineIndexPlusOne, blocks.length);

  return { headlineBlocks, mainBlocks };
};

const imageOrAresMediaFirst = blocks =>
  blocks.length > 0 &&
  (blocks[0].type === 'image' || blocks[0].type === 'aresMedia');
