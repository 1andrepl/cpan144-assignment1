"use client";

import { useState } from "react";

type WelcomeCardProps = {
  title: string;
};

export default function WelcomeCard({ title }: WelcomeCardProps) {
  // Controls whether the assignment information is visible
  const [showMessage, setShowMessage] = useState(false);

  // Toggles the message when the button is clicked
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <section>
      <h2>{title}</h2>

      <button onClick={toggleMessage}>
        {showMessage ? "Hide Features" : "View Features"}
      </button>

      {/* Displays the main concepts demonstrated in the application */}
      {showMessage && (
        <p>
          This application demonstrates components, props, state management,
          event handling, and conditional rendering using React and Next.js.
        </p>
      )}
    </section>
  );
}