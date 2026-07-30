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

    useEffect(()=>{
        const element = textref.current;
        if (element){
            const isOverflowing = element.scrollHeight>element.clientHeight;
            setCanExpand(isOverflowing);
        }
    }, [description]);

    return (
        <>
            <div
                className="w-full max-w-15/16 rounded-2xl bg-[#7599CA] p-4 flex flex-col md:flex-row gap-4 items-center"
            >
                <div
                    className="w-full aspect-square max-w-30 bg-[#E7EDFA] rounded-2xl flex justify-center"
                >
                    <img src={imageUrl || defaultImage} alt={name} />
                </div>
                <div 
                    className="flex flex-1 flex-col gap-4"
                >
                    <div
                        className="flex justify-between -mb-3"
                    >
                       <h1
                            className="flex-1 break-all text-xl font-semibold text-[#00214F]"
                       >
                            {name}
                        </h1>
                        <div
                            className="flex justify-between gap-1"
                        >
                            <img 
                                src="/Icons/Delete.svg" 
                                alt="Delete" 
                                className="hover:cursor-pointer"
                                // Perlu tambahin OnClick buat PopUp Confirmation Delete
                            />
                            <img 
                                src="/Icons/Edit.svg" 
                                alt="Edit" 
                                className="hover:cursor-pointer"
                                // Perlu tambahin OnClick buat Edit
                            />
                        </div>
                    </div>
                    <div 
                        className="flex-1 bg-white rounded-xl p-2 min-h-24 h-fit max-w-full"
                    >
                        <p 
                            ref = {textref}
                            className={` wrap-break-word ${!isExpanded? "line-clamp-3" : ""}`}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti doloremque vero nesciunt dolores in, ratione cumque culpa autem aperiam molestias, sit aliquid ullam, provident sunt vitae id voluptas beatae.lorem
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
                        className="flex flex-col md:flex-row justify-between gap-4"
                    >
                        <a
                            className="text-white bg-[#004CB5] rounded-4xl py-2 px-8 text-center font-medium hover:cursor-pointer justify-center"
                            href={link}
                            target="_blank"
                        >
                            Register
                        </a>
                        <div
                            className="flex flex-row gap-2 max-h-full"
                        >
                            <div
                                className="flex flex-row bg-white rounded-4xl px-2 md:px-3 py-2 border-2 gap-2 border-[#004CB5] shrink-0 justify-center max-w-2xl"
                            >
                                <img 
                                    src="/Icons/Location.svg" 
                                    alt="Location Icon" 
                                    className="w-6"
                                />
                                <p className="truncate">{locationContent}</p>
                            </div>
                            {harga && (
                                <div
                                    className="flex flex-row bg-white rounded-4xl px-2 md:px-3 py-2 border-2 gap-2 border-[#004CB5] shrink-0 justify-center"
                                >
                                    <img 
                                        src="/Icons/Price.svg" 
                                        alt="Price Icon" 
                                        className="w-6"
                                    />
                                    <p className="whitespace-nowrap">{harga}</p>
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