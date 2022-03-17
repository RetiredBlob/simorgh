import React from 'react';
import { latin } from '#legacy/gel-foundations/scripts';
import { shouldMatchSnapshot } from '#legacy/psammead-test-helpers';
import LastUpdated from './LastUpdated';

describe('MostReadCanonical - LastUpdated', () => {
  shouldMatchSnapshot(
    'should render LastUpdated correctly',
    <LastUpdated
      timestamp={864691200}
      prefix="Last Updated:"
      script={latin}
      service="news"
      locale="en-gb"
      timezone="Europe/London"
    />,
  );
});
