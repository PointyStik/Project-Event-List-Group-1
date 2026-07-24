interface EventProps{
        name: string;
        description? : string;
        location? : string;
        category : string;
        harga? : string;
        imageUrl? : string;
    }

function EventCard({name, description, location, category, harga, imageUrl}:EventProps){    

    const defaultImage = "/Logo/LOGOHIMTI-Blue.svg";

    return (
        <>
            <div
                className="w-full bg-[#7599CA] p-4"
            >
                <div
                    className="h-full bg-[#E7EDFA] p-2 rounded-2xl"
                >
                    <img src={imageUrl || defaultImage} alt={name} />
                </div>
                <div 
                    className="flex flex-1 flex-col"
                >
                    <div
                        className="flex justify-between "
                    >
                       <h1
                            className="flex-1"
                       >
                            {name}
                        </h1>
                        <div>
                            bu
                        </div>
                    </div>
                    <div>
                        {description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard;