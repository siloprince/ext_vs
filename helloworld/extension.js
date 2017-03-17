'use strict';
// load node_component/vscode
// reference: https://code.visualstudio.com/docs/extensionAPI/vscode-api
// download: 
let vscode = require('vscode');
exports.activate = activate;
exports.deactivate = deactivate;

function activate(context) {

    console.log('Congratulations, your extension "test" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('jp.tessellation.araki.family1', function() {
        vscode.window.showInformationMessage('Hello World333!');
        vscode.window.setStatusBarMessage('xxxxx', 10 * 1000);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('jp.tessellation.araki.family2', function() {
        vscode.window.showInformationMessage('Hello World4444!');
    }));
}

function deactivate() {}