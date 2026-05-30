export default function ClockWrapper() {
  return <Clock time={new Date()} />;
}

function Clock({ time }: { time: Date }) {
  const hours = time.getHours();
  const className = hours >= 0 && hours <= 6 ? "night" : "day";

  return <h1 id="time" className={className}>{time.toLocaleTimeString()}</h1>;
}