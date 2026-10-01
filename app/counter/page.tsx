import Counter from "../components/Counter";

export default function CounterPage() {
  return (
    <main>
      <h1>Counter</h1>

      <p>Use the buttons below to change the counter value.</p>

      {/* Passes the title and initial value to the Counter component */}
      <Counter
        title="Interactive Counter"
        initialValue={0}
      />
    </main>
  );
}