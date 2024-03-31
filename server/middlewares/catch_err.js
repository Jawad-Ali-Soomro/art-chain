const catch_async_err = (callback) => (req, res, next) => {
  Promise.resolve(callback(req, res)).catch(next());
};

module.exports = catch_async_err