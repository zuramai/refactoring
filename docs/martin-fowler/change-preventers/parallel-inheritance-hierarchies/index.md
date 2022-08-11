# Parallel Inheritance Hierarchies

[sourcemaking](https://sourcemaking.com/refactoring/smells/parallel-inheritance-hierarchies)

### Penjelasan Smell

Smell ini terjadi ketika ada hirarki inheritance yang selalu ditambahkan bersama-sama.

Bayangkan ada dua atau lebih hirarki parent-children class. Lalu kita perlu menambahkan (extends) satu class baru di salah satu hirarki, hirarki lain ikut-ikutan juga butuh untuk extends class mengikuti hirarki ini. Contoh: Abstract class A di-extends menjadi A1 dan A2. Lalu ada abstract class B di-extends menjadi B1 dan B2. Ketika A di-extends menjadi A3, B juga ikut-ikutan butuh B3.

Untuk menghadapi smell ini, kita perlu mempertimbangkan apakah cocok bila hirarki-hirarki ini digabung saja menjadi satu. 

Smell tidak perlu ditangani bila memang hirarki paralel ini disengaja untuk keperluan pemisahan konteks/tanggungjawab. Atau ketika digabung code malah menjadi lebih jorok.

Perhatikan code di package `before`. Hirarki `Shape2D` selalu berkembang berbarengan dengan hirarki `AreaInterface`. Bila ada `Shape2D` yang baru, misalnya `Circle`. maka `AreaInterface` juga akan ikut-ikutan membuat anak baru `CircleAreaCalculator`.

### Penyelesaian

Kita pindahkan logika perhitungan area agar digabung saja ke dalam `Shape2D`.
