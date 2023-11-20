import{_ as p,C as e,o as r,c as E,k as s,a as l,H as a,w as n,Q as y}from"./chunks/framework.6730c137.js";const B=JSON.parse('{"title":"Data Class","description":"","frontmatter":{},"headers":[],"relativePath":"martin-fowler/dispensables/data-class/index.md","filePath":"martin-fowler/dispensables/data-class/index.md"}'),i={name:"martin-fowler/dispensables/data-class/index.md"},d=y('<h1 id="data-class" tabindex="-1">Data Class <a class="header-anchor" href="#data-class" aria-label="Permalink to &quot;Data Class&quot;">​</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/data-class" target="_blank" rel="noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-label="Permalink to &quot;Penjelasan Smell&quot;">​</a></h2><p>Bila class hanya cuma sebagai <em>dumb data holders</em>, class bisa dipertimbangkan untuk dibuang dengan cara digabung dengan class lain. <em>Dumb data holders</em> berarti class ini hanya memiliki field dan fungsi setter getter saja.</p><p>Ketika produk baru awal-awal di-code, sangat wajar bila banyak class yang belum memiliki behavior (baru isi data saja). Namun, bila produk sudah makin berkembang, namun masih ada suatu class yang hanya berisi setter/getter, sudah sinyal kuat untuk dilakukan refactor.</p>',5),u=s("code",null,"firstName",-1),m=s("code",null,"lastName",-1),F=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"package"),s("span",{style:{color:"#E1E4E8"}}," fowler.dispensables.data_class.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"FullName"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"FullName"),s("span",{style:{color:"#E1E4E8"}},"(String "),s("span",{style:{color:"#FFAB70"}},"firstName"),s("span",{style:{color:"#E1E4E8"}},", String "),s("span",{style:{color:"#FFAB70"}},"lastName"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"super"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".firstName "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".lastName "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," String "),s("span",{style:{color:"#B392F0"}},"getFirstName"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setFirstName"),s("span",{style:{color:"#E1E4E8"}},"(String "),s("span",{style:{color:"#FFAB70"}},"firstName"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".firstName "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," String "),s("span",{style:{color:"#B392F0"}},"getLastName"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setLastName"),s("span",{style:{color:"#E1E4E8"}},"(String "),s("span",{style:{color:"#FFAB70"}},"lastName"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".lastName "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"package"),s("span",{style:{color:"#24292E"}}," fowler.dispensables.data_class.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"FullName"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"FullName"),s("span",{style:{color:"#24292E"}},"(String "),s("span",{style:{color:"#E36209"}},"firstName"),s("span",{style:{color:"#24292E"}},", String "),s("span",{style:{color:"#E36209"}},"lastName"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"super"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".firstName "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".lastName "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," String "),s("span",{style:{color:"#6F42C1"}},"getFirstName"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setFirstName"),s("span",{style:{color:"#24292E"}},"(String "),s("span",{style:{color:"#E36209"}},"firstName"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".firstName "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," String "),s("span",{style:{color:"#6F42C1"}},"getLastName"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setLastName"),s("span",{style:{color:"#24292E"}},"(String "),s("span",{style:{color:"#E36209"}},"lastName"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".lastName "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),g=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"package"),s("span",{style:{color:"#E1E4E8"}}," fowler.dispensables.data_class.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"User"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," FullName fullName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String address;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String phone;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#6A737D"}},"//another User behaviors...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"login"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"logout"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"package"),s("span",{style:{color:"#24292E"}}," fowler.dispensables.data_class.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"User"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," FullName fullName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String address;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String phone;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6A737D"}},"//another User behaviors...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"login"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"logout"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),h=s("h2",{id:"penyelesaian",tabindex:"-1"},[l("Penyelesaian "),s("a",{class:"header-anchor",href:"#penyelesaian","aria-label":'Permalink to "Penyelesaian"'},"​")],-1),b=s("a",{href:"https://sourcemaking.com/refactoring/move-method",target:"_blank",rel:"noreferrer"},"Move Method",-1),f=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"package"),s("span",{style:{color:"#E1E4E8"}}," fowler.dispensables.data_class.after;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"User"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String address;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String phone;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#6A737D"}},"//another User behaviors...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"login"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"void"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"logout"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"package"),s("span",{style:{color:"#24292E"}}," fowler.dispensables.data_class.after;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"User"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String firstName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String lastName;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String address;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String phone;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6A737D"}},"//another User behaviors...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"login"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"void"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"logout"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#6A737D"}},"//...")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1);function v(A,N,D,_,k,C){const t=e("github-url"),o=e("Tab"),c=e("Tabs");return r(),E("div",null,[d,s("p",null,[l("Pada contoh kasus "),a(t,{to:"before/FullName.java"},{default:n(()=>[l("FullName.java")]),_:1}),l(", class hanya berisi setter getter untuk field "),u,l(" dan "),m,l(".")]),a(c,null,{default:n(()=>[a(o,{name:"fullname",text:"FullName.java"},{default:n(()=>[F]),_:1}),a(o,{name:"user",text:"User.java"},{default:n(()=>[g]),_:1})]),_:1}),h,s("p",null,[l("Semua field dari FullName dipindahkan menggunakan "),b,l(" ke "),a(t,{to:"after/User.java"},{default:n(()=>[l("User.java")]),_:1}),l(". Kemudian class FullName dihapus.")]),a(c,null,{default:n(()=>[a(o,{name:"user",text:"User.java"},{default:n(()=>[f]),_:1})]),_:1})])}const j=p(i,[["render",v]]);export{B as __pageData,j as default};
