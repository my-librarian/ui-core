import angular from 'angular';
import './search-input.less';

function link($scope, $elem) {

  const wrapper = angular.element(`
    <div class="search-input-wrap">
      <i class="icon search"></i>
    </div>
  `);

  $elem.wrap(wrapper);

}

const searchInput = {
  link,
  restrict: 'A'
};

export default [
  'searchInput',
  () => searchInput
];
