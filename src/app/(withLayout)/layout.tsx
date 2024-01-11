import Contact from "../shared/Contact";
import Navbar from "../shared/Navbar";


const MainLayout = ({children}:{ children: React.ReactNode }) => {
    return (
        <div>
            <Contact></Contact>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;