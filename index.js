var http = require('http');
var fs = require('fs');

var bing = 'www.bing.com';
var api = '/HPImageArchive.aspx?format=xml&idx=$idx&n=1';


var options = {
    method: 'GET',
    path: api,
    hostname: bing
}

var re = /<urlBase>(.*)<\/urlBase>/;

function getPicUrl(callback) {
    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        var data = '';

        res.on('data', function(chunk) {
            data += chunk;
        });

        res.on('end', function() {
            var url = re.exec(data)[1];
            callback(null, 'http://' + bing + url + '_1366x768.jpg');
        });

        res.on('error', function(e) {
            callback(e);
        })

    });

    req.end();
}

exports.getPicUrl = getPicUrl;
