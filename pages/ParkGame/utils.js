import {parkCodes} from '../../constants';

export const generateAnswers = correctPark => {
  console.log('cccoo', correctPark);
  const parksArr = Object.values(parkCodes);

  let answerArr = [{...correctPark, correct: true}];

  while (answerArr.length < 4) {
    const random = parksArr[Math.floor(Math.random() * parksArr.length)];
    if (random.fullName !== correctPark.fullName) {
      answerArr.push({name: random.fullName, url: random.image.url});
    }
  }

  return answerArr
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);
};
