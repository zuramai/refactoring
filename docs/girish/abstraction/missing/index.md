# Missing Abstraction

Smell ini terjadi ketika:

- Ada sekumpulan data yang dibiarkan primitif (mirip Data Clumps Martin Fowler).
- Ada encoded string yang dibiarkan primitif (mirip Primitive Obsession Martin Fowler).

Bila smell ini dibiarkan, maka bisa menyebabkan:

- Detail code tersebar dan terekspos di banyak tempat. Menyebabkan tanggungjawab di class yang bersangkutan menjadi tidak jelas (melanggar SRP).
- Terjadi tight-coupling antar class yang memegang data mentah yang tersebar.

## Penyebab Smell

- **Inadequate design analysis**: software developer tidak teliti ketika proses desain. Biasa terjadi karena developer dikejar deadline sehingga terburu-buru dalam melakukan code. Yang penting cepat selesai.
- **Lack of refactoring**: ketika program belum terlalu besar, mungkin saja menggunakan data mentah masih cukup rapi. Seiring berjalannya waktu, ketika ada fitur baru, ternyata data mentah dipakai lagi di tempat lain, dan developer belum sadar bahwa sudah saatnya melakukan refactoring.
- **Misguided focus on minor performance gains**: developer berusaha meningkatkan performance aplikasi, misal dari O(3N+5) menjadi O(2N+3). Ketika performance yang ditingkatkan relatif sedikit, sebaiknya kita lebih fokus kepada code yang rapi. Demi efisiensi bisnis, maintainable code jauh lebih penting ketimbang meningkatkan sedikit performance. Server dan compiler sekarang makin canggih dan murah.

## Contoh

### Masalah

Terdapat data-data yang berkaitan dengan ISBN (International Standard Book Number).

ISBN adalah kode unik yang dibeli oleh penerbit buku untuk diletakkan di buku terbitannya. Kode unik ini terdiri dari: registration group, registrant, publication dan check digit.

ISBN yang dipakai sekarang ini memiliki 2 bentuk. ISBN-10 (mengandung 10 digit) dan ISBN-13 (mengandung 13 digit). ISBN-10 bisa dikonversi menjadi ISBN-13, dan sebaliknya. Kedua bentuk ini juga punya algoritma tersendiri untuk mengecek apakah kode tersebut valid atau tidak. Detail algoritma konversi dan pengecekan dapat dilihat di [Wikipedia](https://en.wikipedia.org/wiki/International_Standard_Book_Number).

Perhatikan <github-url to="before/Book.java">Book.java</github-url> pada package before. Terdapat String ISBN yang memiliki behavior pengecekan dan konversi. Behavior ini tentunya bukan merupakan tanggungjawab class Book. String ISBN seharusnya tidak disimpan secara mentah di dalam class ini.

### Penyelesaian

ISBN diekstrak menjadi hirarki baru. <github-url to="after/ISBN.java">ISBN.java</github-url> sebagai parent-nya dan diturunkan menjadi <github-url to="after/ISBN10.java">ISBN10.java</github-url> dan <github-url to="after/ISBN13.java">ISBN13.java</github-url>. Agar switch statement lebih rapi, dibuat [ISBNFactory](after/ISBNFactory.java) untuk digunakan oleh class <github-url to="after/Book.java">Book</github-url>.

## When to Ignore

Smell ini tidak perlu di-refactor bila malah menyebabkan over-engineering.
