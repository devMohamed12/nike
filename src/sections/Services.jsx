
import ServiceCard from '../components/ServiceCard';
import { services } from './../constants/index';
const Services = () => {
  return (
    <section
      className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mt-5 "
      id="about-us"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
