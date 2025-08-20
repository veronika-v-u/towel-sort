module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];

    if (i % 2 === 0) {
      for (let j = 0; j < row.length; j += 1) {
        result.push(row[j]);
      }
    } else {
      for (let j = row.length - 1; j >= 0; j -= 1) {
        result.push(row[j]);
      }
    }
  }

  return result;
};
