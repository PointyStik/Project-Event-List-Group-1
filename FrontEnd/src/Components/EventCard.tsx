import { useState, useRef, useEffect } from "react";

interface EventProps{
        name: string;
        description : string;
        location? : string;
        category : string;
        harga? : string;
        imageUrl? : string;
        link : string;
    }

function EventCard({name, description, location, category, harga, imageUrl, link}:EventProps){    

    const defaultImage = "/Logo/LOGOHIMTI-Blue.svg";
    const locationContent = location? location : category;

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [canExpand, setCanExpand] = useState<boolean>(false);
    const textref = useRef<HTMLParagraphElement>(null);
    const isExpandedRef = useRef(isExpanded);

    useEffect(() => {
        isExpandedRef.current = isExpanded;
    }, [isExpanded]);
    
    useEffect( () => {
        const element = textref.current;
        if (!element) return;
        
        const checkOverflow = () => {
            if (isExpandedRef.current) return;
            setCanExpand(element.scrollHeight>element.clientHeight +1);
        };

        checkOverflow();

        const observer = new ResizeObserver(checkOverflow);
        observer.observe(element);

        return ()=> observer.disconnect();
    }, [description]);

    return (
        <>
            <div
                className="w-full rounded-2xl bg-[#7599CA] p-3 sm:p-4 flex flex-col md:flex-row gap-4 items-center max-w-full"
            >
                <div
                    className="aspect-square w-20 sm:w-24 lg:w-40 bg-[#E7EDFA] rounded-2xl flex justify-center shrink-0"
                >
                    <img src={imageUrl || defaultImage} alt={name} className="w-full h-full object-contain"/>
                </div>
                <div 
                    className="flex flex-1 flex-col gap-3 sm:gap-4 w-full min-h-0"
                >
                    <div
                        className="flex justify-between items-start gap-2"
                    >
                       <h1
                            className="flex-1 wrap-break-word text-base sm:text-lg lg:text-xl font-semibold text-[#00214F] min-w-0"
                       >
                            {name}
                        </h1>
                        <div
                            className="flex justify-between gap-1 shrink-0"
                        >
                            <img 
                                src="/Icons/Delete.svg" 
                                alt="Delete" 
                                className="hover:cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
                                // Perlu tambahin OnClick buat PopUp Confirmation Delete
                            />
                            <img 
                                src="/Icons/Edit.svg" 
                                alt="Edit" 
                                className="hover:cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
                                // Perlu tambahin OnClick buat Edit
                            />
                        </div>
                    </div>
                    <div 
                        className="flex-1 bg-white rounded-xl p-2 min-h-20 sm:min-h-24 h-fit max-w-full"
                    >
                        <p 
                            ref = {textref}
                            className={`text-sm lg:text-base wrap-break-word ${!isExpanded? "line-clamp-3" : ""}`}
                        >
                            {description}
                        </p>
                        {canExpand && (
                            <button
                                onClick={()=>setIsExpanded((prev) => !prev)}
                                className="mt-2 text-[#004CB5] font-semibold text-sm hover:underline self-start cursor-pointer"
                            >
                                {isExpanded? "Show Less" : "Read More"}
                            </button>
                        )}
                    </div>
                    <div
                        className="flex flex-col sm:flex-row justify-between gap-4 flex-wrap"
                    >
                        <a
                            className="text-white bg-[#004CB5] rounded-4xl py-2 px-6 sm:px-8 text-center font-medium hover:cursor-pointer justify-center text-sm lg:text-lg w-full sm:w-auto sm:max-w-48 max-h-fit order-2 sm:order-1" 
                            href={link}
                            target="_blank"
                        >
                            Register
                        </a>
                        <div
                            className="flex flex-row gap-2 flex-wrap order-1 sm:order-2"
                        >
                            <div
                                className="flex flex-row bg-white rounded-4xl px-2 md:px-3 py-2 border-2 gap-2 border-[#004CB5] shrink-0 justify-start w-full min-w-0 items-center sm:w-fit"
                            >
                                <img 
                                    src="/Icons/Location.svg" 
                                    alt="Location Icon" 
                                    className="w-4 sm:w-5 shrink-0"
                                />
                                <p className="wrap-break-word text-sm lg:text-lg truncate">{locationContent}</p>
                            </div>
                            {harga && (
                                <div
                                    className="flex flex-row bg-white rounded-4xl px-2 md:px-3 py-2 border-2 gap-2 border-[#004CB5] shrink-0 justify-start w-full min-w-0 items-center sm:w-fit"
                                >
                                    <img 
                                        src="/Icons/Price.svg" 
                                        alt="Price Icon" 
                                        className="w-4"
                                    />
                                    <p className="whitespace-nowrap text-sm lg:text-base">{harga}</p>
                                </div>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard;