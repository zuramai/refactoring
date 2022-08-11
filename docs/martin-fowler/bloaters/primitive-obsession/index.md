# Primitive Obsession

[sourcemaking](https://sourcemaking.com/refactoring/smells/primitive-obsession)

### Penjelasan Smell

Smell ini terjadi ketika ada field atau parameter yang memakai tipe data primitif, padahal behavior-nya lebih daripada tipe data yang ia gunakan.

Hal ini tidak terjadi hanya di tipe data primitif `int`, `float`, dan sebagainya saja. Hal ini juga bisa terjadi di tipe data lain di level abstraksi yang lebih tinggi. Misalnya `String`. Intinya adalah, bila programmer menyimpan data dengan sebuah tipe data, padahal behavior dari data itu lebih dari tipe data yang ia gunakan, berarti sebenarnya harus diganti atau dibuatkan class baru.

Perhatikan contoh [Mahasiswa.java](before/Mahasiswa.java). Terdapat field `name` menggunakan String dan tanggal lahir yang dipecah-pecah menjadi integer. Padahal `name` memiliki validasi sesuai dengan regex dalam code, dan tanggal lahir memiliki validasi tanggal harus valid.

Selain itu, terdapat juga field `type` menggunakan String. Padahal value `type` hanya boleh Reguler atau Global. Selain itu, `type` juga digunakan pada [MahasiswaGreeter](before/MahasiswaGreeter.java) yang di dalam sini terdapat smell switch statement.

### Penyelesaian

Dilakukan [Extract Class](https://sourcemaking.com/refactoring/extract-class) pada `name`, dibuatkan class baru bernama [FullName](after/FullName.java). Kemudian [replace data value with object](https://sourcemaking.com/refactoring/replace-data-value-with-object) pada field `name` di class Mahasiswa.

Untuk integer `dayOfBirth`, `monthOfBirth`, dan `yearOfBirth`, kita ganti menggunakan class java.util.Date bawaan dari Java.

Untuk logic Greeter, kita gunakan [replace type code with state/strategy](https://sourcemaking.com/refactoring/replace-type-code-with-state-strategy).