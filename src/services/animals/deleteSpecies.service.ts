import { AppError } from "../../errors/appError";
import {
  doctorsRepository,
  speciesRepository,
} from "../../utilities/repositories";

const deleteSpeciesService = async (id: string, doctorId: string) => {
  const species = await speciesRepository.findOneBy({
    id: id,
  });

  if (!species) {
    throw new AppError("Species not Found", 404);
  }

  const doctor = await doctorsRepository.findOneBy({ id: doctorId });

  if (!doctor) {
    throw new AppError("Doctor not found", 404);
  }

  await speciesRepository.delete({ id });

  return "Species deleted with success";
};

export default deleteSpeciesService;
