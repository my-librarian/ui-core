function alphabeticFilter(array) {

  const result = {};

  array.forEach(item => {

    const key = item.name[0].toUpperCase();

    if (!(key in result)) {
      result[key] = [];
    }

    result[key].push(item);

  });

  return result;
}

export default [
  'alphabetic',
  () => alphabeticFilter
];
