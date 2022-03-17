import _styled from '@emotion/styled/base';
import React from 'react';
import { getSerifMedium } from '#legacy/psammead-styles/font-styles';
import { C_EBON, C_METAL } from '#legacy/psammead-styles/colours';
import { grid } from '#legacy/psammead-styles/detection';
import { getPica } from '#legacy/gel-foundations/typography';
import { GEL_SPACING, GEL_SPACING_DBL } from '#legacy/gel-foundations/spacings';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
} from '#legacy/gel-foundations/breakpoints';
import { node, string, shape } from 'prop-types';
import { scriptPropType } from '#legacy/gel-foundations/prop-types';

var getRowCount = function getRowCount(children, columns) {
  return Math.ceil(React.Children.count(children) / columns);
};

export var UsefulLink = _styled(
  'a',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1gdn86p2',
      }
    : {
        target: 'e1gdn86p2',
        label: 'UsefulLink',
      },
)(
  function (_ref) {
    var script = _ref.script;
    return script && getPica(script);
  },
  ';',
  function (_ref2) {
    var service = _ref2.service;
    return service && getSerifMedium(service);
  },
  ';color:',
  C_EBON,
  ';text-decoration:none;&:hover,&:focus{text-decoration:underline;}&:visited{color:',
  C_METAL,
  ';}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGdldFNlcmlmTWVkaXVtIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgQ19FQk9OLCBDX01FVEFMIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBncmlkIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZGV0ZWN0aW9uJztcbmltcG9ydCB7IGdldFBpY2EgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IEdFTF9TUEFDSU5HLCBHRUxfU1BBQ0lOR19EQkwgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUFYLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5pbXBvcnQgeyBub2RlLCBzdHJpbmcsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5jb25zdCBnZXRSb3dDb3VudCA9IChjaGlsZHJlbiwgY29sdW1ucykgPT5cbiAgTWF0aC5jZWlsKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAvIGNvbHVtbnMpO1xuXG5leHBvcnQgY29uc3QgVXNlZnVsTGluayA9IHN0eWxlZC5hYFxuICAkeyh7IHNjcmlwdCB9KSA9PiBzY3JpcHQgJiYgZ2V0UGljYShzY3JpcHQpfTtcbiAgJHsoeyBzZXJ2aWNlIH0pID0+IHNlcnZpY2UgJiYgZ2V0U2VyaWZNZWRpdW0oc2VydmljZSl9O1xuICBjb2xvcjogJHtDX0VCT059O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogJHtDX01FVEFMfTtcbiAgfVxuYDtcblxuVXNlZnVsTGluay5wcm9wVHlwZXMgPSB7XG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBocmVmOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VmdWxMaW5rc1VsID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICBjb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HX0RCTH07XG5cbiAgICBAc3VwcG9ydHMgKCR7Z3JpZH0pIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFxuICAgICAgICAkeyh7IGNoaWxkcmVuIH0pID0+IGdldFJvd0NvdW50KGNoaWxkcmVuLCAyKX0sXG4gICAgICAgIGF1dG9cbiAgICAgICk7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6ICR7R0VMX1NQQUNJTkdfREJMfTtcbiAgICB9XG4gIH1cbmA7XG5cblVzZWZ1bExpbmtzVWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogbm9kZS5pc1JlcXVpcmVkLFxufTtcblxuVXNlZnVsTGlua3NVbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvbGU6ICdsaXN0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VmdWxMaW5rc0xpID0gc3R5bGVkLmxpYFxuICBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR307XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01BWH0pIHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgfVxuXG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIEBzdXBwb3J0cyAoJHtncmlkfSkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgIH1cbiAgfVxuYDtcblxuVXNlZnVsTGlua3NMaS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5Vc2VmdWxMaW5rc0xpLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm9sZTogJ2xpc3RpdGVtJyxcbn07XG4iXX0= */'),
);
UsefulLink.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  href: string.isRequired,
};
export var UsefulLinksUl = _styled(
  'ul',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1gdn86p1',
      }
    : {
        target: 'e1gdn86p1',
        label: 'UsefulLinksUl',
      },
)(
  'padding:0;margin:0;list-style-type:none;@media (min-width: ',
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  '){column-count:2;column-gap:',
  GEL_SPACING_DBL,
  ';@supports (',
  grid,
  '){display:grid;grid-auto-flow:column;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(\n        ',
  function (_ref3) {
    var children = _ref3.children;
    return getRowCount(children, 2);
  },
  ',\n        auto\n      );grid-column-gap:',
  GEL_SPACING_DBL,
  ';}}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NzQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGdldFNlcmlmTWVkaXVtIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgQ19FQk9OLCBDX01FVEFMIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBncmlkIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZGV0ZWN0aW9uJztcbmltcG9ydCB7IGdldFBpY2EgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IEdFTF9TUEFDSU5HLCBHRUxfU1BBQ0lOR19EQkwgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUFYLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5pbXBvcnQgeyBub2RlLCBzdHJpbmcsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5jb25zdCBnZXRSb3dDb3VudCA9IChjaGlsZHJlbiwgY29sdW1ucykgPT5cbiAgTWF0aC5jZWlsKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAvIGNvbHVtbnMpO1xuXG5leHBvcnQgY29uc3QgVXNlZnVsTGluayA9IHN0eWxlZC5hYFxuICAkeyh7IHNjcmlwdCB9KSA9PiBzY3JpcHQgJiYgZ2V0UGljYShzY3JpcHQpfTtcbiAgJHsoeyBzZXJ2aWNlIH0pID0+IHNlcnZpY2UgJiYgZ2V0U2VyaWZNZWRpdW0oc2VydmljZSl9O1xuICBjb2xvcjogJHtDX0VCT059O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogJHtDX01FVEFMfTtcbiAgfVxuYDtcblxuVXNlZnVsTGluay5wcm9wVHlwZXMgPSB7XG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBocmVmOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VmdWxMaW5rc1VsID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICBjb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HX0RCTH07XG5cbiAgICBAc3VwcG9ydHMgKCR7Z3JpZH0pIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFxuICAgICAgICAkeyh7IGNoaWxkcmVuIH0pID0+IGdldFJvd0NvdW50KGNoaWxkcmVuLCAyKX0sXG4gICAgICAgIGF1dG9cbiAgICAgICk7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6ICR7R0VMX1NQQUNJTkdfREJMfTtcbiAgICB9XG4gIH1cbmA7XG5cblVzZWZ1bExpbmtzVWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogbm9kZS5pc1JlcXVpcmVkLFxufTtcblxuVXNlZnVsTGlua3NVbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvbGU6ICdsaXN0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VmdWxMaW5rc0xpID0gc3R5bGVkLmxpYFxuICBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR307XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01BWH0pIHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgfVxuXG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIEBzdXBwb3J0cyAoJHtncmlkfSkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgIH1cbiAgfVxuYDtcblxuVXNlZnVsTGlua3NMaS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5Vc2VmdWxMaW5rc0xpLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm9sZTogJ2xpc3RpdGVtJyxcbn07XG4iXX0= */'),
);
UsefulLinksUl.propTypes = {
  children: node.isRequired,
};
UsefulLinksUl.defaultProps = {
  role: 'list',
};
export var UsefulLinksLi = _styled(
  'li',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1gdn86p0',
      }
    : {
        target: 'e1gdn86p0',
        label: 'UsefulLinksLi',
      },
)(
  'padding-top:',
  GEL_SPACING,
  ';@media (max-width: ',
  GEL_GROUP_2_SCREEN_WIDTH_MAX,
  '){&:first-child{padding-top:0;}}width:100%;@media (min-width: ',
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  '){display:inline-block;@supports (',
  grid,
  '){display:block;align-self:start;width:initial;}}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VzQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGdldFNlcmlmTWVkaXVtIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgQ19FQk9OLCBDX01FVEFMIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBncmlkIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZGV0ZWN0aW9uJztcbmltcG9ydCB7IGdldFBpY2EgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IEdFTF9TUEFDSU5HLCBHRUxfU1BBQ0lOR19EQkwgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUFYLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5pbXBvcnQgeyBub2RlLCBzdHJpbmcsIHNoYXBlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5jb25zdCBnZXRSb3dDb3VudCA9IChjaGlsZHJlbiwgY29sdW1ucykgPT5cbiAgTWF0aC5jZWlsKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSAvIGNvbHVtbnMpO1xuXG5leHBvcnQgY29uc3QgVXNlZnVsTGluayA9IHN0eWxlZC5hYFxuICAkeyh7IHNjcmlwdCB9KSA9PiBzY3JpcHQgJiYgZ2V0UGljYShzY3JpcHQpfTtcbiAgJHsoeyBzZXJ2aWNlIH0pID0+IHNlcnZpY2UgJiYgZ2V0U2VyaWZNZWRpdW0oc2VydmljZSl9O1xuICBjb2xvcjogJHtDX0VCT059O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJjp2aXNpdGVkIHtcbiAgICBjb2xvcjogJHtDX01FVEFMfTtcbiAgfVxuYDtcblxuVXNlZnVsTGluay5wcm9wVHlwZXMgPSB7XG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBocmVmOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VmdWxMaW5rc1VsID0gc3R5bGVkLnVsYFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICBjb2x1bW4tZ2FwOiAke0dFTF9TUEFDSU5HX0RCTH07XG5cbiAgICBAc3VwcG9ydHMgKCR7Z3JpZH0pIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFxuICAgICAgICAkeyh7IGNoaWxkcmVuIH0pID0+IGdldFJvd0NvdW50KGNoaWxkcmVuLCAyKX0sXG4gICAgICAgIGF1dG9cbiAgICAgICk7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6ICR7R0VMX1NQQUNJTkdfREJMfTtcbiAgICB9XG4gIH1cbmA7XG5cblVzZWZ1bExpbmtzVWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogbm9kZS5pc1JlcXVpcmVkLFxufTtcblxuVXNlZnVsTGlua3NVbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvbGU6ICdsaXN0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VmdWxMaW5rc0xpID0gc3R5bGVkLmxpYFxuICBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR307XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01BWH0pIHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbiAgfVxuXG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIEBzdXBwb3J0cyAoJHtncmlkfSkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgIH1cbiAgfVxuYDtcblxuVXNlZnVsTGlua3NMaS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5Vc2VmdWxMaW5rc0xpLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm9sZTogJ2xpc3RpdGVtJyxcbn07XG4iXX0= */'),
);
UsefulLinksLi.propTypes = {
  children: node.isRequired,
};
UsefulLinksLi.defaultProps = {
  role: 'listitem',
};
