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
class ShowController {
    constructor(showBusiness) {
        this.showBusiness = showBusiness;
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { week_day, start, end, band_id } = req.body;
            const addShowDTO = {
                week_day,
                start,
                end,
                band_id
            };
            const token = req.headers.authorization;
            try {
                yield this.showBusiness.add(addShowDTO, token);
                res.status(201).send({ message: "Show Agendado com sucesso" });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro no agendamento do Show");
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { day } = req.params;
            const queryResult = yield this.showBusiness.get(day);
            try {
                res.status(200).send(queryResult);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao pegar os shows");
            }
        });
    }
}
exports.default = ShowController;
//# sourceMappingURL=ShowController.js.map