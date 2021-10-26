import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';
import { Article, Thread, User } from './types';

dotenvSafe.config();

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getUsers() {
  const response = await sql`
    SELECT * FROM forum_users;
  `;
  return response.map((responseItem) => {
    return camelcaseKeys(responseItem);
  });
}

export async function getUser(id: number) {
  const response = await sql`
    SELECT * FROM forum_users WHERE id=${id};
  `;
  return camelcaseKeys(response[0]);
}

export async function getUserByCredentails(
  optionType: string,
  usernameOption: string,
  password: string,
) {
  const response = await sql`
    SELECT * FROM forum_users WHERE ${optionType}=${usernameOption} AND password=${password};
  `;
  return camelcaseKeys(response[0]);
}

export async function createUser(user: User) {
  const response = await sql`
    INSERT INTO forum_users VALUES (user);
  `;
}
