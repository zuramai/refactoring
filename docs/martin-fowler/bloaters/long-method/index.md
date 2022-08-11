# Long Method

[sourcemaking](https://sourcemaking.com/refactoring/smells/long-method)

### Penjelasan Smell

Smell ini terjadi ketika ada sebuah method yang terlalu panjang. Method yang terlalu panjang dapat ditentukan dengan beberapa indikator:

- programmer kesulitan memahami method. Perlu membaca dengan detail baris per baris berulang-ulang untuk memahami tujuan code ini
- programmer perlu menuliskan internal comment untuk mengklarifikasi tujuan beberapa line of code
- satu method memiliki banyak tanggungjawab
- terdapat hidden-side-effect di dalam method. Nama method tidak sesuai dengan apa yang dilakukan di dalamnya.
- melebihi N baris. N ini merupakan angka yang ditentukan oleh masing-masing tim. Beda perusahaan atau beda bahasa pemrograman bisa beda angka. Di sourcemaking, dibilang tidak boleh lebih dari 10 baris.

Pada contoh [SemesterMenu.java](before/SemesterMenu.java), terdapat method `menu`, `create`, dan `delete` yang melebihi 10 baris.

### Penyelesaian

Dilakukan [Extract Method](https://sourcemaking.com/refactoring/extract-method) pada method `menu`, `create`, dan `delete`.

Lihat hasilnya di package [after](after/SemesterMenu.java).

Code di dalam method `menu` diekstrak menjadi `showSemesters()`, `printAndGetMenu()`, dan `showSemester()`.

Untuk method create, delete, dan bagian code input menu. Kita dapat melihat terdapat [duplicate code](https://sourcemaking.com/refactoring/smells/duplicate-code) yang juga membuat method menjadi panjang. Hal ini dapat diatasi dengan mengakali logic input menjadi method `getDateInput`, `getIntInput`, dan `getStringInput`.

### Tambahan

Refactor pada contoh `SemesterMenu` ini belum selesai. Terdapat smell Large Class yang akan diurus [disini](../large_class).