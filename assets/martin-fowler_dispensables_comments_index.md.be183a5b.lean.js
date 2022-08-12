import{_ as p,c,b as s,d as n,w as o,a as D,e as l,r as a,o as y}from"./app.169ba118.js";const M=JSON.parse('{"title":"Comments","description":"","frontmatter":{},"headers":[{"level":2,"title":"Penjelasan Smell","slug":"penjelasan-smell"},{"level":2,"title":"Penyelesaian","slug":"penyelesaian"}],"relativePath":"martin-fowler/dispensables/comments/index.md"}'),F={name:"martin-fowler/dispensables/comments/index.md"},i=D("",6),A=l("Pada contoh "),C=l("MenuPrinter.java"),u=l(", terdapat banyak komentar."),d=s("p",null,[l("Lebih parahnya, terdapat hidden-side-effect pada fungsi "),s("code",null,"printMenu"),l(". Di komentar diatas menu, tertulis bahwa fungsi ini melakukan print kemudian scan (terjadi "),s("a",{href:"https://en.wikipedia.org/wiki/Cohesion_(computer_science)",target:"_blank",rel:"noopener noreferrer"},"temporal cohesion"),l("). Sedangkan nama fungsi hanya "),s("code",null,"printMenu"),l(" saja. Tentu saja ini menyesatkan programmer lain yang akan memakai fungsi ini.")],-1),m=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"MenuPrinter"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"	"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print kemudian scan dan return hasil scan")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"printMenu"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print header")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"===="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Menu"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"===="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//print menu")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1. Foo"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"2. Bar"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"3. Baz"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"4. Exit"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"		"),s("span",{style:{color:"#676E95","font-style":"italic"}},"//scan input")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," input "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#C792EA"}},"Scanner"),s("span",{style:{color:"#A6ACCD"}}," sc "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Scanner"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"in"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"do"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Input [1-4]: "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			sc"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"nextInt"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"			sc"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"nextLine"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"while"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"input "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"||"),s("span",{style:{color:"#A6ACCD"}}," input "),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"4"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		sc"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"close"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"		"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," input"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"	"),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1),h=s("h2",{id:"penyelesaian",tabindex:"-1"},[l("Penyelesaian "),s("a",{class:"header-anchor",href:"#penyelesaian","aria-hidden":"true"},"#")],-1),b=s("p",null,[l("Dilakukan "),s("a",{href:"https://sourcemaking.com/refactoring/extract-method",target:"_blank",rel:"noopener noreferrer"},"extract method"),l(" pada bagian-bagian di dalam fungsi, dan dilakukan "),s("a",{href:"https://sourcemaking.com/refactoring/rename-method",target:"_blank",rel:"noopener noreferrer"},"rename method"),l(" pada fungsi "),s("code",null,"printMenu"),l(" menjadi "),s("code",null,"printMenuAndGetInput"),l(". Jadi, kita dapat membuang komentar-komentar yang tidak perlu (karena nama fungsinya sudah menjelaskan).")],-1),f=s("div",{class:"language-java"},[s("span",{class:"copy"}),s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlighted"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"class"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"MenuPrinter"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"public"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"printMenuAndGetInput"),s("span",{style:{color:"#89DDFF"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"printHeader"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"printMenu"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getInput"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"printHeader"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"===="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Menu"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"===="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"void"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"printMenu"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"1. Foo"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"2. Bar"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"3. Baz"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"4. Exit"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#C792EA"}},"private"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"getInput"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#C792EA"}},"int"),s("span",{style:{color:"#A6ACCD"}}," input "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#C792EA"}},"Scanner"),s("span",{style:{color:"#A6ACCD"}}," sc "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"new"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"Scanner"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"in"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"do"),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      System"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"out"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"println"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Input [1-4]: "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      sc"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"nextInt"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      sc"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"nextLine"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"while"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"input "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"||"),s("span",{style:{color:"#A6ACCD"}}," input "),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"4"),s("span",{style:{color:"#89DDFF"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    sc"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"close"),s("span",{style:{color:"#89DDFF"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#A6ACCD"}}," input"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"})])])],-1);function g(_,E,k,S,v,x){const r=a("github-url"),e=a("Tab"),t=a("Tabs");return y(),c("div",null,[i,s("p",null,[A,n(r,{to:"before/MenuPrinter.java"},{default:o(()=>[C]),_:1}),u]),d,n(t,null,{default:o(()=>[n(e,{name:"menuPrinter",text:"MenuPrinter.java"},{default:o(()=>[m]),_:1})]),_:1}),h,b,n(t,null,{default:o(()=>[n(e,{name:"menuPrinter",text:"MenuPrinter.java"},{default:o(()=>[f]),_:1})]),_:1})])}var P=p(F,[["render",g]]);export{M as __pageData,P as default};