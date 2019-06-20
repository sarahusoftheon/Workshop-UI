# Workshop CSS Custom Theme Generator CLI

> Welcome! Please see the below instructions how to generate your own custom themes in workshop:

## NEW Instructions:

In the npm directory, enter this into the console:
`node theme-generator.js`

## Instructions:

* Update the color codes in the `_variables.scss` file.
* Open the terminal in the custom-theme-generator folder
    * Click on address bar, alternatively press Alt+D
    * Now when address bar is highlighted, type cmd in the bar.
    * Press Enter key
* **NOTE**: If there is no `node_modules` folder in the `NPM` folder (the directory above this), then enter `npm install` in the command prompt before proceeding to the next step.
* In the command prompt type the command: `npm run build-css`
* Press the enter key
* The new file `workshop.custom.min.css` will generate! _Tada!_

### Additional Tips & Tricks:
* The `npm run build-css` command can be run multiple times, and will always generate (& override) a `workshop.custom.min.css` file.
* You can test your new theme by opening the `index.html` file in your browser (located the custom-theme-generator folder).

todo: look into this:
https://stackoverflow.com/questions/15136952/can-a-c-sharp-application-communicate-with-node-js-code
https://stackoverflow.com/questions/35312174/start-nodejs-application-from-c-sharp-web-form-application

Put this in your C#:

 Process p = new Process();
            p.StartInfo.UseShellExecute = false;
            p.StartInfo.RedirectStandardOutput = true;
            p.StartInfo.RedirectStandardError = true;
            p.StartInfo.RedirectStandardInput = true;
            p.StartInfo.FileName = @"c:\node\node.exe";**//Path to node installed folder****
            string argument = "\\ bundle\main.js";
            p.StartInfo.Arguments = @argument;
            p.Start();