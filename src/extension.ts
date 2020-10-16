// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "mwwm-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('mwwm-generator.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from mwwm-generator!');
	});

	let widgetDisposable = vscode.commands.registerCommand('mwwm-generator.create-widget', (...args: any[]) => {
		vscode.window.showInformationMessage('Create widget!');
		// TODO notification doesn't shown
	});

	let screenDisposable = vscode.commands.registerCommand('mwwm-generator.create-screen', (...args: any[]) => {
		vscode.window.showInformationMessage('Create screen!');
		// TODO notification doesn't shown
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(widgetDisposable);
	context.subscriptions.push(screenDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
