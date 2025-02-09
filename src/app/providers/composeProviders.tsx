import React from 'react';

import { ProviderComponent } from './types';

export const composeProviders = (providers: ProviderComponent[], children: React.ReactNode) => {
	return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
};
