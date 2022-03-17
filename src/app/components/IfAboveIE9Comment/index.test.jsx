import React from 'react';
import { shouldMatchSnapshot } from '#legacy/psammead-test-helpers';
import IfAboveIE9 from '.';

describe('IfAboveIE9Comment', () => {
  shouldMatchSnapshot(
    'should render if not IE9',
    <IfAboveIE9>
      <h1>I can not be seen on IE9</h1>
    </IfAboveIE9>,
  );
});
