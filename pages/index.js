import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//import images from "../images.json";
import images from "../meta.json";
import { Time } from "../components/time";
import { Weather } from "../components/weather.tsx";

// Extract the month from the current date and use this to return the current season as an array of the 3 months on the season
function getSeason() {
  const month = new Date().getMonth;
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

function selectSeasonal(images) {
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

function getImage() {
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

const image = getImage();

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarawera Everyday</title>
        <meta name="description" content="Seasonal Photos of Lake Tarawera" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <Image
        src={`https://s3.us-west-2.amazonaws.com/nz.everyday.dev/${image.name}`}
        alt="Tarawera in Summer"
        layout="fill"
        objectFit="cover"
      />

      <footer>
        <div className="meta">
          <Time></Time>
          <div>
            <Weather></Weather>
            <span> Photo by James M</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
