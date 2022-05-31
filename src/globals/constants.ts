export const AUTH_TOKEN_KEY = "GITLABCODE_PEROSONAL_AUTH_TOKEN";
export const GITLAB_INSTANCE_KEY = "GITLABCODE_GITLAB_INSTANCE_KEY";
export const GROUP_VIEW_FOCUS = "GROUP_VIEW_FOCUS";
export const FOCUED_TREEVIEW_ITEM = "FOCUED_TREEVIEW_ITEM";
export const UPDATE_FOCUSED_TV_ITEM = 'UPDATE_FOCUSED_TV_ITEM'
export const enum VALIDATION_RULES {
	GitlabGroupName = 0,
	GitlabGroupPath,
	NotEmptyOrNull,
}
export enum IssueViewEvents {
    GROUP_SELECTED = 0,//'GROUP_SELECTED',
    PROJECT_SELECTED,// = 'PROJECT_SELECTED',
    API_TOKEN,// = 'API_TOKEN'
}