/*@ngInject*/
function utcFilter($filter) {

  return (date, format) => $filter('date')(date && new Date(`${date} UTC`), format);
}

export default [
  'utc',
  utcFilter
];
