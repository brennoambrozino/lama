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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    createUser(id, email, name, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().insert({ id, email, name, password, role }).into(UserDatabase.TABLE_NAME);
            }
            catch (err) {
                if (err instanceof Error) {
                    throw new Error(err.message);
                }
                else {
                    throw new Error("Erro no createUser UserDatabase.");
                }
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield this
                    .getConnection()
                    .select()
                    .from(UserDatabase.TABLE_NAME)
                    .where({ email });
                return queryResult[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Error do banco !");
                }
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield this
                    .getConnection()
                    .select()
                    .from(UserDatabase.TABLE_NAME)
                    .where({ id });
                return queryResult[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Error do banco !");
                }
            }
        });
    }
    getNormals() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield this
                    .getConnection()
                    .select()
                    .from(UserDatabase.TABLE_NAME)
                    .where({ role: 'normal' })
                    .orWhere({ role: 'NORMAL' });
                return queryResult;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Error do banco !");
                }
            }
        });
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.TABLE_NAME = "USUARIOS";
//# sourceMappingURL=UserDatabase.js.map