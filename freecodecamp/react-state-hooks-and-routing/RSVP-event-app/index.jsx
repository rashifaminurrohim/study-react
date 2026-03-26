const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [dietary, setDietary] = useState("");
  const [guest, setGuest] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-wrapper">
      <h1>Event RSVP Form</h1>

      <form className="form-wrapper" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Number of Attendees:
          <input
            type="number"
            min="1"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            required
          />
        </label>

        <label>
          Dietary Preferences:
          <input
            type="text"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
          />
        </label>

        <label>
          Bring additional guest?
          <input
            type="checkbox"
            checked={guest}
            onChange={(e) => setGuest(e.target.checked)}
          />
        </label>

        <button type="submit">Submit RSVP</button>
      </form>

      {submitted && (
        <div>
          <h2>RSVP Submitted!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of Attendees: {attendees}</p>
          <p>Dietary Preferences: {dietary ? dietary : "None"}</p>
          <p>Bringing others: {guest ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
