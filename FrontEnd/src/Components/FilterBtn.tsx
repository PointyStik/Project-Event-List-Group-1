interface FilterBtnProps {
    name: string;
    onClick: ()=>void;
    isActive: boolean;
}
function FilterBtn({name, onClick, isActive}: FilterBtnProps){
    return (
        <>
            {isActive ? (
                <button 
                    onClick={onClick}
                    className="cursor-pointer py-2 px-4 text-[#00214F] w-full rounded-2xl bg-[#7599CA]"
                >
                    {name}
                </button>
            ) : (
                <button 
                    onClick={onClick}
                    className="cursor-pointer py-2 px-4 text-[#00214F] w-full bg-white rounded-2xl hover:bg-[#B6C5DA] active:bg-[#7599CA]"
                >
                    {name}
                </button>
            )}
        </>
    )
}

export default FilterBtn