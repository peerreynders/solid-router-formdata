// @refresh reload
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start';
import { Suspense } from 'solid-js';
import './styles.css';

export default function App() {
	return (
		<Router
			root={(props) => (<Suspense>{props.children}</Suspense>)}
		>
			<FileRoutes />
		</Router>
	);
}