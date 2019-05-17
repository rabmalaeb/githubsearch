import { Repository } from './repositrory';
import { Owner } from './owner';

export interface Commit {
  author: Owner;
  comments_url: string;
  commit: {};
  committer: Owner;
  html_url: string;
  node_id: string;
  parents: [{}];
  repository: Repository;
  score: string;
  sha: string;
  url: string;
}
