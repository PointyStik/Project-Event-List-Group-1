import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar, { type CalendarEvent } from "./Calendar";
import EventCard from "./EventCard";
import SideNav from "./SideNav";

const API_BASE_URL = "http://localhost:3000"; // Replace later if needed
const EVENTS_ENDPOINT = "/api/events";

const categoryLocation = [
  { name: "Greater Jakarta", color: "#FFB100" },
  { name: "Bandung", color: "#8A38F5" },
  { name: "Malang", color: "#004CB5" },
  { name: "Semarang", color: "#00B5A6" },
  { name: "Online", color: "#E03333" },
];

function EventHub() {
  const location = useLocation();
  const activeFilter = location.state?.filter || "All";

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}${EVENTS_ENDPOINT}`,
        );

        if (!response.ok) {
          throw new Error("Failed to load events");
        }

        const data = await response.json();

        // If the backend returns { data: [...] }, change this to setEvents(data.data)
        setEvents(data);
      } catch {
        setError(
          "Could not load events. Check that the backend is running and API_BASE_URL is correct.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  const visibleEvents = useMemo(() => {
    if (activeFilter === "All") return events;

    return events.filter((event) => event.location === activeFilter);
  }, [activeFilter, events]);

  const changeMonth = (amount: number) => {
    setCurrentDate(
      (previousDate) =>
        new Date(
          previousDate.getFullYear(),
          previousDate.getMonth() + amount,
          1,
        ),
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#E7EDFA] lg:flex-row">
      <SideNav />

      <main className="flex-1 p-5 sm:p-8">
        <div className="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <section>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => changeMonth(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00214F] text-xl text-[#00214F] hover:bg-white"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => changeMonth(1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00214F] text-xl text-[#00214F] hover:bg-white"
              >
                ›
              </button>

              <h1 className="text-xl font-semibold text-[#00214F]">
                {currentDate.toLocaleString("en-US", { month: "long" })}{" "}
                {currentDate.getFullYear()}
              </h1>
            </div>

            <div className="min-h-[540px] rounded-2xl border border-[#00214F] bg-white p-5 sm:p-6">
              <h2 className="mb-5 text-2xl font-semibold text-[#00214F]">
                Upcoming Events
              </h2>

              {isLoading && <p>Loading events...</p>}

              {error && <p className="text-red-600">{error}</p>}

              {!isLoading && !error && (
                <div className="flex flex-col gap-5">
                  {visibleEvents.length > 0 ? (
                    visibleEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))
                  ) : (
                    <p className="rounded-xl bg-[#E7EDFA] p-5 text-center text-[#00214F]">
                      No events are available for this location yet.
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>

          <aside className="flex flex-col gap-5">
            <Calendar events={events} currentDate={currentDate} />

            <section className="rounded-2xl border border-[#00214F] bg-white p-5">
              <h2 className="border-b-2 border-[#004CB5] pb-2 text-lg font-semibold text-[#00214F]">
                Legend
              </h2>

              <div className="mt-4 flex flex-col gap-3">
                {categoryLocation.map((category) => (
                  <div key={category.name} className="flex items-center gap-3">
                    <span
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm text-[#00214F]">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default EventHub;