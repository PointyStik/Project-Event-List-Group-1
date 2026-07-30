import { useState, type ChangeEvent, type FormEvent } from "react";
import SideNav from "./SideNav";

const locationCategories = [
  "Greater Jakarta",
  "Bandung",
  "Malang",
  "Semarang",
  "Online",
];

function AddEvent() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageName, setImageName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setImageName(file.name);

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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
              name="eventName"
              placeholder="Insert event name"
              required
            />

            <label htmlFor="event-location">
              Location <span>*</span>
            </label>
            <input
              id="event-location"
              name="location"
              placeholder="Insert event address/location"
              required
            />

            <fieldset>
              <legend>
                Category of Location <span>*</span>
              </legend>

              <div className="location-options">
                {locationCategories.map((category) => (
                  <label className="radio-option" key={category}>
                    <input
                      type="radio"
                      name="locationCategory"
                      value={category}
                      required
                    />
                    {category}
                  </label>
                ))}
              </div>
            </fieldset>

            <label htmlFor="registration-link">
              Registration <span>*</span>
            </label>
            <input
              id="registration-link"
              name="registration"
              type="url"
              placeholder="Insert registration link"
              required
            />

            <label htmlFor="event-price">Price</label>
            <input
              id="event-price"
              name="price"
              placeholder="Insert entry fee (if free, just input -)"
            />

            <label htmlFor="event-description">Description</label>
            <textarea
              id="event-description"
              name="description"
              placeholder="Description"
              rows={5}
            />
          </section>

          <aside className="event-submit-panel">
            <label className="image-upload" htmlFor="event-image">
              {imagePreview ? (
                <img src={imagePreview} alt="Selected event preview" />
              ) : (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Zm2 11.75h12l-3.7-4.6-2.75 3.25-1.85-2.15L6 17.25ZM9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                  </svg>
                  <span>Choose an event picture</span>
                  <small>PNG, JPG, or WEBP</small>
                </>
              )}

              <input
                id="event-image"
                name="image"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleImageChange}
              />
            </label>

            {imageName && <p className="image-name">{imageName}</p>}

            <button type="submit">Submit</button>

            <p className="submit-help">
              Please make sure you have entered the correct event details
              before you submit.
            </p>

            {submitted && (
              <p className="submit-success" role="status">:D.</p>
            )}
          </aside>
        </form>
      </main>
    </div>
  );
}

export default AddEvent;