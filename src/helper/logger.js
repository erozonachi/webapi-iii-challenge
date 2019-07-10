export function logger(req, res, next) {
  console.log(`URL: ${req.url} | Method: ${req.method} | Timestamp: ${Date.now()}`);
  next();
}
