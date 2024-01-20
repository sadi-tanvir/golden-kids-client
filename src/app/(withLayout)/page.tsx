import Service from "@/Components/HomeComponents/Service";
import Banner from "../../Components/HomeComponents/Banner";
import Partner_Organization from "@/Components/HomeComponents/Partner_Organization";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Partner_Organization></Partner_Organization>
        </div>
    );
};

export default Home;