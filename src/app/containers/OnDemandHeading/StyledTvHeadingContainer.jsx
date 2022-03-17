import styled from '@emotion/styled';
import { GEL_SPACING, GEL_SPACING_DBL } from '#legacy/gel-foundations/spacings';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '#legacy/gel-foundations/breakpoints';
import OnDemandHeading from '.';

const StyledTvHeadingContainer = styled(OnDemandHeading)`
  @media (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: ${GEL_SPACING} 0;
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL} 0;
  }
`;

export default StyledTvHeadingContainer;
