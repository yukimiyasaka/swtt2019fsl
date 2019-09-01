const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(process.cwd(),'build')));

function isStatic(url) {
    var statics = /.*\.[\w\d]+(\?.*)?$/i
    return statics.test(url);
}

app.get('*', (req, res, next) => {
    if(!isStatic(req.url)) {
        res.status(200).sendFile(path.join(process.cwd(),'build','index.html'));
    } else {
        res.status(404).send('404 Not found: '+req.url);
    }
});

app.listen(port);