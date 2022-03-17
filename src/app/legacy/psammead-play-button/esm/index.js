import _styled from '@emotion/styled/base';
import React from 'react';
import { string, oneOf, func } from 'prop-types';
import { C_EBON, C_WHITE, C_POSTBOX } from '#legacy/psammead-styles/colours';
import {
  GEL_SPACING,
  GEL_SPACING_TRPL,
} from '#legacy/gel-foundations/spacings';
import { GEL_MINION } from '#legacy/gel-foundations/typography';
import { getSansBold } from '#legacy/psammead-styles/font-styles';
import { mediaIcons } from '#legacy/psammead-assets/svgs';
import VisuallyHiddenText from '#legacy/psammead-visually-hidden-text';
var GEL_SPACING_DEC = '5rem';
var BGC_TRANSITION_DURATION = '300ms';

var Button = _styled(
  'button',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1rl5qo12',
      }
    : {
        target: 'e1rl5qo12',
        label: 'Button',
      },
)(
  'background-color:',
  C_EBON,
  ';border:none;color:',
  C_WHITE,
  ';cursor:pointer;display:block;',
  function (_ref) {
    var service = _ref.service;
    return getSansBold(service);
  },
  ' ',
  GEL_MINION,
  ';height:',
  GEL_SPACING_DEC,
  ';padding:0;transition:background-color ',
  BGC_TRANSITION_DURATION,
  ';width:',
  GEL_SPACING_DEC,
  ';&:hover,&:focus{background-color:',
  C_POSTBOX,
  ';transition:background-color ',
  BGC_TRANSITION_DURATION,
  ';}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYTRCIiwiZmlsZSI6Ii4uL3NyYy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3RyaW5nLCBvbmVPZiwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgQ19FQk9OLCBDX1dISVRFLCBDX1BPU1RCT1ggfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IEdFTF9TUEFDSU5HLCBHRUxfU1BBQ0lOR19UUlBMIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IHsgR0VMX01JTklPTiB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgZ2V0U2Fuc0JvbGQgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBtZWRpYUljb25zIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1hc3NldHMvc3Zncyc7XG5pbXBvcnQgVmlzdWFsbHlIaWRkZW5UZXh0IGZyb20gJ0BiYmMvcHNhbW1lYWQtdmlzdWFsbHktaGlkZGVuLXRleHQnO1xuXG5jb25zdCBHRUxfU1BBQ0lOR19ERUMgPSAnNXJlbSc7XG5jb25zdCBCR0NfVFJBTlNJVElPTl9EVVJBVElPTiA9ICczMDBtcyc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q19FQk9OfTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHsoeyBzZXJ2aWNlIH0pID0+IGdldFNhbnNCb2xkKHNlcnZpY2UpfVxuICAke0dFTF9NSU5JT059O1xuICBoZWlnaHQ6ICR7R0VMX1NQQUNJTkdfREVDfTtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAke0JHQ19UUkFOU0lUSU9OX0RVUkFUSU9OfTtcbiAgd2lkdGg6ICR7R0VMX1NQQUNJTkdfREVDfTtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NfUE9TVEJPWH07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAke0JHQ19UUkFOU0lUSU9OX0RVUkFUSU9OfTtcbiAgfVxuYDtcblxuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICA+IHN2ZyB7XG4gICAgY29sb3I6ICR7Q19XSElURX07XG4gICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgIGhlaWdodDogJHtHRUxfU1BBQ0lOR19UUlBMfTtcbiAgICAkeyh7IGRhdGV0aW1lLCBkdXJhdGlvbiwgZHVyYXRpb25TcG9rZW4gfSkgPT5cbiAgICAgIGRhdGV0aW1lICYmXG4gICAgICBkdXJhdGlvbiAmJlxuICAgICAgZHVyYXRpb25TcG9rZW4gJiZcbiAgICAgIGBcbiAgICAgICAgbWFyZ2luLXRvcDogJHtHRUxfU1BBQ0lOR307XG4gICAgICBgfVxuICAgIHdpZHRoOiAke0dFTF9TUEFDSU5HX1RSUEx9O1xuICB9XG5gO1xuXG5jb25zdCBUaW1lRHVyYXRpb24gPSBzdHlsZWQudGltZWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6ICR7R0VMX1NQQUNJTkd9O1xuYDtcblxuY29uc3QgUGxheUJ1dHRvbiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgZGF0ZXRpbWUsXG4gIGR1cmF0aW9uLFxuICBkdXJhdGlvblNwb2tlbixcbiAgdHlwZSxcbiAgc2VydmljZSxcbiAgdGl0bGUsXG4gIG9uQ2xpY2ssXG4gIGd1aWRhbmNlTWVzc2FnZSxcbn0pID0+IHtcbiAgY29uc3QgaGlkZGVuVGV4dCA9IGAke2d1aWRhbmNlTWVzc2FnZSB8fCAnJ30gUGxheSAke3R5cGV9LCAke1xuICAgIGRhdGV0aW1lICYmIGR1cmF0aW9uICYmIGR1cmF0aW9uU3Bva2VuXG4gICAgICA/IGBcIiR7dGl0bGV9XCIsICR7ZHVyYXRpb25TcG9rZW59YFxuICAgICAgOiBgXCIke3RpdGxlfVwiYFxuICB9IGAudHJpbSgpO1xuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc2VydmljZT17c2VydmljZX0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8VmlzdWFsbHlIaWRkZW5UZXh0PntoaWRkZW5UZXh0fTwvVmlzdWFsbHlIaWRkZW5UZXh0PlxuICAgICAgPEljb25XcmFwcGVyXG4gICAgICAgIGRhdGV0aW1lPXtkYXRldGltZX1cbiAgICAgICAgZHVyYXRpb249e2R1cmF0aW9ufVxuICAgICAgICBkdXJhdGlvblNwb2tlbj17ZHVyYXRpb25TcG9rZW59XG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIHttZWRpYUljb25zW3R5cGVdfVxuICAgICAgPC9JY29uV3JhcHBlcj5cbiAgICAgIHtkYXRldGltZSAmJiBkdXJhdGlvbiAmJiBkdXJhdGlvblNwb2tlbiAmJiAoXG4gICAgICAgIDxUaW1lRHVyYXRpb24gZGF0ZVRpbWU9e2RhdGV0aW1lfSBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICB7ZHVyYXRpb259XG4gICAgICAgIDwvVGltZUR1cmF0aW9uPlxuICAgICAgKX1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cblBsYXlCdXR0b24ucHJvcFR5cGVzID0ge1xuICBkYXRldGltZTogc3RyaW5nLFxuICBkdXJhdGlvbjogc3RyaW5nLFxuICBkdXJhdGlvblNwb2tlbjogc3RyaW5nLFxuICB0eXBlOiBvbmVPZihbJ3ZpZGVvJywgJ2F1ZGlvJ10pLFxuICB0aXRsZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogc3RyaW5nLFxuICBndWlkYW5jZU1lc3NhZ2U6IHN0cmluZyxcbn07XG5cblBsYXlCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkYXRldGltZTogbnVsbCxcbiAgZHVyYXRpb246IG51bGwsXG4gIGR1cmF0aW9uU3Bva2VuOiBudWxsLFxuICB0eXBlOiAndmlkZW8nLFxuICBjbGFzc05hbWU6IG51bGwsXG4gIGd1aWRhbmNlTWVzc2FnZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlCdXR0b247XG4iXX0= */'),
);

var IconWrapper = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1rl5qo11',
      }
    : {
        target: 'e1rl5qo11',
        label: 'IconWrapper',
      },
)(
  '>svg{color:',
  C_WHITE,
  ';fill:currentColor;height:',
  GEL_SPACING_TRPL,
  ';',
  function (_ref2) {
    var datetime = _ref2.datetime,
      duration = _ref2.duration,
      durationSpoken = _ref2.durationSpoken;
    return (
      datetime &&
      duration &&
      durationSpoken &&
      '\n        margin-top: '.concat(GEL_SPACING, ';\n      ')
    );
  },
  ' width:',
  GEL_SPACING_TRPL,
  ';}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUM4QiIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZywgb25lT2YsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IENfRUJPTiwgQ19XSElURSwgQ19QT1NUQk9YIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lORywgR0VMX1NQQUNJTkdfVFJQTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IEdFTF9NSU5JT04gfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IGdldFNhbnNCb2xkIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgbWVkaWFJY29ucyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtYXNzZXRzL3N2Z3MnO1xuaW1wb3J0IFZpc3VhbGx5SGlkZGVuVGV4dCBmcm9tICdAYmJjL3BzYW1tZWFkLXZpc3VhbGx5LWhpZGRlbi10ZXh0JztcblxuY29uc3QgR0VMX1NQQUNJTkdfREVDID0gJzVyZW0nO1xuY29uc3QgQkdDX1RSQU5TSVRJT05fRFVSQVRJT04gPSAnMzAwbXMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NfRUJPTn07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICR7Q19XSElURX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX1cbiAgJHtHRUxfTUlOSU9OfTtcbiAgaGVpZ2h0OiAke0dFTF9TUEFDSU5HX0RFQ307XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHtCR0NfVFJBTlNJVElPTl9EVVJBVElPTn07XG4gIHdpZHRoOiAke0dFTF9TUEFDSU5HX0RFQ307XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDX1BPU1RCT1h9O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHtCR0NfVFJBTlNJVElPTl9EVVJBVElPTn07XG4gIH1cbmA7XG5cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgPiBzdmcge1xuICAgIGNvbG9yOiAke0NfV0hJVEV9O1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICBoZWlnaHQ6ICR7R0VMX1NQQUNJTkdfVFJQTH07XG4gICAgJHsoeyBkYXRldGltZSwgZHVyYXRpb24sIGR1cmF0aW9uU3Bva2VuIH0pID0+XG4gICAgICBkYXRldGltZSAmJlxuICAgICAgZHVyYXRpb24gJiZcbiAgICAgIGR1cmF0aW9uU3Bva2VuICYmXG4gICAgICBgXG4gICAgICAgIG1hcmdpbi10b3A6ICR7R0VMX1NQQUNJTkd9O1xuICAgICAgYH1cbiAgICB3aWR0aDogJHtHRUxfU1BBQ0lOR19UUlBMfTtcbiAgfVxuYDtcblxuY29uc3QgVGltZUR1cmF0aW9uID0gc3R5bGVkLnRpbWVgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAke0dFTF9TUEFDSU5HfTtcbmA7XG5cbmNvbnN0IFBsYXlCdXR0b24gPSAoe1xuICBjbGFzc05hbWUsXG4gIGRhdGV0aW1lLFxuICBkdXJhdGlvbixcbiAgZHVyYXRpb25TcG9rZW4sXG4gIHR5cGUsXG4gIHNlcnZpY2UsXG4gIHRpdGxlLFxuICBvbkNsaWNrLFxuICBndWlkYW5jZU1lc3NhZ2UsXG59KSA9PiB7XG4gIGNvbnN0IGhpZGRlblRleHQgPSBgJHtndWlkYW5jZU1lc3NhZ2UgfHwgJyd9IFBsYXkgJHt0eXBlfSwgJHtcbiAgICBkYXRldGltZSAmJiBkdXJhdGlvbiAmJiBkdXJhdGlvblNwb2tlblxuICAgICAgPyBgXCIke3RpdGxlfVwiLCAke2R1cmF0aW9uU3Bva2VufWBcbiAgICAgIDogYFwiJHt0aXRsZX1cImBcbiAgfSBgLnRyaW0oKTtcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNlcnZpY2U9e3NlcnZpY2V9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPFZpc3VhbGx5SGlkZGVuVGV4dD57aGlkZGVuVGV4dH08L1Zpc3VhbGx5SGlkZGVuVGV4dD5cbiAgICAgIDxJY29uV3JhcHBlclxuICAgICAgICBkYXRldGltZT17ZGF0ZXRpbWV9XG4gICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cbiAgICAgICAgZHVyYXRpb25TcG9rZW49e2R1cmF0aW9uU3Bva2VufVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICB7bWVkaWFJY29uc1t0eXBlXX1cbiAgICAgIDwvSWNvbldyYXBwZXI+XG4gICAgICB7ZGF0ZXRpbWUgJiYgZHVyYXRpb24gJiYgZHVyYXRpb25TcG9rZW4gJiYgKFxuICAgICAgICA8VGltZUR1cmF0aW9uIGRhdGVUaW1lPXtkYXRldGltZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAge2R1cmF0aW9ufVxuICAgICAgICA8L1RpbWVEdXJhdGlvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5QbGF5QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGF0ZXRpbWU6IHN0cmluZyxcbiAgZHVyYXRpb246IHN0cmluZyxcbiAgZHVyYXRpb25TcG9rZW46IHN0cmluZyxcbiAgdHlwZTogb25lT2YoWyd2aWRlbycsICdhdWRpbyddKSxcbiAgdGl0bGU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DbGljazogZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IHN0cmluZyxcbiAgZ3VpZGFuY2VNZXNzYWdlOiBzdHJpbmcsXG59O1xuXG5QbGF5QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0ZXRpbWU6IG51bGwsXG4gIGR1cmF0aW9uOiBudWxsLFxuICBkdXJhdGlvblNwb2tlbjogbnVsbCxcbiAgdHlwZTogJ3ZpZGVvJyxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBndWlkYW5jZU1lc3NhZ2U6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5QnV0dG9uO1xuIl19 */'),
);

var TimeDuration = _styled(
  'time',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1rl5qo10',
      }
    : {
        target: 'e1rl5qo10',
        label: 'TimeDuration',
      },
)(
  'display:block;margin-top:',
  GEL_SPACING,
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURnQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZywgb25lT2YsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IENfRUJPTiwgQ19XSElURSwgQ19QT1NUQk9YIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lORywgR0VMX1NQQUNJTkdfVFJQTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IEdFTF9NSU5JT04gfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IGdldFNhbnNCb2xkIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgbWVkaWFJY29ucyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtYXNzZXRzL3N2Z3MnO1xuaW1wb3J0IFZpc3VhbGx5SGlkZGVuVGV4dCBmcm9tICdAYmJjL3BzYW1tZWFkLXZpc3VhbGx5LWhpZGRlbi10ZXh0JztcblxuY29uc3QgR0VMX1NQQUNJTkdfREVDID0gJzVyZW0nO1xuY29uc3QgQkdDX1RSQU5TSVRJT05fRFVSQVRJT04gPSAnMzAwbXMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NfRUJPTn07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICR7Q19XSElURX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX1cbiAgJHtHRUxfTUlOSU9OfTtcbiAgaGVpZ2h0OiAke0dFTF9TUEFDSU5HX0RFQ307XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHtCR0NfVFJBTlNJVElPTl9EVVJBVElPTn07XG4gIHdpZHRoOiAke0dFTF9TUEFDSU5HX0RFQ307XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDX1BPU1RCT1h9O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHtCR0NfVFJBTlNJVElPTl9EVVJBVElPTn07XG4gIH1cbmA7XG5cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgPiBzdmcge1xuICAgIGNvbG9yOiAke0NfV0hJVEV9O1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICBoZWlnaHQ6ICR7R0VMX1NQQUNJTkdfVFJQTH07XG4gICAgJHsoeyBkYXRldGltZSwgZHVyYXRpb24sIGR1cmF0aW9uU3Bva2VuIH0pID0+XG4gICAgICBkYXRldGltZSAmJlxuICAgICAgZHVyYXRpb24gJiZcbiAgICAgIGR1cmF0aW9uU3Bva2VuICYmXG4gICAgICBgXG4gICAgICAgIG1hcmdpbi10b3A6ICR7R0VMX1NQQUNJTkd9O1xuICAgICAgYH1cbiAgICB3aWR0aDogJHtHRUxfU1BBQ0lOR19UUlBMfTtcbiAgfVxuYDtcblxuY29uc3QgVGltZUR1cmF0aW9uID0gc3R5bGVkLnRpbWVgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAke0dFTF9TUEFDSU5HfTtcbmA7XG5cbmNvbnN0IFBsYXlCdXR0b24gPSAoe1xuICBjbGFzc05hbWUsXG4gIGRhdGV0aW1lLFxuICBkdXJhdGlvbixcbiAgZHVyYXRpb25TcG9rZW4sXG4gIHR5cGUsXG4gIHNlcnZpY2UsXG4gIHRpdGxlLFxuICBvbkNsaWNrLFxuICBndWlkYW5jZU1lc3NhZ2UsXG59KSA9PiB7XG4gIGNvbnN0IGhpZGRlblRleHQgPSBgJHtndWlkYW5jZU1lc3NhZ2UgfHwgJyd9IFBsYXkgJHt0eXBlfSwgJHtcbiAgICBkYXRldGltZSAmJiBkdXJhdGlvbiAmJiBkdXJhdGlvblNwb2tlblxuICAgICAgPyBgXCIke3RpdGxlfVwiLCAke2R1cmF0aW9uU3Bva2VufWBcbiAgICAgIDogYFwiJHt0aXRsZX1cImBcbiAgfSBgLnRyaW0oKTtcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHNlcnZpY2U9e3NlcnZpY2V9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPFZpc3VhbGx5SGlkZGVuVGV4dD57aGlkZGVuVGV4dH08L1Zpc3VhbGx5SGlkZGVuVGV4dD5cbiAgICAgIDxJY29uV3JhcHBlclxuICAgICAgICBkYXRldGltZT17ZGF0ZXRpbWV9XG4gICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cbiAgICAgICAgZHVyYXRpb25TcG9rZW49e2R1cmF0aW9uU3Bva2VufVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICB7bWVkaWFJY29uc1t0eXBlXX1cbiAgICAgIDwvSWNvbldyYXBwZXI+XG4gICAgICB7ZGF0ZXRpbWUgJiYgZHVyYXRpb24gJiYgZHVyYXRpb25TcG9rZW4gJiYgKFxuICAgICAgICA8VGltZUR1cmF0aW9uIGRhdGVUaW1lPXtkYXRldGltZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAge2R1cmF0aW9ufVxuICAgICAgICA8L1RpbWVEdXJhdGlvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5QbGF5QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZGF0ZXRpbWU6IHN0cmluZyxcbiAgZHVyYXRpb246IHN0cmluZyxcbiAgZHVyYXRpb25TcG9rZW46IHN0cmluZyxcbiAgdHlwZTogb25lT2YoWyd2aWRlbycsICdhdWRpbyddKSxcbiAgdGl0bGU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DbGljazogZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IHN0cmluZyxcbiAgZ3VpZGFuY2VNZXNzYWdlOiBzdHJpbmcsXG59O1xuXG5QbGF5QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0ZXRpbWU6IG51bGwsXG4gIGR1cmF0aW9uOiBudWxsLFxuICBkdXJhdGlvblNwb2tlbjogbnVsbCxcbiAgdHlwZTogJ3ZpZGVvJyxcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBndWlkYW5jZU1lc3NhZ2U6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5QnV0dG9uO1xuIl19 */'),
);

var PlayButton = function PlayButton(_ref3) {
  var className = _ref3.className,
    datetime = _ref3.datetime,
    duration = _ref3.duration,
    durationSpoken = _ref3.durationSpoken,
    type = _ref3.type,
    service = _ref3.service,
    title = _ref3.title,
    onClick = _ref3.onClick,
    guidanceMessage = _ref3.guidanceMessage;
  var hiddenText = ''
    .concat(guidanceMessage || '', ' Play ')
    .concat(type, ', ')
    .concat(
      datetime && duration && durationSpoken
        ? '"'.concat(title, '", ').concat(durationSpoken)
        : '"'.concat(title, '"'),
      ' ',
    )
    .trim();
  return /*#__PURE__*/ React.createElement(
    Button,
    {
      className: className,
      service: service,
      onClick: onClick,
    },
    /*#__PURE__*/ React.createElement(VisuallyHiddenText, null, hiddenText),
    /*#__PURE__*/ React.createElement(
      IconWrapper,
      {
        datetime: datetime,
        duration: duration,
        durationSpoken: durationSpoken,
        'aria-hidden': 'true',
      },
      mediaIcons[type],
    ),
    datetime &&
      duration &&
      durationSpoken &&
      /*#__PURE__*/ React.createElement(
        TimeDuration,
        {
          dateTime: datetime,
          'aria-hidden': 'true',
        },
        duration,
      ),
  );
};

PlayButton.propTypes = {
  datetime: string,
  duration: string,
  durationSpoken: string,
  type: oneOf(['video', 'audio']),
  title: string.isRequired,
  service: string.isRequired,
  onClick: func.isRequired,
  className: string,
  guidanceMessage: string,
};
PlayButton.defaultProps = {
  datetime: null,
  duration: null,
  durationSpoken: null,
  type: 'video',
  className: null,
  guidanceMessage: null,
};
export default PlayButton;
