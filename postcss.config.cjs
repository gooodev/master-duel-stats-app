module.exports = {
	plugins: [
		require('@csstools/postcss-global-data')({
			files: ["src/lib/components/styles/global.postcss"]
		}),
		require('postcss-preset-env')({ stage: 1 }),
		require('autoprefixer'),
	]
};
