'use server'

async function signInFn(form: FormData) {
	for (const [key, value] of form) {
		console.log(`(${key}, ${value})`);
	}
	return new Error('Boom');
}

export {
	signInFn
}
