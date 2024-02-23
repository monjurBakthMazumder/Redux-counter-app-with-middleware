const logger = (store) => (next) => (action) => {
  const currentSate = store.getState;
  console.log(currentSate);
  next(action);
};

export default logger;
