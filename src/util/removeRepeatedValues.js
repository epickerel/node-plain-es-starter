export const removeRepeatedValues = arr => arr.reduce((acc, v, i) => {
  if (i === 0 || acc[acc.length - 1] !== v) {    
    acc.push(v);
  }
  return acc;
}, []);
