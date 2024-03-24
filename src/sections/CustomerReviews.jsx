
import Review from "../components/Review";
import {reviews} from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container" id="">
      <h3 className="font-palanquin text-4xl text-center font-bold ">
        what our
        <span className="text-coral-red"> Customers </span>
        say?
      </h3>
      <p className="info-text mt-4  mx-auto text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-16 flex flex-1 justify-around items-center max-lg:flex-col gap-10">
        {reviews.map((review) => (
          <Review review={review} key={review.customerName} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
