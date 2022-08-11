# Unnecessary Hierarchy


<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/hfNd8QPcWDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Smell ini terjadi ketika pembagian class yang seharusnya dikaitkan dengan perbedaan behaviour, malah dibagikan hingga variasi data-datanya yang seharusnya tidak diperlukan dalam pembagian class. Dalam perbedaan atas data, pembagian class seharusnya tidak perlu dilakukan karena hanya memperbanyak hierarki yang sudah ada dan tentunya cukup dijadikan sebagai member object dalam class.

## Penyebab

- **Subclassing instead of instantiating**: Dimana pembagian class terjadi hingga variasi-variasi data yang seharusnya cukup dilakukan pada deklarasi member/implementasi method abstract. Misal terdapat bunga Mawar yang memiliki 3 warna yang malah dipecahkan sebagai subclass.
- **Taxonomy mania**: Dimana developer terlalu maniak dengan inheritance (alias terlalu memperkarakan perbedaan atribut dari class) sehingga terdapat beberapa class yang seharusnya tidak diperlukan malah ada dalam pembagian class tersebut. Misal terdapat pembagian class dari lampu lalu lintas ataupun perkara jenis kelamin juga dibuatkan class padahal hanya beda jenis kelamin saja.

## Contoh

Salah satu contoh paling sederhana adalah menyangkut adanya pembagian font yang seharusnya tidak diperlukan pada hierarki. Misal terdapat 5 font yang dibuatkan class pada contoh grafis pembagian class:

```
[Font]
  | (generalizes)
  +--[ArialFont]
  +--[CalibriFont]
  +--[ComicSansFont]
  +--[GeorgiaFont]
  +--[TahomaFont]
```

Smell ini seharusnya tidak perlu terjadi bila class `Font` dalam hierarki tersebut tidak dibuatkan subclassnya dan sebaliknya, semua subclass dalam hierarki dapat di-collapse dan ditambahkan private attribute yaitu `fontName` yang berisikan nama font saja.

## Penyelesaian

Sebagai jalan penyelesaian, bagikan class hanya jika pembagian class tersebut terdapat perbedaan secara signitifikan terkait dengan penambahan/perubahan behaviour atau fungsionalitas dari class tersebut.

Dalam menyelesaikan smell tersebut, terdapat 3 cara dalam pembagian class yaitu:

1. Jika pembagian class tersebut menyangkut penamaan atribut, lakukan [Replace Subclass with Fields](https://sourcemaking.com/refactoring/replace-subclass-with-fields) dengan mengubah subclass menjadi atribut dalam class.
2. Jika pembagian class tersebut menyangkut masalah penggolongan dan dapat diselesaikan dengan Enumeration, ubah pembagian class tersebut menjadi Enumeration.


## Julukan

- **Taxomania**: Adanya pembagian class yang seharusnya tidak diperlukan dan dapat digantikan dengan input parameter yang berisikan attribute.
- **Object classes**: Adanya subclass yang seharusnya tidak diperlukan dan dapat ditempatkan sebagai atribut dalam class.

## When to Ignore

![Diagram state dengan perpindahannya](https://sourcemaking.com/files/v2/content/patterns/State1.png "Diagram state dengan perpindahannya")

Dalam kasus design pattern yaitu [State Design Pattern](https://sourcemaking.com/design_patterns/state), jika class tersebut dibagikan demi alasan perpindahan state maka smell tersebut dapat diabaikan dengan catatan terdapat abstract method yang dapat mengatur perpindahan object antar class.
