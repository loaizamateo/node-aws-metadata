const express = require('express');
var exec = require('child_process').exec;
const app = express();

app.get('/', (req, res) => {
    exec('curl http://169.254.169.254/latest/meta-data/placement/availability-zone', function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
        res.send(stdout);
      });
});

app.listen(3000, () => {
    console.log('App listen in port 3000')
});