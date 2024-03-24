import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  CustomerReviews,
  Subscribe,
  Footer,
} from "../sections";

const HomePage = () => {
  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
    </>
  );
};

export default HomePage;
