export function weatherDesc(weatherCode) {
  switch (weatherCode) {
    case 0:
    case 1:
      return "sunny";
    case 2:
      return "cloudy";
    case 3:
      return "partially cloudy";
    case 51:
    case 53:
    case 55:
      return "rainy";
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return "heavy rain";
    case 95:
    case 96:
    case 99:
      return "thunder";
    default:
      return "No info";
  }
}
