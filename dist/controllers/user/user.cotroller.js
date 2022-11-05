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
exports.createUserAppointmentsController = exports.deleteUserController = exports.listAllUserController = exports.updateUserController = exports.createUserController = exports.listAllAnimalUserController = exports.deleteUserAppointmentsController = exports.listAllUserAppointmentsController = exports.createUserReviewsController = exports.updatedUserReviewsController = void 0;
const createUser_service_1 = __importDefault(require("../../services/user/createUser.service"));
const updateUser_service_1 = __importDefault(require("../../services/user/updateUser.service"));
const deleteUser_service_1 = __importDefault(require("../../services/user/deleteUser.service"));
const listAllUsers_service_1 = __importDefault(require("../../services/user/listAllUsers.service"));
const createUserAppointments_service_1 = __importDefault(require("../../services/user/appointments/createUserAppointments.service"));
const listAllUserAnimals_service_1 = __importDefault(require("../../services/user/listAllUserAnimals.service"));
const deleteUserAppointments_service_1 = __importDefault(require("../../services/user/appointments/deleteUserAppointments.service"));
const listAllAppointments_service_1 = __importDefault(require("../../services/user/appointments/listAllAppointments.service"));
const createUserReview_service_1 = __importDefault(require("../../services/user/reviews/createUserReview.service"));
const updateUserReview_service_1 = __importDefault(require("../../services/user/reviews/updateUserReview.service"));
const class_transformer_1 = require("class-transformer");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const createdUser = yield (0, createUser_service_1.default)(user);
    return res.status(201).json((0, class_transformer_1.instanceToPlain)(createdUser));
});
exports.createUserController = createUserController;
const listAllUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, listAllUsers_service_1.default)();
    return res.json((0, class_transformer_1.instanceToPlain)(users));
});
exports.listAllUserController = listAllUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUpdate = req.body;
    const id = req.user.id;
    const updatedUser = yield (0, updateUser_service_1.default)(userUpdate, id);
    return res.json((0, class_transformer_1.instanceToPlain)(updatedUser));
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.user.id;
    const deletedUser = yield (0, deleteUser_service_1.default)(id);
    return res.status(204).json((0, class_transformer_1.instanceToPlain)(deletedUser));
});
exports.deleteUserController = deleteUserController;
const listAllAnimalUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const listAnimals = yield (0, listAllUserAnimals_service_1.default)(userId);
    return res.json(listAnimals);
});
exports.listAllAnimalUserController = listAllAnimalUserController;
const createUserAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, hour, animalsId, doctorId } = req.body;
    const createdAppointment = yield (0, createUserAppointments_service_1.default)({
        date,
        hour,
        animalsId,
        doctorId,
    });
    return res.status(201).json({ message: "Successfully scheduled" });
});
exports.createUserAppointmentsController = createUserAppointmentsController;
const deleteUserAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, deleteUserAppointments_service_1.default)(id);
    return res.status(204).json({
        message: "Appointments successfully",
    });
});
exports.deleteUserAppointmentsController = deleteUserAppointmentsController;
const listAllUserAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const list = yield (0, listAllAppointments_service_1.default)(userId);
    return res.json(list);
});
exports.listAllUserAppointmentsController = listAllUserAppointmentsController;
const createUserReviewsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { review, appointmentsId } = req.body;
    const userId = req.user.id;
    const newReview = (0, createUserReview_service_1.default)(review, appointmentsId, userId);
    return res
        .status(201)
        .json({ message: "Successfully review", review: review });
});
exports.createUserReviewsController = createUserReviewsController;
const updatedUserReviewsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { review } = req.body;
    const { id } = req.params;
    const updatedReviews = (0, updateUserReview_service_1.default)(review, id);
    return res.json(updatedReviews);
});
exports.updatedUserReviewsController = updatedUserReviewsController;
