import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: 'conventional-changelog-atom',
	formatter: '@commitlint/format',
	// Any rules defined here will override rules from @commitlint/config-conventional
	rules: {
		'type-enum': [
			RuleConfigSeverity.Error,
			'always',
			[
				'feat',
				'fix',
				'chore',
				'docs',
				'test',
				'style',
				'refactor',
				'perf',
				'build',
				'ci',
				'revert',
			],
		],
		'header-max-length': [2, 'always', 88],
		'subject-case': [0], // Disable case checking
	},
	/*
	 * Array of functions that return true if commitlint should ignore the given message.
	 * Given array is merged with predefined functions, which consist of matchers like:
	 *
	 * - 'Merge pull request', 'Merge X into Y' or 'Merge branch X'
	 * - 'Revert X'
	 * - 'v1.2.3' (ie semver matcher)
	 * - 'Automatic merge X' or 'Auto-merged X into Y'
	 *
	 * To see full list, check https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts.
	 * To disable those ignores and run rules always, set `defaultIgnores: false` as shown below.
	 */
	ignores: [commit => commit === ''],
	defaultIgnores: true,
	helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint', // TODO let's make our helpUrl -> README.md in our git
	prompt: {
		messages: {},
		questions: {
			type: {
				description: 'please input type:',
			},
		},
	},
};

export default Configuration;
