const { ipcRenderer } = require('electron');

const nodeOn = "npm config set proxy http://10.50.225.222:3128";
const nodeOff = "npm config delete proxy";
const gitOn = "git config --global http.proxy http://10.50.225.222:3128";
const gitOff = "git config --global --unset http.proxy";

document.getElementById('node-on').addEventListener('click', () => {
    ipcRenderer.send('execute-command', nodeOn);
});

document.getElementById('node-off').addEventListener('click', () => {
    ipcRenderer.send('execute-command', nodeOff);
}
);

document.getElementById('git-on').addEventListener('click', () => {
    ipcRenderer.send('execute-command', gitOn);
}

);

document.getElementById('git-off').addEventListener('click', () => {

    ipcRenderer.send('execute-command', gitOff);

});


// document.getElementById('button1').addEventListener('click', () => {
//     ipcRenderer.send('execute-command', 'echo "Command 1 executed"');
// });

// document.getElementById('button2').addEventListener('click', () => {
//     ipcRenderer.send('execute-command', 'echo "Command 2 executed"');
// });

ipcRenderer.on('command-result', (event, result) => {
    // console.log(result);
    alert("Success");
    // You can display the result in the UI or perform other actions.
});
