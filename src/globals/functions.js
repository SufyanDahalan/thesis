// https://devblogs.microsoft.com/typescript/announcing-typescript-2-2/
// https://stackoverflow.com/a/45493827/16419931
const vscode = require("vscode");

const AUTH_TOKEN_KEY = require("./constants").AUTH_TOKEN_KEY;
const GITLAB_INSTANCE_KEY = require("./constants").GITLAB_INSTANCE_KEY;


function settings(globalState) {
	// get personal auth token and gitlab instance
	let gitlabInstance = "",
		gitlabAuthToken = "";
	const inputPersonalAuthToken = vscode.window.createInputBox();
	inputPersonalAuthToken.placeholder = "Please Enter Your Personal Authentication Token";
	inputPersonalAuthToken.onDidChangeValue((tokenInput) => {
		gitlabAuthToken = tokenInput;
	});
	inputPersonalAuthToken.onDidAccept(() => {
		globalState.update(AUTH_TOKEN_KEY, gitlabAuthToken);
		inputPersonalAuthToken.hide();
		if (!checkGitlabInstanceAndAuthToken(globalState)) {
			// optionally show some error message
			inputGitlabInstance.show();
		}
	});

	const inputGitlabInstance = vscode.window.createInputBox();
	inputGitlabInstance.placeholder = "Please Enter Your Gitlab Instance";
	inputGitlabInstance.onDidChangeValue((tokenInput) => {
		gitlabInstance = tokenInput;
	});
	inputGitlabInstance.onDidAccept(() => {
		inputGitlabInstance.hide();
		globalState.update(GITLAB_INSTANCE_KEY, gitlabInstance);
		inputPersonalAuthToken.show();
	});
	inputGitlabInstance.show();
}

function checkGitlabInstanceAndAuthToken(globalState) {
	console.log(`auth token from chechAuthToken: ${globalState.get(AUTH_TOKEN_KEY)}`);
	// TODO: actually test to authenticate with the token against the gitlab instance specified
	// AUTH_TOKEN_KEY, GITLAB_INSTANCE_KEY
	if (!!globalState.get(AUTH_TOKEN_KEY)) {
		vscode.commands.executeCommand("setContext", "GitLabCode.authenticated", true);
		return true;
	} else {
		vscode.commands.executeCommand("setContext", "GitLabCode.authenticated", false);
		return false;
	}
}
exports.checkGitlabInstanceAndAuthToken= checkGitlabInstanceAndAuthToken
exports.settings=settings