import _styled from '@emotion/styled/base';
import React from 'react';
import { string } from 'prop-types';
import { C_WHITE } from '#legacy/psammead-styles/colours';
import { GEL_SPACING_DBL, GEL_SPACING } from '#legacy/gel-foundations/spacings';
import { GEL_LONG_PRIMER } from '#legacy/gel-foundations/typography';
import { getSansRegular } from '#legacy/psammead-styles/font-styles';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '#legacy/gel-foundations/breakpoints';
var GUIDANCE_BACKGROUND = 'rgba(34, 34, 34, 0.75)';

var GuidanceWrapper = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e42jmf32',
      }
    : {
        target: 'e42jmf32',
        label: 'GuidanceWrapper',
      },
)(
  function (_ref) {
    var service = _ref.service;
    return getSansRegular(service);
  },
  ' ',
  GEL_LONG_PRIMER,
  ';width:100%;height:100%;position:absolute;border:0.0625rem solid transparent;color:',
  C_WHITE,
  ';',
  function (_ref2) {
    var guidanceMessage = _ref2.guidanceMessage;
    return guidanceMessage
      ? '\n    background-color: '.concat(
          GUIDANCE_BACKGROUND,
          ';\n    @media screen and (-ms-high-contrast: active) {\n      background-color: transparent;\n    }',
        )
      : '';
  },
  ' ',
  function (_ref3) {
    var noJsClassName = _ref3.noJsClassName;
    return (
      noJsClassName &&
      '\n      .'
        .concat(noJsClassName, ' & {\n        background-color: ')
        .concat(
          GUIDANCE_BACKGROUND,
          ';\n        @media screen and (-ms-high-contrast: active) {\n          background-color: transparent;\n        }\n        .guidance-message {\n          display: none;\n        }\n      }\n    ',
        )
    );
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HdWlkYW5jZS9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2tDIiwiZmlsZSI6Ii4uLy4uL3NyYy9HdWlkYW5jZS9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBDX1dISVRFIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lOR19EQkwsIEdFTF9TUEFDSU5HIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IHsgR0VMX0xPTkdfUFJJTUVSIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBnZXRTYW5zUmVndWxhciB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2ZvbnQtc3R5bGVzJztcbmltcG9ydCB7IEdFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NSU4gfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5cbmNvbnN0IEdVSURBTkNFX0JBQ0tHUk9VTkQgPSAncmdiYSgzNCwgMzQsIDM0LCAwLjc1KSc7XG5cbmNvbnN0IEd1aWRhbmNlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zUmVndWxhcihzZXJ2aWNlKX1cbiAgJHtHRUxfTE9OR19QUklNRVJ9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgJHsoeyBndWlkYW5jZU1lc3NhZ2UgfSkgPT5cbiAgICBndWlkYW5jZU1lc3NhZ2VcbiAgICAgID8gYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7R1VJREFOQ0VfQkFDS0dST1VORH07XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1gXG4gICAgICA6IGBgfVxuXG4gICR7KHsgbm9Kc0NsYXNzTmFtZSB9KSA9PlxuICAgIG5vSnNDbGFzc05hbWUgJiZcbiAgICBgXG4gICAgICAuJHtub0pzQ2xhc3NOYW1lfSAmIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtHVUlEQU5DRV9CQUNLR1JPVU5EfTtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAuZ3VpZGFuY2UtbWVzc2FnZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG5gO1xuXG5jb25zdCBHdWlkYW5jZU1lc3NhZ2UgPSBzdHlsZWQuc3Ryb25nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR307XG4gIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aW5kb3c7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX0RCTH07XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE5vU2NyaXB0ID0gc3R5bGVkLm5vc2NyaXB0YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgJHsoeyBub0pzQ2xhc3NOYW1lIH0pID0+XG4gICAgIW5vSnNDbGFzc05hbWUgJiZcbiAgICBgXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIGB9XG5gO1xuXG5jb25zdCBHdWlkYW5jZSA9ICh7IGd1aWRhbmNlTWVzc2FnZSwgc2VydmljZSwgbm9Kc01lc3NhZ2UsIG5vSnNDbGFzc05hbWUgfSkgPT4gKFxuICA8R3VpZGFuY2VXcmFwcGVyXG4gICAgZGF0YS1lMmU9XCJtZWRpYS1wbGF5ZXJfX2d1aWRhbmNlXCJcbiAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgIGd1aWRhbmNlTWVzc2FnZT17Z3VpZGFuY2VNZXNzYWdlfVxuICAgIG5vSnNDbGFzc05hbWU9e25vSnNDbGFzc05hbWV9XG4gID5cbiAgICB7Z3VpZGFuY2VNZXNzYWdlICYmIChcbiAgICAgIDxHdWlkYW5jZU1lc3NhZ2UgY2xhc3NOYW1lPVwiZ3VpZGFuY2UtbWVzc2FnZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICB7Z3VpZGFuY2VNZXNzYWdlfVxuICAgICAgPC9HdWlkYW5jZU1lc3NhZ2U+XG4gICAgKX1cbiAgICA8U3R5bGVkTm9TY3JpcHQgbm9Kc0NsYXNzTmFtZT17bm9Kc0NsYXNzTmFtZX0+XG4gICAgICA8R3VpZGFuY2VNZXNzYWdlPntub0pzTWVzc2FnZX08L0d1aWRhbmNlTWVzc2FnZT5cbiAgICA8L1N0eWxlZE5vU2NyaXB0PlxuICA8L0d1aWRhbmNlV3JhcHBlcj5cbik7XG5cbkd1aWRhbmNlLnByb3BUeXBlcyA9IHtcbiAgZ3VpZGFuY2VNZXNzYWdlOiBzdHJpbmcsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBub0pzTWVzc2FnZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5vSnNDbGFzc05hbWU6IHN0cmluZyxcbn07XG5cbkd1aWRhbmNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZ3VpZGFuY2VNZXNzYWdlOiBudWxsLFxuICBub0pzQ2xhc3NOYW1lOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3VpZGFuY2U7XG4iXX0= */'),
);

var GuidanceMessage = _styled(
  'strong',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e42jmf31',
      }
    : {
        target: 'e42jmf31',
        label: 'GuidanceMessage',
      },
)(
  'display:block;font-weight:normal;padding:',
  GEL_SPACING,
  ';border-bottom:0.0625rem solid transparent;@media screen and (-ms-high-contrast: active){background-color:window;}@media (min-width: ',
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  '){padding:',
  GEL_SPACING_DBL,
  ';}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HdWlkYW5jZS9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNxQyIsImZpbGUiOiIuLi8uLi9zcmMvR3VpZGFuY2UvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgQ19XSElURSB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkdfREJMLCBHRUxfU1BBQ0lORyB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IEdFTF9MT05HX1BSSU1FUiB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgZ2V0U2Fuc1JlZ3VsYXIgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuXG5jb25zdCBHVUlEQU5DRV9CQUNLR1JPVU5EID0gJ3JnYmEoMzQsIDM0LCAzNCwgMC43NSknO1xuXG5jb25zdCBHdWlkYW5jZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gICR7R0VMX0xPTkdfUFJJTUVSfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICR7Q19XSElURX07XG4gICR7KHsgZ3VpZGFuY2VNZXNzYWdlIH0pID0+XG4gICAgZ3VpZGFuY2VNZXNzYWdlXG4gICAgICA/IGBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0dVSURBTkNFX0JBQ0tHUk9VTkR9O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9YFxuICAgICAgOiBgYH1cblxuICAkeyh7IG5vSnNDbGFzc05hbWUgfSkgPT5cbiAgICBub0pzQ2xhc3NOYW1lICYmXG4gICAgYFxuICAgICAgLiR7bm9Kc0NsYXNzTmFtZX0gJiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7R1VJREFOQ0VfQkFDS0dST1VORH07XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmd1aWRhbmNlLW1lc3NhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuYDtcblxuY29uc3QgR3VpZGFuY2VNZXNzYWdlID0gc3R5bGVkLnN0cm9uZ2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkd9O1xuICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2luZG93O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWROb1NjcmlwdCA9IHN0eWxlZC5ub3NjcmlwdGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gICR7KHsgbm9Kc0NsYXNzTmFtZSB9KSA9PlxuICAgICFub0pzQ2xhc3NOYW1lICYmXG4gICAgYFxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICBgfVxuYDtcblxuY29uc3QgR3VpZGFuY2UgPSAoeyBndWlkYW5jZU1lc3NhZ2UsIHNlcnZpY2UsIG5vSnNNZXNzYWdlLCBub0pzQ2xhc3NOYW1lIH0pID0+IChcbiAgPEd1aWRhbmNlV3JhcHBlclxuICAgIGRhdGEtZTJlPVwibWVkaWEtcGxheWVyX19ndWlkYW5jZVwiXG4gICAgc2VydmljZT17c2VydmljZX1cbiAgICBndWlkYW5jZU1lc3NhZ2U9e2d1aWRhbmNlTWVzc2FnZX1cbiAgICBub0pzQ2xhc3NOYW1lPXtub0pzQ2xhc3NOYW1lfVxuICA+XG4gICAge2d1aWRhbmNlTWVzc2FnZSAmJiAoXG4gICAgICA8R3VpZGFuY2VNZXNzYWdlIGNsYXNzTmFtZT1cImd1aWRhbmNlLW1lc3NhZ2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAge2d1aWRhbmNlTWVzc2FnZX1cbiAgICAgIDwvR3VpZGFuY2VNZXNzYWdlPlxuICAgICl9XG4gICAgPFN0eWxlZE5vU2NyaXB0IG5vSnNDbGFzc05hbWU9e25vSnNDbGFzc05hbWV9PlxuICAgICAgPEd1aWRhbmNlTWVzc2FnZT57bm9Kc01lc3NhZ2V9PC9HdWlkYW5jZU1lc3NhZ2U+XG4gICAgPC9TdHlsZWROb1NjcmlwdD5cbiAgPC9HdWlkYW5jZVdyYXBwZXI+XG4pO1xuXG5HdWlkYW5jZS5wcm9wVHlwZXMgPSB7XG4gIGd1aWRhbmNlTWVzc2FnZTogc3RyaW5nLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgbm9Kc01lc3NhZ2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBub0pzQ2xhc3NOYW1lOiBzdHJpbmcsXG59O1xuXG5HdWlkYW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGd1aWRhbmNlTWVzc2FnZTogbnVsbCxcbiAgbm9Kc0NsYXNzTmFtZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEd1aWRhbmNlO1xuIl19 */'),
);

var StyledNoScript = _styled(
  'noscript',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e42jmf30',
      }
    : {
        target: 'e42jmf30',
        label: 'StyledNoScript',
      },
)(
  'position:absolute;bottom:0;',
  function (_ref4) {
    var noJsClassName = _ref4.noJsClassName;
    return !noJsClassName && '\n      display: none;\n    ';
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9HdWlkYW5jZS9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RzQyIsImZpbGUiOiIuLi8uLi9zcmMvR3VpZGFuY2UvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgQ19XSElURSB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkdfREJMLCBHRUxfU1BBQ0lORyB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IEdFTF9MT05HX1BSSU1FUiB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgZ2V0U2Fuc1JlZ3VsYXIgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuXG5jb25zdCBHVUlEQU5DRV9CQUNLR1JPVU5EID0gJ3JnYmEoMzQsIDM0LCAzNCwgMC43NSknO1xuXG5jb25zdCBHdWlkYW5jZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gICR7R0VMX0xPTkdfUFJJTUVSfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICR7Q19XSElURX07XG4gICR7KHsgZ3VpZGFuY2VNZXNzYWdlIH0pID0+XG4gICAgZ3VpZGFuY2VNZXNzYWdlXG4gICAgICA/IGBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0dVSURBTkNFX0JBQ0tHUk9VTkR9O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9YFxuICAgICAgOiBgYH1cblxuICAkeyh7IG5vSnNDbGFzc05hbWUgfSkgPT5cbiAgICBub0pzQ2xhc3NOYW1lICYmXG4gICAgYFxuICAgICAgLiR7bm9Kc0NsYXNzTmFtZX0gJiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7R1VJREFOQ0VfQkFDS0dST1VORH07XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmd1aWRhbmNlLW1lc3NhZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuYDtcblxuY29uc3QgR3VpZGFuY2VNZXNzYWdlID0gc3R5bGVkLnN0cm9uZ2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkd9O1xuICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2luZG93O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWROb1NjcmlwdCA9IHN0eWxlZC5ub3NjcmlwdGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gICR7KHsgbm9Kc0NsYXNzTmFtZSB9KSA9PlxuICAgICFub0pzQ2xhc3NOYW1lICYmXG4gICAgYFxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICBgfVxuYDtcblxuY29uc3QgR3VpZGFuY2UgPSAoeyBndWlkYW5jZU1lc3NhZ2UsIHNlcnZpY2UsIG5vSnNNZXNzYWdlLCBub0pzQ2xhc3NOYW1lIH0pID0+IChcbiAgPEd1aWRhbmNlV3JhcHBlclxuICAgIGRhdGEtZTJlPVwibWVkaWEtcGxheWVyX19ndWlkYW5jZVwiXG4gICAgc2VydmljZT17c2VydmljZX1cbiAgICBndWlkYW5jZU1lc3NhZ2U9e2d1aWRhbmNlTWVzc2FnZX1cbiAgICBub0pzQ2xhc3NOYW1lPXtub0pzQ2xhc3NOYW1lfVxuICA+XG4gICAge2d1aWRhbmNlTWVzc2FnZSAmJiAoXG4gICAgICA8R3VpZGFuY2VNZXNzYWdlIGNsYXNzTmFtZT1cImd1aWRhbmNlLW1lc3NhZ2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAge2d1aWRhbmNlTWVzc2FnZX1cbiAgICAgIDwvR3VpZGFuY2VNZXNzYWdlPlxuICAgICl9XG4gICAgPFN0eWxlZE5vU2NyaXB0IG5vSnNDbGFzc05hbWU9e25vSnNDbGFzc05hbWV9PlxuICAgICAgPEd1aWRhbmNlTWVzc2FnZT57bm9Kc01lc3NhZ2V9PC9HdWlkYW5jZU1lc3NhZ2U+XG4gICAgPC9TdHlsZWROb1NjcmlwdD5cbiAgPC9HdWlkYW5jZVdyYXBwZXI+XG4pO1xuXG5HdWlkYW5jZS5wcm9wVHlwZXMgPSB7XG4gIGd1aWRhbmNlTWVzc2FnZTogc3RyaW5nLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgbm9Kc01lc3NhZ2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBub0pzQ2xhc3NOYW1lOiBzdHJpbmcsXG59O1xuXG5HdWlkYW5jZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGd1aWRhbmNlTWVzc2FnZTogbnVsbCxcbiAgbm9Kc0NsYXNzTmFtZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEd1aWRhbmNlO1xuIl19 */'),
);

var Guidance = function Guidance(_ref5) {
  var guidanceMessage = _ref5.guidanceMessage,
    service = _ref5.service,
    noJsMessage = _ref5.noJsMessage,
    noJsClassName = _ref5.noJsClassName;
  return /*#__PURE__*/ React.createElement(
    GuidanceWrapper,
    {
      'data-e2e': 'media-player__guidance',
      service: service,
      guidanceMessage: guidanceMessage,
      noJsClassName: noJsClassName,
    },
    guidanceMessage &&
      /*#__PURE__*/ React.createElement(
        GuidanceMessage,
        {
          className: 'guidance-message',
          'aria-hidden': 'true',
        },
        guidanceMessage,
      ),
    /*#__PURE__*/ React.createElement(
      StyledNoScript,
      {
        noJsClassName: noJsClassName,
      },
      /*#__PURE__*/ React.createElement(GuidanceMessage, null, noJsMessage),
    ),
  );
};

Guidance.propTypes = {
  guidanceMessage: string,
  service: string.isRequired,
  noJsMessage: string.isRequired,
  noJsClassName: string,
};
Guidance.defaultProps = {
  guidanceMessage: null,
  noJsClassName: null,
};
export default Guidance;
