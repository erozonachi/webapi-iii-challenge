import UserModel from '../../users/userDb';

export class UsersController {
  static async insertUser(req, res) {
    try {
      const { name } = req.body;
      const user = await UserModel.insert({ name });

      res.status(201).json(user[0]);
    } catch(error) {
      res.status(500).json({
        error: 'user could not be save at this time'
      });
    }
  }

  static async updateUser(req, res) {
    try {
      const { name } = req.body;
      await UserModel.update(req.user.id, name);
      const user = await UserModel.getById(req.user.id);

      res.status(200).json(user[0]);
    } catch(error) {
      res.status(500).json({
        error: 'user could not be modify at this time'
      });
    }
  }

  static async removeUser(req, res) {
    try {
      await UserModel.remove(req.user.id);

      res.status(200).json({
        message: 'Successful removal of user'
      });
    } catch(error) {
      res.status(500).json({
        error: 'user could not be remove at this time'
      });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserModel.get();

      res.status(200).json(users);
    } catch(error) {
      res.status(500).json({
        error: 'users could not be fetch at this time'
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserModel.get(req.user.id);

      res.status(200).json(user[0]);
    } catch(error) {
      res.status(500).json({
        error: 'user with the specified ID, could not be fetch at this time'
      });
    }
  }
}
