import{_ as c,C as a,o as r,c as E,k as s,a as l,H as n,w as o,Q as y}from"./chunks/framework.5a42e701.js";const f=JSON.parse('{"title":"Comments","description":"","frontmatter":{},"headers":[],"relativePath":"martin-fowler/dispensables/comments/index.md","filePath":"martin-fowler/dispensables/comments/index.md"}'),i={name:"martin-fowler/dispensables/comments/index.md"},u=y(`<h1 id="comments" tabindex="-1">Comments <a class="header-anchor" href="#comments" aria-label="Permalink to &quot;Comments&quot;">​</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/comments" target="_blank" rel="noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-label="Permalink to &quot;Penjelasan Smell&quot;">​</a></h2><p>Nama method atau atribut haruslah sudah self-explain tanpa harus diberi comment. Begitu juga logic flow di dalam fungsi. Bila logic flow perlu dijelaskan, dapat dipertimbangkan code tersebut sebagai bagian dari smell Long Method dan perlu di-extract.</p><p>Comment boleh diberikan sebagai dokumentasi. Contohnya untuk bahasa pemrograman Java, digunakan <a href="https://www.tutorialspoint.com/java/java_documentation.htm" target="_blank" rel="noreferrer">Javadoc</a> menggunakan <code>/** */</code> sebagai dokumentasi. Penggunaan <code>//</code> untuk single line atau <code>/* */</code> untuk multiline dihindari.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">* The HelloWorld program implements an application that</span></span>
<span class="line"><span style="color:#6A737D;">* simply displays &quot;Hello World!&quot; to the standard output.</span></span>
<span class="line"><span style="color:#6A737D;">*</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#F97583;">@author</span><span style="color:#6A737D;">  John Doe</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#F97583;">@version</span><span style="color:#6A737D;"> 1.0</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#F97583;">@since</span><span style="color:#6A737D;">   2020-03-20</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HelloWorld</span><span style="color:#E1E4E8;"> { ... }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">* The HelloWorld program implements an application that</span></span>
<span class="line"><span style="color:#6A737D;">* simply displays &quot;Hello World!&quot; to the standard output.</span></span>
<span class="line"><span style="color:#6A737D;">*</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@author</span><span style="color:#6A737D;">  John Doe</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@version</span><span style="color:#6A737D;"> 1.0</span></span>
<span class="line"><span style="color:#6A737D;">* </span><span style="color:#D73A49;">@since</span><span style="color:#6A737D;">   2020-03-20</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelloWorld</span><span style="color:#24292E;"> { ... }</span></span></code></pre></div>`,6),F=s("p",null,[l("Lebih parahnya, terdapat hidden-side-effect pada fungsi "),s("code",null,"printMenu"),l(". Di komentar diatas menu, tertulis bahwa fungsi ini melakukan print kemudian scan (terjadi "),s("a",{href:"https://en.wikipedia.org/wiki/Cohesion_(computer_science)",target:"_blank",rel:"noreferrer"},"temporal cohesion"),l("). Sedangkan nama fungsi hanya "),s("code",null,"printMenu"),l(" saja. Tentu saja ini menyesatkan programmer lain yang akan memakai fungsi ini.")],-1),d=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"MenuPrinter"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#6A737D"}},"//print kemudian scan dan return hasil scan")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"printMenu"),s("span",{style:{color:"#E1E4E8"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#6A737D"}},"//print header")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"===="'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"Menu"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"===="'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#6A737D"}},"//print menu")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"1. Foo"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"2. Bar"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"3. Baz"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"4. Exit"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#6A737D"}},"//scan input")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," input "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		Scanner sc "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Scanner"),s("span",{style:{color:"#E1E4E8"}},"(System.in);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"do"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"			System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"Input [1-4]: "'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"			sc."),s("span",{style:{color:"#B392F0"}},"nextInt"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"			sc."),s("span",{style:{color:"#B392F0"}},"nextLine"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		}"),s("span",{style:{color:"#F97583"}},"while"),s("span",{style:{color:"#E1E4E8"}},"(input "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," input "),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"4"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		sc."),s("span",{style:{color:"#B392F0"}},"close"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," input;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"MenuPrinter"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6A737D"}},"//print kemudian scan dan return hasil scan")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"printMenu"),s("span",{style:{color:"#24292E"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#6A737D"}},"//print header")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"===="'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"Menu"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"===="'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#6A737D"}},"//print menu")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"1. Foo"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"2. Bar"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"3. Baz"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"4. Exit"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#6A737D"}},"//scan input")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," input "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		Scanner sc "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Scanner"),s("span",{style:{color:"#24292E"}},"(System.in);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"do"),s("span",{style:{color:"#24292E"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"			System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"Input [1-4]: "'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"			sc."),s("span",{style:{color:"#6F42C1"}},"nextInt"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"			sc."),s("span",{style:{color:"#6F42C1"}},"nextLine"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		}"),s("span",{style:{color:"#D73A49"}},"while"),s("span",{style:{color:"#24292E"}},"(input "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," input "),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"4"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		sc."),s("span",{style:{color:"#6F42C1"}},"close"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," input;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),m=s("h2",{id:"penyelesaian",tabindex:"-1"},[l("Penyelesaian "),s("a",{class:"header-anchor",href:"#penyelesaian","aria-label":'Permalink to "Penyelesaian"'},"​")],-1),h=s("p",null,[l("Dilakukan "),s("a",{href:"https://sourcemaking.com/refactoring/extract-method",target:"_blank",rel:"noreferrer"},"extract method"),l(" pada bagian-bagian di dalam fungsi, dan dilakukan "),s("a",{href:"https://sourcemaking.com/refactoring/rename-method",target:"_blank",rel:"noreferrer"},"rename method"),l(" pada fungsi "),s("code",null,"printMenu"),l(" menjadi "),s("code",null,"printMenuAndGetInput"),l(". Jadi, kita dapat membuang komentar-komentar yang tidak perlu (karena nama fungsinya sudah menjelaskan).")],-1),g=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark has-highlighted-lines vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"MenuPrinter"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line highlighted"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"printMenuAndGetInput"),s("span",{style:{color:"#E1E4E8"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"printHeader"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"printMenu"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"getInput"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"printHeader"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"===="'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"Menu"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"===="'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"printMenu"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"1. Foo"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"2. Bar"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"3. Baz"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"4. Exit"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"getInput"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"int"),s("span",{style:{color:"#E1E4E8"}}," input "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Scanner sc "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Scanner"),s("span",{style:{color:"#E1E4E8"}},"(System.in);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"do"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      System.out."),s("span",{style:{color:"#B392F0"}},"println"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"Input [1-4]: "'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      sc."),s("span",{style:{color:"#B392F0"}},"nextInt"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      sc."),s("span",{style:{color:"#B392F0"}},"nextLine"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }"),s("span",{style:{color:"#F97583"}},"while"),s("span",{style:{color:"#E1E4E8"}},"(input "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"||"),s("span",{style:{color:"#E1E4E8"}}," input "),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"4"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    sc."),s("span",{style:{color:"#B392F0"}},"close"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," input;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light has-highlighted-lines vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"MenuPrinter"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line highlighted"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"printMenuAndGetInput"),s("span",{style:{color:"#24292E"}},"(){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"printHeader"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"printMenu"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"getInput"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"printHeader"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"===="'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"Menu"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"===="'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"printMenu"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"1. Foo"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"2. Bar"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"3. Baz"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"4. Exit"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"getInput"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"int"),s("span",{style:{color:"#24292E"}}," input "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Scanner sc "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Scanner"),s("span",{style:{color:"#24292E"}},"(System.in);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"do"),s("span",{style:{color:"#24292E"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      System.out."),s("span",{style:{color:"#6F42C1"}},"println"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"Input [1-4]: "'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      sc."),s("span",{style:{color:"#6F42C1"}},"nextInt"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      sc."),s("span",{style:{color:"#6F42C1"}},"nextLine"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }"),s("span",{style:{color:"#D73A49"}},"while"),s("span",{style:{color:"#24292E"}},"(input "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"||"),s("span",{style:{color:"#24292E"}}," input "),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"4"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    sc."),s("span",{style:{color:"#6F42C1"}},"close"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," input;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1);function C(A,D,B,k,b,_){const p=a("github-url"),e=a("Tab"),t=a("Tabs");return r(),E("div",null,[u,s("p",null,[l("Pada contoh "),n(p,{to:"before/MenuPrinter.java"},{default:o(()=>[l("MenuPrinter.java")]),_:1}),l(", terdapat banyak komentar.")]),F,n(t,null,{default:o(()=>[n(e,{name:"menuPrinter",text:"MenuPrinter.java"},{default:o(()=>[d]),_:1})]),_:1}),m,h,n(t,null,{default:o(()=>[n(e,{name:"menuPrinter",text:"MenuPrinter.java"},{default:o(()=>[g]),_:1})]),_:1})])}const v=c(i,[["render",C]]);export{f as __pageData,v as default};
