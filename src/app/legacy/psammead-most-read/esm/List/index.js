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

import React from 'react';
import { oneOf, number, node } from 'prop-types';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '#legacy/gel-foundations/breakpoints';
import Grid from '#legacy/psammead-grid';
import { mostReadListGridProps } from '../utilities/gridProps';

var OneColumnGrid = /*#__PURE__*/ _styled(
  Grid,
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e14ck4y52',
      }
    : {
        target: 'e14ck4y52',
        label: 'OneColumnGrid',
      },
)(
  'list-style-type:none;margin:0;padding:0;grid-auto-flow:column;grid-template-rows:repeat(',
  function (props) {
    return props.numberOfItems;
  },
  ', auto);' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0MiLCJmaWxlIjoiLi4vLi4vc3JjL0xpc3QvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IG9uZU9mLCBudW1iZXIsIG5vZGUgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEdFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF81X1NDUkVFTl9XSURUSF9NSU4sXG59IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL2JyZWFrcG9pbnRzJztcbmltcG9ydCBHcmlkIGZyb20gJ0BiYmMvcHNhbW1lYWQtZ3JpZCc7XG5pbXBvcnQgeyBtb3N0UmVhZExpc3RHcmlkUHJvcHMgfSBmcm9tICcuLi91dGlsaXRpZXMvZ3JpZFByb3BzJztcblxuY29uc3QgT25lQ29sdW1uR3JpZCA9IHN0eWxlZChHcmlkKWBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7cHJvcHMgPT4gcHJvcHMubnVtYmVyT2ZJdGVtc30sIGF1dG8pO1xuYDtcblxuT25lQ29sdW1uR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvbGU6ICdsaXN0Jyxcbn07XG5cbmNvbnN0IFR3b0NvbHVtbkdyaWQgPSBzdHlsZWQoT25lQ29sdW1uR3JpZClgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoXG4gICAgICAke3Byb3BzID0+IE1hdGguY2VpbChwcm9wcy5udW1iZXJPZkl0ZW1zIC8gMil9LFxuICAgICAgYXV0b1xuICAgICk7XG4gIH1cbmA7XG5cbmNvbnN0IE11bHRpQ29sdW1uR3JpZCA9IHN0eWxlZChUd29Db2x1bW5HcmlkKWBcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzVfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICB9XG5gO1xuXG5jb25zdCBnZXRDb2x1bW5MYXlvdXQgPSBjb2x1bW5MYXlvdXQgPT5cbiAgKHtcbiAgICBvbmVDb2x1bW46IE9uZUNvbHVtbkdyaWQsXG4gICAgdHdvQ29sdW1uOiBUd29Db2x1bW5HcmlkLFxuICAgIG11bHRpQ29sdW1uOiBNdWx0aUNvbHVtbkdyaWQsXG4gIH1bY29sdW1uTGF5b3V0XSk7XG5cbmNvbnN0IE1vc3RSZWFkTGlzdCA9ICh7IG51bWJlck9mSXRlbXMsIGRpciwgY29sdW1uTGF5b3V0LCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IE1vc3RSZWFkTGlzdEdyaWQgPSBnZXRDb2x1bW5MYXlvdXQoY29sdW1uTGF5b3V0KTtcblxuICByZXR1cm4gKFxuICAgIDxNb3N0UmVhZExpc3RHcmlkXG4gICAgICB7Li4ubW9zdFJlYWRMaXN0R3JpZFByb3BzKGNvbHVtbkxheW91dCl9XG4gICAgICBkaXI9e2Rpcn1cbiAgICAgIG51bWJlck9mSXRlbXM9e251bWJlck9mSXRlbXN9XG4gICAgICBhcz1cIm9sXCJcbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Nb3N0UmVhZExpc3RHcmlkPlxuICApO1xufTtcblxuTW9zdFJlYWRMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IG5vZGUuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ3J0bCcsICdsdHInXSksXG4gIGNvbHVtbkxheW91dDogb25lT2YoWydvbmVDb2x1bW4nLCAndHdvQ29sdW1uJywgJ211bHRpQ29sdW1uJ10pLFxuICBudW1iZXJPZkl0ZW1zOiBudW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbk1vc3RSZWFkTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpcjogJ2x0cicsXG4gIGNvbHVtbkxheW91dDogJ211bHRpQ29sdW1uJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vc3RSZWFkTGlzdDtcbiJdfQ== */'),
);

OneColumnGrid.defaultProps = {
  role: 'list',
};

var TwoColumnGrid = /*#__PURE__*/ _styled(
  OneColumnGrid,
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e14ck4y51',
      }
    : {
        target: 'e14ck4y51',
        label: 'TwoColumnGrid',
      },
)(
  '@media (min-width: ',
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  '){grid-template-rows:repeat(\n      ',
  function (props) {
    return Math.ceil(props.numberOfItems / 2);
  },
  ',\n      auto\n    );}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQjJDIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBvbmVPZiwgbnVtYmVyLCBub2RlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfNV9TQ1JFRU5fV0lEVEhfTUlOLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAYmJjL3BzYW1tZWFkLWdyaWQnO1xuaW1wb3J0IHsgbW9zdFJlYWRMaXN0R3JpZFByb3BzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dyaWRQcm9wcyc7XG5cbmNvbnN0IE9uZUNvbHVtbkdyaWQgPSBzdHlsZWQoR3JpZClgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3Byb3BzID0+IHByb3BzLm51bWJlck9mSXRlbXN9LCBhdXRvKTtcbmA7XG5cbk9uZUNvbHVtbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICByb2xlOiAnbGlzdCcsXG59O1xuXG5jb25zdCBUd29Db2x1bW5HcmlkID0gc3R5bGVkKE9uZUNvbHVtbkdyaWQpYFxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFxuICAgICAgJHtwcm9wcyA9PiBNYXRoLmNlaWwocHJvcHMubnVtYmVyT2ZJdGVtcyAvIDIpfSxcbiAgICAgIGF1dG9cbiAgICApO1xuICB9XG5gO1xuXG5jb25zdCBNdWx0aUNvbHVtbkdyaWQgPSBzdHlsZWQoVHdvQ29sdW1uR3JpZClgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF81X1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgfVxuYDtcblxuY29uc3QgZ2V0Q29sdW1uTGF5b3V0ID0gY29sdW1uTGF5b3V0ID0+XG4gICh7XG4gICAgb25lQ29sdW1uOiBPbmVDb2x1bW5HcmlkLFxuICAgIHR3b0NvbHVtbjogVHdvQ29sdW1uR3JpZCxcbiAgICBtdWx0aUNvbHVtbjogTXVsdGlDb2x1bW5HcmlkLFxuICB9W2NvbHVtbkxheW91dF0pO1xuXG5jb25zdCBNb3N0UmVhZExpc3QgPSAoeyBudW1iZXJPZkl0ZW1zLCBkaXIsIGNvbHVtbkxheW91dCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBNb3N0UmVhZExpc3RHcmlkID0gZ2V0Q29sdW1uTGF5b3V0KGNvbHVtbkxheW91dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9zdFJlYWRMaXN0R3JpZFxuICAgICAgey4uLm1vc3RSZWFkTGlzdEdyaWRQcm9wcyhjb2x1bW5MYXlvdXQpfVxuICAgICAgZGlyPXtkaXJ9XG4gICAgICBudW1iZXJPZkl0ZW1zPXtudW1iZXJPZkl0ZW1zfVxuICAgICAgYXM9XCJvbFwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTW9zdFJlYWRMaXN0R3JpZD5cbiAgKTtcbn07XG5cbk1vc3RSZWFkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG4gIGRpcjogb25lT2YoWydydGwnLCAnbHRyJ10pLFxuICBjb2x1bW5MYXlvdXQ6IG9uZU9mKFsnb25lQ29sdW1uJywgJ3R3b0NvbHVtbicsICdtdWx0aUNvbHVtbiddKSxcbiAgbnVtYmVyT2ZJdGVtczogbnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5Nb3N0UmVhZExpc3QuZGVmYXVsdFByb3BzID0ge1xuICBkaXI6ICdsdHInLFxuICBjb2x1bW5MYXlvdXQ6ICdtdWx0aUNvbHVtbicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3N0UmVhZExpc3Q7XG4iXX0= */'),
);

var MultiColumnGrid = /*#__PURE__*/ _styled(
  TwoColumnGrid,
  process.env.NODE_ENV === 'production'
    ? {
        target: 'e14ck4y50',
      }
    : {
        target: 'e14ck4y50',
        label: 'MultiColumnGrid',
      },
)(
  '@media (min-width: ',
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  '){grid-auto-flow:row;}' +
    (process.env.NODE_ENV === 'production'
      ? ''
      : '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjZDIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaXN0L2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBvbmVPZiwgbnVtYmVyLCBub2RlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1xuICBHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOLFxuICBHRUxfR1JPVVBfNV9TQ1JFRU5fV0lEVEhfTUlOLFxufSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy9icmVha3BvaW50cyc7XG5pbXBvcnQgR3JpZCBmcm9tICdAYmJjL3BzYW1tZWFkLWdyaWQnO1xuaW1wb3J0IHsgbW9zdFJlYWRMaXN0R3JpZFByb3BzIH0gZnJvbSAnLi4vdXRpbGl0aWVzL2dyaWRQcm9wcyc7XG5cbmNvbnN0IE9uZUNvbHVtbkdyaWQgPSBzdHlsZWQoR3JpZClgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgke3Byb3BzID0+IHByb3BzLm51bWJlck9mSXRlbXN9LCBhdXRvKTtcbmA7XG5cbk9uZUNvbHVtbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICByb2xlOiAnbGlzdCcsXG59O1xuXG5jb25zdCBUd29Db2x1bW5HcmlkID0gc3R5bGVkKE9uZUNvbHVtbkdyaWQpYFxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KFxuICAgICAgJHtwcm9wcyA9PiBNYXRoLmNlaWwocHJvcHMubnVtYmVyT2ZJdGVtcyAvIDIpfSxcbiAgICAgIGF1dG9cbiAgICApO1xuICB9XG5gO1xuXG5jb25zdCBNdWx0aUNvbHVtbkdyaWQgPSBzdHlsZWQoVHdvQ29sdW1uR3JpZClgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF81X1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgfVxuYDtcblxuY29uc3QgZ2V0Q29sdW1uTGF5b3V0ID0gY29sdW1uTGF5b3V0ID0+XG4gICh7XG4gICAgb25lQ29sdW1uOiBPbmVDb2x1bW5HcmlkLFxuICAgIHR3b0NvbHVtbjogVHdvQ29sdW1uR3JpZCxcbiAgICBtdWx0aUNvbHVtbjogTXVsdGlDb2x1bW5HcmlkLFxuICB9W2NvbHVtbkxheW91dF0pO1xuXG5jb25zdCBNb3N0UmVhZExpc3QgPSAoeyBudW1iZXJPZkl0ZW1zLCBkaXIsIGNvbHVtbkxheW91dCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBNb3N0UmVhZExpc3RHcmlkID0gZ2V0Q29sdW1uTGF5b3V0KGNvbHVtbkxheW91dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9zdFJlYWRMaXN0R3JpZFxuICAgICAgey4uLm1vc3RSZWFkTGlzdEdyaWRQcm9wcyhjb2x1bW5MYXlvdXQpfVxuICAgICAgZGlyPXtkaXJ9XG4gICAgICBudW1iZXJPZkl0ZW1zPXtudW1iZXJPZkl0ZW1zfVxuICAgICAgYXM9XCJvbFwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTW9zdFJlYWRMaXN0R3JpZD5cbiAgKTtcbn07XG5cbk1vc3RSZWFkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG4gIGRpcjogb25lT2YoWydydGwnLCAnbHRyJ10pLFxuICBjb2x1bW5MYXlvdXQ6IG9uZU9mKFsnb25lQ29sdW1uJywgJ3R3b0NvbHVtbicsICdtdWx0aUNvbHVtbiddKSxcbiAgbnVtYmVyT2ZJdGVtczogbnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5Nb3N0UmVhZExpc3QuZGVmYXVsdFByb3BzID0ge1xuICBkaXI6ICdsdHInLFxuICBjb2x1bW5MYXlvdXQ6ICdtdWx0aUNvbHVtbicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3N0UmVhZExpc3Q7XG4iXX0= */'),
);

var getColumnLayout = function getColumnLayout(columnLayout) {
  return {
    oneColumn: OneColumnGrid,
    twoColumn: TwoColumnGrid,
    multiColumn: MultiColumnGrid,
  }[columnLayout];
};

var MostReadList = function MostReadList(_ref) {
  var numberOfItems = _ref.numberOfItems,
    dir = _ref.dir,
    columnLayout = _ref.columnLayout,
    children = _ref.children;
  var MostReadListGrid = getColumnLayout(columnLayout);
  return /*#__PURE__*/ React.createElement(
    MostReadListGrid,
    _extends({}, mostReadListGridProps(columnLayout), {
      dir: dir,
      numberOfItems: numberOfItems,
      as: 'ol',
    }),
    children,
  );
};

MostReadList.propTypes = {
  children: node.isRequired,
  dir: oneOf(['rtl', 'ltr']),
  columnLayout: oneOf(['oneColumn', 'twoColumn', 'multiColumn']),
  numberOfItems: number.isRequired,
};
MostReadList.defaultProps = {
  dir: 'ltr',
  columnLayout: 'multiColumn',
};
export default MostReadList;
