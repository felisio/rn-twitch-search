const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create React Native Component',
    defaultCase: '(pascalCase)',
    entry: {
        folderPath: './tools/templates/',
    },
    stringReplacers: ['__model__'],
    output: {
        path: './src/components/__model__(pascalCase)',
        pathAndFileNameDefaultCase: '(pascalCase)',
    },
    onComplete: (results) => {
        console.log(`results`, results);
    },
},
])