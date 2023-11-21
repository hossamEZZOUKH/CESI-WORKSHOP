import React, { ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

if (typeof global === 'undefined') {
	window.global = window;
}

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	state: ErrorBoundaryState = { hasError: false };

	static getDerivedStateFromError = (): ErrorBoundaryState => {
		return { hasError: true };
	};

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Logger l'erreur dans la console pour le développement
		console.error(
			'Une erreur a été capturée dans le composant ErrorBoundary :',
			error,
			errorInfo
		);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Quelque chose s'est mal passé.</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

const rootElement = document.getElementById('root');
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</React.StrictMode>
	);
}
