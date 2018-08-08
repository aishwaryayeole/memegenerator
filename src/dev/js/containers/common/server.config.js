// messageResource.init({
//     // path to directory containing message resource files(.properties files),
//     // give empty string or discard this configuration if files are in the
//     // same directory as that of html file.
//     filePath: './properties'
// });

let env = 'local';
// messageResource.load('hostname', () => {
//     env = messageResource.get(window.location.hostname, 'hostname')
// });

// messageResource.load('configuration', () => {
//     // load each key , value from property file and return single JSON
//     // sessionStorage.setItem("serverIP", messageResource.get(env + '.serverIP', 'configuration'));
//     // sessionStorage.setItem("protocol", messageResource.get(env + '.protocol', 'configuration'));
//     // sessionStorage.setItem("portNo", messageResource.get(env + '.portNo', 'configuration'));
// });

// const serverIP = sessionStorage.getItem('serverIP');
const serverIP ='localhost';
// const protocol = sessionStorage.getItem('protocol');
const protocol ='http';
// const portNo = sessionStorage.getItem('portNo');
const portNo ='8080';

export function getServerUrl() {
//   let context = sessionStorage.getItem('serverIP') == 'localhost' ? '' : '/meme-gen';
    return protocol + '://' + serverIP + ':' + portNo + '/meme-gen';
}
