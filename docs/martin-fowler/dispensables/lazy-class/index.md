# Lazy Class

[sourcemaking](https://sourcemaking.com/refactoring/smells/lazy-class)

### Penjelasan Smell

Memecah class memang bagus, terlebih bila bertujuan untuk memenuhi SRP. Class yang terlalu gemuk juga sudah dibahas di code smell Large Class.

Namun, class yang terlalu kecil juga tidak baik karena semakin banyak class yang harus dibaca, semakin sulit programmer memahami code suatu produk.

Lazy class adalah kondisi dimana class memiliki fungsi yang minim, ekstrimnya hanya memiliki satu buah fungsi. 

Lazy class bisa saja terjadi karena refactoring. Awalnya class ini memiliki fungsi yang banyak. Namun, satu per satu dipindahkan ke class lain karena pertimbangan tertentu.

Pada contoh di [PriceValidator.java](before/PriceValidator.java). Class hanya memiliki satu buah fungsi untuk validasi harga.


### Penyelesaian

Fungsi `validate` dipindahkan ke class [Price.java](after/Price.java) kemudian diberi nama yang lebih sesuai untuk class Price: `isPriceValid`. Setelah dipindahkan, class PriceValidator bisa dihapus.