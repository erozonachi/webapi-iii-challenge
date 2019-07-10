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
}
