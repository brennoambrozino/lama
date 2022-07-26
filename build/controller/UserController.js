"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const BaseDatabase_1 = require("../data/BaseDatabase");
class UserController {
    constructor(userBusiness) {
        this.userBusiness = userBusiness;
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password,
                    role: req.body.role
                };
                const token = yield this.userBusiness.createUser(input);
                res.status(200).send({ token });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao Criar Usuário");
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const loginDTO = {
                email,
                password
            };
            try {
                const token = yield this.userBusiness.login(loginDTO);
                res.status(200).send({ message: "Logado uhuul!", token });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao Logar");
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map