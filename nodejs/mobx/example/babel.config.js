const presets = [
    [
	"@babel/env",
	{
	    targets: {
		edge: "17",
		firefox: "60",
		chrome: "67",
		safari: "11.1",
	    },
	    // useBuiltIns: "usage", <-- https://github.com/zloirock/core-js/issues/500#issuecomment-474685350
	},
    ],
];

const plugins = [
    [
	"@babel/plugin-proposal-decorators",
	{
	    legacy: true
	}
    ],
    [
	"@babel/plugin-proposal-class-properties",
	{
	    loose: true
	}
    ]
]

module.exports = { presets, plugins };
