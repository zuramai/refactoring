# Long Parameter List

[sourcemaking](https://sourcemaking.com/refactoring/smells/long-parameter-list)

### Penjelasan Smell

Smell ini terjadi ketika ada method yang memiliki jumlah parameter yang terlalu banyak. Hal ini membuat code menjadi sulit dibaca dan juga menyebabkan *cognitive overload* pada programmer karena ada beban memori harus mengingat-ingat letak parameter. Lebih berbahayanya lagi jika parameter memiliki tipe data yang sama. Bisa saja tidak sengaja tertukar posisinya.

Perhatikan contoh [WalletNotification.java](before/WalletNotification.java). Terdapat method `balanceNotif(String name, String email, int amount, int current)`.

### Penyelesaian


Dilakukan [Preserve Whole Object](https://sourcemaking.com/refactoring/preserve-whole-object) pada method `balanceNotif` sehingga menjadi `balanceNotif(User user, int amount)`. Karena name, email, dan current balance bisa didapatkan langsung dari object user.

```java
public void balanceNotif(User user, int amount) {
  ...
}
```