import validApiKeys from '../config/validApiKeys';

export default function(req, res, next) {
  const apiKey = req.headers['x-api-key'] || req.query['api-key'];
  const hasAccess = apiKey && validApiKeys.includes(apiKey);

  if (hasAccess) {
    return next();
  } else {
    if (!apiKey) {
      res.status(400).send('missed api-key');
    }
    res.sendStatus(401);
  }
};
