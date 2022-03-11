import images from "../meta.json";

export function getSeasonFormMonth(month) {
  switch (month) {
    case 3:
    case 4:
    case 5:
      return [3, 4, 5];
    case 6:
    case 7:
    case 8:
      return [6, 7, 8];
    case 9:
    case 10:
    case 11:
      return [9, 10, 11];
    default:
      return [12, 1, 2];
  }
}

export function getCurrentSeason() {
  const month = new Date().getMonth;
  return getSeasonFormMonth(month);
}

export function selectSeasonal(images) {
  const seasonal = images.filter((i) => {
    const month = parseInt(i.dateTime.split(":")[1], 10);
    const season = getSeason();
    return season.indexOf(month) > -1 ? true : false;
  });
  if (seasonal.length === 0) {
    throw new Error("no images");
  }
  const randomInSeasonIndex = Math.floor(Math.random() * seasonal.length - 1);
  return seasonal[randomInSeasonIndex];
}

export function getImage() {
  const seasonal = images.filter((i) => {
    const month = parseInt(i.dateTime.split(":")[1], 10);
    return [12, 1, 2].indexOf(month) > -1 ? true : false;
  });
  if (seasonal.length === 0) {
    throw new Error("no images");
  }
  const randomInSeasonIndex = Math.floor(Math.random() * seasonal.length - 1);
  return seasonal[randomInSeasonIndex];
}

export default getImage;
