/** Workshop UI Theme Generator Console App */
// node js imports
const { execSync } = require('child_process');
const fs = require('fs');

/** Read File Directory */
const themeFolder = './custom-theme-generator/themes';
const compileFile = './custom-theme-generator/generator/workshop.custom.scss';

// Iterates through variables files in custom-theme-generator/themes directory and compiles them
fs.readdir(themeFolder, (err, files) => {
  for (const file of files) {
    themeFile = file;
    themeName = file.split('-')[1].split('.')[0]; // ie. 'blue' from '_variables-blue.scss'

    // Read the file that's going to be compiled
    var contents = fs.readFileSync(compileFile, 'utf8', function(err, data) {
      if (err) return console.log(err);
    });

    // replace the theme
    result = contents.replace(
      `@import "./_variables.scss";`,
      `@import "../themes/${themeFile}";`
    );

    console.log(`retrieved ${themeFile}...`);

    try {
      fs.writeFileSync(compileFile, result, 'utf8');
      console.log('initializing scss...');
    } catch (e) {
      console.error(e);
    }
    try {
      // executes the node command synchronously
      var compileScssCmd = `node-sass --output-style compressed --include-path scss ${compileFile} ./custom-theme-generator/themes-output/workshop.${themeName}.min.css`;
      // runs the node-scss command
      execSync(compileScssCmd);
      console.log(`${themeName} theme compiled`);
    } catch (e) {
      console.error(e);
    }

    // revert the theme when finished
    resultReverse = contents.replace(
      `@import "../themes/${themeFile}";`,
      `@import "./_variables.scss";`
    );
    try {
      fs.writeFileSync(compileFile, resultReverse, 'utf8');
      console.log('success');
    } catch (e) {
      console.error(e);
    }
    console.log('-----');
  }
});
