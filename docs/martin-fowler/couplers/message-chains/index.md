# Message Chains

[sourcemaking](https://sourcemaking.com/refactoring/smells/message-chains)

### Penjelasan Smell

Smell ini terjadi ketika ingin mengakses sebuah method, perlu dilakukan pemanggilan dari hasil return method lainnya sehingga membentuk rantai: `obj.a().b().c()`.

Perhatikan [DistanceTest.java](before/DistanceTest.java), terdapat message chaining ketika ingin mengakses latitude dan longitude.

```java
...
driver.getCurrentPosition().getLatitude();
...
```

### Penyelesaian

Dilakukan [Hide Delegate](https://sourcemaking.com/refactoring/hide-delegate). Perhatikan class [BojekDriver](after/BojekDriver.java) dan [Destination](after/Destination.java), telah ditambahkan fungsi `latitude()` dan `longitude()` yang sebenarnya melakukan delegasi chaining yang dilakukan di package before. Hal ini dilakukan agar class client tidak merasakan adanya chaining, disembunyikan di dalam sini.

```java
public double latitude() {
  return this.getCurrentPosition().getLatitude();
}

public double longitude() {
  return this.getCurrentPosition().getLongitude();
}
```

Alhasil, seperti yang bisa dilihat di [DistanceTest.java](after/DistanceTest.java) di package after, message chain sudah tidak ada.

### Tambahan

Jangan terlalu agresif mengurusi message chain karena bisa menyebabkan smell Middle Man.

Pertimbangkan mengurusi message chain bila terjadi di banyak tempat atau kebetulan ada class yang behavior-nya cocok untuk menampung method delegasi.