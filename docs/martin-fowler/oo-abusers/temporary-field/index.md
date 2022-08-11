# Temporary Field

[sourcemaking](https://sourcemaking.com/refactoring/smells/temporary-field)

### Penjelasan Smell

Terdapat field yang bukan bagian dari data class yang bersangkutan. Field ini hanya dipakai sementara oleh beberapa fungsi. Kemudian field ini tidak pernah lagi digunakan.

SOLID Principle yang perlu dicek untuk smell ini adalah SRP ([Single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)). Kita perlu mempertimbangkan apakah field yang bersangkutan adalah field yang cocok menempati class tersebut.

Lihat class [BojekDriver.java](before/BojekDriver.java)
```java
private int f;
private int g;
private int h;

Vector<Location> shortestPath(){
  Vector<Location> paths = new Vector<>();
  
  //...
  //complex A* algorithm code. using f, g, h variable
  //...
  
  return paths;
}
```

Disini dimisalkan ada driver yang perlu melakukan pencarian rute terdekat. Salah satu algoritma yang dapat digunakan untuk mencari rute adalah [A*](https://en.wikipedia.org/wiki/A*_search_algorithm). Seperti yang sudah Anda pelajari di matakuliah AI semester lalu, A* membutuhkan beberapa hal untuk beroperasi, misalnya adalah variabel f, g, h. 

Di dalam class ini, bayangkan ketiga variabel itu akan digunakan di fungsi `shortestPath` dan juga di fungsi-fungsi private lainnya yang adalah hasil extract fungsi `shortestPath` (diekstrak agar tidak menimbulkan code smell **Long Method**).

BojekDriver seharusnya hanya memperdulikan data miliknya. Variabel f, g, dan h hanyalah temporary field untuk keperluan algoritma A*.

### Penyelesaian

Untuk contoh kasus ini, kita melakukan [Extract Class](https://sourcemaking.com/refactoring/extract-class)

Semua fungsi berkaitan dengan A* dan semua variabelnya kita usir ke class baru [AStar.java](after/AStar.java).

Di class [BojekDriver](after/BojekDriver.java), fungsi `shortestPath` tetap ada, namun didelegasi ke class AStar.

```
Vector<Location> shortestPath(){
  return new AStar().shortestPath(current, destination);
}
```