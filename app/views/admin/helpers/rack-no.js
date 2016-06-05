function link($scope, $elem, $attr, ngModelCtrl) {

  function unFormat(value) {

    value = value.replace(/-/g, '');
    value = value.replace(/^r+/i, '');

    return value;
  }

  function format(value) {

    if(ngModelCtrl.$invalid) {
      return value;
    }

    value = unFormat(value);
    value = value.replace(/(\d)([a-zA-Z])/g, '$1-$2');
    value = value.replace(/([a-zA-Z])(\d)/g, '$1-$2');
    value = value.toUpperCase();
    value = `R-${value}`;

    return value;
  }

  $elem.on('focus', function () {
    let value = $elem.val();
    value = unFormat(value);
    $elem.val(value);
  });

  $elem.on('blur', function () {
    let value = $elem.val();
    value = format(value);
    $elem.val(value);
  });

  ngModelCtrl.$parsers.push(viewValue => viewValue && format(viewValue));
  ngModelCtrl.$formatters.push(modelValue => modelValue && unFormat(modelValue));
  ngModelCtrl.$validators.rackNo = (modelView, viewValue) => /^(r|r-)?\d{1,2}-?[a-zA-Z]-?\d{1,2}$/.test(viewValue);

}

const rackNo = {
  link,
  require: 'ngModel',
  restrict: 'A'
};

export default [
  'rackNo',
  () => rackNo
];
