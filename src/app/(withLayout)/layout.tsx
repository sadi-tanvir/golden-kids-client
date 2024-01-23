import Contact from "../shared/Contact";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";



const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Contact></Contact>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    );
};

export default MainLayout;