import CountdownTimer from "./CountdownTimer";

function App() {
  const launchDate = "2025-06-05T00:00:00"; // Switch 2 launch date

  return (
    <div className="app-container">
      <CountdownTimer launchDate={launchDate} />
    </div>
  );
}

export default App;