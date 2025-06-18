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
				'feat', // A new feature added to the codebase.
				'fix', // A bug fix or issue resolution in the codebase.
				'chore', // Routine task updates or maintenance (e.g., dependencies, tooling).
				'docs', // Changes or updates to documentation only.
				'test', // Adding or updating tests (unit, integration, etc.).
				'style', // Code style and formatting changes (e.g., whitespace, linting).
				'refactor', // Code changes that neither fix a bug nor add a feature, improving readability or structure.
				'perf', // Performance improvement or optimization.
				'build', // Changes to the build system, package manager configurations, or external dependencies.
				'ci', // Changes to continuous integration (CI) configurations or scripts.
				'revert', // Reverts a previous commit or a rollback of changes.
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
