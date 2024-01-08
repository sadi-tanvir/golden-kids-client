import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";



const MainLayout = ({children}:{ children: React.ReactNode }) => {
    return (
        <div className="bg-slate-50">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;