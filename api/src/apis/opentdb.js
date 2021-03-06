import fetch from 'node-fetch';
import _ from 'lodash';
import he from 'he';

const url = () => 'https://opentdb.com/api.php?amount=1&category=18&difficulty=easy';

export const fetchQuestion = () => fetch(url())
  .then(response => (response.ok ? response.json() : Promise.reject(response)))
  .then(({ results }) => {
    const result = results[0];
    const htmlEncodedAnswers = _.shuffle(result.incorrect_answers.concat(result.correct_answer));
    const answers = htmlEncodedAnswers.map(html => he.decode(html));

    return {
      text: he.decode(result.question),
      answers,
      answerIndex: htmlEncodedAnswers.indexOf(result.correct_answer),
    };
  });
