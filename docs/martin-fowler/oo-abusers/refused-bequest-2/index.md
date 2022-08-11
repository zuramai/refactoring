# Refused Bequest

[sourcemaking](https://sourcemaking.com/refactoring/smells/refused-bequest)

## Penjelasan Smell

Refused bequest arti harafiahnya adalah "menolak warisan". Dalam smell ini, sebuah class turunan tidak memakai seluruh method hasil extendsnya. Hal ini mengarah ke violasi LSP dan/atau ISP.

Perhatikan contoh <github-url to="before/Square.java">Square.java</github-url> di package `before`.

```java
@Override
public void setWidth(float width) {
  this.setHeight(width);
}

@Override
public void setHeight(float height) {
  this.height = this.width = height;
}
```

Karena class Square memiliki invariant width dan height harus sama, maka class Square pun melakukan overriding seperti diatas agar widt hdan height selalu disamakan ketika di-set.

Dalam kasus ini, penolakan warisan terjadi saat Square melakukan override pada fungsi setter parent-nya.

Masalah terjadi ketika <github-url to="before/RectangleTest.java">code ini</github-url> dijalankan:

```java
@Test
void test() {
  foo(new Rectangle());
  foo(new Square());
}

void foo(Rectangle r) {
  r.setHeight(10);
  r.setWidth(20);
  assertEquals(200, r.area());
}
```

Fungsi foo memiliki parameter Rectangle. Tentunya, fungsi ini berekspektasi bahwa parameter Rectangle berperilaku sebagaimananya persegi panjang. Bila height = 10, width = 20, maka area 200.

Sayangnya, unit test tersebut akan failed. Karena ketika `foo(new Square());`, terjadi:

```
expected: <200.00> but was: <400.0>
```

Fungsi foo mendapatkan area Square adalah 400 karena ketika width di-set 20, height pun turut diubah menjadi 20.

## Penyelesaian

ectangle dan Square (dan Triangle) memiliki struktur yang serupa, dilakukan extract class, menjadi abstract class <github-url to="after/Shape2D.java">Shape2D</github-url>. Kemudian semua class lain menjadi subclass dari abstract class ini. Silakan cek code di package `after`.

## Tambahan

Kasus ini merupakan contoh umum untuk menjelaskan violasi Liskov Subtitution Principle (LSP). Kasus ini dikenal dengan [square-rectangle problem](https://en.wikipedia.org/wiki/Circle%E2%80%93ellipse_problem).

Wajar bila Anda pernah melakukan violasi LSP ketika baru belajar konsep OOP di semester lalu. Square dan Rectangle terkesan memiliki hubungan is-a, namun ternyata tidak boleh karena dalam kasus ini, Square hanya meminjam sebagian behavior dari Rectangle (fungsi area). Sedangkan behavior yang lain, malah ditimpa.