import EventCard from "./EventCard";
import SideNav from "./SideNav";

function EventHub() {
  return (
    <>
      <div className="md:flex md:flex-row bg-[#E7EDFA] min-h-screen min-w-screen">
        <SideNav/>
        <EventCard name="HISHOT 2026" category="Greater Jakarta" location="Alam Sutera"/>
      </div>
    </>
  );
}

export default EventHub;