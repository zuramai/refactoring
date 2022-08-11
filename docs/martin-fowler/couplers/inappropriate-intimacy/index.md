# Inappropriate Intimacy

[sourcemaking](https://sourcemaking.com/refactoring/smells/inappropriate-intimacy)

### Penjelasan Smell

Smell ini terjadi karena hubungan antar class yang terlalu intim, menyebabkan class yang satu mengeksploitasi internal field dan/atau method di class lain.

Hal ini berbahaya karena class yang internal logic-nya diakses bisa mendapat perlakuan yang tidak terduga.

Pada constructor di [Product.java](before/Product.java), class Product mengetahui ada fungsi `addTag` di Catalog dan menambahkan tag-nya sendiri ke Catalog.

```java
public Product(String name, double price, Catalog catalog) {
  ...
  this.catalog.addTag(this, Catalog.NEWCOMER_TAG);
}
```

Hal ini tentu berbahaya karena artinya, class Product bisa menambahkan tag apapun tanpa seizin Catalog.

### Penyelesaian

Catalog dan Product punya hubungan bidirectional yang tidak perlu, maka dilakukan [Change Bidirectional Association to Unidirectional](https://sourcemaking.com/refactoring/change-bidirectional-association-to-unidirectional). Dengan cara menghapus field `catalog` di dalam `Product`.

Semua method di class [Catalog](after/Catalog.java) yang berhubungan dengan manipulasi tag access modifier-nya diubah menjadi private.
