export type UserId = string;

export interface UserData {
  id: UserId;
  name: string;
}

export const loginUserId = '2';

export const users: UserData[] = [
  {
    id: '0',
    name: 'user-0',
  },
  {
    id: '1',
    name: 'user-1',
  },
  {
    id: '2',
    name: 'user-2',
  },
];

export const authentication = (): string | false => {
  return loginUserId;
};
