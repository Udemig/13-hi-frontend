import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Products from "@/components/home/products";

const Home = () => {
  return (
    <div className="page">
      <Hero />
      <Features />
      <Products />
    </div>
  );
};

export default Home;
