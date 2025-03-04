module.exports = {
	presets: [
		['@babel/env', {
			targets: {
				node: 'current',
			},
			// useBuiltIns: 'entry', // usage | entry | false (default is false)
		}],
	],
	plugins: [
		// '@babel/proposal-pipeline-operator' // NOT WORKING
	]
}
