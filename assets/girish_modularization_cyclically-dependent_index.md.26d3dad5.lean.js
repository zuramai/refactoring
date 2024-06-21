import{_ as o,C as t,o as c,c as r,k as a,a as s,H as e,w as p,Q as n}from"./chunks/framework.1ff90abd.js";const i="/assets/cyclic-1.d80f96a5.png",y="/assets/cyclic-2.7f1f06ec.png",E="/assets/cyclic-3.df877829.png",N=JSON.parse('{"title":"Cyclically-dependent Modularization","description":"","frontmatter":{},"headers":[],"relativePath":"girish/modularization/cyclically-dependent/index.md","filePath":"girish/modularization/cyclically-dependent/index.md"}'),d={name:"girish/modularization/cyclically-dependent/index.md"},u=a("h1",{id:"cyclically-dependent-modularization",tabindex:"-1"},[s("Cyclically-dependent Modularization "),a("a",{class:"header-anchor",href:"#cyclically-dependent-modularization","aria-label":'Permalink to "Cyclically-dependent Modularization"'},"​")],-1),m=a("div",{class:"video-wrapper"},[a("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Xm5T75YZB0I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1),g=n("",14),h=a("a",{href:"before/TaxCalculator.java"},"TaxCalculator.java",-1),b=a("code",null,"Order",-1),k=a("code",null,"Item",-1),F=a("code",null,"Order",-1),A=a("code",null,"getAmount()",-1),C=a("code",null,"taxCal.computeAmount()",-1),_=a("code",null,"computeAmount()",-1),D=a("code",null,"Order",-1),f=a("code",null,"calculateTax()",-1),v=n("",7),x=a("code",null,"computeAmount()",-1),I=a("code",null,"Order",-1),T=a("code",null,"TaxCalculator",-1),j=a("code",null,"Order",-1),B=n("",4);function w(P,V,O,q,S,z){const l=t("github-url");return c(),r("div",null,[u,m,g,a("p",null,[s("Pada kasus class "),e(l,{to:"before/Item.java"},{default:p(()=>[s("Order.java](before/Order.java), "),h,s(", dan [Item.java")]),_:1}),s(", terdapat perputaran dependensi antar class. Member field class "),b,s(" terdiri dari (composed of) beberapa "),k,s(", namun pada class "),F,s(", terdapat method "),A,s(" dimana dalam isi methodnya melakukan return "),C,s(". Pada method "),_,s(", class tersebut mengambil semua item dalam class "),D,s(" dan menghitung jumlah pajak dari transaksi order dengan memanggil method "),f,s(" untuk kemudian ditotalkan dengan transaksi order tersebut dan di-return.")]),v,a("p",null,[s("Sebagai gantinya, kita dapat memindahkan method "),x,s(" dari class TaxCalculator ke Order sehingga class "),e(l,{to:"after/TaxCalculator.java"},{default:p(()=>[s("TaxCalculator.java](after/Order.java) tidak perlu bergantung pada [Order.java")]),_:1}),s(" untuk mengambil data-data dari Order dan semua kalkulasi biaya cukup dilakukan dari class "),I,s(" dan class "),T,s(" cukup mengkalkulasikan berbagai jenis pajak yang akan diaplikasikan kepada total biaya dari class "),j,s(".")]),B])}const R=o(d,[["render",w]]);export{N as __pageData,R as default};