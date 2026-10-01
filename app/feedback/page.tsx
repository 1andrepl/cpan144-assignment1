import FeedbackForm from "../components/FeedbackForm";

export default function FeedbackPage() {
  return (
    <main>
      <h1>Feedback</h1>

      <p>Please share your feedback about this application.</p>

      {/* Passes the form title to the FeedbackForm component */}
      <FeedbackForm formTitle="Share Your Feedback" />
    </main>
  );
}