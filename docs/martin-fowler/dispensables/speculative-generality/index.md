# Speculative Generality

[sourcemaking](https://sourcemaking.com/refactoring/smells/speculative-generality)

### Penjelasan Smell

Class, method, field, atau parameter yang sudah disiapkan walaupun belum dipakai. Bahkan sebenarnya tidak ada dalam requirement.

Biasanya karena programmer sok ide, berspekulasi, bahwa ini akan dibutuhkan. Namun ternyata setelah produk berjalan lama, spekulasinya ini tidak terbukti.

Hal ini tentunya menjadi masalah karena kita membuat code lebih sulit dibaca untuk hal yang tidak perlu.

Salah satu prinsip extreme programming (XP) yang terkenal adalah [You aren't gonna need it (YAGNI)](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it). Disarankan oleh XP untuk tidak menambahkan fungsionalitas sampai benar-benar diperlukan.

Contohnya, pada package `before`.

Requirement dari client adalah Price bisa memiliki Currency antara IDR atau USD.

Programmer berspekulasi bahwa IDR dan USD adalah kurs jenis tradisional, nantinya akan ada kurs jenis digital seperti bitcoin. Oleh karena itu, Programmer membuat hirarki seperti di dalam package `before`.

### Penyelesaian

Dilakukan [Collapse Hierarchy](https://sourcemaking.com/refactoring/collapse-hierarchy). Class `Traditional` dan `Digital` dihapus. class `USD` dan `IDR` menjadi turunan langsung dari class `Currency`.
