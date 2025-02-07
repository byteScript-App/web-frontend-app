import { FC } from 'react';

import { ErrorPageProps } from './types';

export const ErrorPage: FC<ErrorPageProps> = ({ className, error }) => {
	const reloadPage = () => {
		location.reload();
	};

	// TODO: Replace text with i18, replace button with <Button/> component
	return (
		<div className={className}>
			<p>Something went wrong! ErrorBoundary handled an error...</p>
			{error && (
				<>
					<code>{error.name}</code>
					<code>{error.message}</code>
					<code>{error.stack}</code>
				</>
			)}
			<button onClick={reloadPage}>Refresh page</button>
		</div>
	);
};
