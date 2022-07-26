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
const BaseDatabase_1 = require("./BaseDatabase");
class BandDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "BANDAS";
        this.register = (band) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this
                    .getConnection()
                    .insert(band)
                    .into(this.TABLE_NAME);
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
        this.getByname = (name) => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield this
                    .getConnection()
                    .select()
                    .where({ name })
                    .into(this.TABLE_NAME);
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
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield this
                    .getConnection()
                    .select('name', 'music_genre')
                    .from(this.TABLE_NAME)
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
}
exports.default = BandDatabase;
//# sourceMappingURL=BandDatabase.js.map