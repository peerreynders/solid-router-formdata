import { action } from '@solidjs/router';
import { signInFn } from './server';

const signIn = action(signInFn);

export { signIn };
