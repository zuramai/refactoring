# Unfactored Hierarchy

<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/IJFO8YlSosc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Smell ini terjadi pada class-class dalam hierarki dimana terdapat bagian code yang duplikat. Duplikasi code bisa terjadi pada class yang bersaudaraan ataupun pada code-code yang mirip antar superclass dan subclass.

Terdapat 3 jenis smell yang terjadi pada hierarki yaitu:

- **Unfactored interface**: Terdapat public method yang mempunyai kemiripan pada signature (parameter/return type) yang seharusnya dapat ditempatkan pada superclass.
- **Unfactored implementation**: Terdapat method yang mempunyai kemiripan pada implementasi/behaviour yang seharusnya dapat ditempatkan pada superclass.
- **Unfactored interface and implementation**: Terdapat method yang mempunyai kemiripan pada signature (parameter/return type) dan implementasi/behaviour yang seharusnya dapat ditempatkan pada superclass.

## Penyebab

- **Copying subtypes**: Developer melakukan copy-paste isi method dari 1 subclass ke subclass lain karena dikejar deadline dan cepat selesai.
- **Improper handling of outliers**: Adanya masalah yang menyangkut hierarki dimana salah satu member class tidak menginginkan adanya method yang diturunkan dari parentnya (karena dikhawatirkan akan menimbulkan smell Rebellious Hierarchy), sehingga diselesaikan dengan melakukan copas isi method dari satu subclass ke subclass lain yang membutuhkannya.

## Penyelesaian

Jika masalah tersebut menyangkut adanya duplikat dari code-code antar class, terdapat 2 skeneario penyelesaian smell ini yaitu:

- Jika isi snippet code duplikat tersebut menyangkut minor behaviour pada beberapa class, disarankan untuk move/extract code snippet yang duplikat (terjadi antar subclass) ke method baru di class lain.
- Jika isi snippet code duplikat tersebut mirip secara keseluruhan dapat dipindahkan ke superclass, lakukan [pull-up method](https://sourcemaking.com/refactoring/pull-up-method)/[field](https://sourcemaking.com/refactoring/pull-up-field) ke superclass agar dapat dijadikan method konkrit secara langsung.

## Contoh

Salah satu masalah smell paling sederhana adalah masalah hierarki antar dua atau lebih subclass yang menyangkut 1 atau lebih method yang seharusnya dapat di-*pull up* (alias diimplementasikan abstract method di superclass) malah dibiarkan begitu saja dalam keadaan duplikat.

Namun pada kasus hierarki class entity dan game system dimana class tersebut menyangkut adanya duplikasi code snippet antar class pada class <github-url to="before/Player.java">Monster.java</github-url> dan <github-url to="before/Player.java">Player.java</github-url> dimana terdapat kesamaan pada bagian code pada method implementasi `hit(int damage)` pada bagian berikut:

```java
// Monster.java
@Override
public void hit(int damage) {
  health -= damage;
  if(health <= 0) {
    die();
  }
}

// Player.java
@Override
public void hit(int damage) {
  double damageMultiplier = (1-((0.052*armor)/(0.9+0.048*Math.abs(armor))));
  if(damageMultiplier < 0) damageMultiplier = 0;

  health -= (damage * damageMultiplier);
  if(health <= 0) {
    die();
  }
}
```

Dimulai dari setting variabel `health -= damage` hingga validasi health point terjadi duplikat dimana terdapat kesamaan isi code kecuali pada pengurangan variabel dengan `damage` yang berbeda pada kedua class. Kesamaan code tersebut jika ditunjukkan maka dapat diekstrak ke private method baru bernama `reduceHealth(int damage)` yang ditempatkan di abstract class baru bernama <github-url to="after/GameUnit.java">GameUnit.java</github-url>

```java
protected void reduceHealth(int damage) {
  health -= damage;
  if(health <= 0) {
    die();
  }
}
```

Class baru bernama `GameUnit` akan menampung semua kebutuhan yang diperlukan pada entity-entity yang dapat dilibatkan dalam petempuran seperti class `Player` dan `Monster`. Entity-entity yang mempunyai behaviour health point dapat diextend dari abstract class `GameUnit` dimana abstract class tersebut mengimplementasikan interface `Hittable` (dari smell sebelumnya) sehingga subclass tidak perlu lagi mengimplementasikan interface `Hittable` ke subclass masing-masing.

## Julukan

- **Orphan sibling method/attribute**: Terdapat member yang lebih dari 50% atau minimal 10 subclasses langsung, tanpa adanya penurunan/inheritance dan pemakaian abstract method atau overriding.
- **Incomplete inheritance**: Adanya kemiripan antar subclass dan sesaudaranya dimana isi dari implementasi tersebut hampir sama persis.
- **Repeated functionality**: Duplikat code yang terjadi pada 2 atau lebih class yang seharusnya dapat diabstrakkan.
- **Redundant variable declaration**: Ada subclass yang melakukan inheritance dengan jalan pintas ke base classnya.
- **Significant sibling duplication**: Adanya kesamaan yang mirip antar saudara-saudara subclassnya.

## When to Ignore

Jika bahasa pemrograman tersebut tidak mendukung beberapa hal-hal yang dapat mempermudah programmer menyelesaikan masalah hierarki baik menyangkut multiple class inheritance (Java dan C#) dan Generic type class, maka smell ini terpaksa harus dibiarkan karena menyangkut adanya masalah support dalam bahasa pemrograman berbasis OOP.
