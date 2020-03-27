import { UserId } from './auth';

export type ArticleId = string;

export interface ContentProps {
  id: ArticleId;
  title: string;
  userId: string;
  create: string;
}

export const articles: ContentProps[] = [
  {
    id: '00',
    title: 'hello',
    userId: '0',
    create: '2020/02/20',
  },
  {
    id: '01',
    title: 'こんにちは',
    userId: '0',
    create: '2020/02/01',
  },
  {
    id: '02',
    title: 'おはよう',
    userId: '2',
    create: '2020/02/20',
  },
  {
    id: '03',
    title: 'こんばんわ',
    userId: '1',
    create: '2020/02/20',
  },
  {
    id: '04',
    title: 'てすと',
    userId: '2',
    create: '2020/02/20',
  },
];

export const getArticle = (articleId: ArticleId): ContentProps | false => {
  const article = articles.find(a => a.id === articleId);
  if (article === undefined) {
    return false;
  }

  return article;
};

export const getArticleList = (): ContentProps[] => {
  return articles;
};

export const getMyArticle = (
  loginUserId: UserId,
  articleId: ArticleId,
): ContentProps | false => {
  const myArticle = articles.find(
    article => article.id === articleId && article.userId === loginUserId,
  );
  if (myArticle === undefined) {
    return false;
  }

  return myArticle;
};

export const getMyArticleList = (loginUserId: UserId): ContentProps[] => {
  const myArticle = articles.filter(a => a.userId === loginUserId);

  return myArticle;
};
