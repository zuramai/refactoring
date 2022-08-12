# Divergent Change

[sourcemaking](https://sourcemaking.com/refactoring/smells/divergent-change)

Martin Fowler:

> Divergent change occurs when one module is often changed in different ways for different reasons. If you look at a module and say, “Well, I will have to change these three functions every time I get a new database; I have to change these four functions every time there is a new financial instrument,” this is an indication of divergent change. The database interaction and financial processing problems are separate contexts, and we can make our programming life better by moving such contexts into separate modules. That way, when we have a change to one context, we only have to understand that one context and ignore the other. We always found this to be important, but now, with our brains shrinking with age, it becomes all the more imperative. Of course, you often discover this only after you’ve added a few databases or financial instruments; context boundaries are usually unclear in the early days of a program and continue to shift as a software system’s capabilities change.

## Penjelasan Smell

Hati-hati ketika mempelajari smell ini dari sourcemaking karena bagian _Signs and Symptoms_ di sourcemaking berbeda dengan definisi Martin Fowler di bukunya. Kita akan menggunakan definisi sesuai dengan sumbernya.

Seperti di paragraf dari Martin Fowler diatas, smell ini terjadi ketika sebuah class sering berubah untuk alasan yang berbeda-beda. Dengan kata lain, class ini melanggar Single Responsibility Principle.

Disebut di paragraf diatas: _context boundaries are usually unclear_. Terkadang sulit untuk menentukan apa yang menjadi tanggungjawab class ini atau bukan. Hal ini kembali ke diskusi tim masing-masing ketika code design, atau menunggu gejala benar-benar jelas ketika terbukti benar class ini sering berubah untuk alasan yang berbeda. Pemisahan tanggungjawab paling klasik adalah menggunakan MVC dimana model, view, dan controller dipisah. Bila ingin pemisahan yang lebih detail, Anda juga bisa menggunakan **layered architecture** yang sudah diajarkan di kelas DDD.

Perhatikan class <github-url to="before/Rectangle.java">Rectangle</github-url> di package `before`. Disana terdapat field `width` dan `weight`. Terdapat method `area()` dan `perimeter()`. Dan juga terdapat method `print(String style)`. Kita bisa berargumen bahwa class ini memiliki dua tanggungjawab, yaitu mengurus kalkulasi Rectangle dan juga mengatur tampilan Rectangle ke dalam console.

<Tabs>
<Tab name="RectangleTest" text="RectangleTest.java">

```java
class RectangleTest {

	@Test
	void test() {
		Rectangle r = new Rectangle(5, 3);
		assertEquals(r.area(), 15);
		assertEquals(r.perimeter(), 16);

		r.print("border");
		System.out.println("");
		r.print("full");
	}

}
```

</Tab>
<Tab name="Rectangle" text="Rectangle.java" :max-height="400">

```java
public class Rectangle {
	private int width;
	private int height;

	public Rectangle(int width, int height) {
		if(width <= 0 || height <= 0) {
			throw new IllegalArgumentException("width and height must be greater than zero");
		}

		this.width = width;
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public int getHeight() {
		return height;
	}

	public int area() {
		return width * height;
	}

	public int perimeter() {
		return 2 * (width + height);
	}

	public void print(String style) {
		style = style.toLowerCase();
		if(style.equals("full")) {
			for(int i = 0; i < height; i++) {
				for(int j = 0; j < width; j++) {
					System.out.print("*");
				}
				System.out.println("");
			}
		} else if(style.equals("border")) {
			for(int i = 0; i < height; i++) {
				for(int j = 0; j < width; j++) {
					System.out.print(
							j == 0 || j == width-1 ||
							i == 0 || i == height-1 ? "*" : " ");
				}
				System.out.println("");
			}
		} else {
			System.out.println("style not recognized");
		}
	}
}
```

</Tab>
</Tabs>

## Penyelesaian

Kita pindahkan method `print` di class `Rectangle` ke class yang baru. Karena di `print` juga terdapat smell primitive obsession, sekalian kita buatkan struktur baru menggunakan strategy design pattern. Perhatikan hasil refactor-nya di package `after`.

<Tabs>
<Tab name="RectangleTest" text="RectangleTest.java">

```java
class RectangleTest {

	@Test
	void test() {
		Rectangle r = new Rectangle(5, 3);
		assertEquals(r.area(), 15);
		assertEquals(r.perimeter(), 16);

		new BorderRectanglePrinter(r).print();
		System.out.println("");
		new FullRectanglePrinter(r).print();
	}

}
```

</Tab>
<Tab name="Rectangle" text="Rectangle.java">

```java
public class Rectangle {
	private int width;
	private int height;

	public Rectangle(int width, int height) {
		if(width <= 0 || height <= 0) {
			throw new IllegalArgumentException("width and height must be greater than zero");
		}

		this.width = width;
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public int getHeight() {
		return height;
	}

	public int area() {
		return width * height;
	}

	public int perimeter() {
		return 2 * (width + height);
	}
}
```

</Tab>
<Tab name="RectanglePrinter" text="RectanglePrinter.java">

```java
public abstract class RectanglePrinter {
	protected Rectangle r;

	public RectanglePrinter(Rectangle r) {
		super();
		this.r = r;
	}

	public abstract void print();
}
```

</Tab>
<Tab name="FullRectanglePrinter" text="FullRectanglePrinter.java">

```java
public class FullRectanglePrinter extends RectanglePrinter {

	public FullRectanglePrinter(Rectangle r) {
		super(r);
	}

	@Override
	public void print() {
		for(int i = 0; i < r.getHeight(); i++) {
			for(int j = 0; j < r.getWidth(); j++) {
				System.out.print("*");
			}
			System.out.println("");
		}
	}

}
```

</Tab>
<Tab name="BorderRectanglePrinter" text="BorderRectanglePrinter.java">

```java
public class BorderRectanglePrinter extends RectanglePrinter {

	public BorderRectanglePrinter(Rectangle r) {
		super(r);
	}

	@Override
	public void print() {
		int height = r.getHeight();
		int width = r.getWidth();

		for(int i = 0; i < height; i++) {
			for(int j = 0; j < width; j++) {
				System.out.print(
						j == 0 || j == width-1 ||
						i == 0 || i == height-1 ? "*" : " ");
			}
			System.out.println("");
		}
	}

}
```

</Tab>
</Tabs>
