import fs from 'fs'

export const logs = (req, res, next) => {
    fs.appendFile('logs.txt', `request time:${new Date().toISOString()}. method:${req.method}. url:${req.url}. ip:${req.ip}.\n`, (err) => {
        if (err) throw err;
        console.log('Log Saved!');
    });
    next()
}
