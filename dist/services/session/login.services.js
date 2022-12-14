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
const appError_1 = require("../../errors/appError");
const repositories_1 = require("../../utilities/repositories");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validators_1 = require("../../validators");
const loginService = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.usersRepository.findOneBy({ email });
    const doctor = yield repositories_1.doctorsRepository.findOneBy({ email });
    yield (0, validators_1.validateEmail)(email);
    if (!user && !doctor) {
        throw new appError_1.AppError("Invalid email or password", 401);
    }
    if ((doctor === null || doctor === void 0 ? void 0 : doctor.isActive) === false || (user === null || user === void 0 ? void 0 : user.isActive) === false) {
        throw new appError_1.AppError("This account has been removed", 400);
    }
    let matchPass;
    if (user) {
        matchPass = yield (0, bcryptjs_1.compare)(password, user.password);
    }
    if (doctor) {
        matchPass = yield (0, bcryptjs_1.compare)(password, doctor.password);
    }
    if (!matchPass) {
        throw new appError_1.AppError("Invalid email or password", 401);
    }
    const token = jsonwebtoken_1.default.sign({
        id: user ? user.id : doctor.id,
    }, process.env.SECRET_KEY, {
        expiresIn: "24h",
        subject: user ? user.id : doctor.id,
    });
    return token;
});
exports.default = loginService;
