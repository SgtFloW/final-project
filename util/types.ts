export type User = {
  id: number;
  username: string;
  fullname: string;
  email: string;
  password: string;
  avatarImage: string;
  role: number;
};

export type Thread = {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  articles: Article[] | null;
};

export type Article = {
  id: number;
  author: number;
  topic: string;
  content: string;
  comments: Comment[];
};

export type Comment = {
  id: number;
  author: number;
  content: string;
};

export type Role = {
  id: number;
  name: string;
  power: number;
};

export enum LoginOptions {
  USERNAME = 'USERNAME',
  EMAIL = 'EMAIL',
}
