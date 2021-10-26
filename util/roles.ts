import { Role } from './types';

export const roles: Role[] = [
  {
    id: 1,
    name: 'Administrator',
    power: 3,
  },
  {
    id: 2,
    name: 'Developer',
    power: 1,
  },
  {
    id: 3,
    name: 'Moderator',
    power: 2,
  },
];

export function getRole(id: number): Role {
  return roles.filter((role) => role.id === id)[0];
}
