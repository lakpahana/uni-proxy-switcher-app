const { ipcRenderer } = require('electron');

// document.getElementById('button1').addEventListener('click', () => {
//     ipcRenderer.send('execute-command', 'echo "Command 1 executed"');
// });

// document.getElementById('button2').addEventListener('click', () => {
//     ipcRenderer.send('execute-command', 'echo "Command 2 executed"');
// });

ipcRenderer.on('command-result', (event, result) => {
    console.log(result);
    // You can display the result in the UI or perform other actions.
});
