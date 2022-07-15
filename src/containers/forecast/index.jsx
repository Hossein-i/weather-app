import DayComponent from "../../components/weather/day";
import TimeframeComponent from "../../components/weather/timeframe";

const ForecastContainer = ({ weatherForecast }) => {
  const { days, timeframes, timezone } = weatherForecast;

  return (
    <>
      <div>
        <span
          style={{ padding: "1rem", fontSize: "1.25rem", fontWeight: "bold" }}
        >
          3-Day Forecast
        </span>
        <div style={{ padding: "1rem", display: "grid", gap: "0.5rem" }}>
          {days.map((day, index) => (
            <DayComponent day={day} key={index} />
          ))}
        </div>
      </div>
      <div>
        <span
          style={{ padding: "1rem", fontSize: "1.25rem", fontWeight: "bold" }}
        >
          Today
        </span>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
          }}
        >
          {timeframes.map((timeframe, index) => (
            <TimeframeComponent
              timeframe={{ timeframe, timezone }}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ForecastContainer;
