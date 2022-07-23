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
exports.ShowBusiness = void 0;
const Show_1 = __importDefault(require("../model/Show"));
class ShowBusiness {
    constructor(showData, idGenerator, hashManager, authenticator, bandData) {
        this.showData = showData;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.bandData = bandData;
        this.add = (input, token) => __awaiter(this, void 0, void 0, function* () {
            const { week_day, start, end, band_id } = input;
            if (!week_day || !start || !end || !band_id) {
                throw new Error("Campos inválidos");
            }
            if (start < 8 || start > 23 || end < 8 || end > 23) {
                throw new Error("Os Horários dos Shows são permitidos apenas entre 8h até 23h");
            }
            if (week_day !== 'sexta' && week_day !== 'sabado' && week_day !== 'domingo') {
                throw new Error("Ocorrerão shows apenas na sexta, no sabado e no domingo");
            }
            const shows = yield this.showData.get();
            for (let show of shows) {
                if (show.week_day === week_day && show.start_time < start && show.end_time > start) {
                    throw new Error("Horário indisponível");
                }
                else if (show.week_day === week_day && show.start_time === start) {
                    throw new Error("Horário indisponível");
                }
                else if (show.week_day === week_day && show.end_time === start) {
                    throw new Error("Horário indisponível");
                }
                else if (show.week_day === week_day && show.start_time < end && show.end_time > end) {
                    throw new Error("Horário indisponível");
                }
                else if (show.week_day === week_day && show.start_time === end) {
                    throw new Error("Horário indisponível");
                }
                else if (show.week_day === week_day && show.end_time === end) {
                    throw new Error("Horário indisponível");
                }
            }
            const tokenData = this.authenticator.getData(token);
            if (!tokenData) {
                throw new Error("Token inválido ou inexistente");
            }
            const id = this.idGenerator.generate();
            const show = new Show_1.default(id, week_day, start, end, band_id);
            yield this.showData.insert(show);
            return id;
        });
        this.get = (day) => __awaiter(this, void 0, void 0, function* () {
            const band_ids = yield this.showData.findByDay(day);
            let shows = [];
            if (!band_ids) {
                throw new Error("Nenhum show marcado para esse dia");
            }
            for (let band_id of band_ids) {
                const band = yield this.bandData.getById(band_id.band_id);
                shows.push(band);
            }
            if (day !== 'sexta' && day !== 'sabado' && day !== 'domingo') {
                throw new Error("Só ocorrerão shows na sexta, no sabado e no domingo");
            }
            return shows;
        });
    }
}
exports.ShowBusiness = ShowBusiness;
//# sourceMappingURL=ShowBusiness.js.map