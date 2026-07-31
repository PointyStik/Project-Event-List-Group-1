import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FilterBtn from "./FilterBtn";

interface SideNavProps {
    currentNav?: string;
}

function SideNav({currentNav = "All"} : SideNavProps){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navigate = useNavigate();
    const location = useLocation();

    const isAddEventPage = location.pathname === "/add-event";

    const handleNavigation = (buttonName: string) => {
        navigate("/", {state: {filter: buttonName}});
    };

    const handleAddEvent = () => {
        navigate("/add-event");
    }

    const selectedLocation = location.state?.filter || currentNav;
    const activeFilter = isAddEventPage? "Add Event" : selectedLocation;

    const toggle = ()=>{
        setIsOpen((prev)=>!prev);
    }

    return (
        <>
            {isOpen && (
                <div
                    onClick={toggle}
                    className="lg:hidden fixed inset-0 bg-black/40  transition-opacity hover:cursor-pointer"
                />
            )}
            <div
                className="bg-[#00214F] flex flex-col p-3 gap-6 lg:max-w-xs min-w-full lg:min-w-xs lg:min-h-screen py-6 sticky top-0 z-30"
            >
                <div 
                    className="flex flex-row justify-between lg:flex-col lg:justify-center"
                >
                    <div
                        className="flex flex-row gap-2"
                    >
                        <img 
                            className="w-14 h-14"
                            src="/Logo/LOGOHIMTI-White.svg" 
                            alt="Logo HIMTI"
                        />
                        <div
                            className="flex flex-col justify-center"
                        >
                            <h1 className="text-white font-semibold text-2xl">
                                HIMTI
                            </h1>
                            <h2 className="text-white font-medium text-lg">
                                EventHub
                            </h2>
                        </div>
                    </div>
                    <div 
                        className="flex items-center lg:hidden"
                    >
                        <img 
                            src="/Icons/HamburgerBtn.svg" 
                            alt="Navigation Button"
                            className="w-8 hover:cursor-pointer"
                            onClick={toggle} 
                        />
                    </div>
                </div>    
                <div 
                    className={`
                        ${isOpen? "flex" : "hidden"}
                        lg:flex flex-col justify-between gap-6 flex-1
                    `}
                >
                    <div
                        className="flex flex-col gap-3"
                    >
                        <h1 
                            className="text-white text-lg"
                        >
                            Location
                        </h1>
                        <FilterBtn
                            name = "All"
                            onClick={()=> handleNavigation("All")}
                            isActive = {activeFilter === "All"}
                        />
                        <FilterBtn
                                name = "Greater Jakarta"
                            onClick={()=> handleNavigation("Greater Jakarta")}
                            isActive = {activeFilter === "Greater Jakarta"}
                        />
                        <FilterBtn
                            name = "Bandung"
                            onClick={()=> handleNavigation("Bandung")}
                            isActive = {activeFilter === "Bandung"}
                        />
                        <FilterBtn
                            name = "Malang"
                            onClick={()=> handleNavigation("Malang")}
                            isActive = {activeFilter === "Malang"}
                        />
                        <FilterBtn
                            name = "Semarang"
                            onClick={()=> handleNavigation("Semarang")}
                            isActive = {activeFilter === "Semarang"}
                        />
                        <FilterBtn
                            name = "Online"
                            onClick={()=> handleNavigation("Online")}
                            isActive = {activeFilter === "Online"}
                        />
                    </div>
                    <div
                        className="flex flex-col gap-3"
                    >
                        <h1 
                            className="text-white text-lg"
                        >
                            Don't see yours here?
                        </h1>
                        <FilterBtn
                            name = "Add Event"
                            onClick={handleAddEvent}
                            isActive = {activeFilter === "Add Event"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav;