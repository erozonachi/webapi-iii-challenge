import express from 'express';
import { Validator } from '../helper';
import { UsersController } from '../controller';

const usersRouter = express.Router();

usersRouter.get('/', UsersController.getUsers);
usersRouter.post('/', Validator.validateUser, UsersController.insertUser);
usersRouter.post('/:id/posts', Validator.validateUserId, Validator.validatePost, UsersController.insertUserPost);

usersRouter.get('/:id', Validator.validateUserId, UsersController.getUserById);
usersRouter.get('/:id/posts', Validator.validateUserId, UsersController.getUserPosts);
usersRouter.delete('/:id', Validator.validateUserId, UsersController.removeUser);
usersRouter.put('/:id', Validator.validateUserId, Validator.validateUser, UsersController.updateUser);

export default usersRouter;
