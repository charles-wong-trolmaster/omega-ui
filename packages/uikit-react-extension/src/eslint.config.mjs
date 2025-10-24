import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		files: ['src/**/*.ts', 'src/**/*.tsx'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin
		},
		rules: {
			...tseslint.configs.recommendedTypeChecked.rules
		}
	}
];

export default config;
