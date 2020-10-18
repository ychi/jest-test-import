module.exports = {
    overrides: [
      // we want this file to keep `import()`, so exclude the transform for it
      {
        plugins: ['@babel/plugin-syntax-dynamic-import'],
        presets: [
            [
                '@babel/preset-env',
                {
                exclude: ['@babel/plugin-proposal-dynamic-import'],
                shippedProposals: true,
                targets: {node: "10.14.2"},
                }
            ]
        ],
        test: [
          'src/importing.js',
        ],
      },
    ],
    plugins: [
      ['@babel/plugin-transform-modules-commonjs', {allowTopLevelThis: true}],
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          shippedProposals: true,
          targets: {node: "10.14.2"},
        },
      ],
    ],
  };