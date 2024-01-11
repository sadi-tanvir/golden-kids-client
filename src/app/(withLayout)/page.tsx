import Service from "@/Components/Service";
import Banner from "../shared/home/Banner";
import Curriculum from "../shared/home/Curriculum";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Curriculum></Curriculum>
        </div>
    );
};

export default Home;