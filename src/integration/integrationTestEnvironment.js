const JsdomEnvironment = require('jest-environment-jsdom');
const render = require('./render');

class CustomEnvironment extends JsdomEnvironment {
  constructor(config, context) {
    super(config, context);
    this.docblockPragmas = context.docblockPragmas;
  }

  async setup() {
    const { pathname } = this.docblockPragmas;
    const renderCanonical = render(pathname);
    const renderAmp = render(`${pathname}.amp`);

    await super.setup();

    const [canonical, amp] = await Promise.all([renderCanonical, renderAmp]);

    this.global.canonical = canonical;
    this.global.amp = amp;
  }

  async teardown() {
    this.global.canonical = undefined;
    this.global.amp = undefined;
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;
