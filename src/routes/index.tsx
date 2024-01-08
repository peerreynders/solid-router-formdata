import { useSubmission, type RouteSectionProps } from '@solidjs/router';
import { signIn } from '../api';

export default function Login(_props: RouteSectionProps) {
	useSubmission(signIn);
	return (
		<div class="c-login">
			<h1 class="c-login__header">Demo Login</h1>
			<div>
				<form action={signIn} method="post" class="c-login__form">
					<div>
						<label for="email">Email address</label>
						<input
							id="email"
							class="c-login__email"
							required
							name="email"
							type="email"
							autocomplete="email"
							value="kody@example.com"
						/>
					</div>
					<div>
						<label for="password">Password</label>
						<input
							id="password"
							class="c-login__password"
							name="password"
							type="text"
							autocomplete="current-password"
							value="twixrox"
						/>
					</div>			 		
					<button type="submit" name="kind" value="login">
						Log In
					</button>
					<button type="submit" name="kind" value="signup">
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
}

