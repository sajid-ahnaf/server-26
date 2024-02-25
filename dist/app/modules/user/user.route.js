"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const userVerify_1 = __importDefault(require("../../../middleware/userVerify"));
const adminVerify_1 = __importDefault(require("../../../middleware/adminVerify"));
const UserRouter = express_1.default.Router();
UserRouter.post("/register", user_controller_1.createUser);
UserRouter.post("/login", user_controller_1.loginUser);
UserRouter.post("/get-user", user_controller_1.getLoginUser);
UserRouter.get("/recent-user", user_controller_1.getRecentUsers);
UserRouter.get("/users-info", userVerify_1.default, user_controller_1.getUserInfo);
UserRouter.get("/search-users", adminVerify_1.default, user_controller_1.searchUser);
UserRouter.put("/update-user", userVerify_1.default, user_controller_1.updateUserInfo);
UserRouter.put("/make-user", adminVerify_1.default, user_controller_1.makeUser);
UserRouter.put("/make-admin", adminVerify_1.default, user_controller_1.makeAdmin);
UserRouter.put("/change-password", userVerify_1.default, user_controller_1.changePassword);
UserRouter.delete("/delete-user", adminVerify_1.default, user_controller_1.deleteUser);
exports.default = UserRouter;