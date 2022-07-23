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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BandBusiness = void 0;
const Band_1 = __importDefault(require("../model/Band"));
class BandBusiness {
    constructor(bandData, idGenerator, hashManager, authenticator, userData) {
        this.bandData = bandData;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.userData = userData;
        this.register = (input, token) => __awaiter(this, void 0, void 0, function* () {
            const { name, genre, responsible } = input;
            const id = this.idGenerator.generate();
            const repeatedName = yield this.bandData.getByname(name);
            if (repeatedName) {
                throw new Error("Esse nome já existe");
            }
            const tokenData = this.authenticator.getData(token);
            const userName = yield this.userData.getUserById(tokenData.id);
            const normals = yield this.userData.getNormals();
            for (let normal of normals) {
                if (normal.name === userName.name) {
                    throw new Error("Somente administradores podem registrar bandas");
                }
            }
            const band = new Band_1.default(id, name, genre, responsible);
            yield this.bandData.register(band);
        });
        this.getByname = (name) => __awaiter(this, void 0, void 0, function* () {
            const band = yield this.bandData.getByname(name);
            if (!name) {
                throw new Error("Erro ao encontrar a banda");
            }
            return band;
        });
    }
}
exports.BandBusiness = BandBusiness;
//# sourceMappingURL=BandBusiness.js.map