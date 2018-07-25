const shuffleArray = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
);

shuffleArray([1, 2, 3]) 

randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));