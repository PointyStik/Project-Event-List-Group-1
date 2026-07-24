import { useState } from "react";
import FilterBtn from "./FilterBtn";

function SideNav(){

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isFiltered, setIsFiltered] = useState<boolean>(false);

    const handleFilter = () => {
        console.log("Filter diklik!");
        if(!isFiltered){
            setIsFiltered(true);
        }
        else{
            setIsFiltered(false);
        }
    };

    const toggle = ()=>{
        if(!isOpen){
            setIsOpen(true);
        }
        else{
            setIsOpen(false);
        }
    }



    return (
        <>
            <div
                className="bg-[#00214F] flex flex-col p-3 gap-6"
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
                            <h2 className="text-white font-medium text-sm">
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
                {isOpen && (
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
                            onClick={handleFilter}
                            isActive = {isFiltered}
                        />
                        <FilterBtn
                            name = "Greater Jakarta"
                            onClick={handleFilter}
                            isActive = {isFiltered}
                        />
                        <FilterBtn
                            name = "Bandung"
                            onClick={handleFilter}
                            isActive = {isFiltered}
                        />
                        <FilterBtn
                            name = "Malang"
                            onClick={handleFilter}
                            isActive = {isFiltered}
                        />
                        <FilterBtn
                            name = "Semarang"
                            onClick={handleFilter}
                            isActive = {isFiltered}
                        />
                        <FilterBtn
                            name = "Online"
                            onClick={handleFilter}
                            isActive = {isFiltered}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default SideNav;