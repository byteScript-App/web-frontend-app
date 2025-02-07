import { describe, expect, it } from 'bun:test';
import { render, screen } from '@testing-library/react';

const AppComponent = () => <div>App Component</div>;

describe('render', () => {
	it('renders the main page', () => {
		render(<AppComponent />);

		expect(screen.getByText('App Component')).toBeInTheDocument();
	});
});
