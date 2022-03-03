import { language } from './language';

export interface IProject {
  title: string;
  shortDescription: string;
  description: string;
  cardBanner: string;
  repositoryLink: string;
  showcaseLink: string;
  primaryLanguage: string;
  languages: language[];
  lastUpdate: string;
}
