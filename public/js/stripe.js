/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51M40IKLWFD9go2aioOdXJZYnWOzR9PJHxyxaXdNmXrItzdXkjExpnIHZsjotSudHyPINKdIk89OcL39bciMV074i00ydnnIvzS"
);

export const bookTour = async (tourId) => {

  try {
    const session = await axios({
      method: "GET",
      url: `/api/v1/bookings/checkout-session/${tourId}`,
    });

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert("error", err);
  }
};
