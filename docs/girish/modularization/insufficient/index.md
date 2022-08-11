# Insufficient Modularization

<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/eRAoks2udlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Smell ini terjadi karena adanya abstraksi yang terlalu besar dan harus dipecahkan (dekomposisi) ke beberapa abstraksi baru. Terdapat 2 jenis smell yaitu:

- **Bloated interface**: Abstraksi yang mempunyai banyak member dalam public interface. Smell ini disamaratakan dengan [Large Class](../../../martin-fowler/bloaters/large-class/).
- **Bloated implementation**: Abstraksi dengan jumlah method yang banyak ataupun memiliki kompleksitas yang terlalu kompleks. Smell ini disamaratakan dengan [Long Method](../../../martin-fowler/bloaters/long-method/).

## Teori: Cyclomatic Complexity

Pada kedua jenis smell ini, kompleksitas pada suatu method dapat diprediksi dengan [rumus cyclomatic complexity McCabe](https://en.wikipedia.org/wiki/Cyclomatic_complexity) (bukan McTerong) yaitu *`M = E − N + 2P`* dimana:

- *M* merepresentasikan magic number untuk kompleksitas cyclomatic per-satuan method/routines,
- *E* merepresentasikan jumlah edges (alur method),
- *N* merepresentasikan jumlah nodes (statements), dan
- *P* merepresentasikan jumlah connected components (jumlah method) yang dijalankan. (Tambahkan P jika dilakukan secara rekursif atau tambahkan 2 jika hanya 1 method)

Jika magic number cyclomatic complexity dari implementation (satuan method) tersebut **lebih dari 10**, maka smell Insuffient Modularization tipe bloated implementation bisa terjadi pada abstraksi tersebut.

Untuk mengetahui lebih jauh mengenai kompleksitas suatu method/abstraksi secara cyclomatic, dapat dilihat referensi lebih jauh melalui buku "Software Testing: A Craftsman's Approach, Third Edition" karangan Paul C. Jorgensen (Bab 9, Hal 139-146) atau melalui rangkuman [Software Testing: Perhitungan Cyclomatic Complexity](https://socs.binus.ac.id/2016/12/29/software-testing-perhitungan-cyclomatic-complexity/) yang dipublikasikan di socs.binus.ac.id.

## Penyebab

- **Providing centralized control**: Dimana pada kasus smell ini disebabkan karena adanya pemusatan  kerjaan dan kendali dalam satu abstraksi atau dalam suatu method dalam abstraksi.
- **Creating large classes for use by multiple clients**: Developer membuat class besar agar dapat dipakai oleh multiple client.
- **Grouping all related functionality together**: Developer awam terkadang mengelompokkan beberapa fungsionalitas ke dalam 1 class tanpa memahami fungsinya Single Responsibility Principle (SRP) yang terkadang menimbulkan pembludakan interface/class.

## Penyelesaian

Jika kasus ini berkaitan dengan bloated interface, maka perlu dicek member (method dan field) beserta tanggungjawabnya. Jika member tersebut ternyata berperan diluar tanggungjawab utama class tersebut, extract ke class baru.

Jika kasus ini berkaitan dengan bloated implementation, perlu dicek kompleksitas method sebelum method tersebut dipecahkan/diekstrak ke private helper method. Jika kasus smell ini terjadi berbarengan dengan smell [Multifaceted Abstraction](../../abstraction/multifaceted/), maka pecahkan/ekstrak dan enkapsulasikan setiap pertanggungjawaban dalam masing-masing abstraksi baru atau yang telah ada.

## Julukan

- [**God class**](https://en.wikipedia.org/wiki/God_object): Terjadi karena satu class terdiri dari > 50 method atau attributes.
- [**Fat interface**](https://en.wikipedia.org/wiki/Interface_bloat): Interface yang disediakan oleh class tidak kohesif.
- [**Blob class**](https://sourcemaking.com/antipatterns/the-blob): Class terlalu besar dan terlalu kompleks.
- **Classes with complex control flow**: Class terlalu kompleks secara cyclomatic complexity (nilai magic number of cyclomatic complexity sangat tinggi).
- **Too much responsibility**: Class memegang tanggungjawab terlalu banyak.

## When to Ignore

- **Key classes**: Merupakan class yang krusial dan penting, juga berukuran besar, kompleks, dan terhubung dengan banyak class.
- **Auto-generated code**: Jika code tersebut digenerate secara otomatis dari generator mempunyai method yang kompleks sehingga sulit untuk direfactor/modifikasi.

## Referensi

- Paul C. Jorgensen, "Software Testing: A Craftsman's Approach, Third Edition", Bab 9, Hal 139-146. CRC Press. 2013.
- Gautham Prabhuk, "SOFTWARE METRICS," 22 Dec 2014. Wordpress. Available at https://gauthamprabhuk.wordpress.com/2014/12/22/software-metrics
