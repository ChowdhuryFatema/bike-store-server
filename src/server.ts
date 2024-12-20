import app from './app';
import config from './config';
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect(config.database_url as string);
  app.listen(config.port, () => {
    console.log(`app is listening on port ${config.port}`);
  });
}

main();
