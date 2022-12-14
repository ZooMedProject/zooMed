import { AppError } from "../../errors/appError";
import {
  clinicsDoctorsRepository,
  clinicsRepository,
} from "../../utilities/repositories";

const clinicDeleteService = async (id: string, userId: string) => {
  const clinic = await clinicsRepository.findOne({
    where: { id: id },
  });

  if (!clinic) {
    throw new AppError("Clinic not found", 404);
  }

  const clinicsDoctors = await clinicsDoctorsRepository.findOne({
    where: {
      clinic: { id },
      doctor: { id: userId },
    },
    relations: {
      clinic: true,
      doctor: true,
    },
  });

  if (!clinicsDoctors) {
    throw new AppError("Clinic has already been removed", 400);
  }

  await clinicsDoctorsRepository.delete({
    id: clinicsDoctors!.id,
  });

  return "Clinic removed successfully";
};
export default clinicDeleteService;
