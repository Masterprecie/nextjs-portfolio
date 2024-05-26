import { testimonials } from "@/utils/data";
import { InfiniteMovingCards } from "./ui/MovingCards";

const Testimonials = () => {
  return (
    <div className="pb-10" id="testimonials">
      <h1 className="heading">
        Kind Words from <span className="text-purple"> Satisified Clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};
export default Testimonials;
