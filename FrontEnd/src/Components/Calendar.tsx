export interface CalendarEvent {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  registrationLink: string;
}

interface CalendarProps {
  events: CalendarEvent[];
  currentDate: Date;
}

const categoryColors: Record<string, string> = {
  "Greater Jakarta": "#FFB100",
  Bandung: "#8A38F5",
  Malang: "#004CB5",
  Semarang: "#00B5A6",
  Online: "#E03333",
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar({ events, currentDate }: CalendarProps) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateKey = (day: number) => {
    const monthText = String(month + 1).padStart(2, "0");
    const dayText = String(day).padStart(2, "0");

    return `${year}-${monthText}-${dayText}`;
  };

  const dotsForDay = (day: number) => {
    const eventsOnDay = events.filter(
      (event) => event.date.slice(0, 10) === dateKey(day),
    );

    return Array.from(
      new Set(
        eventsOnDay.map(
          (event) => categoryColors[event.location] || "#64748B",
        ),
      ),
    );
  };

  return (
    <section className="rounded-2xl border border-[#00214F] bg-white p-4">
      <div className="grid grid-cols-7 text-center">
        {weekdays.map((weekday) => (
          <p
            key={weekday}
            className="mb-3 text-xs font-semibold text-slate-500 sm:text-sm"
          >
            {weekday}
          </p>
        ))}

        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={`empty-${index}`} className="min-h-11" />
        ))}

        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const dots = dotsForDay(day);

          return (
            <div
              key={day}
              className="flex min-h-11 flex-col items-center justify-center gap-1 rounded-lg text-xs text-[#00214F] hover:bg-[#E7EDFA]"
            >
              <span>{day}</span>

              <div className="flex min-h-2 gap-0.5">
                {dots.slice(0, 4).map((color, index) => (
                  <span
                    key={`${color}-${index}`}
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Calendar;