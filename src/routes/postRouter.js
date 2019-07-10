import express from 'express';
import { Validator } from '../helper';
import { UsersController } from '../controller';

const postsRouter = express.Router();

postsRouter.get('/', UsersController.getUsers);
postsRouter.post('/', Validator.validateUser, UsersController.insertUpostsRouter);

postsRouter.use(Validator.validateUsepostsRouter);

postsRouter.get('/:id', UsersController.getUserById);
postsRouter.get('/:id/posts', UsersController.getUserPosts);
postsRouter.delete('/:id', UsersController.removeUser);
postsRouter.put('/:id', Validator.validateUser, UsersController.updateUser);

export default postsRouter;
