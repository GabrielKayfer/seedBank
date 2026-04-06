const logger = {
  info: (...args) => {
    console.log(...args);
  },
  error: (...args) => {
    console.error(...args);
  },
  warn: (...args) => {
    console.warn(...args);
  },
  debug: (...args) => {
    if (process.env.NODE_ENV !== "production") {
      console.debug(...args);
    }
  },
};

export default logger;
