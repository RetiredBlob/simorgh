import _styled from '@emotion/styled/base';
import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { C_SHADOW } from '#legacy/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_DBL } from '#legacy/gel-foundations/spacings';
import {
  GEL_GROUP_0_SCREEN_WIDTH_MAX,
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '#legacy/gel-foundations/breakpoints';
import { grid } from '#legacy/psammead-styles/detection';
import Link from '../Link'; // Gets the number of grid rows, taking into account the
// trustProjectLink in the grid being separate, on its own row.

var getRowCount = function getRowCount(links, columns, trustProjectLink) {
  return trustProjectLink
    ? Math.ceil(links.length / columns) + 1
    : Math.ceil(links.length / columns);
};

var StyledList = _styled(
  'ul',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1jbzoem1',
      }
    : {
        target: 'e1jbzoem1',
        label: 'StyledList',
      },
)(
  'border-bottom:0.0625rem solid ',
  C_SHADOW,
  ';list-style-type:none;margin:0;padding:',
  function (_ref) {
    var trustProjectLink = _ref.trustProjectLink;
    return trustProjectLink
      ? '0 0 '.concat(GEL_SPACING)
      : ''.concat(GEL_SPACING, ' 0');
  },
  ';column-count:4;@supports (',
  grid,
  '){display:grid;grid-auto-flow:column;}@media (max-width: ',
  GEL_GROUP_0_SCREEN_WIDTH_MAX,
  '){grid-auto-flow:row;column-count:1;}@media (min-width: ',
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  ') and (max-width: ',
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  '){grid-column-gap:',
  GEL_SPACING,
  ';grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(\n      ',
  function (_ref2) {
    var links = _ref2.links,
      trustProjectLink = _ref2.trustProjectLink;
    return getRowCount(links, 2, trustProjectLink);
  },
  ',\n      auto\n    );column-count:2;}@media (min-width: ',
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  ') and (max-width: ',
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  '){grid-column-gap:',
  GEL_SPACING_DBL,
  ';grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(\n      ',
  function (_ref3) {
    var links = _ref3.links,
      trustProjectLink = _ref3.trustProjectLink;
    return getRowCount(links, 3, trustProjectLink);
  },
  ',\n      auto\n    );column-count:3;}@media (min-width: ',
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  ') and (max-width: ',
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
  '){grid-column-gap:',
  GEL_SPACING_DBL,
  ';grid-template-columns:repeat(4, 1fr);grid-template-rows:repeat(\n      ',
  function (_ref4) {
    var links = _ref4.links,
      trustProjectLink = _ref4.trustProjectLink;
    return getRowCount(links, 4, trustProjectLink);
  },
  ',\n      auto\n    );column-count:4;}@media (min-width: ',
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  '){grid-column-gap:',
  GEL_SPACING_DBL,
  ';grid-template-columns:repeat(5, 1fr);grid-template-rows:repeat(\n      ',
  function (_ref5) {
    var links = _ref5.links,
      trustProjectLink = _ref5.trustProjectLink;
    return getRowCount(links, 5, trustProjectLink);
  },
  ',\n      auto\n    );column-count:5;}',
  function (_ref6) {
    var trustProjectLink = _ref6.trustProjectLink;
    return (
      trustProjectLink &&
      '> li:first-of-type {\n    border-bottom: 0.0625rem solid '
        .concat(C_SHADOW, ';\n    padding: ')
        .concat(GEL_SPACING, ' 0;\n    margin-bottom: ')
        .concat(
          GEL_SPACING,
          ';\n    grid-column: 1/-1;\n    width: 100%;\n    column-span: all;\n  }',
        )
    );
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjRCIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBzdHJpbmcsIGFycmF5T2YsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDX1NIQURPVyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcsIEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7XG4gIEdFTF9HUk9VUF8wX1NDUkVFTl9XSURUSF9NQVgsXG4gIEdFTF9HUk9VUF8xX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NQVgsXG4gIEdFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NQVgsXG4gIEdFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NQVgsXG4gIEdFTF9HUk9VUF81X1NDUkVFTl9XSURUSF9NSU4sXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL2JyZWFrcG9pbnRzJztcbmltcG9ydCB7IGdyaWQgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9kZXRlY3Rpb24nO1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcblxuLy8gR2V0cyB0aGUgbnVtYmVyIG9mIGdyaWQgcm93cywgdGFraW5nIGludG8gYWNjb3VudCB0aGVcbi8vIHRydXN0UHJvamVjdExpbmsgaW4gdGhlIGdyaWQgYmVpbmcgc2VwYXJhdGUsIG9uIGl0cyBvd24gcm93LlxuY29uc3QgZ2V0Um93Q291bnQgPSAobGlua3MsIGNvbHVtbnMsIHRydXN0UHJvamVjdExpbmspID0+XG4gIHRydXN0UHJvamVjdExpbmtcbiAgICA/IE1hdGguY2VpbChsaW5rcy5sZW5ndGggLyBjb2x1bW5zKSArIDFcbiAgICA6IE1hdGguY2VpbChsaW5rcy5sZW5ndGggLyBjb2x1bW5zKTtcblxuY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC51bGBcbiAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkICR7Q19TSEFET1d9O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogJHsoeyB0cnVzdFByb2plY3RMaW5rIH0pID0+XG4gICAgdHJ1c3RQcm9qZWN0TGluayA/IGAwIDAgJHtHRUxfU1BBQ0lOR31gIDogYCR7R0VMX1NQQUNJTkd9IDBgfTtcbiAgY29sdW1uLWNvdW50OiA0O1xuXG4gIEBzdXBwb3J0cyAoJHtncmlkfSkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8wX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBjb2x1bW4tY291bnQ6IDE7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzFfU0NSRUVOX1dJRFRIX01JTn0pIGFuZCAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HfTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFxuICAgICAgJHsoeyBsaW5rcywgdHJ1c3RQcm9qZWN0TGluayB9KSA9PlxuICAgICAgICBnZXRSb3dDb3VudChsaW5rcywgMiwgdHJ1c3RQcm9qZWN0TGluayl9LFxuICAgICAgYXV0b1xuICAgICk7XG4gICAgY29sdW1uLWNvdW50OiAyO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU59KSBhbmQgKG1heC13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUFYfSkge1xuICAgIGdyaWQtY29sdW1uLWdhcDogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXG4gICAgICAkeyh7IGxpbmtzLCB0cnVzdFByb2plY3RMaW5rIH0pID0+XG4gICAgICAgIGdldFJvd0NvdW50KGxpbmtzLCAzLCB0cnVzdFByb2plY3RMaW5rKX0sXG4gICAgICBhdXRvXG4gICAgKTtcbiAgICBjb2x1bW4tY291bnQ6IDM7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTn0pIGFuZCAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HX0RCTH07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChcbiAgICAgICR7KHsgbGlua3MsIHRydXN0UHJvamVjdExpbmsgfSkgPT5cbiAgICAgICAgZ2V0Um93Q291bnQobGlua3MsIDQsIHRydXN0UHJvamVjdExpbmspfSxcbiAgICAgIGF1dG9cbiAgICApO1xuICAgIGNvbHVtbi1jb3VudDogNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfNV9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGdyaWQtY29sdW1uLWdhcDogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXG4gICAgICAkeyh7IGxpbmtzLCB0cnVzdFByb2plY3RMaW5rIH0pID0+XG4gICAgICAgIGdldFJvd0NvdW50KGxpbmtzLCA1LCB0cnVzdFByb2plY3RMaW5rKX0sXG4gICAgICBhdXRvXG4gICAgKTtcbiAgICBjb2x1bW4tY291bnQ6IDU7XG4gIH1cbiAgJHsoeyB0cnVzdFByb2plY3RMaW5rIH0pID0+XG4gICAgdHJ1c3RQcm9qZWN0TGluayAmJlxuICAgIGA+IGxpOmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCAke0NfU0hBRE9XfTtcbiAgICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HfSAwO1xuICAgIG1hcmdpbi1ib3R0b206ICR7R0VMX1NQQUNJTkd9O1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbHVtbi1zcGFuOiBhbGw7XG4gIH1gfVxuYDtcblxuY29uc3QgU3R5bGVkTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIG1pbi13aWR0aDogNTAlO1xuICBjb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HX0RCTH07XG4gIGJyZWFrLWluc2lkZTogYXZvaWQtY29sdW1uO1xuYDtcblxuY29uc3QgbGlzdEl0ZW0gPSAoa2V5LCB0ZXh0LCBocmVmLCBsYW5nKSA9PiAoXG4gIDxTdHlsZWRMaXN0SXRlbSBrZXk9e2tleX0gcm9sZT1cImxpc3RpdGVtXCI+XG4gICAgPExpbmsgdGV4dD17dGV4dH0gaHJlZj17aHJlZn0gbGFuZz17bGFuZ30gLz5cbiAgPC9TdHlsZWRMaXN0SXRlbT5cbik7XG5cbmNvbnN0IExpc3QgPSAoeyBsaW5rcywgdHJ1c3RQcm9qZWN0TGluayB9KSA9PiAoXG4gIDxTdHlsZWRMaXN0IHJvbGU9XCJsaXN0XCIgdHJ1c3RQcm9qZWN0TGluaz17dHJ1c3RQcm9qZWN0TGlua30gbGlua3M9e2xpbmtzfT5cbiAgICB7dHJ1c3RQcm9qZWN0TGluayAmJlxuICAgICAgbGlzdEl0ZW0oXG4gICAgICAgIHRydXN0UHJvamVjdExpbmsudGV4dCxcbiAgICAgICAgdHJ1c3RQcm9qZWN0TGluay50ZXh0LFxuICAgICAgICB0cnVzdFByb2plY3RMaW5rLmhyZWYsXG4gICAgICApfVxuICAgIHtsaW5rcy5tYXAobGluayA9PiBsaXN0SXRlbShsaW5rLnRleHQsIGxpbmsudGV4dCwgbGluay5ocmVmLCBsaW5rLmxhbmcpKX1cbiAgPC9TdHlsZWRMaXN0PlxuKTtcblxuY29uc3QgbGlua1Byb3BUeXBlcyA9IHNoYXBlKHtcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRleHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsYW5nOiBzdHJpbmcsXG59KTtcblxuTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGxpbmtzOiBhcnJheU9mKGxpbmtQcm9wVHlwZXMuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcbiAgdHJ1c3RQcm9qZWN0TGluazogbGlua1Byb3BUeXBlcyxcbn07XG5cbkxpc3QuZGVmYXVsdFByb3BzID0geyB0cnVzdFByb2plY3RMaW5rOiBudWxsIH07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0= */'),
);

var StyledListItem = _styled(
  'li',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1jbzoem0',
      }
    : {
        target: 'e1jbzoem0',
        label: 'StyledListItem',
      },
)(
  'min-width:50%;column-gap:',
  GEL_SPACING_DBL,
  ';break-inside:avoid-column;' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRmdDIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBzdHJpbmcsIGFycmF5T2YsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDX1NIQURPVyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcsIEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7XG4gIEdFTF9HUk9VUF8wX1NDUkVFTl9XSURUSF9NQVgsXG4gIEdFTF9HUk9VUF8xX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NQVgsXG4gIEdFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NQVgsXG4gIEdFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NQVgsXG4gIEdFTF9HUk9VUF81X1NDUkVFTl9XSURUSF9NSU4sXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL2JyZWFrcG9pbnRzJztcbmltcG9ydCB7IGdyaWQgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9kZXRlY3Rpb24nO1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi9MaW5rJztcblxuLy8gR2V0cyB0aGUgbnVtYmVyIG9mIGdyaWQgcm93cywgdGFraW5nIGludG8gYWNjb3VudCB0aGVcbi8vIHRydXN0UHJvamVjdExpbmsgaW4gdGhlIGdyaWQgYmVpbmcgc2VwYXJhdGUsIG9uIGl0cyBvd24gcm93LlxuY29uc3QgZ2V0Um93Q291bnQgPSAobGlua3MsIGNvbHVtbnMsIHRydXN0UHJvamVjdExpbmspID0+XG4gIHRydXN0UHJvamVjdExpbmtcbiAgICA/IE1hdGguY2VpbChsaW5rcy5sZW5ndGggLyBjb2x1bW5zKSArIDFcbiAgICA6IE1hdGguY2VpbChsaW5rcy5sZW5ndGggLyBjb2x1bW5zKTtcblxuY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC51bGBcbiAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkICR7Q19TSEFET1d9O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogJHsoeyB0cnVzdFByb2plY3RMaW5rIH0pID0+XG4gICAgdHJ1c3RQcm9qZWN0TGluayA/IGAwIDAgJHtHRUxfU1BBQ0lOR31gIDogYCR7R0VMX1NQQUNJTkd9IDBgfTtcbiAgY29sdW1uLWNvdW50OiA0O1xuXG4gIEBzdXBwb3J0cyAoJHtncmlkfSkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8wX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICBjb2x1bW4tY291bnQ6IDE7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzFfU0NSRUVOX1dJRFRIX01JTn0pIGFuZCAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HfTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFxuICAgICAgJHsoeyBsaW5rcywgdHJ1c3RQcm9qZWN0TGluayB9KSA9PlxuICAgICAgICBnZXRSb3dDb3VudChsaW5rcywgMiwgdHJ1c3RQcm9qZWN0TGluayl9LFxuICAgICAgYXV0b1xuICAgICk7XG4gICAgY29sdW1uLWNvdW50OiAyO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU59KSBhbmQgKG1heC13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUFYfSkge1xuICAgIGdyaWQtY29sdW1uLWdhcDogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXG4gICAgICAkeyh7IGxpbmtzLCB0cnVzdFByb2plY3RMaW5rIH0pID0+XG4gICAgICAgIGdldFJvd0NvdW50KGxpbmtzLCAzLCB0cnVzdFByb2plY3RMaW5rKX0sXG4gICAgICBhdXRvXG4gICAgKTtcbiAgICBjb2x1bW4tY291bnQ6IDM7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTn0pIGFuZCAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HX0RCTH07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChcbiAgICAgICR7KHsgbGlua3MsIHRydXN0UHJvamVjdExpbmsgfSkgPT5cbiAgICAgICAgZ2V0Um93Q291bnQobGlua3MsIDQsIHRydXN0UHJvamVjdExpbmspfSxcbiAgICAgIGF1dG9cbiAgICApO1xuICAgIGNvbHVtbi1jb3VudDogNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfNV9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGdyaWQtY29sdW1uLWdhcDogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXG4gICAgICAkeyh7IGxpbmtzLCB0cnVzdFByb2plY3RMaW5rIH0pID0+XG4gICAgICAgIGdldFJvd0NvdW50KGxpbmtzLCA1LCB0cnVzdFByb2plY3RMaW5rKX0sXG4gICAgICBhdXRvXG4gICAgKTtcbiAgICBjb2x1bW4tY291bnQ6IDU7XG4gIH1cbiAgJHsoeyB0cnVzdFByb2plY3RMaW5rIH0pID0+XG4gICAgdHJ1c3RQcm9qZWN0TGluayAmJlxuICAgIGA+IGxpOmZpcnN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCAke0NfU0hBRE9XfTtcbiAgICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HfSAwO1xuICAgIG1hcmdpbi1ib3R0b206ICR7R0VMX1NQQUNJTkd9O1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbHVtbi1zcGFuOiBhbGw7XG4gIH1gfVxuYDtcblxuY29uc3QgU3R5bGVkTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIG1pbi13aWR0aDogNTAlO1xuICBjb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HX0RCTH07XG4gIGJyZWFrLWluc2lkZTogYXZvaWQtY29sdW1uO1xuYDtcblxuY29uc3QgbGlzdEl0ZW0gPSAoa2V5LCB0ZXh0LCBocmVmLCBsYW5nKSA9PiAoXG4gIDxTdHlsZWRMaXN0SXRlbSBrZXk9e2tleX0gcm9sZT1cImxpc3RpdGVtXCI+XG4gICAgPExpbmsgdGV4dD17dGV4dH0gaHJlZj17aHJlZn0gbGFuZz17bGFuZ30gLz5cbiAgPC9TdHlsZWRMaXN0SXRlbT5cbik7XG5cbmNvbnN0IExpc3QgPSAoeyBsaW5rcywgdHJ1c3RQcm9qZWN0TGluayB9KSA9PiAoXG4gIDxTdHlsZWRMaXN0IHJvbGU9XCJsaXN0XCIgdHJ1c3RQcm9qZWN0TGluaz17dHJ1c3RQcm9qZWN0TGlua30gbGlua3M9e2xpbmtzfT5cbiAgICB7dHJ1c3RQcm9qZWN0TGluayAmJlxuICAgICAgbGlzdEl0ZW0oXG4gICAgICAgIHRydXN0UHJvamVjdExpbmsudGV4dCxcbiAgICAgICAgdHJ1c3RQcm9qZWN0TGluay50ZXh0LFxuICAgICAgICB0cnVzdFByb2plY3RMaW5rLmhyZWYsXG4gICAgICApfVxuICAgIHtsaW5rcy5tYXAobGluayA9PiBsaXN0SXRlbShsaW5rLnRleHQsIGxpbmsudGV4dCwgbGluay5ocmVmLCBsaW5rLmxhbmcpKX1cbiAgPC9TdHlsZWRMaXN0PlxuKTtcblxuY29uc3QgbGlua1Byb3BUeXBlcyA9IHNoYXBlKHtcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRleHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsYW5nOiBzdHJpbmcsXG59KTtcblxuTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGxpbmtzOiBhcnJheU9mKGxpbmtQcm9wVHlwZXMuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcbiAgdHJ1c3RQcm9qZWN0TGluazogbGlua1Byb3BUeXBlcyxcbn07XG5cbkxpc3QuZGVmYXVsdFByb3BzID0geyB0cnVzdFByb2plY3RMaW5rOiBudWxsIH07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0= */'),
);

var listItem = function listItem(key, text, href, lang) {
  return /*#__PURE__*/ React.createElement(
    StyledListItem,
    {
      key: key,
      role: 'listitem',
    },
    /*#__PURE__*/ React.createElement(Link, {
      text: text,
      href: href,
      lang: lang,
    }),
  );
};

var List = function List(_ref7) {
  var links = _ref7.links,
    trustProjectLink = _ref7.trustProjectLink;
  return /*#__PURE__*/ React.createElement(
    StyledList,
    {
      role: 'list',
      trustProjectLink: trustProjectLink,
      links: links,
    },
    trustProjectLink &&
      listItem(
        trustProjectLink.text,
        trustProjectLink.text,
        trustProjectLink.href,
      ),
    links.map(function (link) {
      return listItem(link.text, link.text, link.href, link.lang);
    }),
  );
};

var linkPropTypes = shape({
  href: string.isRequired,
  text: string.isRequired,
  lang: string,
});
List.propTypes = {
  links: arrayOf(linkPropTypes.isRequired).isRequired,
  trustProjectLink: linkPropTypes,
};
List.defaultProps = {
  trustProjectLink: null,
};
export default List;
