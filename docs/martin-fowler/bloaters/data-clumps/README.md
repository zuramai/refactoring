# Data Clumps

[sourcemaking](https://sourcemaking.com/refactoring/smells/data-clumps)

### Penjelasan Smell

Smell ini terjadi ketika ada beberapa field atau parameter method yang selalu dipakai atau dioper bersama-sama. Bila terjadi hal seperti ini, berarti variabel-variabel ini bisa dipertimbangkan untuk digabungkan langsung dalam satu class.

Perhatikan class `Kelas` dan `Semester` di dalam package `before`. Pada kedua class ini, terdapat Date `start` dan `end`.

### Penyelesaian

Karena selalu berbarengan, `start` dan `end` dipertimbangkan untuk digabung dalam class `DateRange`. Agar tidak hanya menjadi smell data class, kita dapat melengkapi class `DateRange` dengan behavior tertentu. Contohnya kita tambahkan validasi `start` tidak boleh melebihi `end`.