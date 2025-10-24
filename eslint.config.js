import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	// Ignore build outputs and dependencies
	{
		ignores: ['dist', 'node_modules', 'build', '.vite']
	},

	// Base configurations
	js.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,

	// Main configuration for TypeScript/React files
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ['./tsconfig.json', './tsconfig.node.json'],
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
		}
	},

	// Configuration for config files (they don't need type checking)
	{
		files: ['**/*.config.{js,ts}', 'vite.config.ts'],
		...tseslint.configs.disableTypeChecked
	}
);
