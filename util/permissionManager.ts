import { Role } from './types';

export function hasPower(role: Role, power: number): Boolean {
  return role.power >= power;
}
