const http = require('http');

const bing = 'www.bing.com';
const api = '/HPImageArchive.aspx?format=xml&idx=$idx&n=1';

const options = {
    method: 'GET',
    path: api,
    hostname: bing
}

const re = /<urlBase>(.*)<\/urlBase>/;

const getPicUrl = (callback, userOptions = { width: 1366, height: 768 }) => {
    const req = http.request(options, (res) => {
        res.setEncoding('utf8');
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const url = re.exec(data)[1];
            callback(null, `http://${bing}${url}_${userOptions.width}x${userOptions.height}.jpg`);
            //callback(null, 'http://' + bing + url + '_1366x768.jpg');
        });

        res.on('error', (e) => {
            callback(e);
        })

    });

    req.end();
}

exports.getPicUrl = getPicUrl;
