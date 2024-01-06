import Navbar from "../shared/Navbar";


const MainLayout = ({children}:{ children: React.ReactNode }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;