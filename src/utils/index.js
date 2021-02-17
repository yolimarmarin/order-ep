import { Expression, Equation } from "algebra.js";

const getItemInArray = (array, item) => (value) =>
  array.filter((item_) => item[value] === item_[value])[0];

const getIndexOfItemInArray = (array, item) => array.indexOf(item);

const getDragIndexOfArray = (array, item) => {
  const card = getItemInArray(array, item)("id");
  return getIndexOfItemInArray(array, card);
};

const shuffle = (array) => {
  const copyArray = [...array];
  let currentIndex = copyArray.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = copyArray[currentIndex];
    copyArray[currentIndex] = copyArray[randomIndex];
    copyArray[randomIndex] = temporaryValue;
  }

  return copyArray;
};

const checkCorrectPositionById = (item, index, pattern) => {
  return pattern[index].id === item.id;
};

const checkCorrectPatternById = (curentPattern, correctPattern) => {
  for (const item of curentPattern) {
    const index = getIndexOfItemInArray(curentPattern, item);
    if (item.id) {
      if (!checkCorrectPositionById(item, index, correctPattern)) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

function getRandomArbitrary() {
  const random = Math.round((Math.random() * (1 - 100) + 1));
  return random === 0 ? 1 : random
}

const getRandomPattern = () => {
  const pattern = [
    { isEmpty: false },
    { isEmpty: false },
    { isEmpty: false },
    { isEmpty: false },
    { isEmpty: false },
  ];
  for (let index in pattern) {
    var z = new Expression("x");
    var eq = new Equation(z.subtract(getRandomArbitrary()).divide(getRandomArbitrary()), z.add(getRandomArbitrary()));
    const solved = eq.solveFor('x').toString().split('/')
    const ans = solved[0] / (solved[1] ?? 1)
    pattern[index] = { ...pattern[index], img: eq.toString(), id: parseFloat(ans.toFixed(3)), isEmpty: false };
  }
  
  return pattern.sort((a, b)=> {
    return a.id < b.id ? 1 : -1
  });
};

export {
  getItemInArray,
  getDragIndexOfArray,
  getIndexOfItemInArray,
  shuffle,
  checkCorrectPositionById,
  checkCorrectPatternById,
  getRandomPattern,
};
