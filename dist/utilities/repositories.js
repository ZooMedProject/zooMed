"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRepository = exports.speciesRepository = exports.specialitiesRepository = exports.reviewsRepository = exports.doctorsSpecialitiesRepository = exports.doctorsRepository = exports.clinicsDoctorsRepository = exports.clinicsRepository = exports.appointmentsRepository = exports.animalsRepository = exports.addressRepository = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const address_entity_1 = require("../entities/address.entity");
const animals_entity_1 = require("../entities/animals.entity");
const appointments_entity_1 = require("../entities/appointments.entity");
const clinics_entity_1 = require("../entities/clinics.entity");
const clinicsDoctors_entity_1 = require("../entities/clinicsDoctors.entity");
const doctors_entity_1 = require("../entities/doctors.entity");
const doctorsSpecialities_entity_1 = require("../entities/doctorsSpecialities.entity");
const reviews_entity_1 = require("../entities/reviews.entity");
const specialities_entity_1 = require("../entities/specialities.entity");
const species_entity_1 = require("../entities/species.entity");
const users_entity_1 = require("../entities/users.entity");
exports.addressRepository = data_source_1.default.getRepository(address_entity_1.Address);
exports.animalsRepository = data_source_1.default.getRepository(animals_entity_1.Animals);
exports.appointmentsRepository = data_source_1.default.getRepository(appointments_entity_1.Appointments);
exports.clinicsRepository = data_source_1.default.getRepository(clinics_entity_1.Clinics);
exports.clinicsDoctorsRepository = data_source_1.default.getRepository(clinicsDoctors_entity_1.ClinicsDoctors);
exports.doctorsRepository = data_source_1.default.getRepository(doctors_entity_1.Doctors);
exports.doctorsSpecialitiesRepository = data_source_1.default.getRepository(doctorsSpecialities_entity_1.DoctorsSpecialities);
exports.reviewsRepository = data_source_1.default.getRepository(reviews_entity_1.Reviews);
exports.specialitiesRepository = data_source_1.default.getRepository(specialities_entity_1.Specialities);
exports.speciesRepository = data_source_1.default.getRepository(species_entity_1.Species);
exports.usersRepository = data_source_1.default.getRepository(users_entity_1.Users);