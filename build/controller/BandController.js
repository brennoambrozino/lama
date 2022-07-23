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
exports.BandController = void 0;
class BandController {
    constructor(bandBusiness) {
        this.bandBusiness = bandBusiness;
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, genre, responsible } = req.body;
            const addBandDTO = {
                name,
                genre,
                responsible
            };
            const token = req.headers.authorization;
            try {
                yield this.bandBusiness.register(addBandDTO, token);
                res.status(201).send({ message: "Banda Registrada com sucesso" });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro no registro da banda");
            }
        });
        this.getDetails = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            const queryResult = yield this.bandBusiness.getByname(name);
            const band = {
                id: queryResult.id,
                name: queryResult.name,
                music_genre: queryResult.music_genre,
                reponsible: queryResult.responsible
            };
            try {
                res.status(200).send({ band });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao Localizar a Banda");
            }
        });
    }
}
exports.BandController = BandController;
//# sourceMappingURL=BandController.js.map