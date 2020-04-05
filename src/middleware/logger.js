/**
 * Logs all actions and states after they are dispatched.
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action is', action.type);
  const returnValue = next(action);
  console.log('The new state is', store.getState());
  console.groupEnd();

  return returnValue;
};

export default logger;