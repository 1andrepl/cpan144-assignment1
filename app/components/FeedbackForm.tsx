"use client";

import { useState } from "react";

type FeedbackFormProps = {
  formTitle: string;
};

export default function FeedbackForm({
  formTitle,
}: FeedbackFormProps) {
  // Stores the form input values and submission status
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handles the form submission without reloading the page
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section>
      <h2>{formTitle}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setSubmitted(false);
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Feedback:</label>

          <textarea
            id="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
              setSubmitted(false);
            }}
            required
          />
        </div>

        <button type="submit">Submit Feedback</button>
      </form>

      {/* Shows confirmation only after the form is submitted */}
      {submitted && (
        <div>
          <h3>Thank you, {name}!</h3>
          <p>Your feedback was submitted successfully.</p>
          <p>Your message: {message}</p>
        </div>
      )}
    </section>
  );
}