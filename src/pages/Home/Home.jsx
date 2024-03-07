import Airlines from "../../components/Airlines/Airlines";
import Banner from "../../components/Banner/Banner";
import Deals from "../../components/Deals/Deals";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonial from "../../components/Testimonial/Testimonial";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Featured></Featured>
      <Deals></Deals>
      <Airlines></Airlines>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
