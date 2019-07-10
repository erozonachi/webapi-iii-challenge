import express from 'express';
import { Validator } from '../helper';
import { PostsController } from '../controller';

const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {

});

postsRouter.get('/:id', (req, res) => {

});

postsRouter.delete('/:id', Validator.validatePostId, PostsController.removePost);

postsRouter.put('/:id', Validator.validatePostId, Validator.validatePost, PostsController.updatePost);

export default postsRouter;
