import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { logger } from './helper';
import { usersRouter, postsRouter }  from './routes';

dotenv.config();

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Web API III Challenge by James Eneh'});
});

server.listen(port, error => {
  if(error) {
    console.log(error);
    return;
  }
  console.log(`Server running on port: ${port}`);
});
