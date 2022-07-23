"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showRouter = void 0;
const express_1 = __importDefault(require("express"));
const ShowBusiness_1 = require("../business/ShowBusiness");
const ShowController_1 = __importDefault(require("../controller/ShowController"));
const BandDatabase_1 = __importDefault(require("../data/BandDatabase"));
const ShowDatabase_1 = __importDefault(require("../data/ShowDatabase"));
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const IdGenerator_1 = require("../services/IdGenerator");
exports.showRouter = express_1.default.Router();
const showBusiness = new ShowBusiness_1.ShowBusiness(new ShowDatabase_1.default(), new IdGenerator_1.IdGenerator(), new HashManager_1.HashManager(), new Authenticator_1.Authenticator(), new BandDatabase_1.default());
const showController = new ShowController_1.default(showBusiness);
exports.showRouter.post("/add", showController.add);
exports.showRouter.get("/:day", showController.get);
//# sourceMappingURL=showRouter.js.map