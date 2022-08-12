# Temporary Field

[sourcemaking](https://sourcemaking.com/refactoring/smells/temporary-field)

## Penjelasan Smell

Terdapat field yang bukan bagian dari data class yang bersangkutan. Field ini hanya dipakai sementara oleh beberapa fungsi. Kemudian field ini tidak pernah lagi digunakan.

SOLID Principle yang perlu dicek untuk smell ini adalah SRP ([Single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)). Kita perlu mempertimbangkan apakah field yang bersangkutan adalah field yang cocok menempati class tersebut.

Lihat class `BojekDriver.java`

<Tabs>
<Tab name="BojekDriver" text="BojekDriver.java">

```java
public class BojekDriver {
	String name;
	Location destination;
	Location current;

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
}
```

</Tab>
<Tab name="Location" text="Location.java">

```java
public class Location {
	float latitude;
	float longitude;
}
```

</Tab>
</Tabs>

Disini dimisalkan ada driver yang perlu melakukan pencarian rute terdekat. Salah satu algoritma yang dapat digunakan untuk mencari rute adalah [A\*](https://en.wikipedia.org/wiki/A*_search_algorithm). Algorithma A\* membutuhkan beberapa hal untuk beroperasi, misalnya adalah variabel f, g, h.

Di dalam class ini, bayangkan ketiga variabel itu akan digunakan di fungsi `shortestPath` dan juga di fungsi-fungsi private lainnya yang adalah hasil extract fungsi `shortestPath` (diekstrak agar tidak menimbulkan code smell **Long Method**).

BojekDriver seharusnya hanya memperdulikan data miliknya. Variabel f, g, dan h hanyalah temporary field untuk keperluan algoritma A\*.

## Penyelesaian

Untuk contoh kasus ini, kita melakukan [Extract Class](https://sourcemaking.com/refactoring/extract-class)

Semua fungsi berkaitan dengan A\* dan semua variabelnya kita usir ke class baru <github-url to="after/AStar.java">AStar.java</github-url>.

Di class <github-url to="after/BojekDriver.java">BojekDriver</github-url>, fungsi `shortestPath` tetap ada, namun didelegasi ke class AStar.

<Tabs>
<Tab name="BojekDriver" text="BojekDriver.java">

```java
public class BojekDriver {
	String name;
	Location destination;
	Location current;

	Vector<Location> shortestPath(){
		return new AStar().shortestPath(current, destination);
	}
}
```

</Tab>
<Tab name="AStar" text="AStar.java">

```java
public class AStar {
	private int f;
	private int g;
	private int h;

	Vector<Location> shortestPath(Location current, Location destination){
		Vector<Location> paths = new Vector<>();

		//...
		//complex A* algorithm code. using f, g, h variable
		//...

		return paths;
	}
}
```

</Tab>
</Tabs>
