function placeholderFilter(value) {

  if (value || typeof value === 'boolean') {
    return value;
  }

  return 'N/A';
}

export default [
  'placeholder',
  () => placeholderFilter
];
