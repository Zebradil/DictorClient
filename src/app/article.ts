import { ArticleLink } from './article-link';
import { ArticleComment } from './article-comment';
import { Meaning } from './meaning';

export class Article {
  constructor(
    public id: number,
    public grammar: string,
    public title: string,
    public dictionary_id: number,
    public links: ArticleLink[] = [],
    public comments: ArticleComment[] = [],
    public meanings: Meaning[] = [],
  ) { }
}
