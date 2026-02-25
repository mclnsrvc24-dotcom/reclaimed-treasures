import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import BrandStatement from "@/components/BrandStatement/BrandStatement";
import FeaturedCollection from "@/components/FeaturedCollection/FeaturedCollection";
import Editorial from "@/components/Editorial/Editorial";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <FeaturedCollection />
        <Editorial />
        <NewArrivals />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
