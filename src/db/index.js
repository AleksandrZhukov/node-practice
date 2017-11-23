import mongoose from 'mongoose';
import config from '../config';

const dbURI = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
mongoose.connect(dbURI, { useMongoClient: true });

mongoose.connection.on('error', function(err) {
  if (err) throw err;
});

mongoose.Promise = global.Promise;
