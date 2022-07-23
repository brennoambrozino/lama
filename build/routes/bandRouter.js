"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bandRouter = void 0;
const express_1 = __importDefault(require("express"));
const BandBusiness_1 = require("../business/BandBusiness");
const BandController_1 = require("../controller/BandController");
const BandDatabase_1 = __importDefault(require("../data/BandDatabase"));
const UserDatabase_1 = require("../data/UserDatabase");
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const IdGenerator_1 = require("../services/IdGenerator");
exports.bandRouter = express_1.default.Router();
const bandBusiness = new BandBusiness_1.BandBusiness(new BandDatabase_1.default(), new IdGenerator_1.IdGenerator(), new HashManager_1.HashManager(), new Authenticator_1.Authenticator(), new UserDatabase_1.UserDatabase());
const bandController = new BandController_1.BandController(bandBusiness);
exports.bandRouter.post("/register", bandController.register);
exports.bandRouter.get("/:name", bandController.getDetails);
//# sourceMappingURL=bandRouter.js.map