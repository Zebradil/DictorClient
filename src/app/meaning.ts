import { MeaningContext } from './meaning-context';

export class Meaning {
  public id: number;
  public article_id: number;
  public code: string;
  public style: string;
  public text: string;
  public contexts: MeaningContext[] = [];
}
