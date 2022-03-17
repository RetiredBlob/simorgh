import _styled from '@emotion/styled/base';

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

function _EMOTION_STRINGIFIED_CSS_ERROR__() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}

import React from 'react';
import { string } from 'prop-types';
import omit from 'ramda/src/omit';
import { mediaIcons } from '#legacy/psammead-assets/svgs';
import { getMinion } from '#legacy/gel-foundations/typography';
import { C_EBON, C_WHITE } from '#legacy/psammead-styles/colours';
import { getSansRegular } from '#legacy/psammead-styles/font-styles';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '#legacy/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '#legacy/gel-foundations/breakpoints';
import ImagePlaceholder from '#legacy/psammead-image-placeholder';
import { withEpisodeContext } from './helpers';

var Wrapper = _styled(
  'div',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e148g7az3',
      }
    : {
        target: 'e148g7az3',
        label: 'Wrapper',
      },
)(
  'display:inline-block;position:relative;width:4.375rem;',
  function (_ref) {
    var dir = _ref.dir;
    return 'margin-'
      .concat(dir === 'ltr' ? 'right' : 'left', ': ')
      .concat(GEL_SPACING, ';');
  },
  '@media (min-width: ',
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  '){width:7.5rem;}@media (min-width: ',
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  '){',
  function (_ref2) {
    var dir = _ref2.dir;
    return 'margin-'
      .concat(dir === 'ltr' ? 'right' : 'left', ': ')
      .concat(GEL_SPACING_DBL, ';');
  },
  ' width:14.375rem;}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbWFnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0IwQiIsImZpbGUiOiIuLi9zcmMvSW1hZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG9taXQgZnJvbSAncmFtZGEvc3JjL29taXQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbWVkaWFJY29ucyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtYXNzZXRzL3N2Z3MnO1xuaW1wb3J0IHsgZ2V0TWluaW9uIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDX0VCT04sIENfV0hJVEUgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHtcbiAgR0VMX1NQQUNJTkdfSExGLFxuICBHRUxfU1BBQ0lORyxcbiAgR0VMX1NQQUNJTkdfREJMLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5cbmltcG9ydCBJbWFnZVBsYWNlaG9sZGVyIGZyb20gJ0BiYmMvcHNhbW1lYWQtaW1hZ2UtcGxhY2Vob2xkZXInO1xuXG5pbXBvcnQgeyB3aXRoRXBpc29kZUNvbnRleHQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0LjM3NXJlbTtcbiAgJHsoeyBkaXIgfSkgPT4gYG1hcmdpbi0ke2RpciA9PT0gJ2x0cicgPyAncmlnaHQnIDogJ2xlZnQnfTogJHtHRUxfU1BBQ0lOR307YH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICB3aWR0aDogNy41cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgJHsoeyBkaXIgfSkgPT5cbiAgICAgIGBtYXJnaW4tJHtkaXIgPT09ICdsdHInID8gJ3JpZ2h0JyA6ICdsZWZ0J306ICR7R0VMX1NQQUNJTkdfREJMfTtgfVxuICAgIHdpZHRoOiAxNC4zNzVyZW07XG4gIH1cbmA7XG5cbmNvbnN0IFBsYXlXcmFwcGVyID0gd2l0aEVwaXNvZGVDb250ZXh0KHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q19FQk9OfTtcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR19ITEZ9O1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkd9O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW46IDAgMCAxcHggMDtcbiAgICBoZWlnaHQ6IDAuNnJlbTtcbiAgICB3aWR0aDogMC43cmVtO1xuICAgIGNvbG9yOiAke0NfV0hJVEV9O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG5gKTtcblxuY29uc3QgRHVyYXRpb25XcmFwcGVyID0gd2l0aEVwaXNvZGVDb250ZXh0KHN0eWxlZC5zcGFuYFxuICAkeyh7IHNjcmlwdCB9KSA9PiBnZXRNaW5pb24oc2NyaXB0KX1cbiAgJHsoeyBzZXJ2aWNlIH0pID0+IGdldFNhbnNSZWd1bGFyKHNlcnZpY2UpfVxuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgJHsoeyBkaXIgfSkgPT5cbiAgICBkaXIgPT09ICdydGwnXG4gICAgICA/IGBwYWRkaW5nOiAwICR7R0VMX1NQQUNJTkdfSExGfSAwIDA7YFxuICAgICAgOiBgcGFkZGluZzogMCAwIDAgJHtHRUxfU1BBQ0lOR19ITEZ9O2B9XG5gKTtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEVwaXNvZGVJbWFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkdXJhdGlvbiwgYWx0LCBkaXIgfSA9IHByb3BzO1xuXG4gIC8vIFRoaXMgY29tcG9uZW50IG9ubHkgdXNlcyBhIHN1YnNldCBvZiBpdHMgcHJvcHNcbiAgLy8gdGhlIHJlbWFpbmluZyBwcm9wcyBhcmUgcGFzc2VkIGRvd24gdG8gdGhlIHVuZGVybHlpbmcgPGltZz4gZWxlbWVudFxuICBjb25zdCBzZWxlY3RJbWdQcm9wcyA9IG9taXQoW1xuICAgICdhbHQnLFxuICAgICdkdXJhdGlvbicsXG4gICAgJ2NsYXNzbmFtZScsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3NlcnZpY2UnLFxuICAgICdkYXJrTW9kZScsXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgZGlyPXtkaXJ9PlxuICAgICAgPEltYWdlUGxhY2Vob2xkZXIgcmF0aW89ezU2LjI1fT5cbiAgICAgICAgPFN0eWxlZEltYWdlIGFsdD17YWx0fSB7Li4uc2VsZWN0SW1nUHJvcHMocHJvcHMpfSAvPlxuICAgICAgPC9JbWFnZVBsYWNlaG9sZGVyPlxuXG4gICAgICA8UGxheVdyYXBwZXIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIHttZWRpYUljb25zLnZpZGVvfVxuICAgICAgICB7ZHVyYXRpb24gJiYgPER1cmF0aW9uV3JhcHBlcj57ZHVyYXRpb259PC9EdXJhdGlvbldyYXBwZXI+fVxuICAgICAgPC9QbGF5V3JhcHBlcj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5FcGlzb2RlSW1hZ2UucHJvcFR5cGVzID0ge1xuICBhbHQ6IHN0cmluZyxcbiAgZHVyYXRpb246IHN0cmluZyxcbiAgZGlyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkVwaXNvZGVJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGR1cmF0aW9uOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcGlzb2RlQ29udGV4dChFcGlzb2RlSW1hZ2UpO1xuIl19 */'),
);

var PlayWrapper = withEpisodeContext(
  _styled(
    'div',
    process.env.NODE_ENV === 'production'
      ? {
          target: 'e148g7az2',
        }
      : {
          target: 'e148g7az2',
          label: 'PlayWrapper',
        },
  )(
    'background-color:',
    C_EBON,
    ';padding:',
    GEL_SPACING_HLF,
    ';@media (min-width: ',
    GEL_GROUP_2_SCREEN_WIDTH_MIN,
    '){padding:',
    GEL_SPACING,
    ';}svg{margin:0 0 1px 0;height:0.6rem;width:0.7rem;color:',
    C_WHITE,
    ';}@media (min-width: ',
    GEL_GROUP_2_SCREEN_WIDTH_MIN,
    '){position:absolute;bottom:0;}' +
      (process.env.NODE_ENV === 'production'
        ? ''
        : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbWFnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNpRCIsImZpbGUiOiIuLi9zcmMvSW1hZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG9taXQgZnJvbSAncmFtZGEvc3JjL29taXQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbWVkaWFJY29ucyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtYXNzZXRzL3N2Z3MnO1xuaW1wb3J0IHsgZ2V0TWluaW9uIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDX0VCT04sIENfV0hJVEUgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHtcbiAgR0VMX1NQQUNJTkdfSExGLFxuICBHRUxfU1BBQ0lORyxcbiAgR0VMX1NQQUNJTkdfREJMLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5cbmltcG9ydCBJbWFnZVBsYWNlaG9sZGVyIGZyb20gJ0BiYmMvcHNhbW1lYWQtaW1hZ2UtcGxhY2Vob2xkZXInO1xuXG5pbXBvcnQgeyB3aXRoRXBpc29kZUNvbnRleHQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0LjM3NXJlbTtcbiAgJHsoeyBkaXIgfSkgPT4gYG1hcmdpbi0ke2RpciA9PT0gJ2x0cicgPyAncmlnaHQnIDogJ2xlZnQnfTogJHtHRUxfU1BBQ0lOR307YH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICB3aWR0aDogNy41cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgJHsoeyBkaXIgfSkgPT5cbiAgICAgIGBtYXJnaW4tJHtkaXIgPT09ICdsdHInID8gJ3JpZ2h0JyA6ICdsZWZ0J306ICR7R0VMX1NQQUNJTkdfREJMfTtgfVxuICAgIHdpZHRoOiAxNC4zNzVyZW07XG4gIH1cbmA7XG5cbmNvbnN0IFBsYXlXcmFwcGVyID0gd2l0aEVwaXNvZGVDb250ZXh0KHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q19FQk9OfTtcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR19ITEZ9O1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkd9O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW46IDAgMCAxcHggMDtcbiAgICBoZWlnaHQ6IDAuNnJlbTtcbiAgICB3aWR0aDogMC43cmVtO1xuICAgIGNvbG9yOiAke0NfV0hJVEV9O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG5gKTtcblxuY29uc3QgRHVyYXRpb25XcmFwcGVyID0gd2l0aEVwaXNvZGVDb250ZXh0KHN0eWxlZC5zcGFuYFxuICAkeyh7IHNjcmlwdCB9KSA9PiBnZXRNaW5pb24oc2NyaXB0KX1cbiAgJHsoeyBzZXJ2aWNlIH0pID0+IGdldFNhbnNSZWd1bGFyKHNlcnZpY2UpfVxuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgJHsoeyBkaXIgfSkgPT5cbiAgICBkaXIgPT09ICdydGwnXG4gICAgICA/IGBwYWRkaW5nOiAwICR7R0VMX1NQQUNJTkdfSExGfSAwIDA7YFxuICAgICAgOiBgcGFkZGluZzogMCAwIDAgJHtHRUxfU1BBQ0lOR19ITEZ9O2B9XG5gKTtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEVwaXNvZGVJbWFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkdXJhdGlvbiwgYWx0LCBkaXIgfSA9IHByb3BzO1xuXG4gIC8vIFRoaXMgY29tcG9uZW50IG9ubHkgdXNlcyBhIHN1YnNldCBvZiBpdHMgcHJvcHNcbiAgLy8gdGhlIHJlbWFpbmluZyBwcm9wcyBhcmUgcGFzc2VkIGRvd24gdG8gdGhlIHVuZGVybHlpbmcgPGltZz4gZWxlbWVudFxuICBjb25zdCBzZWxlY3RJbWdQcm9wcyA9IG9taXQoW1xuICAgICdhbHQnLFxuICAgICdkdXJhdGlvbicsXG4gICAgJ2NsYXNzbmFtZScsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3NlcnZpY2UnLFxuICAgICdkYXJrTW9kZScsXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgZGlyPXtkaXJ9PlxuICAgICAgPEltYWdlUGxhY2Vob2xkZXIgcmF0aW89ezU2LjI1fT5cbiAgICAgICAgPFN0eWxlZEltYWdlIGFsdD17YWx0fSB7Li4uc2VsZWN0SW1nUHJvcHMocHJvcHMpfSAvPlxuICAgICAgPC9JbWFnZVBsYWNlaG9sZGVyPlxuXG4gICAgICA8UGxheVdyYXBwZXIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIHttZWRpYUljb25zLnZpZGVvfVxuICAgICAgICB7ZHVyYXRpb24gJiYgPER1cmF0aW9uV3JhcHBlcj57ZHVyYXRpb259PC9EdXJhdGlvbldyYXBwZXI+fVxuICAgICAgPC9QbGF5V3JhcHBlcj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5FcGlzb2RlSW1hZ2UucHJvcFR5cGVzID0ge1xuICBhbHQ6IHN0cmluZyxcbiAgZHVyYXRpb246IHN0cmluZyxcbiAgZGlyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkVwaXNvZGVJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGR1cmF0aW9uOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcGlzb2RlQ29udGV4dChFcGlzb2RlSW1hZ2UpO1xuIl19 */'),
  ),
);
var DurationWrapper = withEpisodeContext(
  _styled(
    'span',
    process.env.NODE_ENV === 'production'
      ? {
          target: 'e148g7az1',
        }
      : {
          target: 'e148g7az1',
          label: 'DurationWrapper',
        },
  )(
    function (_ref3) {
      var script = _ref3.script;
      return getMinion(script);
    },
    ' ',
    function (_ref4) {
      var service = _ref4.service;
      return getSansRegular(service);
    },
    ' color:',
    C_WHITE,
    ';',
    function (_ref5) {
      var dir = _ref5.dir;
      return dir === 'rtl'
        ? 'padding: 0 '.concat(GEL_SPACING_HLF, ' 0 0;')
        : 'padding: 0 0 0 '.concat(GEL_SPACING_HLF, ';');
    },
    ';' +
      (process.env.NODE_ENV === 'production'
        ? ''
        : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbWFnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURzRCIsImZpbGUiOiIuLi9zcmMvSW1hZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG9taXQgZnJvbSAncmFtZGEvc3JjL29taXQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbWVkaWFJY29ucyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtYXNzZXRzL3N2Z3MnO1xuaW1wb3J0IHsgZ2V0TWluaW9uIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDX0VCT04sIENfV0hJVEUgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHtcbiAgR0VMX1NQQUNJTkdfSExGLFxuICBHRUxfU1BBQ0lORyxcbiAgR0VMX1NQQUNJTkdfREJMLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5cbmltcG9ydCBJbWFnZVBsYWNlaG9sZGVyIGZyb20gJ0BiYmMvcHNhbW1lYWQtaW1hZ2UtcGxhY2Vob2xkZXInO1xuXG5pbXBvcnQgeyB3aXRoRXBpc29kZUNvbnRleHQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0LjM3NXJlbTtcbiAgJHsoeyBkaXIgfSkgPT4gYG1hcmdpbi0ke2RpciA9PT0gJ2x0cicgPyAncmlnaHQnIDogJ2xlZnQnfTogJHtHRUxfU1BBQ0lOR307YH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICB3aWR0aDogNy41cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgJHsoeyBkaXIgfSkgPT5cbiAgICAgIGBtYXJnaW4tJHtkaXIgPT09ICdsdHInID8gJ3JpZ2h0JyA6ICdsZWZ0J306ICR7R0VMX1NQQUNJTkdfREJMfTtgfVxuICAgIHdpZHRoOiAxNC4zNzVyZW07XG4gIH1cbmA7XG5cbmNvbnN0IFBsYXlXcmFwcGVyID0gd2l0aEVwaXNvZGVDb250ZXh0KHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q19FQk9OfTtcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR19ITEZ9O1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkd9O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW46IDAgMCAxcHggMDtcbiAgICBoZWlnaHQ6IDAuNnJlbTtcbiAgICB3aWR0aDogMC43cmVtO1xuICAgIGNvbG9yOiAke0NfV0hJVEV9O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG5gKTtcblxuY29uc3QgRHVyYXRpb25XcmFwcGVyID0gd2l0aEVwaXNvZGVDb250ZXh0KHN0eWxlZC5zcGFuYFxuICAkeyh7IHNjcmlwdCB9KSA9PiBnZXRNaW5pb24oc2NyaXB0KX1cbiAgJHsoeyBzZXJ2aWNlIH0pID0+IGdldFNhbnNSZWd1bGFyKHNlcnZpY2UpfVxuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgJHsoeyBkaXIgfSkgPT5cbiAgICBkaXIgPT09ICdydGwnXG4gICAgICA/IGBwYWRkaW5nOiAwICR7R0VMX1NQQUNJTkdfSExGfSAwIDA7YFxuICAgICAgOiBgcGFkZGluZzogMCAwIDAgJHtHRUxfU1BBQ0lOR19ITEZ9O2B9XG5gKTtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEVwaXNvZGVJbWFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkdXJhdGlvbiwgYWx0LCBkaXIgfSA9IHByb3BzO1xuXG4gIC8vIFRoaXMgY29tcG9uZW50IG9ubHkgdXNlcyBhIHN1YnNldCBvZiBpdHMgcHJvcHNcbiAgLy8gdGhlIHJlbWFpbmluZyBwcm9wcyBhcmUgcGFzc2VkIGRvd24gdG8gdGhlIHVuZGVybHlpbmcgPGltZz4gZWxlbWVudFxuICBjb25zdCBzZWxlY3RJbWdQcm9wcyA9IG9taXQoW1xuICAgICdhbHQnLFxuICAgICdkdXJhdGlvbicsXG4gICAgJ2NsYXNzbmFtZScsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3NlcnZpY2UnLFxuICAgICdkYXJrTW9kZScsXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgZGlyPXtkaXJ9PlxuICAgICAgPEltYWdlUGxhY2Vob2xkZXIgcmF0aW89ezU2LjI1fT5cbiAgICAgICAgPFN0eWxlZEltYWdlIGFsdD17YWx0fSB7Li4uc2VsZWN0SW1nUHJvcHMocHJvcHMpfSAvPlxuICAgICAgPC9JbWFnZVBsYWNlaG9sZGVyPlxuXG4gICAgICA8UGxheVdyYXBwZXIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIHttZWRpYUljb25zLnZpZGVvfVxuICAgICAgICB7ZHVyYXRpb24gJiYgPER1cmF0aW9uV3JhcHBlcj57ZHVyYXRpb259PC9EdXJhdGlvbldyYXBwZXI+fVxuICAgICAgPC9QbGF5V3JhcHBlcj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5FcGlzb2RlSW1hZ2UucHJvcFR5cGVzID0ge1xuICBhbHQ6IHN0cmluZyxcbiAgZHVyYXRpb246IHN0cmluZyxcbiAgZGlyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkVwaXNvZGVJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGR1cmF0aW9uOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcGlzb2RlQ29udGV4dChFcGlzb2RlSW1hZ2UpO1xuIl19 */'),
  ),
);

var StyledImage = _styled(
  'img',
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e148g7az0',
      }
    : {
        target: 'e148g7az0',
        label: 'StyledImage',
      },
)(
  process.env.NODE_ENV === 'production'
    ? {
        name: '1d3w5wq',
        styles: 'width:100%',
      }
    : {
        name: '1d3w5wq',
        styles: 'width:100%',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbWFnZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUU4QiIsImZpbGUiOiIuLi9zcmMvSW1hZ2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG9taXQgZnJvbSAncmFtZGEvc3JjL29taXQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbWVkaWFJY29ucyB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtYXNzZXRzL3N2Z3MnO1xuaW1wb3J0IHsgZ2V0TWluaW9uIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDX0VCT04sIENfV0hJVEUgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuaW1wb3J0IHtcbiAgR0VMX1NQQUNJTkdfSExGLFxuICBHRUxfU1BBQ0lORyxcbiAgR0VMX1NQQUNJTkdfREJMLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9zcGFjaW5ncyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5cbmltcG9ydCBJbWFnZVBsYWNlaG9sZGVyIGZyb20gJ0BiYmMvcHNhbW1lYWQtaW1hZ2UtcGxhY2Vob2xkZXInO1xuXG5pbXBvcnQgeyB3aXRoRXBpc29kZUNvbnRleHQgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0LjM3NXJlbTtcbiAgJHsoeyBkaXIgfSkgPT4gYG1hcmdpbi0ke2RpciA9PT0gJ2x0cicgPyAncmlnaHQnIDogJ2xlZnQnfTogJHtHRUxfU1BBQ0lOR307YH1cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICB3aWR0aDogNy41cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgJHsoeyBkaXIgfSkgPT5cbiAgICAgIGBtYXJnaW4tJHtkaXIgPT09ICdsdHInID8gJ3JpZ2h0JyA6ICdsZWZ0J306ICR7R0VMX1NQQUNJTkdfREJMfTtgfVxuICAgIHdpZHRoOiAxNC4zNzVyZW07XG4gIH1cbmA7XG5cbmNvbnN0IFBsYXlXcmFwcGVyID0gd2l0aEVwaXNvZGVDb250ZXh0KHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Q19FQk9OfTtcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR19ITEZ9O1xuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfMl9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkd9O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBtYXJnaW46IDAgMCAxcHggMDtcbiAgICBoZWlnaHQ6IDAuNnJlbTtcbiAgICB3aWR0aDogMC43cmVtO1xuICAgIGNvbG9yOiAke0NfV0hJVEV9O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzJfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG5gKTtcblxuY29uc3QgRHVyYXRpb25XcmFwcGVyID0gd2l0aEVwaXNvZGVDb250ZXh0KHN0eWxlZC5zcGFuYFxuICAkeyh7IHNjcmlwdCB9KSA9PiBnZXRNaW5pb24oc2NyaXB0KX1cbiAgJHsoeyBzZXJ2aWNlIH0pID0+IGdldFNhbnNSZWd1bGFyKHNlcnZpY2UpfVxuICBjb2xvcjogJHtDX1dISVRFfTtcbiAgJHsoeyBkaXIgfSkgPT5cbiAgICBkaXIgPT09ICdydGwnXG4gICAgICA/IGBwYWRkaW5nOiAwICR7R0VMX1NQQUNJTkdfSExGfSAwIDA7YFxuICAgICAgOiBgcGFkZGluZzogMCAwIDAgJHtHRUxfU1BBQ0lOR19ITEZ9O2B9XG5gKTtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEVwaXNvZGVJbWFnZSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBkdXJhdGlvbiwgYWx0LCBkaXIgfSA9IHByb3BzO1xuXG4gIC8vIFRoaXMgY29tcG9uZW50IG9ubHkgdXNlcyBhIHN1YnNldCBvZiBpdHMgcHJvcHNcbiAgLy8gdGhlIHJlbWFpbmluZyBwcm9wcyBhcmUgcGFzc2VkIGRvd24gdG8gdGhlIHVuZGVybHlpbmcgPGltZz4gZWxlbWVudFxuICBjb25zdCBzZWxlY3RJbWdQcm9wcyA9IG9taXQoW1xuICAgICdhbHQnLFxuICAgICdkdXJhdGlvbicsXG4gICAgJ2NsYXNzbmFtZScsXG4gICAgJ3NjcmlwdCcsXG4gICAgJ3NlcnZpY2UnLFxuICAgICdkYXJrTW9kZScsXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgZGlyPXtkaXJ9PlxuICAgICAgPEltYWdlUGxhY2Vob2xkZXIgcmF0aW89ezU2LjI1fT5cbiAgICAgICAgPFN0eWxlZEltYWdlIGFsdD17YWx0fSB7Li4uc2VsZWN0SW1nUHJvcHMocHJvcHMpfSAvPlxuICAgICAgPC9JbWFnZVBsYWNlaG9sZGVyPlxuXG4gICAgICA8UGxheVdyYXBwZXIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIHttZWRpYUljb25zLnZpZGVvfVxuICAgICAgICB7ZHVyYXRpb24gJiYgPER1cmF0aW9uV3JhcHBlcj57ZHVyYXRpb259PC9EdXJhdGlvbldyYXBwZXI+fVxuICAgICAgPC9QbGF5V3JhcHBlcj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5FcGlzb2RlSW1hZ2UucHJvcFR5cGVzID0ge1xuICBhbHQ6IHN0cmluZyxcbiAgZHVyYXRpb246IHN0cmluZyxcbiAgZGlyOiBzdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbkVwaXNvZGVJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsdDogJycsXG4gIGR1cmF0aW9uOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcGlzb2RlQ29udGV4dChFcGlzb2RlSW1hZ2UpO1xuIl19 */',
        toString: _EMOTION_STRINGIFIED_CSS_ERROR__,
      },
);

var EpisodeImage = function EpisodeImage(props) {
  var duration = props.duration,
    alt = props.alt,
    dir = props.dir; // This component only uses a subset of its props
  // the remaining props are passed down to the underlying <img> element

  var selectImgProps = omit([
    'alt',
    'duration',
    'classname',
    'script',
    'service',
    'darkMode',
  ]);
  return /*#__PURE__*/ React.createElement(
    Wrapper,
    {
      dir: dir,
    },
    /*#__PURE__*/ React.createElement(
      ImagePlaceholder,
      {
        ratio: 56.25,
      },
      /*#__PURE__*/ React.createElement(
        StyledImage,
        _extends(
          {
            alt: alt,
          },
          selectImgProps(props),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      PlayWrapper,
      {
        'aria-hidden': 'true',
      },
      mediaIcons.video,
      duration &&
        /*#__PURE__*/ React.createElement(DurationWrapper, null, duration),
    ),
  );
};

EpisodeImage.propTypes = {
  alt: string,
  duration: string,
  dir: string.isRequired,
};
EpisodeImage.defaultProps = {
  alt: '',
  duration: '',
};
export default withEpisodeContext(EpisodeImage);
