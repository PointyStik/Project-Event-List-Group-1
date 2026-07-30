import EventCard from "./EventCard";
import SideNav from "./SideNav";

function EventHub() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center md:flex-row bg-[#E7EDFA] min-h-screen min-w-screen">
        <SideNav/>
        <EventCard name="Nama Kegiatan" category="Greater Jakarta" location="Alam Sutera" description="desc" harga="Rp10.000" link="https://hishot.himtibinus.or.id/"/>
      </div>
    </>
  );
}

export default EventHub;