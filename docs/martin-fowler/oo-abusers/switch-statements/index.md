# Switch Statements

[sourcemaking](https://sourcemaking.com/refactoring/smells/switch-statements)

## Penjelasan Smell

Terdapat pemakaian switch atau if-else untuk menentukan operasi pada variasi tipe-tipe tertentu.

Tidak semua switch atau if-else itu berbahaya. Perlu dipertimbangkan apakah akan terjadi violasi terhadap OCP ([Open Closed Principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)).

Lihat class <github-url to="before/ShapePrinter.java">ShapePrinter.java</github-url> dan <github-url to="before/CharNeededCounter.java">CharNeededCounter.java</github-url>.

<Tabs>
<Tab name="ShapePrinter" text="ShapePrinter.java">

```java
public class ShapePrinter {
	public void print(String shape, int size){
		if(shape.equalsIgnoreCase("square")){
			for(int i = 0; i < size; i++){
				for(int j = 0; j < size; j++){
					System.out.print("*");
				}
				System.out.println("");
			}
		} else if(shape.equalsIgnoreCase("triangle")){
			for(int i = 1; i <= size; i++){
				for(int j = 0; j < i; j++){
					System.out.print("*");
				}
				System.out.println("");
			}
		} else {
			System.out.println("invalid shape");
		}
	}
}
```

</Tab>
<Tab name="CharNeededCounter" text="CharNeededCounter.java">

```java
public class CharNeededCounter {
	public int count(String shape, int size){
		if(shape.equalsIgnoreCase("square")){
			return size * size;
		} else if(shape.equalsIgnoreCase("triangle")){
			return ((size+1) * size) / 2;
		}

		return -1;
	}
}
```

</Tab>
</Tabs>

Kedua class tersebut akan melanggar OCP. Bayangkan bila ada tipe `Shape` baru yang perlu dibuat, tentu saja akan bertambah lagi `if` di masing-masing ShapePrinter dan CharNeededCounter.

Misal bertambah logic shape `Circle`. Violasi OCP terjadi di 2 class tersebut.

```java
if(shape.equalsIgnoreCase("square")){
  ...
} else if(shape.equalsIgnoreCase("triangle")){
  ...
} else if(shape.equalsIgnoreCase("circle")){
  ...
} else {
  ...
}
```

Di dalam contoh ini, if-else square dan triangle ada di 2 class. Pada kondisi nyata bila hal ini dibiarkan terjadi, if-else square dan triangle akan terus beranak-pinak bila ada kebutuhan logic lain.

Semakin sedikit kita menggunakan if-else di dalam code, maka akan semakin baik. Bahkan ada orang yang membuat campaign untuk ini: [Anti-IF Campaign](https://francescocirillo.com/pages/anti-if-campaign).

## Penyelesaian

Untuk contoh kasus ini, kita melakukan tahapan berikut:

1. [Replace Type Code with Subclasses](https://sourcemaking.com/refactoring/replace-type-code-with-subclasses)

Kita memiliki dua type code. `square` dan `triangle`. Oleh karena itu, kita buat class <github-url to="after/Shape.java">Shape.java</github-url> sebagai abstract class yang memiliki fungsi `charNeeded` dan `print`, lalu <github-url to="after/Shape.java">Triangle.java</github-url> dan <github-url to="after/Square.java">Square.java</github-url> meng-extends class `Shape`.

<Tabs>
<Tab name="Shape" text="Shape.java">

```java
public abstract class Shape {
	protected int size;

	public Shape(int size) {
		super();
		this.size = size;
	}

	public abstract void print();
	public abstract int charNeeded();
}
```

</Tab>
<Tab name="Square" text="Square.java">

```java
public class Square extends Shape {
	public Square(int size) {
		super(size);
	}

	@Override
	public void print() {
		for (int i = 0; i < size; i++) {
			for (int j = 0; j < size; j++) {
				System.out.print("*");
			}
			System.out.println("");
		}
	}

	@Override
	public int charNeeded() {
		return size * size;
	}
}
```

</Tab>
<Tab name="Triangle" text="Triangle.java">

```java
public class Triangle extends Shape {
	public Triangle(int size) {
		super(size);
	}

	@Override
	public void print() {
		for(int i = 1; i <= size; i++){
			for(int j = 0; j < i; j++){
				System.out.print("*");
			}
			System.out.println("");
		}
	}

	@Override
	public int charNeeded() {
		return ((size+1) * size) / 2;
	}
}
```

</Tab>
</Tabs>

2. [Replace Conditional with Polymorphism](https://sourcemaking.com/refactoring/replace-conditional-with-polymorphism)

Setelah class `Square` dan `Triangle` sudah terbentuk. Logic print dari `ShapePrinter` dan logic menghitung karakter dari `CharNeededCounter` dipindahkan ke masing-masing class.

Dengan begini, bila ada jenis baru, misalkan `Circle`, kita tinggal extends dari class `Shape`.

## Revisi Martin Fowler

Switch Statements adalah code smell yang dibuat Fowler di buku edisi pertamanya. Di buku edisi kedua, beliau meniadakan code smell ini. Beliau membuat smell baru bernama **Repeated Switches**. Beliau ingin lebih menekankan if-else yang perlu diberantas adalah if-else yang berstruktur sama/mirip dan sering muncul di beberapa tempat. Contohnya di contoh kasus ini if-else square dan triangle muncul dua kali.

## ShapeFactory

User tetap akan meng-input string melalui console. Oleh karena itu, kita perlu menyiapkan sebuah class <github-url to="after/ShapeFactory">Factory</github-url> untuk membuat class Shape dari string yang diinput.

<Tabs>
<Tab name="Price" text="Price.java">

```java
public class ShapeFactory {
	public Shape create(String shape, int size) throws Exception {
		if(shape.equalsIgnoreCase("triangle")) {
			return new Triangle(size);
		} else if (shape.equalsIgnoreCase("square")) {
			return new Square(size);
		}

		throw new Exception("invalid shape");
	}
}
```

</Tab>
</Tabs>

Harusnya Anda menyadari bahwa terjadi violasi OCP disini. Bila class `Circle` dibuat, maka if di Factory bertambah. Hal ini dimaklumi karena OCP hanya dilanggar satu kali saja di dalam Factory (tidak akan dilanggar lagi di tempat lain) dan memang terpaksa dilakukan karena input dari user adalah string. Ibaratkan Factory disini berperan sebagai anti-corruption layer.

Di beberapa bahasa pemrograman, ada cara spesifik untuk mengakali menghilangkan if-else pada class Factory, contohnya untuk Java: https://www.javacodegeeks.com/2014/10/factory-without-if-else.html.
