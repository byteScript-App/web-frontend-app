import { ErrorPage } from '@/widgets';
import React, { ErrorInfo, Suspense } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: undefined };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// You can also log the error to an error reporting service
		console.error(error, errorInfo);
	}

	render() {
		const { hasError, error } = this.state;
		const { children } = this.props;

		if (hasError) {
			// You can render any custom fallback UI
			return (
				<Suspense fallback=''>
					<ErrorPage error={error} />
				</Suspense>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
