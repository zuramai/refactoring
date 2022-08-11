# Dead Code

[sourcemaking](https://sourcemaking.com/refactoring/smells/dead-code)

### Penjelasan Smell

Bagian code yang tidak akan tersentuh ketika sistem dijalankan. Contoh yang paling mudahnya adalah sebagai berikut:

```java
void foo() {
  if(true) {
    return;
  }

  System.out.println("halo");
}
```

`System.out.println("halo");` tidak akan pernah dijalankan karena fungsi `foo` akan selalu `return` duluan.

Bila Anda menggunakan IDE yang bagus, dead code biasanya akan diberi warning. Misalnya di Eclipse, code System.out.println diatas akan diberikan warning dengan simbol lampu kuning yang memberitahu line of code ini adalah dead code.

Bahkan untuk beberapa bahasa pemrograman tertentu, contohnya Golang, dead code bukan sekadar warning. Bila ada dead code program tidak bisa di-build.

Terkadang, dead code tidak nampak sejelas itu. Contohnya di class [PriceCalculator.java](before/PriceCalculator.java).

Bayangkan awalnya requirement dari client adalah: diskon diberikan 10% bila harga kurang dari 10.000, jika lebih, diskon 20%. Terbentuklah code berikut:

```java
public double calculate(double price, boolean isDiscount){
  double discountPrice = 0;
  
  if(isDiscount){
    if(price < 10000){
      discountPrice = price * 0.1;
    } else {
      discountPrice = price * 0.2;
    }
  }
  
  return price - discountPrice;
}
```

Tiba-tiba, requirement dari client berubah. Client meminta diskon diketok rata 15%.

Entah mengapa, programmer tidak menghapus if yang pertama. Ia langsung menambahkan di bagian bawah sebelum return. Secara requirement, ini tidak masalah. Diskon akan selalu 15%.

```java
public double calculate(double price, boolean isDiscount){
  double discountPrice = 0;
  
  if(isDiscount){
    if(price < 10000){
      discountPrice = price * 0.1;
    } else {
      discountPrice = price * 0.2;
    }
  }
  
  if(isDiscount)
    discountPrice = price * 0.15;
  return price - discountPrice;
}
```



### Penyelesaian

Setelah membaca code di bagian `before`, Anda tentunya menyadari bahwa bagian code ini adalah dead code yang tersembunyi.

```java
if(isDiscount){
  if(price < 10000){
    discountPrice = price * 0.1;
  } else {
    discountPrice = price * 0.2;
  }
}
```

Bagian ini memang dijalankan, namun variabel `discountPrice` akan selalu ditimpa di line of code selanjutnya. Sehingga bagian ini aman untuk dibuang.