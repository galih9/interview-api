"use strict";
const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    const reqUser = request.only(["name", "email", "phone"]);
    const user = new User();
    user.name = reqUser.name;
    user.email = reqUser.email;
    user.phone = reqUser.phone;
    try {
      await user.save();
      return response.status(201).json(user);
    } catch (error) {
      response.status(404).json({ message: "Resource not found" });
    }
  }
}

module.exports = UserController;
