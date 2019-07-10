import express from 'express';

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());

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
