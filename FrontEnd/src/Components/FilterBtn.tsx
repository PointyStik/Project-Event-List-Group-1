interface FilterBtnProps {
    name: string;
    onClick: ()=>void;
    isActive?: boolean;
}
function FilterBtn({name, onClick, isActive}: FilterBtnProps){
    return (
        <button 
            onClick={onClick}
            className={`cursor-pointer py-2 px-4 text-[#00214F] text-left w-full rounded-2xl transition-colors duration-300
                ${!isActive? 
                    "bg-white hover:bg-[#B6C5DA] active:bg-[#7599CA]" : "bg-[#7599CA]"}
            `}
        >
            {name}
        </button>
    )
}

export default FilterBtn