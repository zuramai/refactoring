  # Shotgun Surgery

[sourcemaking](https://sourcemaking.com/refactoring/smells/shotgun-surgery)

### Penjelasan Smell

Smell ini terjadi ketika kita ingin mengganti atau menambahkan fitur ke dalam code, kita perlu mengganti bagian code yang tersebar di banyak class lain. Analoginya adalah bila seseorang ditembak dengan senjata api jenis shotgun, luka tembak akan menyebar di banyak tempat.

Perhatikan code di package `before`. Class `PriceService` dan `PriceIncludeTaxService`, di dalamnya terdapat code untuk mengubah price yang access modifier-nya public. Masing-masing fungsi update juga memiliki validasi price masing-masing.

Sekarang, kita mendapatkan permintaan fitur baru dimana setiap kali ada update value pada class `Product`, maka kita melakukan logging menggunakan class [Logger](after/Logger.java).

Bila kita tidak segera melakukan refactor, kita perlu selalu melakukan perubahan ke setiap bagian code update value yang tersebar di banyak class. Karena ini hanya contoh, tersebarnya baru di dua class saja. Bayangkan bila tersebar di puluhan class. Selain capek, hal ini juga rawan *human-error* karena bisa ada bagian code yang lupa diganti.

Contoh masalah lainnya: bila cara validasi price diganti, kita juga perlu melakukan shotgun surgery.

### Penyelesaian

Kita ubah access modifier price menjadi private. Code validasi price dipindahkan ke `setPrice`. Lalu fungsi setter ditambahkan logging. Sekarang, update value price sudah terpusat di dalam fungsi `setPrice`, sehingga bila suatu saat nanti ada perubahan mengenai update value price, kita cukup mengubah 1x saja di satu tempat.