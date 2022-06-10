"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[207],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=o(n),m=l,b=k["".concat(u,".").concat(m)]||k[m]||d[m]||r;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return d}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],s={},u=void 0,o={unversionedId:"api",id:"api",title:"api",description:"Modules",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/api",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"translate-your-site",permalink:"/tutorial-extras/translate-your-site"}},p={},d=[{value:"Modules",id:"modules",level:2},{value:"Classes",id:"classes",level:2},{value:"Members",id:"members",level:2},{value:"Functions",id:"functions",level:2},{value:"commands",id:"commands",level:2},{value:"IssueNode",id:"issuenode",level:2},{value:"new IssueNode()",id:"new-issuenode",level:3},{value:"Node",id:"node",level:2},{value:"new Node()",id:"new-node",level:3},{value:"issueQuery \u21d2",id:"issuequery-",level:2},{value:"issuesQuery \u21d2",id:"issuesquery-",level:2},{value:"IssueView",id:"issueview",level:2},{value:"issueQuery(issue_gid) \u21d2",id:"issuequeryissue_gid-",level:2},{value:"openProjectInGitLab()",id:"openprojectingitlab",level:2},{value:"openGroupInGitLab()",id:"opengroupingitlab",level:2},{value:"viewIssueBoard()",id:"viewissueboard",level:2},{value:"openIssueBoardInGitLab()",id:"openissueboardingitlab",level:2},{value:"openIssueListInGitLab()",id:"openissuelistingitlab",level:2},{value:"ValidateUserInput(value, rule) \u21d2",id:"validateuserinputvalue-rule-",level:2}],k={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#module_commands"},"commands")),(0,r.kt)("dd",null)),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#IssueNode"},"IssueNode")),(0,r.kt)("dd",null),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#Node"},"Node")),(0,r.kt)("dd",null)),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#issueQuery"},"issueQuery")," \u21d2"),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Issues Query")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#issuesQuery"},"issuesQuery")," \u21d2"),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Pipeline Query")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#IssueView"},"IssueView")),(0,r.kt)("dd",null)),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#issueQuery"},"issueQuery(issue_gid)")," \u21d2"),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Issue Query")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#openProjectInGitLab"},"openProjectInGitLab()")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"navigates to project in gitlab in default browser")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#openGroupInGitLab"},"openGroupInGitLab()")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"simply navigates to group in gitlab website in the default browser")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#viewIssueBoard"},"viewIssueBoard()")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"opens an issue board as a webview in vscode")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#openIssueBoardInGitLab"},"openIssueBoardInGitLab()")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"opens gitlab issue board in gitlab in the default browser")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#openIssueListInGitLab"},"openIssueListInGitLab()")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"opens gitlab issue list in gitlab in the default browser")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#ValidateUserInput"},"ValidateUserInput(value, rule)")," \u21d2"),(0,r.kt)("dd",null)),(0,r.kt)("a",{name:"module_commands"}),(0,r.kt)("h2",{id:"commands"},"commands"),(0,r.kt)("a",{name:"IssueNode"}),(0,r.kt)("h2",{id:"issuenode"},"IssueNode"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class  "),(0,r.kt)("a",{name:"new_IssueNode_new"}),(0,r.kt)("h3",{id:"new-issuenode"},"new IssueNode()"),(0,r.kt)("p",null,'vscode.TreeItem.contextValue possible values: "group", "user" value depends on kind of gitlab namespace TODO: maybe turn into enum to keep em clear? idk'),(0,r.kt)("a",{name:"Node"}),(0,r.kt)("h2",{id:"node"},"Node"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Todo")),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","maybe turn into enum to keep em clear? idk\n// Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.\n// maybe add a rule to link it to vscode api docs. see vscode.TreeItem.contextValue")),(0,r.kt)("a",{name:"new_Node_new"}),(0,r.kt)("h3",{id:"new-node"},"new Node()"),(0,r.kt)("p",null,'possible values: "group", "user", "project" value depends on kind of gitlab namespace'),(0,r.kt)("a",{name:"issueQuery"}),(0,r.kt)("h2",{id:"issuequery-"},"issueQuery \u21d2"),(0,r.kt)("p",null,"Issues Query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global variable",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("p",null,"Issues of the specified project with adequate information about them"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isGroup"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"describes whether the query targets a group or a project"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fullpath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"full path of group or project, i.e. 'gitlab-orgs' or  'gitlab-org/gitlab-foss'"))))),(0,r.kt)("a",{name:"issuesQuery"}),(0,r.kt)("h2",{id:"issuesquery-"},"issuesQuery \u21d2"),(0,r.kt)("p",null,"Pipeline Query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global variable",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("p",null,"Pipelines of the specified project with adequate information about them"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fullpath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"full path of project, i.e.  'gitlab-org/gitlab-foss'"))))),(0,r.kt)("a",{name:"IssueView"}),(0,r.kt)("h2",{id:"issueview"},"IssueView"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global variable",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Feature"),": Some extra functionality/features:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When clicking on an issue, open a webview where the issue can be seen along with all the comments.")),(0,r.kt)("p",null,"!FEATURE as a view/title action, implement ","[see issues list]"," action. This should take the user to a web view where the issues of the\nparent can be viewed in a list.\n!feature as a view/title action, implement ","[see issues list]"," action. This should take the user to a web view where the issues of the\nparent can be viewed in on a board. User can switch boards and will be able to drag and drop issues from one list to another.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Feature"),": add icon to feature. choose the icon to be based off of ",(0,r.kt)("inlineCode",{parentName:"p"},"labels"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"urgency"),", or smth else. maybe just the color to represent the label, implies\nmigrating to a custom webviewview tho",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Feature"),": add avatar of assignee to the left of the issue. might require a custom webviewview",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Todo")),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","implement actions for issues:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Comment"),(0,r.kt)("li",{parentName:"ol"},"Delete"),(0,r.kt)("li",{parentName:"ol"},"Close"),(0,r.kt)("li",{parentName:"ol"},"Create")),(0,r.kt)("a",{name:"issueQuery"}),(0,r.kt)("h2",{id:"issuequeryissue_gid-"},"issueQuery(issue_gid) \u21d2"),(0,r.kt)("p",null,"Issue Query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("p",null,"GraphQL query for an issue, including adequate  information about their labels\nand notes and authors of notes"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issue_gid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"issue_iid. The Id used in link"))))),(0,r.kt)("a",{name:"openProjectInGitLab"}),(0,r.kt)("h2",{id:"openprojectingitlab"},"openProjectInGitLab()"),(0,r.kt)("p",null,"navigates to project in gitlab in default browser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("a",{name:"openGroupInGitLab"}),(0,r.kt)("h2",{id:"opengroupingitlab"},"openGroupInGitLab()"),(0,r.kt)("p",null,"simply navigates to group in gitlab website in the default browser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("a",{name:"viewIssueBoard"}),(0,r.kt)("h2",{id:"viewissueboard"},"viewIssueBoard()"),(0,r.kt)("p",null,"opens an issue board as a webview in vscode"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("a",{name:"openIssueBoardInGitLab"}),(0,r.kt)("h2",{id:"openissueboardingitlab"},"openIssueBoardInGitLab()"),(0,r.kt)("p",null,"opens gitlab issue board in gitlab in the default browser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("a",{name:"openIssueListInGitLab"}),(0,r.kt)("h2",{id:"openissuelistingitlab"},"openIssueListInGitLab()"),(0,r.kt)("p",null,"opens gitlab issue list in gitlab in the default browser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("a",{name:"ValidateUserInput"}),(0,r.kt)("h2",{id:"validateuserinputvalue-rule-"},"ValidateUserInput(value, rule) \u21d2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("p",null,"true if value is valid according to the rule specified, false otherwise"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"string value to be validated"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rule"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Rule to be used"))))))}m.isMDXComponent=!0}}]);