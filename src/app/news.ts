import { newsSource } from "./newsSource";

export class News {
  id: number;
  title: string;
  link: string;
  imageSrc: string;
  pubTime;
  newsDate: string;
  newsSource: newsSource;
}
