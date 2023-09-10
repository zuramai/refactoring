import{_ as c,C as t,o as p,c as r,H as o,w as n,Q as E,k as s,a as l}from"./chunks/framework.5a42e701.js";const P=JSON.parse('{"title":"Middle Man","description":"","frontmatter":{},"headers":[],"relativePath":"martin-fowler/couplers/middle-man/index.md","filePath":"martin-fowler/couplers/middle-man/index.md"}'),y={name:"martin-fowler/couplers/middle-man/index.md"},i=E("",5),d=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ShoppingCart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," LinkedList<"),s("span",{style:{color:"#F97583"}},"Item"),s("span",{style:{color:"#E1E4E8"}},"> items;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ShoppingCart"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".items "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," LinkedList<>();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"add"),s("span",{style:{color:"#E1E4E8"}},"(Item "),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		items."),s("span",{style:{color:"#B392F0"}},"add"),s("span",{style:{color:"#E1E4E8"}},"(item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"remove"),s("span",{style:{color:"#E1E4E8"}},"(Item "),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		items."),s("span",{style:{color:"#B392F0"}},"remove"),s("span",{style:{color:"#E1E4E8"}},"(item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"double"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"totalPrice"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"double"),s("span",{style:{color:"#E1E4E8"}}," total "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0.0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"for"),s("span",{style:{color:"#E1E4E8"}}," (Item item "),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," items."),s("span",{style:{color:"#B392F0"}},"getList"),s("span",{style:{color:"#E1E4E8"}},"()) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"			total "),s("span",{style:{color:"#F97583"}},"+="),s("span",{style:{color:"#E1E4E8"}}," item."),s("span",{style:{color:"#B392F0"}},"getPrice"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," total;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ShoppingCart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," LinkedList<"),s("span",{style:{color:"#D73A49"}},"Item"),s("span",{style:{color:"#24292E"}},"> items;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ShoppingCart"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".items "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," LinkedList<>();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"add"),s("span",{style:{color:"#24292E"}},"(Item "),s("span",{style:{color:"#E36209"}},"item"),s("span",{style:{color:"#24292E"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		items."),s("span",{style:{color:"#6F42C1"}},"add"),s("span",{style:{color:"#24292E"}},"(item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"remove"),s("span",{style:{color:"#24292E"}},"(Item "),s("span",{style:{color:"#E36209"}},"item"),s("span",{style:{color:"#24292E"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		items."),s("span",{style:{color:"#6F42C1"}},"remove"),s("span",{style:{color:"#24292E"}},"(item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"double"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"totalPrice"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"double"),s("span",{style:{color:"#24292E"}}," total "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0.0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," (Item item "),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," items."),s("span",{style:{color:"#6F42C1"}},"getList"),s("span",{style:{color:"#24292E"}},"()) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"			total "),s("span",{style:{color:"#D73A49"}},"+="),s("span",{style:{color:"#24292E"}}," item."),s("span",{style:{color:"#6F42C1"}},"getPrice"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," total;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),F=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"LinkedList"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#F97583"}},"E"),s("span",{style:{color:"#E1E4E8"}},"> {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," Vector<"),s("span",{style:{color:"#F97583"}},"E"),s("span",{style:{color:"#E1E4E8"}},"> v "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," Vector<"),s("span",{style:{color:"#F97583"}},"E"),s("span",{style:{color:"#E1E4E8"}},">();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"add"),s("span",{style:{color:"#E1E4E8"}},"(E "),s("span",{style:{color:"#FFAB70"}},"o"),s("span",{style:{color:"#E1E4E8"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		v."),s("span",{style:{color:"#B392F0"}},"addElement"),s("span",{style:{color:"#E1E4E8"}},"(o);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"remove"),s("span",{style:{color:"#E1E4E8"}},"(E "),s("span",{style:{color:"#FFAB70"}},"o"),s("span",{style:{color:"#E1E4E8"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		v."),s("span",{style:{color:"#B392F0"}},"remove"),s("span",{style:{color:"#E1E4E8"}},"(o);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	@"),s("span",{style:{color:"#F97583"}},"SuppressWarnings"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"unchecked"'),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," Vector<"),s("span",{style:{color:"#F97583"}},"E"),s("span",{style:{color:"#E1E4E8"}},"> "),s("span",{style:{color:"#B392F0"}},"getList"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," (Vector"),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#E1E4E8"}},"E"),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#E1E4E8"}},") v."),s("span",{style:{color:"#B392F0"}},"clone"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"LinkedList"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#D73A49"}},"E"),s("span",{style:{color:"#24292E"}},"> {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," Vector<"),s("span",{style:{color:"#D73A49"}},"E"),s("span",{style:{color:"#24292E"}},"> v "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," Vector<"),s("span",{style:{color:"#D73A49"}},"E"),s("span",{style:{color:"#24292E"}},">();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"add"),s("span",{style:{color:"#24292E"}},"(E "),s("span",{style:{color:"#E36209"}},"o"),s("span",{style:{color:"#24292E"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		v."),s("span",{style:{color:"#6F42C1"}},"addElement"),s("span",{style:{color:"#24292E"}},"(o);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"remove"),s("span",{style:{color:"#24292E"}},"(E "),s("span",{style:{color:"#E36209"}},"o"),s("span",{style:{color:"#24292E"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		v."),s("span",{style:{color:"#6F42C1"}},"remove"),s("span",{style:{color:"#24292E"}},"(o);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	@"),s("span",{style:{color:"#D73A49"}},"SuppressWarnings"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"unchecked"'),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," Vector<"),s("span",{style:{color:"#D73A49"}},"E"),s("span",{style:{color:"#24292E"}},"> "),s("span",{style:{color:"#6F42C1"}},"getList"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," (Vector"),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#24292E"}},"E"),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}},") v."),s("span",{style:{color:"#6F42C1"}},"clone"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),m=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String name;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," price;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Item"),s("span",{style:{color:"#E1E4E8"}},"(String "),s("span",{style:{color:"#FFAB70"}},"name"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#FFAB70"}},"price"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"!"),s("span",{style:{color:"#B392F0"}},"isPriceValid"),s("span",{style:{color:"#E1E4E8"}},"(price))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"			"),s("span",{style:{color:"#F97583"}},"throw"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"IllegalArgumentException"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"invalid price"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".name "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," name;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".price "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," price;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"boolean"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"isPriceValid"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#FFAB70"}},"price"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," price "),s("span",{style:{color:"#F97583"}},">="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," String "),s("span",{style:{color:"#B392F0"}},"getName"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," name;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"getPrice"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," price;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String name;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," price;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Item"),s("span",{style:{color:"#24292E"}},"(String "),s("span",{style:{color:"#E36209"}},"name"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#E36209"}},"price"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#6F42C1"}},"isPriceValid"),s("span",{style:{color:"#24292E"}},"(price))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"			"),s("span",{style:{color:"#D73A49"}},"throw"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"IllegalArgumentException"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"invalid price"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".name "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," name;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".price "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," price;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"boolean"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"isPriceValid"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#E36209"}},"price"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," price "),s("span",{style:{color:"#D73A49"}},">="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," String "),s("span",{style:{color:"#6F42C1"}},"getName"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," name;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"getPrice"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," price;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),u=s("h2",{id:"penyelesaian",tabindex:"-1"},[l("Penyelesaian "),s("a",{class:"header-anchor",href:"#penyelesaian","aria-label":'Permalink to "Penyelesaian"'},"​")],-1),h=s("p",null,[l("Hapus si Middle Man, yaitu "),s("code",null,"LinkedList"),l(". Sekarang di package after, class "),s("code",null,"ShoppingCart"),l(" langsung mengakses "),s("code",null,"java.util.Vector"),l(".")],-1),A=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ShoppingCart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," Vector<"),s("span",{style:{color:"#F97583"}},"Item"),s("span",{style:{color:"#E1E4E8"}},"> items;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ShoppingCart"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".items "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," Vector<>();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"add"),s("span",{style:{color:"#E1E4E8"}},"(Item "),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		items."),s("span",{style:{color:"#B392F0"}},"add"),s("span",{style:{color:"#E1E4E8"}},"(item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"remove"),s("span",{style:{color:"#E1E4E8"}},"(Item "),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		items."),s("span",{style:{color:"#B392F0"}},"remove"),s("span",{style:{color:"#E1E4E8"}},"(item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"double"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"totalPrice"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"double"),s("span",{style:{color:"#E1E4E8"}}," total "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0.0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"for"),s("span",{style:{color:"#E1E4E8"}}," (Item item "),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," items) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"			total "),s("span",{style:{color:"#F97583"}},"+="),s("span",{style:{color:"#E1E4E8"}}," item."),s("span",{style:{color:"#B392F0"}},"getPrice"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," total;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ShoppingCart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," Vector<"),s("span",{style:{color:"#D73A49"}},"Item"),s("span",{style:{color:"#24292E"}},"> items;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ShoppingCart"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".items "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," Vector<>();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"add"),s("span",{style:{color:"#24292E"}},"(Item "),s("span",{style:{color:"#E36209"}},"item"),s("span",{style:{color:"#24292E"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		items."),s("span",{style:{color:"#6F42C1"}},"add"),s("span",{style:{color:"#24292E"}},"(item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"remove"),s("span",{style:{color:"#24292E"}},"(Item "),s("span",{style:{color:"#E36209"}},"item"),s("span",{style:{color:"#24292E"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		items."),s("span",{style:{color:"#6F42C1"}},"remove"),s("span",{style:{color:"#24292E"}},"(item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"double"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"totalPrice"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"double"),s("span",{style:{color:"#24292E"}}," total "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0.0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," (Item item "),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," items) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"			total "),s("span",{style:{color:"#D73A49"}},"+="),s("span",{style:{color:"#24292E"}}," item."),s("span",{style:{color:"#6F42C1"}},"getPrice"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," total;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),g=s("h2",{id:"tambahan",tabindex:"-1"},[l("Tambahan "),s("a",{class:"header-anchor",href:"#tambahan","aria-label":'Permalink to "Tambahan"'},"​")],-1),v=s("p",null,"Ada beberapa design pattern yang memang dirancang untuk delegasi, seperti: Adapter, Proxy, Bridge, Facade atau Mediator. Namun dalam design pattern ini bukan sekadar delegasi mentah-mentah, ada sedikit fitur di dalamnya. Design pattern ini masuk ke dalam Gang of Four Design Pattern, akan kita pelajari di semester depan.",-1);function D(b,C,k,B,_,f){const a=t("Tab"),e=t("Tabs");return p(),r("div",null,[i,o(e,null,{default:n(()=>[o(a,{name:"ShoppingCart",text:"ShoppingCart.java"},{default:n(()=>[d]),_:1}),o(a,{name:"LinkedList",text:"LinkedList.java"},{default:n(()=>[F]),_:1}),o(a,{name:"Item",text:"Item.java"},{default:n(()=>[m]),_:1})]),_:1}),u,h,o(e,null,{default:n(()=>[o(a,{name:"ShoppingCart",text:"ShoppingCart.java"},{default:n(()=>[A]),_:1})]),_:1}),g,v])}const L=c(y,[["render",D]]);export{P as __pageData,L as default};
