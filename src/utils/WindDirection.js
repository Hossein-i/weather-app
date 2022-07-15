const getWindDirection = (deg) => {
  if (deg >= 0 && deg <= 45) {
    return "up-right";
  } else if (deg >= 46 && deg <= 90) {
    return "right";
  } else if (deg >= 91 && deg <= 135) {
    return "down-right";
  } else if (deg >= 136 && deg <= 180) {
    return "down";
  } else if (deg >= 181 && deg <= 225) {
    return "down-left";
  } else if (deg >= 226 && deg <= 270) {
    return "left";
  } else if (deg >= 271 && deg <= 315) {
    return "up-left";
  } else {
    return "up";
  }
};

export default getWindDirection;
