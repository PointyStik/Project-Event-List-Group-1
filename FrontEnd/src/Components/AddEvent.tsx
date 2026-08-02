import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";

const API_BASE_URL = "http://localhost:3000"; // Replace later if needed
const EVENTS_ENDPOINT = "/api/events";

const locations = [
  "Greater Jakarta",
  "Bandung",
  "Malang",
  "Semarang",
  "Online",
];

function AddEvent() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const eventData = {
      name: String(formData.get("name")),
      description: String(formData.get("description")),
      date: new Date(`${String(formData.get("date"))}T00:00:00.000Z`).toISOString(),
      location,
      registrationLink: String(formData.get("registrationLink")),
    };

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${API_BASE_URL}${EVENTS_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      navigate("/");
    } catch {
      setMessage(
        "Could not submit the event. Check that the backend is running and that API_BASE_URL is correct.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-event-page">
      <SideNav />

      <main className="add-event-content">
        <div className="add-event-heading">
          <h1>Add Event</h1>
          <p>Share your event with the HIMTI EventHub community.</p>
        </div>

        <form className="event-form" onSubmit={handleSubmit}>
          <section className="event-details-card">
            <h2>Event details</h2>

            <label htmlFor="event-name">
              Event Name <span>*</span>
            </label>
            <input
              id="event-name"
              name="name"
              placeholder="Insert event name"
              required
            />

            <label htmlFor="event-date">
              Event Date <span>*</span>
            </label>
            <input id="event-date" name="date" type="date" required />

            <fieldset>
              <legend>
                Location <span>*</span>
              </legend>

              <div className="location-options">
                {locations.map((item) => (
                  <label className="radio-option" key={item}>
                    <input
                      type="radio"
                      name="location"
                      value={item}
                      checked={location === item}
                      onChange={(event) => setLocation(event.target.value)}
                      required
                    />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <label htmlFor="registration-link">
              Registration Link <span>*</span>
            </label>
            <input
              id="registration-link"
              name="registrationLink"
              type="url"
              placeholder="Insert registration link"
              required
            />

            <label htmlFor="event-description">
              Description <span>*</span>
            </label>
            <textarea
              id="event-description"
              name="description"
              placeholder="Description"
              rows={5}
              required
            />
          </section>

          <aside className="event-submit-panel">
            <div className="image-upload cursor-default">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Zm2 11.75h12l-3.7-4.6-2.75 3.25-1.85-2.15L6 17.25ZM9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
              </svg>
              <span>Image upload is not available yet</span>
              <small>The current backend event model has no image field.</small>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            <p className="submit-help">
              Please make sure you have entered the correct event details before
              you submit.
            </p>

            {message && (
              <p className="submit-success" role="alert">
                {message}
              </p>
            )}
          </aside>
        </form>
      </main>
    </div>
  );
}

export default AddEvent;