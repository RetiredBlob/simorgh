import _styled from '@emotion/styled/base';
var _excluded = ['dir', 'state', 'link', 'brandTitle', 'startTime', 'duration'];

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

import React from 'react';
import { oneOfType, elementType, shape, string, number } from 'prop-types';
import VisuallyHiddenText from '#legacy/psammead-visually-hidden-text';
import { formatUnixTimestamp } from '#legacy/psammead-timestamp-container/utilities';
import detokenise from '#legacy/psammead-detokeniser';
import LiveLabel from '#legacy/psammead-live-label';
import { scriptPropType } from '#legacy/gel-foundations/prop-types';
import { Link } from '#legacy/psammead-story-promo';
import {
  getSansBold,
  getSansRegular,
} from '#legacy/psammead-styles/font-styles';
import { getPica } from '#legacy/gel-foundations/typography';
import { C_KINGFISHER } from '#legacy/psammead-styles/colours';
import { GEL_SPACING } from '#legacy/gel-foundations/spacings';
import durationDictionary, { programStateConfig } from '../utilities';

var TitleWrapper = _styled(
  'span',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1b8rgsx2',
      }
    : {
        target: 'e1b8rgsx2',
        label: 'TitleWrapper',
      },
)(
  'color:',
  function (_ref) {
    var titleColor = _ref.titleColor;
    return titleColor;
  },
  ';padding:',
  GEL_SPACING,
  ' 0;display:inline-block;width:100%;',
  function (_ref2) {
    var service = _ref2.service;
    return service && getSansRegular(service);
  },
  ';',
  function (_ref3) {
    var script = _ref3.script;
    return script && getPica(script);
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TY2hlZHVsZUl0ZW1IZWFkZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQyIsImZpbGUiOiIuLi8uLi9zcmMvU2NoZWR1bGVJdGVtSGVhZGVyL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBvbmVPZlR5cGUsIGVsZW1lbnRUeXBlLCBzaGFwZSwgc3RyaW5nLCBudW1iZXIgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBWaXN1YWxseUhpZGRlblRleHQgZnJvbSAnQGJiYy9wc2FtbWVhZC12aXN1YWxseS1oaWRkZW4tdGV4dCc7XG5pbXBvcnQgeyBmb3JtYXRVbml4VGltZXN0YW1wIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC10aW1lc3RhbXAtY29udGFpbmVyL3V0aWxpdGllcyc7XG5pbXBvcnQgZGV0b2tlbmlzZSBmcm9tICdAYmJjL3BzYW1tZWFkLWRldG9rZW5pc2VyJztcbmltcG9ydCBMaXZlTGFiZWwgZnJvbSAnQGJiYy9wc2FtbWVhZC1saXZlLWxhYmVsJztcbmltcG9ydCB7IHNjcmlwdFByb3BUeXBlIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvcHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdG9yeS1wcm9tbyc7XG5pbXBvcnQgeyBnZXRTYW5zQm9sZCwgZ2V0U2Fuc1JlZ3VsYXIgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBnZXRQaWNhIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDX0tJTkdGSVNIRVIgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IEdFTF9TUEFDSU5HIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IGR1cmF0aW9uRGljdGlvbmFyeSwgeyBwcm9ncmFtU3RhdGVDb25maWcgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5jb25zdCBUaXRsZVdyYXBwZXIgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7KHsgdGl0bGVDb2xvciB9KSA9PiB0aXRsZUNvbG9yfTtcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR30gMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgJHsoeyBzZXJ2aWNlIH0pID0+IHNlcnZpY2UgJiYgZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9O1xuICAkeyh7IHNjcmlwdCB9KSA9PiBzY3JpcHQgJiYgZ2V0UGljYShzY3JpcHQpfTtcbmA7XG5cbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXG4gICY6aG92ZXIgJHtUaXRsZVdyYXBwZXJ9IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICY6Zm9jdXMgJHtUaXRsZVdyYXBwZXJ9IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcblxuY29uc3QgTmV4dExhYmVsID0gc3R5bGVkLnNwYW5gXG4gICR7KHsgc2VydmljZSB9KSA9PiBzZXJ2aWNlICYmIGdldFNhbnNCb2xkKHNlcnZpY2UpfTtcbiAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldFBpY2Eoc2NyaXB0KX07XG4gIGNvbG9yOiAke0NfS0lOR0ZJU0hFUn07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAkeyh7IGRpciB9KSA9PlxuICAgIGRpciA9PT0gJ3J0bCdcbiAgICAgID8gYG1hcmdpbi1sZWZ0OiAke0dFTF9TUEFDSU5HfTtgXG4gICAgICA6IGBtYXJnaW4tcmlnaHQ6ICR7R0VMX1NQQUNJTkd9O2B9XG5gO1xuXG5jb25zdCBTY2hlZHVsZUl0ZW1IZWFkZXIgPSAoe1xuICBkaXIsXG4gIHN0YXRlLFxuICBsaW5rLFxuICBicmFuZFRpdGxlLFxuICBzdGFydFRpbWUsXG4gIGR1cmF0aW9uLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgbmV4dExhYmVsLFxuICAgIGxpdmVMYWJlbCxcbiAgICBsaXN0ZW5MYWJlbFRyYW5zbGF0aW9ucyxcbiAgICBzZXJ2aWNlLFxuICAgIHNjcmlwdCxcbiAgICB0aW1lem9uZSxcbiAgICBsb2NhbGUsXG4gICAgbGlua0NvbXBvbmVudCxcbiAgICBsaW5rQ29tcG9uZW50QXR0cixcbiAgICBkdXJhdGlvbkxhYmVsLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaXNMaXZlID0gc3RhdGUgPT09ICdsaXZlJztcbiAgY29uc3QgaXNOZXh0ID0gc3RhdGUgPT09ICduZXh0JztcblxuICBjb25zdCBmb3JtYXR0ZWRTdGFydFRpbWUgPSBmb3JtYXRVbml4VGltZXN0YW1wKHtcbiAgICB0aW1lc3RhbXA6IHN0YXJ0VGltZSxcbiAgICBmb3JtYXQ6ICdISDptbScsXG4gICAgdGltZXpvbmUsXG4gICAgbG9jYWxlLFxuICAgIGlzUmVsYXRpdmU6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBmb3JtYXR0ZWREdXJhdGlvbiA9IGRldG9rZW5pc2UoXG4gICAgZHVyYXRpb25MYWJlbCxcbiAgICBkdXJhdGlvbkRpY3Rpb25hcnkoeyBkdXJhdGlvbiwgbG9jYWxlIH0pLFxuICApO1xuXG4gIGNvbnN0IGVwaXNvZGVUaXRsZSA9IGZvcm1hdFVuaXhUaW1lc3RhbXAoe1xuICAgIHRpbWVzdGFtcDogc3RhcnRUaW1lLFxuICAgIGZvcm1hdDogJ0xMJyxcbiAgICB0aW1lem9uZSxcbiAgICBsb2NhbGUsXG4gICAgaXNSZWxhdGl2ZTogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FyaWEtcm9sZVxuICAgIDxzcGFuIHJvbGU9XCJ0ZXh0XCI+XG4gICAgICA8VmlzdWFsbHlIaWRkZW5UZXh0PntgJHtsaXN0ZW5MYWJlbFRyYW5zbGF0aW9uc1tzdGF0ZV19LCBgfTwvVmlzdWFsbHlIaWRkZW5UZXh0PlxuICAgICAge2lzTGl2ZSAmJiAoXG4gICAgICAgIDxMaXZlTGFiZWxcbiAgICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgICAgIGRpcj17ZGlyfVxuICAgICAgICAgIGxpdmVUZXh0PXtsaXZlTGFiZWx9XG4gICAgICAgICAgYXJpYUhpZGRlblxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtpc05leHQgJiYgKFxuICAgICAgICA8TmV4dExhYmVsXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgICAgIHNjcmlwdD17c2NyaXB0fVxuICAgICAgICAgIGRpcj17ZGlyfVxuICAgICAgICA+XG4gICAgICAgICAge2Ake25leHRMYWJlbH0gYH1cbiAgICAgICAgPC9OZXh0TGFiZWw+XG4gICAgICApfVxuICAgICAge2JyYW5kVGl0bGV9XG4gICAgICA8VmlzdWFsbHlIaWRkZW5UZXh0Piwge2Zvcm1hdHRlZFN0YXJ0VGltZX0sIDwvVmlzdWFsbHlIaWRkZW5UZXh0PlxuICAgICAgPFRpdGxlV3JhcHBlclxuICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgey4uLnByb2dyYW1TdGF0ZUNvbmZpZ1tzdGF0ZV19XG4gICAgICA+XG4gICAgICAgIHtlcGlzb2RlVGl0bGV9XG4gICAgICA8L1RpdGxlV3JhcHBlcj5cbiAgICAgIDxWaXN1YWxseUhpZGRlblRleHQ+e2AsICR7Zm9ybWF0dGVkRHVyYXRpb259IGB9PC9WaXN1YWxseUhpZGRlblRleHQ+XG4gICAgPC9zcGFuPlxuICApO1xuXG4gIGNvbnN0IGxpbmtQcm9wcyA9IHsgW2xpbmtDb21wb25lbnRBdHRyXTogbGluayB9O1xuXG4gIHJldHVybiBzdGF0ZSA9PT0gJ25leHQnID8gKFxuICAgIGNvbnRlbnRcbiAgKSA6IChcbiAgICA8U3R5bGVkTGluayBhcz17bGlua0NvbXBvbmVudH0gey4uLmxpbmtQcm9wc30+XG4gICAgICB7Y29udGVudH1cbiAgICA8L1N0eWxlZExpbms+XG4gICk7XG59O1xuXG5TY2hlZHVsZUl0ZW1IZWFkZXIucHJvcFR5cGVzID0ge1xuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2NyaXB0OiBzaGFwZShzY3JpcHRQcm9wVHlwZSkuaXNSZXF1aXJlZCxcbiAgYnJhbmRUaXRsZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxpbms6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBzdGF0ZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5leHRMYWJlbDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxpdmVMYWJlbDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxpc3RlbkxhYmVsVHJhbnNsYXRpb25zOiBzaGFwZSh7XG4gICAgbGl2ZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmV4dDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25EZW1hbmQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxuICBzdGFydFRpbWU6IG51bWJlci5pc1JlcXVpcmVkLFxuICBkdXJhdGlvbkxhYmVsOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZHVyYXRpb246IHN0cmluZy5pc1JlcXVpcmVkLFxuICB0aW1lem9uZTogc3RyaW5nLFxuICBsb2NhbGU6IHN0cmluZyxcbiAgbGlua0NvbXBvbmVudDogb25lT2ZUeXBlKFtlbGVtZW50VHlwZSwgc3RyaW5nXSksXG4gIGxpbmtDb21wb25lbnRBdHRyOiBzdHJpbmcsXG59O1xuXG5TY2hlZHVsZUl0ZW1IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICB0aW1lem9uZTogJ0V1cm9wZS9Mb25kb24nLFxuICBsb2NhbGU6ICdlbi1nYicsXG4gIGxpbmtDb21wb25lbnQ6ICdhJyxcbiAgbGlua0NvbXBvbmVudEF0dHI6ICdocmVmJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVkdWxlSXRlbUhlYWRlcjtcbiJdfQ== */'),
);

var StyledLink = /*#__PURE__*/ _styled(
  Link,
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1b8rgsx1',
      }
    : {
        target: 'e1b8rgsx1',
        label: 'StyledLink',
      },
)(
  '&:hover ',
  TitleWrapper,
  '{text-decoration:underline;}&:focus ',
  TitleWrapper,
  '{text-decoration:underline;}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TY2hlZHVsZUl0ZW1IZWFkZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCK0IiLCJmaWxlIjoiLi4vLi4vc3JjL1NjaGVkdWxlSXRlbUhlYWRlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgb25lT2ZUeXBlLCBlbGVtZW50VHlwZSwgc2hhcGUsIHN0cmluZywgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVmlzdWFsbHlIaWRkZW5UZXh0IGZyb20gJ0BiYmMvcHNhbW1lYWQtdmlzdWFsbHktaGlkZGVuLXRleHQnO1xuaW1wb3J0IHsgZm9ybWF0VW5peFRpbWVzdGFtcCB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtdGltZXN0YW1wLWNvbnRhaW5lci91dGlsaXRpZXMnO1xuaW1wb3J0IGRldG9rZW5pc2UgZnJvbSAnQGJiYy9wc2FtbWVhZC1kZXRva2VuaXNlcic7XG5pbXBvcnQgTGl2ZUxhYmVsIGZyb20gJ0BiYmMvcHNhbW1lYWQtbGl2ZS1sYWJlbCc7XG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3RvcnktcHJvbW8nO1xuaW1wb3J0IHsgZ2V0U2Fuc0JvbGQsIGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgZ2V0UGljYSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ19LSU5HRklTSEVSIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lORyB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCBkdXJhdGlvbkRpY3Rpb25hcnksIHsgcHJvZ3JhbVN0YXRlQ29uZmlnIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY29uc3QgVGl0bGVXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAkeyh7IHRpdGxlQ29sb3IgfSkgPT4gdGl0bGVDb2xvcn07XG4gIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkd9IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gICR7KHsgc2VydmljZSB9KSA9PiBzZXJ2aWNlICYmIGdldFNhbnNSZWd1bGFyKHNlcnZpY2UpfTtcbiAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldFBpY2Eoc2NyaXB0KX07XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxuICAmOmhvdmVyICR7VGl0bGVXcmFwcGVyfSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAmOmZvY3VzICR7VGl0bGVXcmFwcGVyfSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5leHRMYWJlbCA9IHN0eWxlZC5zcGFuYFxuICAkeyh7IHNlcnZpY2UgfSkgPT4gc2VydmljZSAmJiBnZXRTYW5zQm9sZChzZXJ2aWNlKX07XG4gICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXRQaWNhKHNjcmlwdCl9O1xuICBjb2xvcjogJHtDX0tJTkdGSVNIRVJ9O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJHsoeyBkaXIgfSkgPT5cbiAgICBkaXIgPT09ICdydGwnXG4gICAgICA/IGBtYXJnaW4tbGVmdDogJHtHRUxfU1BBQ0lOR307YFxuICAgICAgOiBgbWFyZ2luLXJpZ2h0OiAke0dFTF9TUEFDSU5HfTtgfVxuYDtcblxuY29uc3QgU2NoZWR1bGVJdGVtSGVhZGVyID0gKHtcbiAgZGlyLFxuICBzdGF0ZSxcbiAgbGluayxcbiAgYnJhbmRUaXRsZSxcbiAgc3RhcnRUaW1lLFxuICBkdXJhdGlvbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIG5leHRMYWJlbCxcbiAgICBsaXZlTGFiZWwsXG4gICAgbGlzdGVuTGFiZWxUcmFuc2xhdGlvbnMsXG4gICAgc2VydmljZSxcbiAgICBzY3JpcHQsXG4gICAgdGltZXpvbmUsXG4gICAgbG9jYWxlLFxuICAgIGxpbmtDb21wb25lbnQsXG4gICAgbGlua0NvbXBvbmVudEF0dHIsXG4gICAgZHVyYXRpb25MYWJlbCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlzTGl2ZSA9IHN0YXRlID09PSAnbGl2ZSc7XG4gIGNvbnN0IGlzTmV4dCA9IHN0YXRlID09PSAnbmV4dCc7XG5cbiAgY29uc3QgZm9ybWF0dGVkU3RhcnRUaW1lID0gZm9ybWF0VW5peFRpbWVzdGFtcCh7XG4gICAgdGltZXN0YW1wOiBzdGFydFRpbWUsXG4gICAgZm9ybWF0OiAnSEg6bW0nLFxuICAgIHRpbWV6b25lLFxuICAgIGxvY2FsZSxcbiAgICBpc1JlbGF0aXZlOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgZm9ybWF0dGVkRHVyYXRpb24gPSBkZXRva2VuaXNlKFxuICAgIGR1cmF0aW9uTGFiZWwsXG4gICAgZHVyYXRpb25EaWN0aW9uYXJ5KHsgZHVyYXRpb24sIGxvY2FsZSB9KSxcbiAgKTtcblxuICBjb25zdCBlcGlzb2RlVGl0bGUgPSBmb3JtYXRVbml4VGltZXN0YW1wKHtcbiAgICB0aW1lc3RhbXA6IHN0YXJ0VGltZSxcbiAgICBmb3JtYXQ6ICdMTCcsXG4gICAgdGltZXpvbmUsXG4gICAgbG9jYWxlLFxuICAgIGlzUmVsYXRpdmU6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hcmlhLXJvbGVcbiAgICA8c3BhbiByb2xlPVwidGV4dFwiPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuVGV4dD57YCR7bGlzdGVuTGFiZWxUcmFuc2xhdGlvbnNbc3RhdGVdfSwgYH08L1Zpc3VhbGx5SGlkZGVuVGV4dD5cbiAgICAgIHtpc0xpdmUgJiYgKFxuICAgICAgICA8TGl2ZUxhYmVsXG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgICBsaXZlVGV4dD17bGl2ZUxhYmVsfVxuICAgICAgICAgIGFyaWFIaWRkZW5cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7aXNOZXh0ICYmIChcbiAgICAgICAgPE5leHRMYWJlbFxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgPlxuICAgICAgICAgIHtgJHtuZXh0TGFiZWx9IGB9XG4gICAgICAgIDwvTmV4dExhYmVsPlxuICAgICAgKX1cbiAgICAgIHticmFuZFRpdGxlfVxuICAgICAgPFZpc3VhbGx5SGlkZGVuVGV4dD4sIHtmb3JtYXR0ZWRTdGFydFRpbWV9LCA8L1Zpc3VhbGx5SGlkZGVuVGV4dD5cbiAgICAgIDxUaXRsZVdyYXBwZXJcbiAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgIHsuLi5wcm9ncmFtU3RhdGVDb25maWdbc3RhdGVdfVxuICAgICAgPlxuICAgICAgICB7ZXBpc29kZVRpdGxlfVxuICAgICAgPC9UaXRsZVdyYXBwZXI+XG4gICAgICA8VmlzdWFsbHlIaWRkZW5UZXh0PntgLCAke2Zvcm1hdHRlZER1cmF0aW9ufSBgfTwvVmlzdWFsbHlIaWRkZW5UZXh0PlxuICAgIDwvc3Bhbj5cbiAgKTtcblxuICBjb25zdCBsaW5rUHJvcHMgPSB7IFtsaW5rQ29tcG9uZW50QXR0cl06IGxpbmsgfTtcblxuICByZXR1cm4gc3RhdGUgPT09ICduZXh0JyA/IChcbiAgICBjb250ZW50XG4gICkgOiAoXG4gICAgPFN0eWxlZExpbmsgYXM9e2xpbmtDb21wb25lbnR9IHsuLi5saW5rUHJvcHN9PlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9TdHlsZWRMaW5rPlxuICApO1xufTtcblxuU2NoZWR1bGVJdGVtSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpcjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIGJyYW5kVGl0bGU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhdGU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBuZXh0TGFiZWw6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaXZlTGFiZWw6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaXN0ZW5MYWJlbFRyYW5zbGF0aW9uczogc2hhcGUoe1xuICAgIGxpdmU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5leHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uRGVtYW5kOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgc3RhcnRUaW1lOiBudW1iZXIuaXNSZXF1aXJlZCxcbiAgZHVyYXRpb25MYWJlbDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGR1cmF0aW9uOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZXpvbmU6IHN0cmluZyxcbiAgbG9jYWxlOiBzdHJpbmcsXG4gIGxpbmtDb21wb25lbnQ6IG9uZU9mVHlwZShbZWxlbWVudFR5cGUsIHN0cmluZ10pLFxuICBsaW5rQ29tcG9uZW50QXR0cjogc3RyaW5nLFxufTtcblxuU2NoZWR1bGVJdGVtSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGltZXpvbmU6ICdFdXJvcGUvTG9uZG9uJyxcbiAgbG9jYWxlOiAnZW4tZ2InLFxuICBsaW5rQ29tcG9uZW50OiAnYScsXG4gIGxpbmtDb21wb25lbnRBdHRyOiAnaHJlZicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2hlZHVsZUl0ZW1IZWFkZXI7XG4iXX0= */'),
);

var NextLabel = _styled(
  'span',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e1b8rgsx0',
      }
    : {
        target: 'e1b8rgsx0',
        label: 'NextLabel',
      },
)(
  function (_ref4) {
    var service = _ref4.service;
    return service && getSansBold(service);
  },
  ';',
  function (_ref5) {
    var script = _ref5.script;
    return script && getPica(script);
  },
  ';color:',
  C_KINGFISHER,
  ';display:inline-block;',
  function (_ref6) {
    var dir = _ref6.dir;
    return dir === 'rtl'
      ? 'margin-left: '.concat(GEL_SPACING, ';')
      : 'margin-right: '.concat(GEL_SPACING, ';');
  },
  ';' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TY2hlZHVsZUl0ZW1IZWFkZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNkIiLCJmaWxlIjoiLi4vLi4vc3JjL1NjaGVkdWxlSXRlbUhlYWRlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgb25lT2ZUeXBlLCBlbGVtZW50VHlwZSwgc2hhcGUsIHN0cmluZywgbnVtYmVyIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVmlzdWFsbHlIaWRkZW5UZXh0IGZyb20gJ0BiYmMvcHNhbW1lYWQtdmlzdWFsbHktaGlkZGVuLXRleHQnO1xuaW1wb3J0IHsgZm9ybWF0VW5peFRpbWVzdGFtcCB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtdGltZXN0YW1wLWNvbnRhaW5lci91dGlsaXRpZXMnO1xuaW1wb3J0IGRldG9rZW5pc2UgZnJvbSAnQGJiYy9wc2FtbWVhZC1kZXRva2VuaXNlcic7XG5pbXBvcnQgTGl2ZUxhYmVsIGZyb20gJ0BiYmMvcHNhbW1lYWQtbGl2ZS1sYWJlbCc7XG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3RvcnktcHJvbW8nO1xuaW1wb3J0IHsgZ2V0U2Fuc0JvbGQsIGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHsgZ2V0UGljYSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ19LSU5HRklTSEVSIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvY29sb3Vycyc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lORyB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCBkdXJhdGlvbkRpY3Rpb25hcnksIHsgcHJvZ3JhbVN0YXRlQ29uZmlnIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuY29uc3QgVGl0bGVXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAkeyh7IHRpdGxlQ29sb3IgfSkgPT4gdGl0bGVDb2xvcn07XG4gIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkd9IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gICR7KHsgc2VydmljZSB9KSA9PiBzZXJ2aWNlICYmIGdldFNhbnNSZWd1bGFyKHNlcnZpY2UpfTtcbiAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldFBpY2Eoc2NyaXB0KX07XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxuICAmOmhvdmVyICR7VGl0bGVXcmFwcGVyfSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAmOmZvY3VzICR7VGl0bGVXcmFwcGVyfSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5leHRMYWJlbCA9IHN0eWxlZC5zcGFuYFxuICAkeyh7IHNlcnZpY2UgfSkgPT4gc2VydmljZSAmJiBnZXRTYW5zQm9sZChzZXJ2aWNlKX07XG4gICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXRQaWNhKHNjcmlwdCl9O1xuICBjb2xvcjogJHtDX0tJTkdGSVNIRVJ9O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJHsoeyBkaXIgfSkgPT5cbiAgICBkaXIgPT09ICdydGwnXG4gICAgICA/IGBtYXJnaW4tbGVmdDogJHtHRUxfU1BBQ0lOR307YFxuICAgICAgOiBgbWFyZ2luLXJpZ2h0OiAke0dFTF9TUEFDSU5HfTtgfVxuYDtcblxuY29uc3QgU2NoZWR1bGVJdGVtSGVhZGVyID0gKHtcbiAgZGlyLFxuICBzdGF0ZSxcbiAgbGluayxcbiAgYnJhbmRUaXRsZSxcbiAgc3RhcnRUaW1lLFxuICBkdXJhdGlvbixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIG5leHRMYWJlbCxcbiAgICBsaXZlTGFiZWwsXG4gICAgbGlzdGVuTGFiZWxUcmFuc2xhdGlvbnMsXG4gICAgc2VydmljZSxcbiAgICBzY3JpcHQsXG4gICAgdGltZXpvbmUsXG4gICAgbG9jYWxlLFxuICAgIGxpbmtDb21wb25lbnQsXG4gICAgbGlua0NvbXBvbmVudEF0dHIsXG4gICAgZHVyYXRpb25MYWJlbCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlzTGl2ZSA9IHN0YXRlID09PSAnbGl2ZSc7XG4gIGNvbnN0IGlzTmV4dCA9IHN0YXRlID09PSAnbmV4dCc7XG5cbiAgY29uc3QgZm9ybWF0dGVkU3RhcnRUaW1lID0gZm9ybWF0VW5peFRpbWVzdGFtcCh7XG4gICAgdGltZXN0YW1wOiBzdGFydFRpbWUsXG4gICAgZm9ybWF0OiAnSEg6bW0nLFxuICAgIHRpbWV6b25lLFxuICAgIGxvY2FsZSxcbiAgICBpc1JlbGF0aXZlOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3QgZm9ybWF0dGVkRHVyYXRpb24gPSBkZXRva2VuaXNlKFxuICAgIGR1cmF0aW9uTGFiZWwsXG4gICAgZHVyYXRpb25EaWN0aW9uYXJ5KHsgZHVyYXRpb24sIGxvY2FsZSB9KSxcbiAgKTtcblxuICBjb25zdCBlcGlzb2RlVGl0bGUgPSBmb3JtYXRVbml4VGltZXN0YW1wKHtcbiAgICB0aW1lc3RhbXA6IHN0YXJ0VGltZSxcbiAgICBmb3JtYXQ6ICdMTCcsXG4gICAgdGltZXpvbmUsXG4gICAgbG9jYWxlLFxuICAgIGlzUmVsYXRpdmU6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hcmlhLXJvbGVcbiAgICA8c3BhbiByb2xlPVwidGV4dFwiPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuVGV4dD57YCR7bGlzdGVuTGFiZWxUcmFuc2xhdGlvbnNbc3RhdGVdfSwgYH08L1Zpc3VhbGx5SGlkZGVuVGV4dD5cbiAgICAgIHtpc0xpdmUgJiYgKFxuICAgICAgICA8TGl2ZUxhYmVsXG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgICBsaXZlVGV4dD17bGl2ZUxhYmVsfVxuICAgICAgICAgIGFyaWFIaWRkZW5cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7aXNOZXh0ICYmIChcbiAgICAgICAgPE5leHRMYWJlbFxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgPlxuICAgICAgICAgIHtgJHtuZXh0TGFiZWx9IGB9XG4gICAgICAgIDwvTmV4dExhYmVsPlxuICAgICAgKX1cbiAgICAgIHticmFuZFRpdGxlfVxuICAgICAgPFZpc3VhbGx5SGlkZGVuVGV4dD4sIHtmb3JtYXR0ZWRTdGFydFRpbWV9LCA8L1Zpc3VhbGx5SGlkZGVuVGV4dD5cbiAgICAgIDxUaXRsZVdyYXBwZXJcbiAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgIHsuLi5wcm9ncmFtU3RhdGVDb25maWdbc3RhdGVdfVxuICAgICAgPlxuICAgICAgICB7ZXBpc29kZVRpdGxlfVxuICAgICAgPC9UaXRsZVdyYXBwZXI+XG4gICAgICA8VmlzdWFsbHlIaWRkZW5UZXh0PntgLCAke2Zvcm1hdHRlZER1cmF0aW9ufSBgfTwvVmlzdWFsbHlIaWRkZW5UZXh0PlxuICAgIDwvc3Bhbj5cbiAgKTtcblxuICBjb25zdCBsaW5rUHJvcHMgPSB7IFtsaW5rQ29tcG9uZW50QXR0cl06IGxpbmsgfTtcblxuICByZXR1cm4gc3RhdGUgPT09ICduZXh0JyA/IChcbiAgICBjb250ZW50XG4gICkgOiAoXG4gICAgPFN0eWxlZExpbmsgYXM9e2xpbmtDb21wb25lbnR9IHsuLi5saW5rUHJvcHN9PlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9TdHlsZWRMaW5rPlxuICApO1xufTtcblxuU2NoZWR1bGVJdGVtSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpcjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIGJyYW5kVGl0bGU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhdGU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBuZXh0TGFiZWw6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaXZlTGFiZWw6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaXN0ZW5MYWJlbFRyYW5zbGF0aW9uczogc2hhcGUoe1xuICAgIGxpdmU6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5leHQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9uRGVtYW5kOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgc3RhcnRUaW1lOiBudW1iZXIuaXNSZXF1aXJlZCxcbiAgZHVyYXRpb25MYWJlbDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGR1cmF0aW9uOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZXpvbmU6IHN0cmluZyxcbiAgbG9jYWxlOiBzdHJpbmcsXG4gIGxpbmtDb21wb25lbnQ6IG9uZU9mVHlwZShbZWxlbWVudFR5cGUsIHN0cmluZ10pLFxuICBsaW5rQ29tcG9uZW50QXR0cjogc3RyaW5nLFxufTtcblxuU2NoZWR1bGVJdGVtSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGltZXpvbmU6ICdFdXJvcGUvTG9uZG9uJyxcbiAgbG9jYWxlOiAnZW4tZ2InLFxuICBsaW5rQ29tcG9uZW50OiAnYScsXG4gIGxpbmtDb21wb25lbnRBdHRyOiAnaHJlZicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2hlZHVsZUl0ZW1IZWFkZXI7XG4iXX0= */'),
);

var ScheduleItemHeader = function ScheduleItemHeader(_ref7) {
  var dir = _ref7.dir,
    state = _ref7.state,
    link = _ref7.link,
    brandTitle = _ref7.brandTitle,
    startTime = _ref7.startTime,
    duration = _ref7.duration,
    props = _objectWithoutProperties(_ref7, _excluded);

  var nextLabel = props.nextLabel,
    liveLabel = props.liveLabel,
    listenLabelTranslations = props.listenLabelTranslations,
    service = props.service,
    script = props.script,
    timezone = props.timezone,
    locale = props.locale,
    linkComponent = props.linkComponent,
    linkComponentAttr = props.linkComponentAttr,
    durationLabel = props.durationLabel;
  var isLive = state === 'live';
  var isNext = state === 'next';
  var formattedStartTime = formatUnixTimestamp({
    timestamp: startTime,
    format: 'HH:mm',
    timezone: timezone,
    locale: locale,
    isRelative: false,
  });
  var formattedDuration = detokenise(
    durationLabel,
    durationDictionary({
      duration: duration,
      locale: locale,
    }),
  );
  var episodeTitle = formatUnixTimestamp({
    timestamp: startTime,
    format: 'LL',
    timezone: timezone,
    locale: locale,
    isRelative: false,
  });
  var content =
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/aria-role
    React.createElement(
      'span',
      {
        role: 'text',
      },
      /*#__PURE__*/ React.createElement(
        VisuallyHiddenText,
        null,
        ''.concat(listenLabelTranslations[state], ', '),
      ),
      isLive &&
        /*#__PURE__*/ React.createElement(LiveLabel, {
          service: service,
          dir: dir,
          liveText: liveLabel,
          ariaHidden: true,
        }),
      isNext &&
        /*#__PURE__*/ React.createElement(
          NextLabel,
          {
            'aria-hidden': 'true',
            service: service,
            script: script,
            dir: dir,
          },
          ''.concat(nextLabel, ' '),
        ),
      brandTitle,
      /*#__PURE__*/ React.createElement(
        VisuallyHiddenText,
        null,
        ', ',
        formattedStartTime,
        ', ',
      ),
      /*#__PURE__*/ React.createElement(
        TitleWrapper,
        _extends(
          {
            service: service,
            script: script,
          },
          programStateConfig[state],
        ),
        episodeTitle,
      ),
      /*#__PURE__*/ React.createElement(
        VisuallyHiddenText,
        null,
        ', '.concat(formattedDuration, ' '),
      ),
    );

  var linkProps = _defineProperty({}, linkComponentAttr, link);

  return state === 'next'
    ? content
    : /*#__PURE__*/ React.createElement(
        StyledLink,
        _extends(
          {
            as: linkComponent,
          },
          linkProps,
        ),
        content,
      );
};

ScheduleItemHeader.propTypes = {
  service: string.isRequired,
  dir: string.isRequired,
  script: shape(scriptPropType).isRequired,
  brandTitle: string.isRequired,
  link: string.isRequired,
  state: string.isRequired,
  nextLabel: string.isRequired,
  liveLabel: string.isRequired,
  listenLabelTranslations: shape({
    live: string.isRequired,
    next: string.isRequired,
    onDemand: string.isRequired,
  }).isRequired,
  startTime: number.isRequired,
  durationLabel: string.isRequired,
  duration: string.isRequired,
  timezone: string,
  locale: string,
  linkComponent: oneOfType([elementType, string]),
  linkComponentAttr: string,
};
ScheduleItemHeader.defaultProps = {
  timezone: 'Europe/London',
  locale: 'en-gb',
  linkComponent: 'a',
  linkComponentAttr: 'href',
};
export default ScheduleItemHeader;
