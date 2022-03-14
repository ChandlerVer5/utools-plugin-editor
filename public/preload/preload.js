const { shell } = require('electron');
const { execSync } = require('child_process');
const fs = require('fs');
const cp = require('child_process');

const hostsFile =
  'win32' === process.platform
    ? `${process.env.windir || 'C:\\WINDOWS'}\\system32\\drivers\\etc\\hosts`
    : '/etc/hosts';

window.hostsFilePath = hostsFile;

window.hosts = {};
window.hosts.read = function () {
  if (!fs.existsSync(hostsFile))
    throw new Error(hostsFile + '\u6587\u4ef6\u4e0d\u5b58\u5728');
  let e = fs.readFileSync(hostsFile, {
    encoding: 'utf8'
  });
  return e;
};


window.openHelpUrl = function () {
  shell.openExternal('https://yuanliao.info/d/71');
};

