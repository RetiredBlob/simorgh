import _styled from '@emotion/styled/base';
import React from 'react';
import { string, bool, shape } from 'prop-types';
import {
  C_LUNAR,
  C_SHADOW,
  C_EBON,
  C_METAL,
} from '#legacy/psammead-styles/colours';
import {
  GEL_SPACING_TRPL,
  GEL_SPACING,
} from '#legacy/gel-foundations/spacings';
import {
  getSansRegular,
  getSansBold,
} from '#legacy/psammead-styles/font-styles';
import { GEL_BODY_COPY } from '#legacy/gel-foundations/typography';
import { BBC_BLOCKS } from '#legacy/psammead-assets/svgs';
var GOLDEN_RATIO_PERCENT = '38.2%';
var BBC_BLOCKS_WIDTH = '10rem';
var FAUX_BBC_BLOCKS_SPACE = '6rem';
var FILL_VIEWPORT_STYLES =
  '\n  background-position: center;\n  background-size: '.concat(
    GOLDEN_RATIO_PERCENT,
    ';\n  height: 100vh;\n',
  );

var StyledEmbedError = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'egfu7w11',
      }
    : {
        target: 'egfu7w11',
        label: 'StyledEmbedError',
      },
)(
  function (_ref) {
    var service = _ref.service;
    return getSansRegular(service);
  },
  ' ',
  GEL_BODY_COPY,
  ';background-color:',
  C_LUNAR,
  ';background-image:url(data:image/svg+xml;base64,',
  BBC_BLOCKS,
  ');background-position:center ',
  GEL_SPACING_TRPL,
  ';background-repeat:no-repeat;background-size:',
  BBC_BLOCKS_WIDTH,
  ';color:',
  C_SHADOW,
  ';display:flex;flex-direction:column;justify-content:flex-end;padding-top:',
  FAUX_BBC_BLOCKS_SPACE,
  ';padding-bottom:',
  GEL_SPACING_TRPL,
  ';border:0.0625rem solid transparent;',
  function (_ref2) {
    var fillViewport = _ref2.fillViewport;
    return fillViewport && FILL_VIEWPORT_STYLES;
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JtQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZywgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIENfTFVOQVIsXG4gIENfU0hBRE9XLFxuICBDX0VCT04sXG4gIENfTUVUQUwsXG59IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkdfVFJQTCwgR0VMX1NQQUNJTkcgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQgeyBnZXRTYW5zUmVndWxhciwgZ2V0U2Fuc0JvbGQgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBHRUxfQk9EWV9DT1BZIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBCQkNfQkxPQ0tTIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1hc3NldHMvc3Zncyc7XG5cbmNvbnN0IEdPTERFTl9SQVRJT19QRVJDRU5UID0gJzM4LjIlJztcbmNvbnN0IEJCQ19CTE9DS1NfV0lEVEggPSAnMTByZW0nO1xuY29uc3QgRkFVWF9CQkNfQkxPQ0tTX1NQQUNFID0gJzZyZW0nO1xuXG5jb25zdCBGSUxMX1ZJRVdQT1JUX1NUWUxFUyA9IGBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6ICR7R09MREVOX1JBVElPX1BFUkNFTlR9O1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgU3R5bGVkRW1iZWRFcnJvciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zUmVndWxhcihzZXJ2aWNlKX1cbiAgJHtHRUxfQk9EWV9DT1BZfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDX0xVTkFSfTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtCQkNfQkxPQ0tTfSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAke0dFTF9TUEFDSU5HX1RSUEx9O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6ICR7QkJDX0JMT0NLU19XSURUSH07XG4gIGNvbG9yOiAke0NfU0hBRE9XfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6ICR7RkFVWF9CQkNfQkxPQ0tTX1NQQUNFfTtcbiAgcGFkZGluZy1ib3R0b206ICR7R0VMX1NQQUNJTkdfVFJQTH07XG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAkeyh7IGZpbGxWaWV3cG9ydCB9KSA9PiBmaWxsVmlld3BvcnQgJiYgRklMTF9WSUVXUE9SVF9TVFlMRVN9XG5gO1xuXG5jb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgJHtHRUxfU1BBQ0lOR19UUlBMfTtcblxuICBzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICBhIHtcbiAgICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc0JvbGQoc2VydmljZSl9XG4gICAgY29sb3I6ICR7Q19FQk9OfTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAke0dFTF9TUEFDSU5HfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOnZpc2l0ZWQge1xuICAgICAgY29sb3I6ICR7Q19NRVRBTH07XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRW1iZWRFcnJvciA9ICh7IHNlcnZpY2UsIG1lc3NhZ2UsIGZpbGxWaWV3cG9ydCwgbGluayB9KSA9PiAoXG4gIDxTdHlsZWRFbWJlZEVycm9yIHNlcnZpY2U9e3NlcnZpY2V9IGZpbGxWaWV3cG9ydD17ZmlsbFZpZXdwb3J0fT5cbiAgICA8U3R5bGVkRXJyb3JNZXNzYWdlIHNlcnZpY2U9e3NlcnZpY2V9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZz57bWVzc2FnZX08L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpbmsgJiYgbGluay50ZXh0ICYmIGxpbmsuaHJlZiAmJiA8YSBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLnRleHR9PC9hPn1cbiAgICA8L1N0eWxlZEVycm9yTWVzc2FnZT5cbiAgPC9TdHlsZWRFbWJlZEVycm9yPlxuKTtcblxuRW1iZWRFcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlcnZpY2U6ICduZXdzJyxcbiAgZmlsbFZpZXdwb3J0OiBmYWxzZSxcbiAgbGluazogbnVsbCxcbn07XG5cbkVtYmVkRXJyb3IucHJvcFR5cGVzID0ge1xuICBzZXJ2aWNlOiBzdHJpbmcsXG4gIGZpbGxWaWV3cG9ydDogYm9vbCxcbiAgbWVzc2FnZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxpbms6IHNoYXBlKHtcbiAgICB0ZXh0OiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBocmVmOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWJlZEVycm9yO1xuIl19 */'),
);

var StyledErrorMessage = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'egfu7w10',
      }
    : {
        target: 'egfu7w10',
        label: 'StyledErrorMessage',
      },
)(
  'margin:0 ',
  GEL_SPACING_TRPL,
  ';strong{font-weight:normal;}a{',
  function (_ref3) {
    var service = _ref3.service;
    return getSansBold(service);
  },
  ' color:',
  C_EBON,
  ';display:block;margin-top:',
  GEL_SPACING,
  ';text-decoration:none;&:visited{color:',
  C_METAL,
  ';}&:hover,&:focus{text-decoration:underline;}}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENxQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZywgYm9vbCwgc2hhcGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIENfTFVOQVIsXG4gIENfU0hBRE9XLFxuICBDX0VCT04sXG4gIENfTUVUQUwsXG59IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkdfVFJQTCwgR0VMX1NQQUNJTkcgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQgeyBnZXRTYW5zUmVndWxhciwgZ2V0U2Fuc0JvbGQgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBHRUxfQk9EWV9DT1BZIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBCQkNfQkxPQ0tTIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1hc3NldHMvc3Zncyc7XG5cbmNvbnN0IEdPTERFTl9SQVRJT19QRVJDRU5UID0gJzM4LjIlJztcbmNvbnN0IEJCQ19CTE9DS1NfV0lEVEggPSAnMTByZW0nO1xuY29uc3QgRkFVWF9CQkNfQkxPQ0tTX1NQQUNFID0gJzZyZW0nO1xuXG5jb25zdCBGSUxMX1ZJRVdQT1JUX1NUWUxFUyA9IGBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6ICR7R09MREVOX1JBVElPX1BFUkNFTlR9O1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgU3R5bGVkRW1iZWRFcnJvciA9IHN0eWxlZC5kaXZgXG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zUmVndWxhcihzZXJ2aWNlKX1cbiAgJHtHRUxfQk9EWV9DT1BZfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDX0xVTkFSfTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtCQkNfQkxPQ0tTfSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAke0dFTF9TUEFDSU5HX1RSUEx9O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6ICR7QkJDX0JMT0NLU19XSURUSH07XG4gIGNvbG9yOiAke0NfU0hBRE9XfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6ICR7RkFVWF9CQkNfQkxPQ0tTX1NQQUNFfTtcbiAgcGFkZGluZy1ib3R0b206ICR7R0VMX1NQQUNJTkdfVFJQTH07XG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAkeyh7IGZpbGxWaWV3cG9ydCB9KSA9PiBmaWxsVmlld3BvcnQgJiYgRklMTF9WSUVXUE9SVF9TVFlMRVN9XG5gO1xuXG5jb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgJHtHRUxfU1BBQ0lOR19UUlBMfTtcblxuICBzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICBhIHtcbiAgICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc0JvbGQoc2VydmljZSl9XG4gICAgY29sb3I6ICR7Q19FQk9OfTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAke0dFTF9TUEFDSU5HfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOnZpc2l0ZWQge1xuICAgICAgY29sb3I6ICR7Q19NRVRBTH07XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRW1iZWRFcnJvciA9ICh7IHNlcnZpY2UsIG1lc3NhZ2UsIGZpbGxWaWV3cG9ydCwgbGluayB9KSA9PiAoXG4gIDxTdHlsZWRFbWJlZEVycm9yIHNlcnZpY2U9e3NlcnZpY2V9IGZpbGxWaWV3cG9ydD17ZmlsbFZpZXdwb3J0fT5cbiAgICA8U3R5bGVkRXJyb3JNZXNzYWdlIHNlcnZpY2U9e3NlcnZpY2V9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0cm9uZz57bWVzc2FnZX08L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpbmsgJiYgbGluay50ZXh0ICYmIGxpbmsuaHJlZiAmJiA8YSBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLnRleHR9PC9hPn1cbiAgICA8L1N0eWxlZEVycm9yTWVzc2FnZT5cbiAgPC9TdHlsZWRFbWJlZEVycm9yPlxuKTtcblxuRW1iZWRFcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlcnZpY2U6ICduZXdzJyxcbiAgZmlsbFZpZXdwb3J0OiBmYWxzZSxcbiAgbGluazogbnVsbCxcbn07XG5cbkVtYmVkRXJyb3IucHJvcFR5cGVzID0ge1xuICBzZXJ2aWNlOiBzdHJpbmcsXG4gIGZpbGxWaWV3cG9ydDogYm9vbCxcbiAgbWVzc2FnZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxpbms6IHNoYXBlKHtcbiAgICB0ZXh0OiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBocmVmOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbWJlZEVycm9yO1xuIl19 */'),
);

var EmbedError = function EmbedError(_ref4) {
  var service = _ref4.service,
    message = _ref4.message,
    fillViewport = _ref4.fillViewport,
    link = _ref4.link;
  return /*#__PURE__*/ React.createElement(
    StyledEmbedError,
    {
      service: service,
      fillViewport: fillViewport,
    },
    /*#__PURE__*/ React.createElement(
      StyledErrorMessage,
      {
        service: service,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        null,
        /*#__PURE__*/ React.createElement('strong', null, message),
      ),
      link &&
        link.text &&
        link.href &&
        /*#__PURE__*/ React.createElement(
          'a',
          {
            href: link.href,
          },
          link.text,
        ),
    ),
  );
};

EmbedError.defaultProps = {
  service: 'news',
  fillViewport: false,
  link: null,
};
EmbedError.propTypes = {
  service: string,
  fillViewport: bool,
  message: string.isRequired,
  link: shape({
    text: string.isRequired,
    href: string.isRequired,
  }),
};
export default EmbedError;
