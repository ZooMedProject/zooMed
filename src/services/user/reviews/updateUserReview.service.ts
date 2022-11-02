import { Reviews } from "../../../entities/reviews.entity";


import {../../../utilities/repositories
  appointmentsRepository,
  reviewsRepository,
  usersRepository,
} from "../../../utilities";
import { Appointments } from "../../../entities/appointments.entity";

const updateUserReviewService = async (
  review: string,
  idReview: string
): Promise<Partial<Reviews>> => {
  await reviewsRepository.update(idReview, {
    review,
  });

  const reviewFind = await reviewsRepository.findOneBy({ id: idReview });
  return reviewFind!;
};

export default updateUserReviewService;