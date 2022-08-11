# Data Class

[sourcemaking](https://sourcemaking.com/refactoring/smells/data-class)

### Penjelasan Smell

Bila class hanya cuma sebagai *dumb data holders*, class bisa dipertimbangkan untuk dibuang dengan cara digabung dengan class lain. *Dumb data holders* berarti class ini hanya memiliki field dan fungsi setter getter saja.

Ketika produk baru awal-awal di-code, sangat wajar bila banyak class yang belum memiliki behavior (baru isi data saja). Namun, bila produk sudah makin berkembang, namun masih ada suatu class yang hanya berisi setter/getter, sudah sinyal kuat untuk dilakukan refactor.

Pada contoh kasus [FullName.java](before/FullName.java), class hanya berisi setter getter untuk field `firstName` dan `lastName`.

### Penyelesaian

Semua field dari FullName [dipindahkan](https://sourcemaking.com/refactoring/move-method) ke [User.java](after/User.java). Kemudian class FullName dihapus.