import _styled from '@emotion/styled/base';
import React from 'react';
import { string, shape } from 'prop-types';
import { getSansRegular } from '#legacy/psammead-styles/font-styles';
import { GEL_SPACING } from '#legacy/gel-foundations/spacings';
import { C_METAL, C_SHADOW } from '#legacy/psammead-styles/colours';
import { getLongPrimer } from '#legacy/gel-foundations/typography';
var AVATAR_DIAMETER = '4rem';

var Container = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1c9i7u14',
      }
    : {
        target: 'e1c9i7u14',
        label: 'Container',
      },
)(
  'align-items:center;display:flex;',
  function (_ref) {
    var avatar = _ref.avatar;
    return (
      avatar &&
      '\n      margin-right: -'
        .concat(GEL_SPACING, ';\n      margin-left: -')
        .concat(GEL_SPACING, ';\n    ')
    );
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVTRCIiwiZmlsZSI6Ii4uL3NyYy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3RyaW5nLCBzaGFwZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgZ2V0U2Fuc1JlZ3VsYXIgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lORyB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IENfTUVUQUwsIENfU0hBRE9XIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBnZXRMb25nUHJpbWVyIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5cbmNvbnN0IEFWQVRBUl9ESUFNRVRFUiA9ICc0cmVtJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcblxuICAvKiBTdXBwb3J0IFJUTCAqL1xuICAkeyh7IGF2YXRhciB9KSA9PlxuICAgIGF2YXRhciAmJlxuICAgIGBcbiAgICAgIG1hcmdpbi1yaWdodDogLSR7R0VMX1NQQUNJTkd9O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0ke0dFTF9TUEFDSU5HfTtcbiAgICBgfVxuYDtcblxuY29uc3QgQXZhdGFyID0gc3R5bGVkLmltZ2BcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6ICR7QVZBVEFSX0RJQU1FVEVSfTtcbiAgbWFyZ2luLXJpZ2h0OiAke0dFTF9TUEFDSU5HfTtcbiAgbWFyZ2luLWxlZnQ6ICR7R0VMX1NQQUNJTkd9O1xuICB3aWR0aDogJHtBVkFUQVJfRElBTUVURVJ9O1xuYDtcblxuY29uc3QgUGVyc29uID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zUmVndWxhcihzZXJ2aWNlKX1cbiAgJHsoeyBzY3JpcHQgfSkgPT4gZ2V0TG9uZ1ByaW1lcihzY3JpcHQpfVxuYDtcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5saWBcbiAgY29sb3I6ICR7Q19TSEFET1d9O1xuYDtcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmxpYFxuICBjb2xvcjogJHtDX01FVEFMfTtcbmA7XG5cbmNvbnN0IEJ5bGluZSA9ICh7IHNlcnZpY2UsIHNjcmlwdCwgbmFtZSwgdGl0bGUsIGF2YXRhciB9KSA9PiAoXG4gIDxDb250YWluZXIgYXZhdGFyPXthdmF0YXJ9PlxuICAgIHthdmF0YXIgJiYgPEF2YXRhciBzcmM9e2F2YXRhci5zcmN9IGFsdD17YXZhdGFyLmFsdCB8fCAnJ30gLz59XG4gICAgPFBlcnNvbiByb2xlPVwibGlzdFwiIHNlcnZpY2U9e3NlcnZpY2V9IHNjcmlwdD17c2NyaXB0fT5cbiAgICAgIDxOYW1lIHJvbGU9XCJsaXN0aXRlbVwiIGF2YXRhcj17YXZhdGFyfT5cbiAgICAgICAge25hbWV9XG4gICAgICA8L05hbWU+XG4gICAgICA8VGl0bGUgcm9sZT1cImxpc3RpdGVtXCI+e3RpdGxlfTwvVGl0bGU+XG4gICAgPC9QZXJzb24+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuQnlsaW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXZhdGFyOiBudWxsLFxufTtcblxuQnlsaW5lLnByb3BUeXBlcyA9IHtcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGF2YXRhcjogc2hhcGUoe1xuICAgIHNyYzogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWx0OiBzdHJpbmcsXG4gIH0pLFxuICBuYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnlsaW5lO1xuIl19 */'),
);

var Avatar = _styled(
  'img',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1c9i7u13',
      }
    : {
        target: 'e1c9i7u13',
        label: 'Avatar',
      },
)(
  'border-radius:50%;height:',
  AVATAR_DIAMETER,
  ';margin-right:',
  GEL_SPACING,
  ';margin-left:',
  GEL_SPACING,
  ';width:',
  AVATAR_DIAMETER,
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QiIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZywgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQgeyBDX01FVEFMLCBDX1NIQURPVyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0TG9uZ1ByaW1lciB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuXG5jb25zdCBBVkFUQVJfRElBTUVURVIgPSAnNHJlbSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogU3VwcG9ydCBSVEwgKi9cbiAgJHsoeyBhdmF0YXIgfSkgPT5cbiAgICBhdmF0YXIgJiZcbiAgICBgXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0ke0dFTF9TUEFDSU5HfTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHtHRUxfU1BBQ0lOR307XG4gICAgYH1cbmA7XG5cbmNvbnN0IEF2YXRhciA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAke0FWQVRBUl9ESUFNRVRFUn07XG4gIG1hcmdpbi1yaWdodDogJHtHRUxfU1BBQ0lOR307XG4gIG1hcmdpbi1sZWZ0OiAke0dFTF9TUEFDSU5HfTtcbiAgd2lkdGg6ICR7QVZBVEFSX0RJQU1FVEVSfTtcbmA7XG5cbmNvbnN0IFBlcnNvbiA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gICR7KHsgc2NyaXB0IH0pID0+IGdldExvbmdQcmltZXIoc2NyaXB0KX1cbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQubGlgXG4gIGNvbG9yOiAke0NfU0hBRE9XfTtcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5saWBcbiAgY29sb3I6ICR7Q19NRVRBTH07XG5gO1xuXG5jb25zdCBCeWxpbmUgPSAoeyBzZXJ2aWNlLCBzY3JpcHQsIG5hbWUsIHRpdGxlLCBhdmF0YXIgfSkgPT4gKFxuICA8Q29udGFpbmVyIGF2YXRhcj17YXZhdGFyfT5cbiAgICB7YXZhdGFyICYmIDxBdmF0YXIgc3JjPXthdmF0YXIuc3JjfSBhbHQ9e2F2YXRhci5hbHQgfHwgJyd9IC8+fVxuICAgIDxQZXJzb24gcm9sZT1cImxpc3RcIiBzZXJ2aWNlPXtzZXJ2aWNlfSBzY3JpcHQ9e3NjcmlwdH0+XG4gICAgICA8TmFtZSByb2xlPVwibGlzdGl0ZW1cIiBhdmF0YXI9e2F2YXRhcn0+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lPlxuICAgICAgPFRpdGxlIHJvbGU9XCJsaXN0aXRlbVwiPnt0aXRsZX08L1RpdGxlPlxuICAgIDwvUGVyc29uPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbkJ5bGluZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGF2YXRhcjogbnVsbCxcbn07XG5cbkJ5bGluZS5wcm9wVHlwZXMgPSB7XG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBzY3JpcHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBhdmF0YXI6IHNoYXBlKHtcbiAgICBzcmM6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFsdDogc3RyaW5nLFxuICB9KSxcbiAgbmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ5bGluZTtcbiJdfQ== */'),
);

var Person = _styled(
  'ul',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1c9i7u12',
      }
    : {
        target: 'e1c9i7u12',
        label: 'Person',
      },
)(
  'list-style:none;margin-top:0;margin-bottom:0;padding-right:0;padding-left:0;',
  function (_ref2) {
    var service = _ref2.service;
    return getSansRegular(service);
  },
  ' ',
  function (_ref3) {
    var script = _ref3.script;
    return getLongPrimer(script);
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0J3QiIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZywgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQgeyBDX01FVEFMLCBDX1NIQURPVyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0TG9uZ1ByaW1lciB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuXG5jb25zdCBBVkFUQVJfRElBTUVURVIgPSAnNHJlbSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogU3VwcG9ydCBSVEwgKi9cbiAgJHsoeyBhdmF0YXIgfSkgPT5cbiAgICBhdmF0YXIgJiZcbiAgICBgXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0ke0dFTF9TUEFDSU5HfTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHtHRUxfU1BBQ0lOR307XG4gICAgYH1cbmA7XG5cbmNvbnN0IEF2YXRhciA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAke0FWQVRBUl9ESUFNRVRFUn07XG4gIG1hcmdpbi1yaWdodDogJHtHRUxfU1BBQ0lOR307XG4gIG1hcmdpbi1sZWZ0OiAke0dFTF9TUEFDSU5HfTtcbiAgd2lkdGg6ICR7QVZBVEFSX0RJQU1FVEVSfTtcbmA7XG5cbmNvbnN0IFBlcnNvbiA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gICR7KHsgc2NyaXB0IH0pID0+IGdldExvbmdQcmltZXIoc2NyaXB0KX1cbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQubGlgXG4gIGNvbG9yOiAke0NfU0hBRE9XfTtcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5saWBcbiAgY29sb3I6ICR7Q19NRVRBTH07XG5gO1xuXG5jb25zdCBCeWxpbmUgPSAoeyBzZXJ2aWNlLCBzY3JpcHQsIG5hbWUsIHRpdGxlLCBhdmF0YXIgfSkgPT4gKFxuICA8Q29udGFpbmVyIGF2YXRhcj17YXZhdGFyfT5cbiAgICB7YXZhdGFyICYmIDxBdmF0YXIgc3JjPXthdmF0YXIuc3JjfSBhbHQ9e2F2YXRhci5hbHQgfHwgJyd9IC8+fVxuICAgIDxQZXJzb24gcm9sZT1cImxpc3RcIiBzZXJ2aWNlPXtzZXJ2aWNlfSBzY3JpcHQ9e3NjcmlwdH0+XG4gICAgICA8TmFtZSByb2xlPVwibGlzdGl0ZW1cIiBhdmF0YXI9e2F2YXRhcn0+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lPlxuICAgICAgPFRpdGxlIHJvbGU9XCJsaXN0aXRlbVwiPnt0aXRsZX08L1RpdGxlPlxuICAgIDwvUGVyc29uPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbkJ5bGluZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGF2YXRhcjogbnVsbCxcbn07XG5cbkJ5bGluZS5wcm9wVHlwZXMgPSB7XG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBzY3JpcHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBhdmF0YXI6IHNoYXBlKHtcbiAgICBzcmM6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFsdDogc3RyaW5nLFxuICB9KSxcbiAgbmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ5bGluZTtcbiJdfQ== */'),
);

var Name = _styled(
  'li',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1c9i7u11',
      }
    : {
        target: 'e1c9i7u11',
        label: 'Name',
      },
)(
  'color:',
  C_SHADOW,
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNzQiIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZywgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQgeyBDX01FVEFMLCBDX1NIQURPVyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0TG9uZ1ByaW1lciB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuXG5jb25zdCBBVkFUQVJfRElBTUVURVIgPSAnNHJlbSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogU3VwcG9ydCBSVEwgKi9cbiAgJHsoeyBhdmF0YXIgfSkgPT5cbiAgICBhdmF0YXIgJiZcbiAgICBgXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0ke0dFTF9TUEFDSU5HfTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHtHRUxfU1BBQ0lOR307XG4gICAgYH1cbmA7XG5cbmNvbnN0IEF2YXRhciA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAke0FWQVRBUl9ESUFNRVRFUn07XG4gIG1hcmdpbi1yaWdodDogJHtHRUxfU1BBQ0lOR307XG4gIG1hcmdpbi1sZWZ0OiAke0dFTF9TUEFDSU5HfTtcbiAgd2lkdGg6ICR7QVZBVEFSX0RJQU1FVEVSfTtcbmA7XG5cbmNvbnN0IFBlcnNvbiA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gICR7KHsgc2NyaXB0IH0pID0+IGdldExvbmdQcmltZXIoc2NyaXB0KX1cbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQubGlgXG4gIGNvbG9yOiAke0NfU0hBRE9XfTtcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5saWBcbiAgY29sb3I6ICR7Q19NRVRBTH07XG5gO1xuXG5jb25zdCBCeWxpbmUgPSAoeyBzZXJ2aWNlLCBzY3JpcHQsIG5hbWUsIHRpdGxlLCBhdmF0YXIgfSkgPT4gKFxuICA8Q29udGFpbmVyIGF2YXRhcj17YXZhdGFyfT5cbiAgICB7YXZhdGFyICYmIDxBdmF0YXIgc3JjPXthdmF0YXIuc3JjfSBhbHQ9e2F2YXRhci5hbHQgfHwgJyd9IC8+fVxuICAgIDxQZXJzb24gcm9sZT1cImxpc3RcIiBzZXJ2aWNlPXtzZXJ2aWNlfSBzY3JpcHQ9e3NjcmlwdH0+XG4gICAgICA8TmFtZSByb2xlPVwibGlzdGl0ZW1cIiBhdmF0YXI9e2F2YXRhcn0+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lPlxuICAgICAgPFRpdGxlIHJvbGU9XCJsaXN0aXRlbVwiPnt0aXRsZX08L1RpdGxlPlxuICAgIDwvUGVyc29uPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbkJ5bGluZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGF2YXRhcjogbnVsbCxcbn07XG5cbkJ5bGluZS5wcm9wVHlwZXMgPSB7XG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBzY3JpcHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBhdmF0YXI6IHNoYXBlKHtcbiAgICBzcmM6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFsdDogc3RyaW5nLFxuICB9KSxcbiAgbmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ5bGluZTtcbiJdfQ== */'),
);

var Title = _styled(
  'li',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1c9i7u10',
      }
    : {
        target: 'e1c9i7u10',
        label: 'Title',
      },
)(
  'color:',
  C_METAL,
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN1QiIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZywgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQgeyBDX01FVEFMLCBDX1NIQURPVyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0TG9uZ1ByaW1lciB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuXG5jb25zdCBBVkFUQVJfRElBTUVURVIgPSAnNHJlbSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogU3VwcG9ydCBSVEwgKi9cbiAgJHsoeyBhdmF0YXIgfSkgPT5cbiAgICBhdmF0YXIgJiZcbiAgICBgXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0ke0dFTF9TUEFDSU5HfTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHtHRUxfU1BBQ0lOR307XG4gICAgYH1cbmA7XG5cbmNvbnN0IEF2YXRhciA9IHN0eWxlZC5pbWdgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAke0FWQVRBUl9ESUFNRVRFUn07XG4gIG1hcmdpbi1yaWdodDogJHtHRUxfU1BBQ0lOR307XG4gIG1hcmdpbi1sZWZ0OiAke0dFTF9TUEFDSU5HfTtcbiAgd2lkdGg6ICR7QVZBVEFSX0RJQU1FVEVSfTtcbmA7XG5cbmNvbnN0IFBlcnNvbiA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gICR7KHsgc2NyaXB0IH0pID0+IGdldExvbmdQcmltZXIoc2NyaXB0KX1cbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQubGlgXG4gIGNvbG9yOiAke0NfU0hBRE9XfTtcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5saWBcbiAgY29sb3I6ICR7Q19NRVRBTH07XG5gO1xuXG5jb25zdCBCeWxpbmUgPSAoeyBzZXJ2aWNlLCBzY3JpcHQsIG5hbWUsIHRpdGxlLCBhdmF0YXIgfSkgPT4gKFxuICA8Q29udGFpbmVyIGF2YXRhcj17YXZhdGFyfT5cbiAgICB7YXZhdGFyICYmIDxBdmF0YXIgc3JjPXthdmF0YXIuc3JjfSBhbHQ9e2F2YXRhci5hbHQgfHwgJyd9IC8+fVxuICAgIDxQZXJzb24gcm9sZT1cImxpc3RcIiBzZXJ2aWNlPXtzZXJ2aWNlfSBzY3JpcHQ9e3NjcmlwdH0+XG4gICAgICA8TmFtZSByb2xlPVwibGlzdGl0ZW1cIiBhdmF0YXI9e2F2YXRhcn0+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9OYW1lPlxuICAgICAgPFRpdGxlIHJvbGU9XCJsaXN0aXRlbVwiPnt0aXRsZX08L1RpdGxlPlxuICAgIDwvUGVyc29uPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbkJ5bGluZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGF2YXRhcjogbnVsbCxcbn07XG5cbkJ5bGluZS5wcm9wVHlwZXMgPSB7XG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBzY3JpcHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBhdmF0YXI6IHNoYXBlKHtcbiAgICBzcmM6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFsdDogc3RyaW5nLFxuICB9KSxcbiAgbmFtZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ5bGluZTtcbiJdfQ== */'),
);

var Byline = function Byline(_ref4) {
  var service = _ref4.service,
    script = _ref4.script,
    name = _ref4.name,
    title = _ref4.title,
    avatar = _ref4.avatar;
  return /*#__PURE__*/ React.createElement(
    Container,
    {
      avatar: avatar,
    },
    avatar &&
      /*#__PURE__*/ React.createElement(Avatar, {
        src: avatar.src,
        alt: avatar.alt || '',
      }),
    /*#__PURE__*/ React.createElement(
      Person,
      {
        role: 'list',
        service: service,
        script: script,
      },
      /*#__PURE__*/ React.createElement(
        Name,
        {
          role: 'listitem',
          avatar: avatar,
        },
        name,
      ),
      /*#__PURE__*/ React.createElement(
        Title,
        {
          role: 'listitem',
        },
        title,
      ),
    ),
  );
};

Byline.defaultProps = {
  avatar: null,
};
Byline.propTypes = {
  service: string.isRequired,
  script: string.isRequired,
  avatar: shape({
    src: string.isRequired,
    alt: string,
  }),
  name: string.isRequired,
  title: string.isRequired,
};
export default Byline;
