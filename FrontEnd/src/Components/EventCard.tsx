import type { CalendarEvent } from "./Calendar";

interface EventCardProps {
  event: CalendarEvent;
}

function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="flex w-full flex-col gap-4 rounded-2xl bg-[#7599CA] p-4 sm:flex-row sm:items-center">
      <div className="flex aspect-square w-24 shrink-0 items-center justify-center rounded-2xl bg-[#E7EDFA] sm:w-32">
        <img
          src="/Logo/LOGOHIMTI-Blue.svg"
          alt="HIMTI EventHub"
          className="h-full w-full object-contain p-3"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <h2 className="text-xl font-semibold text-[#00214F]">
          {event.name}
        </h2>

        <div className="rounded-xl bg-white p-3">
          <p className="text-sm text-slate-700">{event.description}</p>
        </div>

        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#004CB5] px-6 py-2 text-center font-medium text-white hover:bg-[#003a8c]"
          >
            Register
          </a>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border-2 border-[#004CB5] bg-white px-3 py-2 text-sm text-[#00214F]">
              📍 {event.location}
            </span>

            <span className="rounded-full border-2 border-[#004CB5] bg-white px-3 py-2 text-sm text-[#00214F]">
              📅 {formattedDate}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventCard;