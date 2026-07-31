import EventCard from "./EventCard";
import SideNav from "./SideNav";

function EventHub() {

  const categoryLocation = [
    {
      name: "Greater Jakarta",
      color: "#FFB100"
    },
    {
      name: "Bandung",
      color: "#8A38F5"
    },
    {
      name: "Malang",
      color: "#004CB5"
    },
    {
      name: "Semarang",
      color: "#00B5A6"
    },
    {
      name: "Online",
      color: "#E03333"
    }
  ]

  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-0 items-center lg:flex-row bg-[#E7EDFA] min-h-screen min-w-screen">
        <SideNav/>
        <div>
          <div>
            {/* navigation bulan */}
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="flex flex-col p-6 bg-white border border-[#00214F] rounded-2xl items-center lg:m-8 w-full order-2 sm:order-1"
            >
              <EventCard name="Nama Kegiatan" category="Greater Jakarta" location="Alam Sutera" description="desc" harga="Rp10.000" link="https://hishot.himtibinus.or.id/"/>
            </div>
            <div className="order-1 sm:order-2">
              {/* calendar dan legend */}
              <div
                  className="bg-white border border-[#00214F] rounded-2xl p-3 sm:p-4"
              >
                <h2 className="">Legend</h2>
                <div className="bg-[#023a89] h-0.5 rounded-sm"></div>
                <div>
                  {categoryLocation.map((category)=>(
                    <div>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventHub;