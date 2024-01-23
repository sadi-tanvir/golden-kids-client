import AutismSpectrumDisorder from "@/Components/HomeComponents/AutismSpectrumDisorder";
import Banner from "@/Components/HomeComponents/Banner";
import Curriculum from "@/Components/HomeComponents/Curriculum";
import Service from "@/Components/HomeComponents/Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Curriculum></Curriculum>
            <AutismSpectrumDisorder></AutismSpectrumDisorder>
        </div>
    );
};

export default Home;