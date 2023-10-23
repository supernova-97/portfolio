export function weatherDesc(weatherCode) {
  switch (weatherCode) {
    case 0:
    case 1:
      return "sunny";
    case 2:
    case 3:
      return "cloudy";
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

export function weatherIcons(weatherCode) {
  switch (weatherCode) {
    case 0:
    case 1:
      return "01d";
    case 2:
      return "03";
    case 3:
      return "04";
    case 51:
    case 53:
    case 55:
      return "02";
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      return "05";
    case 95:
    case 96:
    case 99:
      return "06";
    default:
      return "No Icon";
  }
}
