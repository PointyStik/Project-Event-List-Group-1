import { useState } from "react";
import FilterBtn from "./FilterBtn";

function SideNav(){

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedButton, setSelectedButton] = useState<String>("All");

    const handleNavigation = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    const toggle = ()=>{
        setIsOpen((prev)=>!prev);
    }



    return (
        <>
            <div
                className="bg-[#00214F] flex flex-col p-3 gap-6 md:max-w-xs md:min-h-screen md:py-6"
            >
                <div 
                    className="flex flex-row justify-between md:flex-col md:justify-center"
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
                        className="flex items-center md:hidden"
                    >
                        <img 
                            src="/Icons/HamburgerBtn.svg" 
                            alt="Navigation Button"
                            className="w-8 hover:cursor-pointer"
                            onClick={toggle} 
                        />
                        {isOpen && (
                            <div
                                onClick={toggle}
                                className="md:hidden fixed inset-0 bg-black/40 -z-30 transition-opacity hover:cursor-pointer"
                            />
                        )}
                    </div>
                </div>    
                <div 
                    className={`
                        ${isOpen? "flex" : "hidden"}
                        md:flex flex-col justify-between gap-6 flex-1
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
                            isActive = {selectedButton === "All"}
                        />
                        <FilterBtn
                                name = "Greater Jakarta"
                            onClick={()=> handleNavigation("Greater Jakarta")}
                            isActive = {selectedButton === "Greater Jakarta"}
                        />
                        <FilterBtn
                            name = "Bandung"
                            onClick={()=> handleNavigation("Bandung")}
                            isActive = {selectedButton === "Bandung"}
                        />
                        <FilterBtn
                            name = "Malang"
                            onClick={()=> handleNavigation("Malang")}
                            isActive = {selectedButton === "Malang"}
                        />
                        <FilterBtn
                            name = "Semarang"
                            onClick={()=> handleNavigation("Semarang")}
                            isActive = {selectedButton === "Semarang"}
                        />
                        <FilterBtn
                            name = "Online"
                            onClick={()=> handleNavigation("Online")}
                            isActive = {selectedButton === "Online"}
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
                            onClick={()=> handleNavigation("Add Event")}
                            isActive = {selectedButton === "Add Event"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideNav;