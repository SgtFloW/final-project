import { LoginOptions } from './types';

export async function login(usernameOption: string, password: string) {
  const { getUserByCredentails } = await import('../util/database');
  if (usernameOption === '' || password === '') {
    return {
      errorCode: 2,
      errorMessage: 'Username or password need to be filled',
    };
  }
  if (usernameOption.includes('@')) {
    const response = await getUserByCredentails(
      LoginOptions.EMAIL,
      usernameOption,
      password,
    );
  } else {
    const response = await getUserByCredentails(
      LoginOptions.USERNAME,
      usernameOption,
      password,
    );
  }
}
