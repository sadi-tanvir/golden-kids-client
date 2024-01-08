import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";



const MainLayout = ({children}:{ children: React.ReactNode }) => {
    return (
        <div>

            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;