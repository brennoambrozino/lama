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
class ShowDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "SHOWS";
        this.insert = (show) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this
                    .getConnection()
                    .insert(show)
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
        this.get = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield this
                    .getConnection()
                    .select()
                    .from(this.TABLE_NAME);
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
        this.findByDay = (day) => __awaiter(this, void 0, void 0, function* () {
            try {
                const queryResult = yield this
                    .getConnection()
                    .select('band_id')
                    .from(this.TABLE_NAME)
                    .where({ week_day: day })
                    .orderBy('start_time', 'desc');
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
exports.default = ShowDatabase;
//# sourceMappingURL=ShowDatabase.js.map