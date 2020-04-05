export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS';

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions, // short form of users : users
  };
}
