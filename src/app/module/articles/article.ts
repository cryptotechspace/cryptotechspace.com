import { ArticleSource } from './articleSource';

export class Article {
  id: number;
  title: string;
  link: string;
  imageSrc: string;
  pubTime;
  articleSource: ArticleSource;
}
