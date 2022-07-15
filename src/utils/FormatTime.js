import moment from "moment-timezone";

const FormatTime = (timestamp, timezone, formatType) => {
  return moment.tz(timestamp * 1000, timezone).format(formatType);
};

export default FormatTime;
