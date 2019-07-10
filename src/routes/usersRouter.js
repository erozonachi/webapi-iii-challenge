import express from 'express';
import { Validator } from '../helper';
import { UsersController } from '../controller';

const postsRouter = express.Router();

postsRouter.get('/', UsersController.getUsers);
postsRouter.post('/', Validator.validateUser, UsersController.insertUser);

postsRouter.get('/:id', Validator.validateUserId, UsersController.getUserById);
postsRouter.get('/:id/posts', Validator.validateUserId, UsersController.getUserPosts);
postsRouter.delete('/:id', Validator.validateUserId, UsersController.removeUser);
postsRouter.put('/:id', Validator.validateUserId, Validator.validateUser, UsersController.updateUser);

export default postsRouter;
