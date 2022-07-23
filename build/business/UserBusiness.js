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
exports.UserBusiness = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
const IdGenerator_1 = require("../services/IdGenerator");
const HashManager_1 = require("../services/HashManager");
const Authenticator_1 = require("../services/Authenticator");
class UserBusiness {
    constructor(userData, idGenerator, hashManager, authenticator) {
        this.userData = userData;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const idGenerator = new IdGenerator_1.IdGenerator();
            const id = idGenerator.generate();
            const hashManager = new HashManager_1.HashManager();
            const hashPassword = yield hashManager.hash(user.password);
            const userDatabase = new UserDatabase_1.UserDatabase();
            yield userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);
            const authenticator = new Authenticator_1.Authenticator();
            const accessToken = authenticator.generateToken({ id, role: user.role });
            return accessToken;
        });
    }
    login(loginDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginDTO;
            if (!email || !password) {
                throw new Error("Campos Inválidos");
            }
            const registeredUser = yield this.userData.findByEmail(email);
            if (!registeredUser) {
                throw new Error("Credenciais inválidas");
            }
            const user = {
                id: registeredUser.id,
                name: registeredUser.name,
                email: registeredUser.email,
                password: registeredUser.password,
                role: registeredUser.role
            };
            const passwordIsCorrect = yield this.hashManager.compare(password, user.password);
            if (!passwordIsCorrect) {
                throw new Error("Credenciais inválidas");
            }
            const token = this.authenticator.generateToken({ id: user.id });
            return token;
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map