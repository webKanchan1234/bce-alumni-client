import Hero from "../../components/home/Hero";
import Statistics from "../../components/home/Statistics";
import CompaniesSlider from "../../components/home/CompaniesSlider";
import AlumniHighlights from "../../components/home/AlumniHighlights";
import SuccessStories from "../../components/home/SuccessStories";
import UpcomingEvents from "../../components/home/UpcomingEvents";
import Gallery from "../../components/home/Gallery";
import Testimonials from "../../components/home/Testimonials";
import DonationBanner from "../../components/home/DonationBanner";
import Newsletter from "../../components/home/Newsletter";
import Leadership from "../../components/home/Leadership";
import LatestNews from "../../components/home/LatestNews";
import HomepageEvents from "../../components/home/HomepageEvents";
import HomepageNews from "../../components/home/HomepageNews";

const Home = () => {
  return (
    <>
      <Hero />
      <CompaniesSlider />
      <Statistics />
      <Leadership />
      <HomepageEvents />
      {/* <HomepageNews /> */}
      <LatestNews />
      {/* <AlumniHighlights /> */}
      <SuccessStories />
      {/* <UpcomingEvents /> */}
      <Gallery />
      <Testimonials />
      <DonationBanner />
      <Newsletter />
    </>
  );
};

export default Home;