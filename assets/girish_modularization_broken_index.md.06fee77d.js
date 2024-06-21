import{_ as s,C as l,o,c as d,k as e,a,H as t,w as r,Q as i}from"./chunks/framework.1ff90abd.js";const m="/assets/broken-solution.629fbccc.png",u="/assets/broken-1.30a95223.png",c="/assets/broken-dto.27f4941b.png",z=JSON.parse('{"title":"Broken Modularization","description":"","frontmatter":{},"headers":[],"relativePath":"girish/modularization/broken/index.md","filePath":"girish/modularization/broken/index.md"}'),h={name:"girish/modularization/broken/index.md"},k=e("h1",{id:"broken-modularization",tabindex:"-1"},[a("Broken Modularization "),e("a",{class:"header-anchor",href:"#broken-modularization","aria-label":'Permalink to "Broken Modularization"'},"​")],-1),b=e("div",{class:"video-wrapper"},[e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0aeIbhESMco",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),g=i('<p>Smell ini terjadi jika pada data member, field, atau method yang seharusnya dikumpulkan dalam 1 class/abstraksi malah terpisah dan tersebar di abstraksi lain. Smell ini sering dimanifestasikan sebagai:</p><ul><li>Class yang hanya menampung data tapi tidak ada method yang memperlakukan data/berinteraksi dalam class. Smell ini disamaratakan dengan <a href="./../../../martin-fowler/dispensables/data-class/">Data Class</a>.</li><li>Method yang senang bermain dengan member lain di class lain. Smell ini disamaratakan dengan <a href="./../../../martin-fowler/couplers/feature-envy/">Feature Envy</a>.</li></ul><h2 id="penyebab" tabindex="-1">Penyebab <a class="header-anchor" href="#penyebab" aria-label="Permalink to &quot;Penyebab&quot;">​</a></h2><ul><li><strong>Procedural thinking in object-oriented languages</strong>: Disebabkan karena developer procedural programming languages mengasumsikan bahwa data harus dipisahkan dari function-function yang memproses data tersebut sehingga dalam OOP, developer memecahkannya ke class terpisah.</li><li><strong>Lack of knowledge of existing design</strong>: Dalam beberapa kasus terutama dalam perusahaan besar, terdapat banyak class yang seharusnya dapat developer kerjakan selain dari bagian yang ia kerjakan. Hal itu kurang diketahui olehnya sehingga developer menempatkan member/method pada lokasi yang kurang tepat yang pada akhirnya menimbulkan smell tersebut.</li></ul><h2 id="penyelesaian" tabindex="-1">Penyelesaian <a class="header-anchor" href="#penyelesaian" aria-label="Permalink to &quot;Penyelesaian&quot;">​</a></h2><p><img src="'+m+'" alt="Refactoring move field/member/method" title="Refactoring move field/member/method"></p><p>Cara paling mudahnya dalam menyelesaikan smell ini adalah dengan memindahkan member-member dari kelas yang terpisah ke class asal-nya. Jika kasus tersebut terjadi pada:</p><ul><li>Method class tersebut sering dipakai oleh class lain, pindahkan method class tersebut ke dalam method class pemakainya dengan <a href="https://refactoring.guru/move-field" target="_blank" rel="noreferrer">&quot;move field&quot;</a>.</li><li>Member class tersebut sering dipakai oleh class lain, pindahkan member class tersebut ke dalam member class pemakainya dengan <a href="https://refactoring.guru/move-method" target="_blank" rel="noreferrer">&quot;move method&quot;</a>.</li></ul><h2 id="contoh" tabindex="-1">Contoh <a class="header-anchor" href="#contoh" aria-label="Permalink to &quot;Contoh&quot;">​</a></h2><p><img src="'+u+'" alt="Struktur class dalam aplikasi device management" title="Struktur class dalam aplikasi device management"></p><h2 id="masalah" tabindex="-1">Masalah <a class="header-anchor" href="#masalah" aria-label="Permalink to &quot;Masalah&quot;">​</a></h2>',11),p=e("code",null,"Device",-1),_=e("code",null,"DeviceData",-1),f=e("code",null,"Device",-1),y=e("code",null,"DeviceData",-1),v=e("p",null,[a("Kasus inilah yang pada akhirnya menimbulkan smell "),e("strong",null,"Broken Modularization"),a(" karena adanya perpecahan modul yang memiliki tanggungjawab yang sama dari kelas seharusnya.")],-1),D=e("h2",{id:"penyelesaian-1",tabindex:"-1"},[a("Penyelesaian "),e("a",{class:"header-anchor",href:"#penyelesaian-1","aria-label":'Permalink to "Penyelesaian"'},"​")],-1),P=e("code",null,"DeviceData",-1),w=e("code",null,"Device",-1),j=i('<h2 id="when-to-ignore" tabindex="-1">When to Ignore <a class="header-anchor" href="#when-to-ignore" aria-label="Permalink to &quot;When to Ignore&quot;">​</a></h2><h2 id="auto-generated-code" tabindex="-1">Auto-generated code <a class="header-anchor" href="#auto-generated-code" aria-label="Permalink to &quot;Auto-generated code&quot;">​</a></h2><p>Jika code tersebut digenerate secara otomatis dari generator (dari higher-level models, terdiri atas beberapa data class), maka hal tersebut memang dapat diabaikan karena dapat menimbulkan efek <em>out of sync</em> jika user melakukan modifikasi pada auto-generated codes. Contoh kasusnya adalah <a href="https://en.wikipedia.org/wiki/Graphical_user_interface_builder" target="_blank" rel="noreferrer">GUI Builder</a> ataupun <a href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/" target="_blank" rel="noreferrer">LinQ database modeling</a>.</p><h2 id="data-transfer-objects-dtos" tabindex="-1">Data Transfer Objects (DTOs) <a class="header-anchor" href="#data-transfer-objects-dtos" aria-label="Permalink to &quot;Data Transfer Objects (DTOs)&quot;">​</a></h2><p><img src="'+c+'" alt="Struktur DTO" title="Struktur Data Transfer Object menurut Martin Fowler"></p><p>Martin Fowler mendefinisikan <a href="https://martinfowler.com/eaaCatalog/dataTransferObject.html" target="_blank" rel="noreferrer">Data Transfer Objects</a> tersebut sebagai perantara data terhadap <a href="https://martinfowler.com/eaaCatalog/remoteFacade.html" target="_blank" rel="noreferrer">Remote Facade</a> (aksesor data). Jika class tersebut merupakan class yang difungsikan untuk parsing data dari/ke API website, dimana class tersebut hanya berisikan data field, setter-getter, parser (JSON/XML/AJAX ke Object), dan serializer tanpa method dan behaviour lainnya. Pada kasus tersebut, smell dapat diabaikan demi alasan mempermudah proses transfer data ke network.</p>',6);function T(q,x,S,C,O,M){const n=l("github-url");return o(),d("div",null,[k,b,g,e("p",null,[a("Terdapat dua class dalam kasus yaitu "),t(n,{to:"before/DeviceData.java"},{default:r(()=>[a("Device.java](before/Device.java) dan [DeviceData.java")]),_:1}),a(". Pada kasus tersebut, member-member dari "),p,a(" dipisahkan ke class lain yang bernama "),_,a(", dimana method-method dari "),f,a(" akan memanggil data-data dari class "),y,a(". Hal ini seharusnya tidak boleh dilakukan dalam OOP dikarenakan class seharusnya menampung semua method dan member yang mempunyai tanggungjawab yang sama.")]),v,D,e("p",null,[a("Untuk menyelesaikan kasus smell tersebut, gabungkan field dan method menjadi 1 class sehingga class Device dapat menampung method, member, dan field sesuai tanggungjawabnya masing-masing. Pada class "),t(n,{to:"after/Device.java"},{default:r(()=>[a("Device.java")]),_:1}),a(", semua member pindahan dari "),P,a(" ditampung sebagai private member dari "),w,a(".")]),j])}const I=s(h,[["render",T]]);export{z as __pageData,I as default};