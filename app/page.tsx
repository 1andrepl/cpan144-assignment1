import WelcomeCard from "./components/WelcomeCard";

export default function Home() {
  return (
    <main>
      {/* Main welcome content for the home page */}
      <h1>Welcome to My Front-End Development Application</h1>

      <p>
        This application demonstrates key React and Next.js concepts through
        interactive components and user interactions.
      </p>

      {/* Passes the title prop to the WelcomeCard component */}
      <WelcomeCard title="Assignment Features" />
    </main>
  );
}