export function logger(req, res) {
  console.log(`URL: ${req.url} | Method: ${req.method} | Timestamp: ${Date.now()}`);
}
