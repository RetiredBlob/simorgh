import _styled from '@emotion/styled/base';

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

import React from 'react';
import { GEL_GROUP_4_SCREEN_WIDTH_MIN } from '#legacy/gel-foundations/breakpoints';
import { C_STORM, C_CLOUD_DARK } from '#legacy/psammead-styles/colours';
import BasicExample from './basic';

var Wrapper = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1p2je8y3',
      }
    : {
        target: 'e1p2je8y3',
        label: 'Wrapper',
      },
)(
  process.env.NODE_ENV === 'production'
    ? {
        name: 'ji5n1',
        styles: 'margin:10px auto;max-width:1008px',
      }
    : {
        name: 'ji5n1',
        styles: 'margin:10px auto;max-width:1008px',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9vbi1wYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiLi4vLi4vc3JjL2V4YW1wbGVzL29uLXBhZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgR0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTiB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL2JyZWFrcG9pbnRzJztcblxuaW1wb3J0IHsgQ19TVE9STSwgQ19DTE9VRF9EQVJLIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5cbmltcG9ydCBCYXNpY0V4YW1wbGUgZnJvbSAnLi9iYXNpYyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDEwcHggYXV0bztcbiAgbWF4LXdpZHRoOiAxMDA4cHg7XG5gO1xuXG5jb25zdCBMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICB3aWR0aDogNjYlO1xuICB9XG5gO1xuXG5jb25zdCBSaWdodCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICB3aWR0aDogMzMlO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fXB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDX1NUT1JNfTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAke0NfQ0xPVURfREFSS307XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodCAvIDIgLSAxMH1weDtcbmA7XG5cbmNvbnN0IE9uUGFnZUV4YW1wbGUgPSBwcm9wcyA9PiAoXG4gIDxXcmFwcGVyPlxuICAgIDxMZWZ0PlxuICAgICAgPENvbnRlbnRBcmVhIGhlaWdodD17MTAwMH0+TWFpbiBDb250ZW50PC9Db250ZW50QXJlYT5cbiAgICA8L0xlZnQ+XG4gICAgPFJpZ2h0PlxuICAgICAgPENvbnRlbnRBcmVhIGhlaWdodD17MjAwfT5Db250ZW50IEFib3ZlPC9Db250ZW50QXJlYT5cbiAgICAgIDxCYXNpY0V4YW1wbGUgey4uLnByb3BzfSAvPlxuICAgICAgPENvbnRlbnRBcmVhIGhlaWdodD17MjAwfT5Db250ZW50IEJlbG93PC9Db250ZW50QXJlYT5cbiAgICA8L1JpZ2h0PlxuICA8L1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPblBhZ2VFeGFtcGxlO1xuIl19 */',
        toString: _EMOTION_STRINGIFIED_CSS_ERROR__,
      },
);

var Left = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1p2je8y2',
      }
    : {
        target: 'e1p2je8y2',
        label: 'Left',
      },
)(
  'vertical-align:top;display:inline-block;max-width:1000px;padding:0 10px;width:100%;@media (min-width: ',
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  '){width:66%;}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9vbi1wYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIiLCJmaWxlIjoiLi4vLi4vc3JjL2V4YW1wbGVzL29uLXBhZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IHsgR0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTiB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL2JyZWFrcG9pbnRzJztcblxuaW1wb3J0IHsgQ19TVE9STSwgQ19DTE9VRF9EQVJLIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5cbmltcG9ydCBCYXNpY0V4YW1wbGUgZnJvbSAnLi9iYXNpYyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDEwcHggYXV0bztcbiAgbWF4LXdpZHRoOiAxMDA4cHg7XG5gO1xuXG5jb25zdCBMZWZ0ID0gc3R5bGVkLmRpdmBcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICB3aWR0aDogNjYlO1xuICB9XG5gO1xuXG5jb25zdCBSaWdodCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICB3aWR0aDogMzMlO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50QXJlYSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fXB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDX1NUT1JNfTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAke0NfQ0xPVURfREFSS307XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodCAvIDIgLSAxMH1weDtcbmA7XG5cbmNvbnN0IE9uUGFnZUV4YW1wbGUgPSBwcm9wcyA9PiAoXG4gIDxXcmFwcGVyPlxuICAgIDxMZWZ0PlxuICAgICAgPENvbnRlbnRBcmVhIGhlaWdodD17MTAwMH0+TWFpbiBDb250ZW50PC9Db250ZW50QXJlYT5cbiAgICA8L0xlZnQ+XG4gICAgPFJpZ2h0PlxuICAgICAgPENvbnRlbnRBcmVhIGhlaWdodD17MjAwfT5Db250ZW50IEFib3ZlPC9Db250ZW50QXJlYT5cbiAgICAgIDxCYXNpY0V4YW1wbGUgey4uLnByb3BzfSAvPlxuICAgICAgPENvbnRlbnRBcmVhIGhlaWdodD17MjAwfT5Db250ZW50IEJlbG93PC9Db250ZW50QXJlYT5cbiAgICA8L1JpZ2h0PlxuICA8L1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBPblBhZ2VFeGFtcGxlO1xuIl19 */'),
);

var Right = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1p2je8y1',
      }
    : {
        target: 'e1p2je8y1',
        label: 'Right',
      },
)(
  'display:inline-block;padding:0 10px;width:100%;@media (min-width: ',
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  '){width:33%;}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9vbi1wYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QndCIiwiZmlsZSI6Ii4uLy4uL3NyYy9leGFtcGxlcy9vbi1wYWdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCB7IEdFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU4gfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5cbmltcG9ydCB7IENfU1RPUk0sIENfQ0xPVURfREFSSyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuXG5pbXBvcnQgQmFzaWNFeGFtcGxlIGZyb20gJy4vYmFzaWMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIG1heC13aWR0aDogMTAwOHB4O1xuYDtcblxuY29uc3QgTGVmdCA9IHN0eWxlZC5kaXZgXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgd2lkdGg6IDY2JTtcbiAgfVxuYDtcblxuY29uc3QgUmlnaHQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxuYDtcblxuY29uc3QgQ29udGVudEFyZWEgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q19TVE9STX07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogJHtDX0NMT1VEX0RBUkt9O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHQgLyAyIC0gMTB9cHg7XG5gO1xuXG5jb25zdCBPblBhZ2VFeGFtcGxlID0gcHJvcHMgPT4gKFxuICA8V3JhcHBlcj5cbiAgICA8TGVmdD5cbiAgICAgIDxDb250ZW50QXJlYSBoZWlnaHQ9ezEwMDB9Pk1haW4gQ29udGVudDwvQ29udGVudEFyZWE+XG4gICAgPC9MZWZ0PlxuICAgIDxSaWdodD5cbiAgICAgIDxDb250ZW50QXJlYSBoZWlnaHQ9ezIwMH0+Q29udGVudCBBYm92ZTwvQ29udGVudEFyZWE+XG4gICAgICA8QmFzaWNFeGFtcGxlIHsuLi5wcm9wc30gLz5cbiAgICAgIDxDb250ZW50QXJlYSBoZWlnaHQ9ezIwMH0+Q29udGVudCBCZWxvdzwvQ29udGVudEFyZWE+XG4gICAgPC9SaWdodD5cbiAgPC9XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT25QYWdlRXhhbXBsZTtcbiJdfQ== */'),
);

var ContentArea = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1p2je8y0',
      }
    : {
        target: 'e1p2je8y0',
        label: 'ContentArea',
      },
)(
  'height:',
  function (_ref) {
    var height = _ref.height;
    return height;
  },
  'px;margin:20px 0;background-color:',
  C_STORM,
  ';font-family:sans-serif;color:',
  C_CLOUD_DARK,
  ';font-size:20px;line-height:1;text-align:center;padding-top:',
  function (_ref2) {
    var height = _ref2.height;
    return height / 2 - 10;
  },
  'px;' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9vbi1wYWdlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzhCIiwiZmlsZSI6Ii4uLy4uL3NyYy9leGFtcGxlcy9vbi1wYWdlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCB7IEdFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU4gfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5cbmltcG9ydCB7IENfU1RPUk0sIENfQ0xPVURfREFSSyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuXG5pbXBvcnQgQmFzaWNFeGFtcGxlIGZyb20gJy4vYmFzaWMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIG1heC13aWR0aDogMTAwOHB4O1xuYDtcblxuY29uc3QgTGVmdCA9IHN0eWxlZC5kaXZgXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgd2lkdGg6IDY2JTtcbiAgfVxuYDtcblxuY29uc3QgUmlnaHQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgfVxuYDtcblxuY29uc3QgQ29udGVudEFyZWEgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q19TVE9STX07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogJHtDX0NMT1VEX0RBUkt9O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHQgLyAyIC0gMTB9cHg7XG5gO1xuXG5jb25zdCBPblBhZ2VFeGFtcGxlID0gcHJvcHMgPT4gKFxuICA8V3JhcHBlcj5cbiAgICA8TGVmdD5cbiAgICAgIDxDb250ZW50QXJlYSBoZWlnaHQ9ezEwMDB9Pk1haW4gQ29udGVudDwvQ29udGVudEFyZWE+XG4gICAgPC9MZWZ0PlxuICAgIDxSaWdodD5cbiAgICAgIDxDb250ZW50QXJlYSBoZWlnaHQ9ezIwMH0+Q29udGVudCBBYm92ZTwvQ29udGVudEFyZWE+XG4gICAgICA8QmFzaWNFeGFtcGxlIHsuLi5wcm9wc30gLz5cbiAgICAgIDxDb250ZW50QXJlYSBoZWlnaHQ9ezIwMH0+Q29udGVudCBCZWxvdzwvQ29udGVudEFyZWE+XG4gICAgPC9SaWdodD5cbiAgPC9XcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgT25QYWdlRXhhbXBsZTtcbiJdfQ== */'),
);

var OnPageExample = function OnPageExample(props) {
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    null,
    /*#__PURE__*/ React.createElement(
      Left,
      null,
      /*#__PURE__*/ React.createElement(
        ContentArea,
        {
          height: 1000,
        },
        'Main Content',
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Right,
      null,
      /*#__PURE__*/ React.createElement(
        ContentArea,
        {
          height: 200,
        },
        'Content Above',
      ),
      /*#__PURE__*/ React.createElement(BasicExample, props),
      /*#__PURE__*/ React.createElement(
        ContentArea,
        {
          height: 200,
        },
        'Content Below',
      ),
    ),
  );
};

export default OnPageExample;
