import FacilityHeader from "@/Components/FacilitiesComponents/FacilityHeader";
import TabMenu from "@/Components/FacilitiesComponents/TabMenu";


const FacilityLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto px-2">
            {/* title & description */}
            <FacilityHeader></FacilityHeader>

            {/* tab menu */}
            <TabMenu></TabMenu>

            {/* children contents */}
            <div className="mb-20">
                {children}
            </div>
        </div>
    );
};

export default FacilityLayout