import{_ as p,C as t,o as r,c as E,H as a,w as n,Q as c,k as s,a as l}from"./chunks/framework.6730c137.js";const S=JSON.parse('{"title":"Data Clumps","description":"","frontmatter":{},"headers":[],"relativePath":"martin-fowler/bloaters/data-clumps/index.md","filePath":"martin-fowler/bloaters/data-clumps/index.md"}'),y={name:"martin-fowler/bloaters/data-clumps/index.md"},i=c('<h1 id="data-clumps" tabindex="-1">Data Clumps <a class="header-anchor" href="#data-clumps" aria-label="Permalink to &quot;Data Clumps&quot;">​</a></h1><p><a href="https://sourcemaking.com/refactoring/smells/data-clumps" target="_blank" rel="noreferrer">sourcemaking</a></p><h2 id="penjelasan-smell" tabindex="-1">Penjelasan Smell <a class="header-anchor" href="#penjelasan-smell" aria-label="Permalink to &quot;Penjelasan Smell&quot;">​</a></h2><p>Smell ini terjadi ketika ada beberapa field atau parameter method yang selalu dipakai atau dioper bersama-sama. Bila terjadi hal seperti ini, berarti variabel-variabel ini bisa dipertimbangkan untuk digabungkan langsung dalam satu class.</p><p>Perhatikan class <code>Kelas</code> dan <code>Semester</code> di dalam package <code>before</code>. Pada kedua class ini, terdapat Date <code>start</code> dan <code>end</code>.</p><h3 id="before" tabindex="-1">Before <a class="header-anchor" href="#before" aria-label="Permalink to &quot;Before&quot;">​</a></h3>',6),d=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"package"),s("span",{style:{color:"#E1E4E8"}}," fowler.bloaters.data_clumps.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Kelas"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String course;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," Date start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," Date end;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," Date "),s("span",{style:{color:"#B392F0"}},"getStart"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," Date "),s("span",{style:{color:"#B392F0"}},"getEnd"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"package"),s("span",{style:{color:"#24292E"}}," fowler.bloaters.data_clumps.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Kelas"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String course;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," Date start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," Date end;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," Date "),s("span",{style:{color:"#6F42C1"}},"getStart"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," Date "),s("span",{style:{color:"#6F42C1"}},"getEnd"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),u=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"package"),s("span",{style:{color:"#E1E4E8"}}," fowler.bloaters.data_clumps.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Semester"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," Date start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," Date end;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Semester"),s("span",{style:{color:"#E1E4E8"}},"(String "),s("span",{style:{color:"#FFAB70"}},"label"),s("span",{style:{color:"#E1E4E8"}},", Date "),s("span",{style:{color:"#FFAB70"}},"start"),s("span",{style:{color:"#E1E4E8"}},", Date "),s("span",{style:{color:"#FFAB70"}},"end"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"super"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".label "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".start "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".end "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," String "),s("span",{style:{color:"#B392F0"}},"getLabel"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," Date "),s("span",{style:{color:"#B392F0"}},"getStart"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," Date "),s("span",{style:{color:"#B392F0"}},"getEnd"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"package"),s("span",{style:{color:"#24292E"}}," fowler.bloaters.data_clumps.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Semester"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," Date start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," Date end;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Semester"),s("span",{style:{color:"#24292E"}},"(String "),s("span",{style:{color:"#E36209"}},"label"),s("span",{style:{color:"#24292E"}},", Date "),s("span",{style:{color:"#E36209"}},"start"),s("span",{style:{color:"#24292E"}},", Date "),s("span",{style:{color:"#E36209"}},"end"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"super"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".label "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".start "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".end "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," String "),s("span",{style:{color:"#6F42C1"}},"getLabel"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," Date "),s("span",{style:{color:"#6F42C1"}},"getStart"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," Date "),s("span",{style:{color:"#6F42C1"}},"getEnd"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),g=c('<h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-label="Permalink to &quot;Penyelesaian&quot;">​</a></h2><p>Karena selalu berbarengan, <code>start</code> dan <code>end</code> dipertimbangkan untuk digabung dalam class <code>DateRange</code>. Agar tidak hanya menjadi smell data class, kita dapat melengkapi class <code>DateRange</code> dengan behavior tertentu. Contohnya kita tambahkan validasi <code>start</code> tidak boleh melebihi <code>end</code>.</p>',2),F=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"package"),s("span",{style:{color:"#E1E4E8"}}," fowler.bloaters.data_clumps.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Kelas"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String course;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," DateRange dateRange;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," String "),s("span",{style:{color:"#B392F0"}},"getCourse"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," course;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," DateRange "),s("span",{style:{color:"#B392F0"}},"getDateRange"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," dateRange;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"package"),s("span",{style:{color:"#24292E"}}," fowler.bloaters.data_clumps.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Kelas"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String course;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," DateRange dateRange;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," String "),s("span",{style:{color:"#6F42C1"}},"getCourse"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," course;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," DateRange "),s("span",{style:{color:"#6F42C1"}},"getDateRange"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," dateRange;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),D=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"package"),s("span",{style:{color:"#E1E4E8"}}," fowler.bloaters.data_clumps.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Semester"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," String label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," DateRange dateRange;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Semester"),s("span",{style:{color:"#E1E4E8"}},"(String "),s("span",{style:{color:"#FFAB70"}},"label"),s("span",{style:{color:"#E1E4E8"}},", DateRange "),s("span",{style:{color:"#FFAB70"}},"dateRange"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"super"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".label "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".dateRange "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," dateRange;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," String "),s("span",{style:{color:"#B392F0"}},"getLabel"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," DateRange "),s("span",{style:{color:"#B392F0"}},"getDateRange"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," dateRange;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"package"),s("span",{style:{color:"#24292E"}}," fowler.bloaters.data_clumps.before;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Semester"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," String label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," DateRange dateRange;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Semester"),s("span",{style:{color:"#24292E"}},"(String "),s("span",{style:{color:"#E36209"}},"label"),s("span",{style:{color:"#24292E"}},", DateRange "),s("span",{style:{color:"#E36209"}},"dateRange"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"super"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".label "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".dateRange "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," dateRange;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," String "),s("span",{style:{color:"#6F42C1"}},"getLabel"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," label;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," DateRange "),s("span",{style:{color:"#6F42C1"}},"getDateRange"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," dateRange;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1),b=s("div",{class:"language-java vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"java"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"package"),s("span",{style:{color:"#E1E4E8"}}," fowler.bloaters.data_clumps.after;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"class"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"DateRange"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," Date start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"private"),s("span",{style:{color:"#E1E4E8"}}," Date end;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"DateRange"),s("span",{style:{color:"#E1E4E8"}},"(Date "),s("span",{style:{color:"#FFAB70"}},"start"),s("span",{style:{color:"#E1E4E8"}},", Date "),s("span",{style:{color:"#FFAB70"}},"end"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}},"(start."),s("span",{style:{color:"#B392F0"}},"after"),s("span",{style:{color:"#E1E4E8"}},"(end)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"			"),s("span",{style:{color:"#F97583"}},"throw"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"IllegalArgumentException"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},'"start must be before end"'),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".start "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".end "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," Date "),s("span",{style:{color:"#B392F0"}},"getStart"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#F97583"}},"public"),s("span",{style:{color:"#E1E4E8"}}," Date "),s("span",{style:{color:"#B392F0"}},"getEnd"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"		"),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"package"),s("span",{style:{color:"#24292E"}}," fowler.bloaters.data_clumps.after;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," java.util.Date;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"DateRange"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," Date start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"private"),s("span",{style:{color:"#24292E"}}," Date end;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"DateRange"),s("span",{style:{color:"#24292E"}},"(Date "),s("span",{style:{color:"#E36209"}},"start"),s("span",{style:{color:"#24292E"}},", Date "),s("span",{style:{color:"#E36209"}},"end"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}},"(start."),s("span",{style:{color:"#6F42C1"}},"after"),s("span",{style:{color:"#24292E"}},"(end)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"			"),s("span",{style:{color:"#D73A49"}},"throw"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"IllegalArgumentException"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},'"start must be before end"'),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".start "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".end "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," Date "),s("span",{style:{color:"#6F42C1"}},"getStart"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," start;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#D73A49"}},"public"),s("span",{style:{color:"#24292E"}}," Date "),s("span",{style:{color:"#6F42C1"}},"getEnd"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"		"),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," end;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")])])])],-1);function m(h,A,v,_,C,k){const e=t("Tab"),o=t("Tabs");return r(),E("div",null,[i,a(o,null,{default:n(()=>[a(e,{name:"kelas",text:"Kelas.java"},{default:n(()=>[d]),_:1}),a(e,{name:"semester",text:"Semester.java"},{default:n(()=>[u]),_:1})]),_:1}),g,a(o,null,{default:n(()=>[a(e,{name:"kelas",text:"Kelas.java"},{default:n(()=>[F]),_:1}),a(e,{name:"semester",text:"Semester.java"},{default:n(()=>[D]),_:1}),a(e,{name:"daterange",text:"DateRange.java"},{default:n(()=>[b]),_:1})]),_:1})])}const B=p(y,[["render",m]]);export{S as __pageData,B as default};
