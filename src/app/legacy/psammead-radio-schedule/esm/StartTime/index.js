import _styled from '@emotion/styled/base';

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

import React from 'react';
import { number, string, shape, oneOf } from 'prop-types';
import { GEL_SPACING_HLF } from '#legacy/gel-foundations/spacings';
import { scriptPropType } from '#legacy/gel-foundations/prop-types';
import { C_RHINO, C_PEBBLE } from '#legacy/psammead-styles/colours';
import { getMinion } from '#legacy/gel-foundations/typography';
import { getSansRegular } from '#legacy/psammead-styles/font-styles';
import { coreIcons } from '#legacy/psammead-assets/svgs';
import TimestampContainer from '#legacy/psammead-timestamp-container';

var Wrapper = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e13yvl5o2',
      }
    : {
        target: 'e13yvl5o2',
        label: 'Wrapper',
      },
)(
  process.env.NODE_ENV === 'production'
    ? {
        name: 's5xdrg',
        styles: 'display:flex;align-items:center',
      }
    : {
        name: 's5xdrg',
        styles: 'display:flex;align-items:center',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGFydFRpbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcwQiIsImZpbGUiOiIuLi8uLi9zcmMvU3RhcnRUaW1lL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBudW1iZXIsIHN0cmluZywgc2hhcGUsIG9uZU9mIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lOR19ITEYgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ19SSElOTywgQ19QRUJCTEUgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IGdldE1pbmlvbiB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgZ2V0U2Fuc1JlZ3VsYXIgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBjb3JlSWNvbnMgfSBmcm9tICdAYmJjL3BzYW1tZWFkLWFzc2V0cy9zdmdzJztcbmltcG9ydCBUaW1lc3RhbXBDb250YWluZXIgZnJvbSAnQGJiYy9wc2FtbWVhZC10aW1lc3RhbXAtY29udGFpbmVyJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTdHlsZWRDbG9jayA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAkeyh7IGRpciB9KSA9PlxuICAgIGRpciA9PT0gJ2x0cidcbiAgICAgID8gYHBhZGRpbmctcmlnaHQ6ICR7R0VMX1NQQUNJTkdfSExGfTtgXG4gICAgICA6IGBwYWRkaW5nLWxlZnQ6ICR7R0VMX1NQQUNJTkdfSExGfTtgfVxuICA+IHN2ZyB7XG4gICAgY29sb3I6ICR7Q19SSElOT307XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5gO1xuXG5jb25zdCBDbG9ja0ljb24gPSAoeyBkaXIgfSkgPT4ge1xuICByZXR1cm4gPFN0eWxlZENsb2NrIGRpcj17ZGlyfT57Y29yZUljb25zLmNsb2NrfTwvU3R5bGVkQ2xvY2s+O1xufTtcblxuQ2xvY2tJY29uLnByb3BUeXBlcyA9IHtcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSksXG59O1xuXG5DbG9ja0ljb24uZGVmYXVsdFByb3BzID0ge1xuICBkaXI6ICdsdHInLFxufTtcblxuY29uc3QgU3R5bGVkVGltZXN0YW1wID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuXG4gID4gdGltZSB7XG4gICAgY29sb3I6ICR7Q19SSElOT307XG4gICAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldE1pbmlvbihzY3JpcHQpfVxuICAgICR7KHsgc2VydmljZSB9KSA9PiBzZXJ2aWNlICYmIGdldFNhbnNSZWd1bGFyKHNlcnZpY2UpfVxuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci10b3A6IDAuMDYyNXJlbSBzb2xpZCAke0NfUEVCQkxFfTtcbiAgICB0b3A6ICR7KHsgc2NyaXB0IH0pID0+IDAuNSArIHNjcmlwdC5taW5pb24uZ3JvdXBBLmxpbmVIZWlnaHQgLyAyIC8gMTZ9cmVtO1xuICAgICR7KHsgZGlyIH0pID0+XG4gICAgICBkaXIgPT09ICdsdHInID8gYG1hcmdpbi1sZWZ0OiAwLjYyNXJlbTtgIDogYG1hcmdpbi1yaWdodDogMC42MjVyZW07YH1cbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0YXJ0VGltZXN0YW1wID0gKHtcbiAgdGltZXN0YW1wLFxuICB0aW1lem9uZSxcbiAgbG9jYWxlLFxuICBzY3JpcHQsXG4gIHNlcnZpY2UsXG4gIGRpcixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkVGltZXN0YW1wXG4gICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICBkaXI9e2Rpcn1cbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgPlxuICAgICAgPFRpbWVzdGFtcENvbnRhaW5lclxuICAgICAgICB0aW1lc3RhbXA9e3RpbWVzdGFtcH1cbiAgICAgICAgZGF0ZVRpbWVGb3JtYXQ9XCJZWVlZLU1NLUREXCJcbiAgICAgICAgZm9ybWF0PVwiSEg6bW1cIlxuICAgICAgICBpc1JlbGF0aXZlPXtmYWxzZX1cbiAgICAgICAgcGFkZGluZz17ZmFsc2V9XG4gICAgICAgIHRpbWV6b25lPXt0aW1lem9uZX1cbiAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgLz5cbiAgICA8L1N0eWxlZFRpbWVzdGFtcD5cbiAgKTtcbn07XG5cblN0YXJ0VGltZXN0YW1wLnByb3BUeXBlcyA9IHtcbiAgdGltZXN0YW1wOiBudW1iZXIuaXNSZXF1aXJlZCxcbiAgdGltZXpvbmU6IHN0cmluZyxcbiAgbG9jYWxlOiBzdHJpbmcsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBkaXI6IG9uZU9mKFsnbHRyJywgJ3J0bCddKSxcbn07XG5cblN0YXJ0VGltZXN0YW1wLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGltZXpvbmU6ICdFdXJvcGUvTG9uZG9uJyxcbiAgbG9jYWxlOiAnZW4tZ2InLFxuICBkaXI6ICdsdHInLFxufTtcblxuY29uc3QgU3RhcnRUaW1lID0gKHsgdGltZXN0YW1wLCB0aW1lem9uZSwgbG9jYWxlLCBzY3JpcHQsIHNlcnZpY2UsIGRpciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8Q2xvY2tJY29uIGRpcj17ZGlyfSAvPlxuICAgICAgPFN0YXJ0VGltZXN0YW1wXG4gICAgICAgIHRpbWVzdGFtcD17dGltZXN0YW1wfVxuICAgICAgICB0aW1lem9uZT17dGltZXpvbmV9XG4gICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgZGlyPXtkaXJ9XG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cblN0YXJ0VGltZS5wcm9wVHlwZXMgPSB7XG4gIHRpbWVzdGFtcDogbnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWV6b25lOiBzdHJpbmcsXG4gIGxvY2FsZTogc3RyaW5nLFxuICBzY3JpcHQ6IHNoYXBlKHNjcmlwdFByb3BUeXBlKS5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSksXG59O1xuXG5TdGFydFRpbWUuZGVmYXVsdFByb3BzID0ge1xuICB0aW1lem9uZTogJ0V1cm9wZS9Mb25kb24nLFxuICBsb2NhbGU6ICdlbi1nYicsXG4gIGRpcjogJ2x0cicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydFRpbWU7XG4iXX0= */',
        toString: _EMOTION_STRINGIFIED_CSS_ERROR__,
      },
);

var StyledClock = _styled(
  'span',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e13yvl5o1',
      }
    : {
        target: 'e13yvl5o1',
        label: 'StyledClock',
      },
)(
  'display:flex;align-items:center;',
  function (_ref) {
    var dir = _ref.dir;
    return dir === 'ltr'
      ? 'padding-right: '.concat(GEL_SPACING_HLF, ';')
      : 'padding-left: '.concat(GEL_SPACING_HLF, ';');
  },
  '>svg{color:',
  C_RHINO,
  ';margin:0;overflow:visible;}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGFydFRpbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCK0IiLCJmaWxlIjoiLi4vLi4vc3JjL1N0YXJ0VGltZS9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbnVtYmVyLCBzdHJpbmcsIHNoYXBlLCBvbmVPZiB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkdfSExGIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IHsgc2NyaXB0UHJvcFR5cGUgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9wcm9wLXR5cGVzJztcbmltcG9ydCB7IENfUkhJTk8sIENfUEVCQkxFIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBnZXRNaW5pb24gfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgY29yZUljb25zIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1hc3NldHMvc3Zncyc7XG5pbXBvcnQgVGltZXN0YW1wQ29udGFpbmVyIGZyb20gJ0BiYmMvcHNhbW1lYWQtdGltZXN0YW1wLWNvbnRhaW5lcic7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU3R5bGVkQ2xvY2sgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJHsoeyBkaXIgfSkgPT5cbiAgICBkaXIgPT09ICdsdHInXG4gICAgICA/IGBwYWRkaW5nLXJpZ2h0OiAke0dFTF9TUEFDSU5HX0hMRn07YFxuICAgICAgOiBgcGFkZGluZy1sZWZ0OiAke0dFTF9TUEFDSU5HX0hMRn07YH1cbiAgPiBzdmcge1xuICAgIGNvbG9yOiAke0NfUkhJTk99O1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgQ2xvY2tJY29uID0gKHsgZGlyIH0pID0+IHtcbiAgcmV0dXJuIDxTdHlsZWRDbG9jayBkaXI9e2Rpcn0+e2NvcmVJY29ucy5jbG9ja308L1N0eWxlZENsb2NrPjtcbn07XG5cbkNsb2NrSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLFxufTtcblxuQ2xvY2tJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlyOiAnbHRyJyxcbn07XG5cbmNvbnN0IFN0eWxlZFRpbWVzdGFtcCA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcblxuICA+IHRpbWUge1xuICAgIGNvbG9yOiAke0NfUkhJTk99O1xuICAgICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXRNaW5pb24oc2NyaXB0KX1cbiAgICAkeyh7IHNlcnZpY2UgfSkgPT4gc2VydmljZSAmJiBnZXRTYW5zUmVndWxhcihzZXJ2aWNlKX1cbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgJHtDX1BFQkJMRX07XG4gICAgdG9wOiAkeyh7IHNjcmlwdCB9KSA9PiAwLjUgKyBzY3JpcHQubWluaW9uLmdyb3VwQS5saW5lSGVpZ2h0IC8gMiAvIDE2fXJlbTtcbiAgICAkeyh7IGRpciB9KSA9PlxuICAgICAgZGlyID09PSAnbHRyJyA/IGBtYXJnaW4tbGVmdDogMC42MjVyZW07YCA6IGBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO2B9XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdGFydFRpbWVzdGFtcCA9ICh7XG4gIHRpbWVzdGFtcCxcbiAgdGltZXpvbmUsXG4gIGxvY2FsZSxcbiAgc2NyaXB0LFxuICBzZXJ2aWNlLFxuICBkaXIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFRpbWVzdGFtcFxuICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgZGlyPXtkaXJ9XG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgIDxUaW1lc3RhbXBDb250YWluZXJcbiAgICAgICAgdGltZXN0YW1wPXt0aW1lc3RhbXB9XG4gICAgICAgIGRhdGVUaW1lRm9ybWF0PVwiWVlZWS1NTS1ERFwiXG4gICAgICAgIGZvcm1hdD1cIkhIOm1tXCJcbiAgICAgICAgaXNSZWxhdGl2ZT17ZmFsc2V9XG4gICAgICAgIHBhZGRpbmc9e2ZhbHNlfVxuICAgICAgICB0aW1lem9uZT17dGltZXpvbmV9XG4gICAgICAgIHNjcmlwdD17c2NyaXB0fVxuICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRUaW1lc3RhbXA+XG4gICk7XG59O1xuXG5TdGFydFRpbWVzdGFtcC5wcm9wVHlwZXMgPSB7XG4gIHRpbWVzdGFtcDogbnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWV6b25lOiBzdHJpbmcsXG4gIGxvY2FsZTogc3RyaW5nLFxuICBzY3JpcHQ6IHNoYXBlKHNjcmlwdFByb3BUeXBlKS5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSksXG59O1xuXG5TdGFydFRpbWVzdGFtcC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpbWV6b25lOiAnRXVyb3BlL0xvbmRvbicsXG4gIGxvY2FsZTogJ2VuLWdiJyxcbiAgZGlyOiAnbHRyJyxcbn07XG5cbmNvbnN0IFN0YXJ0VGltZSA9ICh7IHRpbWVzdGFtcCwgdGltZXpvbmUsIGxvY2FsZSwgc2NyaXB0LCBzZXJ2aWNlLCBkaXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPENsb2NrSWNvbiBkaXI9e2Rpcn0gLz5cbiAgICAgIDxTdGFydFRpbWVzdGFtcFxuICAgICAgICB0aW1lc3RhbXA9e3RpbWVzdGFtcH1cbiAgICAgICAgdGltZXpvbmU9e3RpbWV6b25lfVxuICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGRpcj17ZGlyfVxuICAgICAgLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5TdGFydFRpbWUucHJvcFR5cGVzID0ge1xuICB0aW1lc3RhbXA6IG51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lem9uZTogc3RyaW5nLFxuICBsb2NhbGU6IHN0cmluZyxcbiAgc2NyaXB0OiBzaGFwZShzY3JpcHRQcm9wVHlwZSkuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLFxufTtcblxuU3RhcnRUaW1lLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGltZXpvbmU6ICdFdXJvcGUvTG9uZG9uJyxcbiAgbG9jYWxlOiAnZW4tZ2InLFxuICBkaXI6ICdsdHInLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRUaW1lO1xuIl19 */'),
);

var ClockIcon = function ClockIcon(_ref2) {
  var dir = _ref2.dir;
  return /*#__PURE__*/ React.createElement(
    StyledClock,
    {
      dir: dir,
    },
    coreIcons.clock,
  );
};

ClockIcon.propTypes = {
  dir: oneOf(['ltr', 'rtl']),
};
ClockIcon.defaultProps = {
  dir: 'ltr',
};

var StyledTimestamp = _styled(
  'span',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e13yvl5o0',
      }
    : {
        target: 'e13yvl5o0',
        label: 'StyledTimestamp',
      },
)(
  'display:flex;align-items:center;flex-direction:row;width:100%;>time{color:',
  C_RHINO,
  ';',
  function (_ref3) {
    var script = _ref3.script;
    return script && getMinion(script);
  },
  ' ',
  function (_ref4) {
    var service = _ref4.service;
    return service && getSansRegular(service);
  },
  ";}&::after{content:'';border-top:0.0625rem solid ",
  C_PEBBLE,
  ';top:',
  function (_ref5) {
    var script = _ref5.script;
    return 0.5 + script.minion.groupA.lineHeight / 2 / 16;
  },
  'rem;',
  function (_ref6) {
    var dir = _ref6.dir;
    return dir === 'ltr' ? 'margin-left: 0.625rem;' : 'margin-right: 0.625rem;';
  },
  ' width:100%;}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGFydFRpbWUvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDbUMiLCJmaWxlIjoiLi4vLi4vc3JjL1N0YXJ0VGltZS9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbnVtYmVyLCBzdHJpbmcsIHNoYXBlLCBvbmVPZiB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkdfSExGIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IHsgc2NyaXB0UHJvcFR5cGUgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9wcm9wLXR5cGVzJztcbmltcG9ydCB7IENfUkhJTk8sIENfUEVCQkxFIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBnZXRNaW5pb24gfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgY29yZUljb25zIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1hc3NldHMvc3Zncyc7XG5pbXBvcnQgVGltZXN0YW1wQ29udGFpbmVyIGZyb20gJ0BiYmMvcHNhbW1lYWQtdGltZXN0YW1wLWNvbnRhaW5lcic7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU3R5bGVkQ2xvY2sgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJHsoeyBkaXIgfSkgPT5cbiAgICBkaXIgPT09ICdsdHInXG4gICAgICA/IGBwYWRkaW5nLXJpZ2h0OiAke0dFTF9TUEFDSU5HX0hMRn07YFxuICAgICAgOiBgcGFkZGluZy1sZWZ0OiAke0dFTF9TUEFDSU5HX0hMRn07YH1cbiAgPiBzdmcge1xuICAgIGNvbG9yOiAke0NfUkhJTk99O1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgQ2xvY2tJY29uID0gKHsgZGlyIH0pID0+IHtcbiAgcmV0dXJuIDxTdHlsZWRDbG9jayBkaXI9e2Rpcn0+e2NvcmVJY29ucy5jbG9ja308L1N0eWxlZENsb2NrPjtcbn07XG5cbkNsb2NrSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLFxufTtcblxuQ2xvY2tJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlyOiAnbHRyJyxcbn07XG5cbmNvbnN0IFN0eWxlZFRpbWVzdGFtcCA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcblxuICA+IHRpbWUge1xuICAgIGNvbG9yOiAke0NfUkhJTk99O1xuICAgICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXRNaW5pb24oc2NyaXB0KX1cbiAgICAkeyh7IHNlcnZpY2UgfSkgPT4gc2VydmljZSAmJiBnZXRTYW5zUmVndWxhcihzZXJ2aWNlKX1cbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgJHtDX1BFQkJMRX07XG4gICAgdG9wOiAkeyh7IHNjcmlwdCB9KSA9PiAwLjUgKyBzY3JpcHQubWluaW9uLmdyb3VwQS5saW5lSGVpZ2h0IC8gMiAvIDE2fXJlbTtcbiAgICAkeyh7IGRpciB9KSA9PlxuICAgICAgZGlyID09PSAnbHRyJyA/IGBtYXJnaW4tbGVmdDogMC42MjVyZW07YCA6IGBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO2B9XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdGFydFRpbWVzdGFtcCA9ICh7XG4gIHRpbWVzdGFtcCxcbiAgdGltZXpvbmUsXG4gIGxvY2FsZSxcbiAgc2NyaXB0LFxuICBzZXJ2aWNlLFxuICBkaXIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFRpbWVzdGFtcFxuICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgZGlyPXtkaXJ9XG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgIDxUaW1lc3RhbXBDb250YWluZXJcbiAgICAgICAgdGltZXN0YW1wPXt0aW1lc3RhbXB9XG4gICAgICAgIGRhdGVUaW1lRm9ybWF0PVwiWVlZWS1NTS1ERFwiXG4gICAgICAgIGZvcm1hdD1cIkhIOm1tXCJcbiAgICAgICAgaXNSZWxhdGl2ZT17ZmFsc2V9XG4gICAgICAgIHBhZGRpbmc9e2ZhbHNlfVxuICAgICAgICB0aW1lem9uZT17dGltZXpvbmV9XG4gICAgICAgIHNjcmlwdD17c2NyaXB0fVxuICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRUaW1lc3RhbXA+XG4gICk7XG59O1xuXG5TdGFydFRpbWVzdGFtcC5wcm9wVHlwZXMgPSB7XG4gIHRpbWVzdGFtcDogbnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWV6b25lOiBzdHJpbmcsXG4gIGxvY2FsZTogc3RyaW5nLFxuICBzY3JpcHQ6IHNoYXBlKHNjcmlwdFByb3BUeXBlKS5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSksXG59O1xuXG5TdGFydFRpbWVzdGFtcC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpbWV6b25lOiAnRXVyb3BlL0xvbmRvbicsXG4gIGxvY2FsZTogJ2VuLWdiJyxcbiAgZGlyOiAnbHRyJyxcbn07XG5cbmNvbnN0IFN0YXJ0VGltZSA9ICh7IHRpbWVzdGFtcCwgdGltZXpvbmUsIGxvY2FsZSwgc2NyaXB0LCBzZXJ2aWNlLCBkaXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPENsb2NrSWNvbiBkaXI9e2Rpcn0gLz5cbiAgICAgIDxTdGFydFRpbWVzdGFtcFxuICAgICAgICB0aW1lc3RhbXA9e3RpbWVzdGFtcH1cbiAgICAgICAgdGltZXpvbmU9e3RpbWV6b25lfVxuICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGRpcj17ZGlyfVxuICAgICAgLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5TdGFydFRpbWUucHJvcFR5cGVzID0ge1xuICB0aW1lc3RhbXA6IG51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lem9uZTogc3RyaW5nLFxuICBsb2NhbGU6IHN0cmluZyxcbiAgc2NyaXB0OiBzaGFwZShzY3JpcHRQcm9wVHlwZSkuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLFxufTtcblxuU3RhcnRUaW1lLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGltZXpvbmU6ICdFdXJvcGUvTG9uZG9uJyxcbiAgbG9jYWxlOiAnZW4tZ2InLFxuICBkaXI6ICdsdHInLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRUaW1lO1xuIl19 */'),
);

export var StartTimestamp = function StartTimestamp(_ref7) {
  var timestamp = _ref7.timestamp,
    timezone = _ref7.timezone,
    locale = _ref7.locale,
    script = _ref7.script,
    service = _ref7.service,
    dir = _ref7.dir;
  return /*#__PURE__*/ React.createElement(
    StyledTimestamp,
    {
      script: script,
      service: service,
      dir: dir,
      'aria-hidden': 'true',
    },
    /*#__PURE__*/ React.createElement(TimestampContainer, {
      timestamp: timestamp,
      dateTimeFormat: 'YYYY-MM-DD',
      format: 'HH:mm',
      isRelative: false,
      padding: false,
      timezone: timezone,
      script: script,
      locale: locale,
      service: service,
    }),
  );
};
StartTimestamp.propTypes = {
  timestamp: number.isRequired,
  timezone: string,
  locale: string,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};
StartTimestamp.defaultProps = {
  timezone: 'Europe/London',
  locale: 'en-gb',
  dir: 'ltr',
};

var StartTime = function StartTime(_ref8) {
  var timestamp = _ref8.timestamp,
    timezone = _ref8.timezone,
    locale = _ref8.locale,
    script = _ref8.script,
    service = _ref8.service,
    dir = _ref8.dir;
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    null,
    /*#__PURE__*/ React.createElement(ClockIcon, {
      dir: dir,
    }),
    /*#__PURE__*/ React.createElement(StartTimestamp, {
      timestamp: timestamp,
      timezone: timezone,
      locale: locale,
      script: script,
      service: service,
      dir: dir,
    }),
  );
};

StartTime.propTypes = {
  timestamp: number.isRequired,
  timezone: string,
  locale: string,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};
StartTime.defaultProps = {
  timezone: 'Europe/London',
  locale: 'en-gb',
  dir: 'ltr',
};
export default StartTime;
