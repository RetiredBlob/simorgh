import _styled from '@emotion/styled/base';

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

import React from 'react';
import { node, string } from 'prop-types';
import { C_EBON, C_WHITE } from '#legacy/psammead-styles/colours';
import { getSansBold } from '#legacy/psammead-styles/font-styles';
import { GEL_BREVIER } from '#legacy/gel-foundations/typography';
import {
  detokenise,
  dictionaryFactory,
  visuallyHiddenStyle,
} from '../utilities';
var BORDER_WEIGHT = '0.125rem';
var GEL_SPACING_THREE_QRTS = '0.75rem';

var Wrapper = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'ewhrggl2',
      }
    : {
        target: 'ewhrggl2',
        label: 'Wrapper',
      },
)(
  process.env.NODE_ENV === 'production'
    ? {
        name: 'bjn8wh',
        styles: 'position:relative',
      }
    : {
        name: 'bjn8wh',
        styles: 'position:relative',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ta2lwTGlua1dyYXBwZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCMEIiLCJmaWxlIjoiLi4vLi4vc3JjL1NraXBMaW5rV3JhcHBlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBDX0VCT04sIENfV0hJVEUgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IGdldFNhbnNCb2xkIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgR0VMX0JSRVZJRVIgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcblxuaW1wb3J0IHtcbiAgZGV0b2tlbmlzZSxcbiAgZGljdGlvbmFyeUZhY3RvcnksXG4gIHZpc3VhbGx5SGlkZGVuU3R5bGUsXG59IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNvbnN0IEJPUkRFUl9XRUlHSFQgPSAnMC4xMjVyZW0nO1xuY29uc3QgR0VMX1NQQUNJTkdfVEhSRUVfUVJUUyA9IGAwLjc1cmVtYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFNraXBMaW5rID0gc3R5bGVkLmFgXG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX1cbiAgJHtHRUxfQlJFVklFUn1cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDX1dISVRFfTtcbiAgYm9yZGVyOiAke0JPUkRFUl9XRUlHSFR9IHNvbGlkICR7Q19FQk9OfTtcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX1RIUkVFX1FSVFN9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcblxuICAmOm5vdCg6Zm9jdXMpOm5vdCg6YWN0aXZlKSB7XG4gICAgJHt2aXN1YWxseUhpZGRlblN0eWxlfVxuICB9XG5gO1xuXG5jb25zdCBFbmRUZXh0ID0gc3R5bGVkLnBgXG4gICR7dmlzdWFsbHlIaWRkZW5TdHlsZX1cbmA7XG5cbmNvbnN0IFNraXBMaW5rV3JhcHBlciA9ICh7XG4gIHByb3ZpZGVyLFxuICBzZXJ2aWNlLFxuICBlbmRUZXh0SWQsXG4gIHRleHQsXG4gIGNoaWxkcmVuLFxuICBlbmRUZXh0VmlzdWFsbHlIaWRkZW4sXG59KSA9PiB7XG4gIGNvbnN0IGRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5RmFjdG9yeSh7IHByb3ZpZGVyIH0pO1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFNraXBMaW5rXG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGhyZWY9e2AjJHtkZXRva2VuaXNlKGVuZFRleHRJZCwgZGljdGlvbmFyeSl9YH1cbiAgICAgID5cbiAgICAgICAge2RldG9rZW5pc2UodGV4dCwgZGljdGlvbmFyeSl9XG4gICAgICA8L1NraXBMaW5rPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPEVuZFRleHQgdGFiSW5kZXg9XCItMVwiIGlkPXtkZXRva2VuaXNlKGVuZFRleHRJZCwgZGljdGlvbmFyeSl9PlxuICAgICAgICB7ZGV0b2tlbmlzZShlbmRUZXh0VmlzdWFsbHlIaWRkZW4sIGRpY3Rpb25hcnkpfVxuICAgICAgPC9FbmRUZXh0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cblNraXBMaW5rV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIHByb3ZpZGVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGVuZFRleHRJZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG4gIHRleHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBlbmRUZXh0VmlzdWFsbHlIaWRkZW46IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpcExpbmtXcmFwcGVyO1xuIl19 */',
        toString: _EMOTION_STRINGIFIED_CSS_ERROR__,
      },
);

var SkipLink = _styled(
  'a',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'ewhrggl1',
      }
    : {
        target: 'ewhrggl1',
        label: 'SkipLink',
      },
)(
  function (_ref) {
    var service = _ref.service;
    return getSansBold(service);
  },
  ' ',
  GEL_BREVIER,
  ' background-color:',
  C_WHITE,
  ';border:',
  BORDER_WEIGHT,
  ' solid ',
  C_EBON,
  ';color:',
  C_EBON,
  ';display:block;left:0;line-height:1;padding:',
  GEL_SPACING_THREE_QRTS,
  ';position:absolute;text-decoration:none;top:0;z-index:10;&:not(:focus):not(:active){',
  visuallyHiddenStyle,
  ';}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ta2lwTGlua1dyYXBwZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CeUIiLCJmaWxlIjoiLi4vLi4vc3JjL1NraXBMaW5rV3JhcHBlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBDX0VCT04sIENfV0hJVEUgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IGdldFNhbnNCb2xkIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgR0VMX0JSRVZJRVIgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcblxuaW1wb3J0IHtcbiAgZGV0b2tlbmlzZSxcbiAgZGljdGlvbmFyeUZhY3RvcnksXG4gIHZpc3VhbGx5SGlkZGVuU3R5bGUsXG59IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNvbnN0IEJPUkRFUl9XRUlHSFQgPSAnMC4xMjVyZW0nO1xuY29uc3QgR0VMX1NQQUNJTkdfVEhSRUVfUVJUUyA9IGAwLjc1cmVtYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFNraXBMaW5rID0gc3R5bGVkLmFgXG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX1cbiAgJHtHRUxfQlJFVklFUn1cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDX1dISVRFfTtcbiAgYm9yZGVyOiAke0JPUkRFUl9XRUlHSFR9IHNvbGlkICR7Q19FQk9OfTtcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX1RIUkVFX1FSVFN9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcblxuICAmOm5vdCg6Zm9jdXMpOm5vdCg6YWN0aXZlKSB7XG4gICAgJHt2aXN1YWxseUhpZGRlblN0eWxlfVxuICB9XG5gO1xuXG5jb25zdCBFbmRUZXh0ID0gc3R5bGVkLnBgXG4gICR7dmlzdWFsbHlIaWRkZW5TdHlsZX1cbmA7XG5cbmNvbnN0IFNraXBMaW5rV3JhcHBlciA9ICh7XG4gIHByb3ZpZGVyLFxuICBzZXJ2aWNlLFxuICBlbmRUZXh0SWQsXG4gIHRleHQsXG4gIGNoaWxkcmVuLFxuICBlbmRUZXh0VmlzdWFsbHlIaWRkZW4sXG59KSA9PiB7XG4gIGNvbnN0IGRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5RmFjdG9yeSh7IHByb3ZpZGVyIH0pO1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFNraXBMaW5rXG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGhyZWY9e2AjJHtkZXRva2VuaXNlKGVuZFRleHRJZCwgZGljdGlvbmFyeSl9YH1cbiAgICAgID5cbiAgICAgICAge2RldG9rZW5pc2UodGV4dCwgZGljdGlvbmFyeSl9XG4gICAgICA8L1NraXBMaW5rPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPEVuZFRleHQgdGFiSW5kZXg9XCItMVwiIGlkPXtkZXRva2VuaXNlKGVuZFRleHRJZCwgZGljdGlvbmFyeSl9PlxuICAgICAgICB7ZGV0b2tlbmlzZShlbmRUZXh0VmlzdWFsbHlIaWRkZW4sIGRpY3Rpb25hcnkpfVxuICAgICAgPC9FbmRUZXh0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cblNraXBMaW5rV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIHByb3ZpZGVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGVuZFRleHRJZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG4gIHRleHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBlbmRUZXh0VmlzdWFsbHlIaWRkZW46IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpcExpbmtXcmFwcGVyO1xuIl19 */'),
);

var EndText = _styled(
  'p',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'ewhrggl0',
      }
    : {
        target: 'ewhrggl0',
        label: 'EndText',
      },
)(
  visuallyHiddenStyle,
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ta2lwTGlua1dyYXBwZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDd0IiLCJmaWxlIjoiLi4vLi4vc3JjL1NraXBMaW5rV3JhcHBlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbm9kZSwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBDX0VCT04sIENfV0hJVEUgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IGdldFNhbnNCb2xkIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgR0VMX0JSRVZJRVIgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcblxuaW1wb3J0IHtcbiAgZGV0b2tlbmlzZSxcbiAgZGljdGlvbmFyeUZhY3RvcnksXG4gIHZpc3VhbGx5SGlkZGVuU3R5bGUsXG59IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbmNvbnN0IEJPUkRFUl9XRUlHSFQgPSAnMC4xMjVyZW0nO1xuY29uc3QgR0VMX1NQQUNJTkdfVEhSRUVfUVJUUyA9IGAwLjc1cmVtYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFNraXBMaW5rID0gc3R5bGVkLmFgXG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX1cbiAgJHtHRUxfQlJFVklFUn1cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtDX1dISVRFfTtcbiAgYm9yZGVyOiAke0JPUkRFUl9XRUlHSFR9IHNvbGlkICR7Q19FQk9OfTtcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX1RIUkVFX1FSVFN9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcblxuICAmOm5vdCg6Zm9jdXMpOm5vdCg6YWN0aXZlKSB7XG4gICAgJHt2aXN1YWxseUhpZGRlblN0eWxlfVxuICB9XG5gO1xuXG5jb25zdCBFbmRUZXh0ID0gc3R5bGVkLnBgXG4gICR7dmlzdWFsbHlIaWRkZW5TdHlsZX1cbmA7XG5cbmNvbnN0IFNraXBMaW5rV3JhcHBlciA9ICh7XG4gIHByb3ZpZGVyLFxuICBzZXJ2aWNlLFxuICBlbmRUZXh0SWQsXG4gIHRleHQsXG4gIGNoaWxkcmVuLFxuICBlbmRUZXh0VmlzdWFsbHlIaWRkZW4sXG59KSA9PiB7XG4gIGNvbnN0IGRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5RmFjdG9yeSh7IHByb3ZpZGVyIH0pO1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPFNraXBMaW5rXG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGhyZWY9e2AjJHtkZXRva2VuaXNlKGVuZFRleHRJZCwgZGljdGlvbmFyeSl9YH1cbiAgICAgID5cbiAgICAgICAge2RldG9rZW5pc2UodGV4dCwgZGljdGlvbmFyeSl9XG4gICAgICA8L1NraXBMaW5rPlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPEVuZFRleHQgdGFiSW5kZXg9XCItMVwiIGlkPXtkZXRva2VuaXNlKGVuZFRleHRJZCwgZGljdGlvbmFyeSl9PlxuICAgICAgICB7ZGV0b2tlbmlzZShlbmRUZXh0VmlzdWFsbHlIaWRkZW4sIGRpY3Rpb25hcnkpfVxuICAgICAgPC9FbmRUZXh0PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cblNraXBMaW5rV3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIHByb3ZpZGVyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGVuZFRleHRJZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG4gIHRleHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBlbmRUZXh0VmlzdWFsbHlIaWRkZW46IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpcExpbmtXcmFwcGVyO1xuIl19 */'),
);

var SkipLinkWrapper = function SkipLinkWrapper(_ref2) {
  var provider = _ref2.provider,
    service = _ref2.service,
    endTextId = _ref2.endTextId,
    text = _ref2.text,
    children = _ref2.children,
    endTextVisuallyHidden = _ref2.endTextVisuallyHidden;
  var dictionary = dictionaryFactory({
    provider: provider,
  });
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    null,
    /*#__PURE__*/ React.createElement(
      SkipLink,
      {
        service: service,
        href: '#'.concat(detokenise(endTextId, dictionary)),
      },
      detokenise(text, dictionary),
    ),
    children,
    /*#__PURE__*/ React.createElement(
      EndText,
      {
        tabIndex: '-1',
        id: detokenise(endTextId, dictionary),
      },
      detokenise(endTextVisuallyHidden, dictionary),
    ),
  );
};

SkipLinkWrapper.propTypes = {
  provider: string.isRequired,
  service: string.isRequired,
  endTextId: string.isRequired,
  children: node.isRequired,
  text: string.isRequired,
  endTextVisuallyHidden: string.isRequired,
};
export default SkipLinkWrapper;
