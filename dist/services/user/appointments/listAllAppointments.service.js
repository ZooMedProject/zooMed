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
const repositories_1 = require("../../../utilities/repositories");
const listAllUserAppointmentsService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.usersRepository.findOneBy({ id: userId });
    const appointments = yield repositories_1.appointmentsRepository.find({
        where: { animals: user.animals },
        relations: { clinicsDoctors: { doctor: true, clinic: true } },
    });
    return appointments;
});
exports.default = listAllUserAppointmentsService;
