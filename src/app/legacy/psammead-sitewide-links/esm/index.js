import _styled from '@emotion/styled/base';
import React from 'react';
import { arrayOf, shape, string, node } from 'prop-types';
import { C_EBON, C_WHITE } from '#legacy/psammead-styles/colours';
import { GEL_BREVIER } from '#legacy/gel-foundations/typography';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
} from '#legacy/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '#legacy/gel-foundations/breakpoints';
import { getSansRegular } from '#legacy/psammead-styles/font-styles';
import Link from './Link';
import List from './List';
export var layoutWrapperWithoutGrid = '\n  @media (max-width: '
  .concat(GEL_GROUP_2_SCREEN_WIDTH_MIN, ') {\n    padding: 0 ')
  .concat(GEL_MARGIN_BELOW_400PX, ';\n  }\n  @media (min-width: ')
  .concat(GEL_GROUP_2_SCREEN_WIDTH_MIN, ') {\n    padding: 0 ')
  .concat(GEL_MARGIN_ABOVE_400PX, ';\n  }\n');

var SitewideLinksWrapper = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e10axuo32',
      }
    : {
        target: 'e10axuo32',
        label: 'SitewideLinksWrapper',
      },
)(
  layoutWrapperWithoutGrid,
  ';background-color:',
  C_EBON,
  ';',
  GEL_BREVIER,
  ';',
  function (_ref) {
    var service = _ref.service;
    return getSansRegular(service);
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ1QyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGFycmF5T2YsIHNoYXBlLCBzdHJpbmcsIG5vZGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENfRUJPTiwgQ19XSElURSB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX0JSRVZJRVIgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7XG4gIEdFTF9TUEFDSU5HLFxuICBHRUxfU1BBQ0lOR19EQkwsXG4gIEdFTF9NQVJHSU5fQkVMT1dfNDAwUFgsXG4gIEdFTF9NQVJHSU5fQUJPVkVfNDAwUFgsXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7XG4gIEdFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF81X1NDUkVFTl9XSURUSF9NSU4sXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL2JyZWFrcG9pbnRzJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcblxuZXhwb3J0IGNvbnN0IGxheW91dFdyYXBwZXJXaXRob3V0R3JpZCA9IGBcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAwICR7R0VMX01BUkdJTl9CRUxPV180MDBQWH07XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAwICR7R0VMX01BUkdJTl9BQk9WRV80MDBQWH07XG4gIH1cbmA7XG5cbmNvbnN0IFNpdGV3aWRlTGlua3NXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHtsYXlvdXRXcmFwcGVyV2l0aG91dEdyaWR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NfRUJPTn07XG4gICR7R0VMX0JSRVZJRVJ9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG5gO1xuXG5jb25zdCBDb25zdHJhaW5lZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzVfU0NSRUVOX1dJRFRIX01JTn07XG4gIG1hcmdpbjogMCBhdXRvO1xuICAkeyh7IHRydXN0UHJvamVjdExpbmsgfSkgPT5cbiAgICB0cnVzdFByb2plY3RMaW5rICYmIGBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR30pYH1cbmA7XG5cbmNvbnN0IFN0eWxlZFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX0RCTH0gMDtcbmA7XG5cbmNvbnN0IFNpdGV3aWRlTGlua3MgPSAoe1xuICBsaW5rcyxcbiAgdHJ1c3RQcm9qZWN0TGluayxcbiAgY29weXJpZ2h0VGV4dCxcbiAgZXh0ZXJuYWxMaW5rLFxuICBzZXJ2aWNlLFxufSkgPT4gKFxuICA8U2l0ZXdpZGVMaW5rc1dyYXBwZXIgc2VydmljZT17c2VydmljZX0+XG4gICAgPENvbnN0cmFpbmVkV3JhcHBlciB0cnVzdFByb2plY3RMaW5rPXt0cnVzdFByb2plY3RMaW5rfT5cbiAgICAgIDxMaXN0IGxpbmtzPXtsaW5rc30gdHJ1c3RQcm9qZWN0TGluaz17dHJ1c3RQcm9qZWN0TGlua30gLz5cbiAgICAgIDxTdHlsZWRQYXJhZ3JhcGg+XG4gICAgICAgIHtjb3B5cmlnaHRUZXh0fXsnICd9XG4gICAgICAgIDxMaW5rIHRleHQ9e2V4dGVybmFsTGluay50ZXh0fSBocmVmPXtleHRlcm5hbExpbmsuaHJlZn0gaW5saW5lIC8+XG4gICAgICA8L1N0eWxlZFBhcmFncmFwaD5cbiAgICA8L0NvbnN0cmFpbmVkV3JhcHBlcj5cbiAgPC9TaXRld2lkZUxpbmtzV3JhcHBlcj5cbik7XG5cbmNvbnN0IGxpbmtQcm9wVHlwZXMgPSBzaGFwZSh7XG4gIGhyZWY6IHN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBzdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5TaXRld2lkZUxpbmtzLnByb3BUeXBlcyA9IHtcbiAgbGlua3M6IGFycmF5T2YobGlua1Byb3BUeXBlcy5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxuICBjb3B5cmlnaHRUZXh0OiBub2RlLmlzUmVxdWlyZWQsXG4gIHRydXN0UHJvamVjdExpbms6IGxpbmtQcm9wVHlwZXMsXG4gIGV4dGVybmFsTGluazogbGlua1Byb3BUeXBlcy5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cblNpdGV3aWRlTGlua3MuZGVmYXVsdFByb3BzID0geyB0cnVzdFByb2plY3RMaW5rOiBudWxsIH07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGV3aWRlTGlua3M7XG4iXX0= */'),
);

var ConstrainedWrapper = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e10axuo31',
      }
    : {
        target: 'e10axuo31',
        label: 'ConstrainedWrapper',
      },
)(
  'max-width:',
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  ';margin:0 auto;',
  function (_ref2) {
    var trustProjectLink = _ref2.trustProjectLink;
    return trustProjectLink && 'padding-top: '.concat(GEL_SPACING, ')');
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NxQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGFycmF5T2YsIHNoYXBlLCBzdHJpbmcsIG5vZGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENfRUJPTiwgQ19XSElURSB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX0JSRVZJRVIgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7XG4gIEdFTF9TUEFDSU5HLFxuICBHRUxfU1BBQ0lOR19EQkwsXG4gIEdFTF9NQVJHSU5fQkVMT1dfNDAwUFgsXG4gIEdFTF9NQVJHSU5fQUJPVkVfNDAwUFgsXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7XG4gIEdFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF81X1NDUkVFTl9XSURUSF9NSU4sXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL2JyZWFrcG9pbnRzJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcblxuZXhwb3J0IGNvbnN0IGxheW91dFdyYXBwZXJXaXRob3V0R3JpZCA9IGBcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAwICR7R0VMX01BUkdJTl9CRUxPV180MDBQWH07XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAwICR7R0VMX01BUkdJTl9BQk9WRV80MDBQWH07XG4gIH1cbmA7XG5cbmNvbnN0IFNpdGV3aWRlTGlua3NXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHtsYXlvdXRXcmFwcGVyV2l0aG91dEdyaWR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NfRUJPTn07XG4gICR7R0VMX0JSRVZJRVJ9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG5gO1xuXG5jb25zdCBDb25zdHJhaW5lZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzVfU0NSRUVOX1dJRFRIX01JTn07XG4gIG1hcmdpbjogMCBhdXRvO1xuICAkeyh7IHRydXN0UHJvamVjdExpbmsgfSkgPT5cbiAgICB0cnVzdFByb2plY3RMaW5rICYmIGBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR30pYH1cbmA7XG5cbmNvbnN0IFN0eWxlZFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX0RCTH0gMDtcbmA7XG5cbmNvbnN0IFNpdGV3aWRlTGlua3MgPSAoe1xuICBsaW5rcyxcbiAgdHJ1c3RQcm9qZWN0TGluayxcbiAgY29weXJpZ2h0VGV4dCxcbiAgZXh0ZXJuYWxMaW5rLFxuICBzZXJ2aWNlLFxufSkgPT4gKFxuICA8U2l0ZXdpZGVMaW5rc1dyYXBwZXIgc2VydmljZT17c2VydmljZX0+XG4gICAgPENvbnN0cmFpbmVkV3JhcHBlciB0cnVzdFByb2plY3RMaW5rPXt0cnVzdFByb2plY3RMaW5rfT5cbiAgICAgIDxMaXN0IGxpbmtzPXtsaW5rc30gdHJ1c3RQcm9qZWN0TGluaz17dHJ1c3RQcm9qZWN0TGlua30gLz5cbiAgICAgIDxTdHlsZWRQYXJhZ3JhcGg+XG4gICAgICAgIHtjb3B5cmlnaHRUZXh0fXsnICd9XG4gICAgICAgIDxMaW5rIHRleHQ9e2V4dGVybmFsTGluay50ZXh0fSBocmVmPXtleHRlcm5hbExpbmsuaHJlZn0gaW5saW5lIC8+XG4gICAgICA8L1N0eWxlZFBhcmFncmFwaD5cbiAgICA8L0NvbnN0cmFpbmVkV3JhcHBlcj5cbiAgPC9TaXRld2lkZUxpbmtzV3JhcHBlcj5cbik7XG5cbmNvbnN0IGxpbmtQcm9wVHlwZXMgPSBzaGFwZSh7XG4gIGhyZWY6IHN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBzdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5TaXRld2lkZUxpbmtzLnByb3BUeXBlcyA9IHtcbiAgbGlua3M6IGFycmF5T2YobGlua1Byb3BUeXBlcy5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxuICBjb3B5cmlnaHRUZXh0OiBub2RlLmlzUmVxdWlyZWQsXG4gIHRydXN0UHJvamVjdExpbms6IGxpbmtQcm9wVHlwZXMsXG4gIGV4dGVybmFsTGluazogbGlua1Byb3BUeXBlcy5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cblNpdGV3aWRlTGlua3MuZGVmYXVsdFByb3BzID0geyB0cnVzdFByb2plY3RMaW5rOiBudWxsIH07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGV3aWRlTGlua3M7XG4iXX0= */'),
);

var StyledParagraph = _styled(
  'p',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e10axuo30',
      }
    : {
        target: 'e10axuo30',
        label: 'StyledParagraph',
      },
)(
  'color:',
  C_WHITE,
  ';margin:0;padding:',
  GEL_SPACING_DBL,
  ' 0;' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNnQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGFycmF5T2YsIHNoYXBlLCBzdHJpbmcsIG5vZGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENfRUJPTiwgQ19XSElURSB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX0JSRVZJRVIgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7XG4gIEdFTF9TUEFDSU5HLFxuICBHRUxfU1BBQ0lOR19EQkwsXG4gIEdFTF9NQVJHSU5fQkVMT1dfNDAwUFgsXG4gIEdFTF9NQVJHSU5fQUJPVkVfNDAwUFgsXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7XG4gIEdFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF81X1NDUkVFTl9XSURUSF9NSU4sXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL2JyZWFrcG9pbnRzJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcblxuZXhwb3J0IGNvbnN0IGxheW91dFdyYXBwZXJXaXRob3V0R3JpZCA9IGBcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAwICR7R0VMX01BUkdJTl9CRUxPV180MDBQWH07XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAwICR7R0VMX01BUkdJTl9BQk9WRV80MDBQWH07XG4gIH1cbmA7XG5cbmNvbnN0IFNpdGV3aWRlTGlua3NXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHtsYXlvdXRXcmFwcGVyV2l0aG91dEdyaWR9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NfRUJPTn07XG4gICR7R0VMX0JSRVZJRVJ9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG5gO1xuXG5jb25zdCBDb25zdHJhaW5lZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6ICR7R0VMX0dST1VQXzVfU0NSRUVOX1dJRFRIX01JTn07XG4gIG1hcmdpbjogMCBhdXRvO1xuICAkeyh7IHRydXN0UHJvamVjdExpbmsgfSkgPT5cbiAgICB0cnVzdFByb2plY3RMaW5rICYmIGBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR30pYH1cbmA7XG5cbmNvbnN0IFN0eWxlZFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX0RCTH0gMDtcbmA7XG5cbmNvbnN0IFNpdGV3aWRlTGlua3MgPSAoe1xuICBsaW5rcyxcbiAgdHJ1c3RQcm9qZWN0TGluayxcbiAgY29weXJpZ2h0VGV4dCxcbiAgZXh0ZXJuYWxMaW5rLFxuICBzZXJ2aWNlLFxufSkgPT4gKFxuICA8U2l0ZXdpZGVMaW5rc1dyYXBwZXIgc2VydmljZT17c2VydmljZX0+XG4gICAgPENvbnN0cmFpbmVkV3JhcHBlciB0cnVzdFByb2plY3RMaW5rPXt0cnVzdFByb2plY3RMaW5rfT5cbiAgICAgIDxMaXN0IGxpbmtzPXtsaW5rc30gdHJ1c3RQcm9qZWN0TGluaz17dHJ1c3RQcm9qZWN0TGlua30gLz5cbiAgICAgIDxTdHlsZWRQYXJhZ3JhcGg+XG4gICAgICAgIHtjb3B5cmlnaHRUZXh0fXsnICd9XG4gICAgICAgIDxMaW5rIHRleHQ9e2V4dGVybmFsTGluay50ZXh0fSBocmVmPXtleHRlcm5hbExpbmsuaHJlZn0gaW5saW5lIC8+XG4gICAgICA8L1N0eWxlZFBhcmFncmFwaD5cbiAgICA8L0NvbnN0cmFpbmVkV3JhcHBlcj5cbiAgPC9TaXRld2lkZUxpbmtzV3JhcHBlcj5cbik7XG5cbmNvbnN0IGxpbmtQcm9wVHlwZXMgPSBzaGFwZSh7XG4gIGhyZWY6IHN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBzdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5TaXRld2lkZUxpbmtzLnByb3BUeXBlcyA9IHtcbiAgbGlua3M6IGFycmF5T2YobGlua1Byb3BUeXBlcy5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxuICBjb3B5cmlnaHRUZXh0OiBub2RlLmlzUmVxdWlyZWQsXG4gIHRydXN0UHJvamVjdExpbms6IGxpbmtQcm9wVHlwZXMsXG4gIGV4dGVybmFsTGluazogbGlua1Byb3BUeXBlcy5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cblNpdGV3aWRlTGlua3MuZGVmYXVsdFByb3BzID0geyB0cnVzdFByb2plY3RMaW5rOiBudWxsIH07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGV3aWRlTGlua3M7XG4iXX0= */'),
);

var SitewideLinks = function SitewideLinks(_ref3) {
  var links = _ref3.links,
    trustProjectLink = _ref3.trustProjectLink,
    copyrightText = _ref3.copyrightText,
    externalLink = _ref3.externalLink,
    service = _ref3.service;
  return /*#__PURE__*/ React.createElement(
    SitewideLinksWrapper,
    {
      service: service,
    },
    /*#__PURE__*/ React.createElement(
      ConstrainedWrapper,
      {
        trustProjectLink: trustProjectLink,
      },
      /*#__PURE__*/ React.createElement(List, {
        links: links,
        trustProjectLink: trustProjectLink,
      }),
      /*#__PURE__*/ React.createElement(
        StyledParagraph,
        null,
        copyrightText,
        ' ',
        /*#__PURE__*/ React.createElement(Link, {
          text: externalLink.text,
          href: externalLink.href,
          inline: true,
        }),
      ),
    ),
  );
};

var linkPropTypes = shape({
  href: string.isRequired,
  text: string.isRequired,
});
SitewideLinks.propTypes = {
  links: arrayOf(linkPropTypes.isRequired).isRequired,
  copyrightText: node.isRequired,
  trustProjectLink: linkPropTypes,
  externalLink: linkPropTypes.isRequired,
  service: string.isRequired,
};
SitewideLinks.defaultProps = {
  trustProjectLink: null,
};
export default SitewideLinks;
