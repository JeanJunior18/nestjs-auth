import { hash, compareSync } from 'bcrypt';

export function generatePassword(password: string): Promise<string> {
  return hash(password, 10);
}

export function validatePassword(
  password: string,
  hashedPassword: string,
): boolean {
  return compareSync(password, hashedPassword);
}
