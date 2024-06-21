import{_ as i,C as t,o as r,c as l,k as a,a as n,H as o,w as p,Q as s}from"./chunks/framework.1ff90abd.js";const c="/assets/missing-1.2dd418c6.png",P=JSON.parse('{"title":"Missing Encapsulation","description":"","frontmatter":{},"headers":[],"relativePath":"girish/encapsulation/missing/index.md","filePath":"girish/encapsulation/missing/index.md"}'),d={name:"girish/encapsulation/missing/index.md"},u=a("h1",{id:"missing-encapsulation",tabindex:"-1"},[n("Missing Encapsulation "),a("a",{class:"header-anchor",href:"#missing-encapsulation","aria-label":'Permalink to "Missing Encapsulation"'},"​")],-1),g=a("div",{class:"video-wrapper"},[a("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tHKGrugra70",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),y=s('<p>Smell ini terjadi bila variabel tersebut tidak terenkapsulasi dalam abstraksi/hierarki. Perlu diwaspadai jika smell ini juga dapat menimbulkan ledakan class jika smell ini terjadi pada hierarki yang bercabang-cabang ataupun hierarki &#39;bucin&#39; dikarenakan adanya penambahan variasi baru dalam hierarki. Smell ini juga disamaratakan dengan Divergent Changes pada class dan Parallel Inheritence pada hierarki.</p><h2 id="penyebab" tabindex="-1">Penyebab <a class="header-anchor" href="#penyebab" aria-label="Permalink to &quot;Penyebab&quot;">​</a></h2><ul><li><strong>Lack of awareness of changing concerns</strong>: Developer takut enkapsulasi bocor bila ada perubahan pada requirement.</li><li><strong>Lack of refactoring</strong>: Code terlalu jorok, bisa menimbulkan ledakan class jika tidak segera ditangani.</li><li><strong>Mixing up concerns</strong>: Class, kebutuhan, dan variasi dicampuradukkan dalam 1 hierarki.</li><li><strong>Naive design decisions</strong>: Merancang class untuk mewakili variasi-variasinya.</li></ul><h2 id="contoh" tabindex="-1">Contoh <a class="header-anchor" href="#contoh" aria-label="Permalink to &quot;Contoh&quot;">​</a></h2><h2 id="permasalahan" tabindex="-1">Permasalahan <a class="header-anchor" href="#permasalahan" aria-label="Permalink to &quot;Permasalahan&quot;">​</a></h2><p><img src="'+c+'" alt="Struktur class Encryption yang membludak"></p>',6),h=a("a",{href:"./../../../martin-fowler/change-preventers/divergent-change/"},"Divergent Changes",-1),m=s(`<h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-label="Permalink to &quot;Penyelesaian&quot;">​</a></h2><p><strong>Opsi 1: Gunakan Inheritence</strong>, dimana pada class [Encryption] semua class implementasi dipecahkan ke masing-masing class baru dengan pemakaian abstract method <code>encrypt()</code>. Opsi ini sangat berguna bila terdapat penambahan class baru dari hierarki abstraksi yang sudah ada.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Encryption encryption </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DES</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">encryption.</span><span style="color:#B392F0;">encrypt</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Encryption encryption </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DES</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">encryption.</span><span style="color:#6F42C1;">encrypt</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Selain itu, dalam pembuatan Object juga terfasilitasi enkapsulasi karena user cukup membuat object tergantung pada variasi yang dipilih oleh user</p><p><strong>Opsi 2: Gunakan <a href="https://refactoring.guru/design-patterns/strategy" target="_blank" rel="noreferrer">Strategy Pattern</a></strong>, dimana pada class [Encryption] diimplementasikan dengan interface [EncryptionAlgorithm] sehingga dalam class Encryption dapat disesuaikan algoritma yang diinginkan dalam enkripsi tersebut.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Encryption encryption </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Encryption</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AES</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">encryption.</span><span style="color:#B392F0;">encrypt</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Encryption encryption </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Encryption</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AES</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">encryption.</span><span style="color:#6F42C1;">encrypt</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Dengan pemakaian Strategy Pattern, user dapat menentukan sendiri algoritma yang dipakai dalam Encryption. Selain itu, Class EncryptionAlgorithm juga tentunya dapat digunakan kembali dalam class lain jika diinginkan.</p><h2 id="julukan" tabindex="-1">Julukan <a class="header-anchor" href="#julukan" aria-label="Permalink to &quot;Julukan&quot;">​</a></h2><ul><li><strong>Nested generalization</strong>: Ada banyak kombinasi yang terjadi karena generalisasi pada suatu hierarki.</li><li><strong>Class explosion</strong>: Ledakan class karena banyaknya variasi dan generalisasi dalam satu hierarki.</li><li><strong>Combinatorial explosion</strong>: Ledakan class karena adanya penambahan variasi baru sehingga harus menambahkan class-class pendukung dalam hierarki.</li></ul>`,9);function k(b,E,_,v,f,C){const e=t("github-url");return r(),l("div",null,[u,g,y,a("p",null,[n("Misal dalam package before, class "),o(e,{to:"before/Encryption.java"},{default:p(()=>[n("Encryption")]),_:1}),n(" berisikan implementasi dan variasi yang dimuatkan bersamaan dalam satu abstraksi. Hal ini tentunya tidak baik jika terjadi perubahan atau penambahan variasi baru dalam class tersebut sehingga menimbulkan "),h,n(".")]),m])}const w=i(d,[["render",k]]);export{P as __pageData,w as default};