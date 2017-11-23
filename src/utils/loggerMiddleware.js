import winston from 'winston';
import expressWinston from 'express-winston';

export default expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: false,
      colorize: true,
      timestamp: true
    })
  ],
  msg: '{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}} {{req.ip}}',
  meta: false,
  colorize: true
});
