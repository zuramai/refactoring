# Parallel Inheritance Hierarchies

[sourcemaking](https://sourcemaking.com/refactoring/smells/parallel-inheritance-hierarchies)

## Penjelasan Smell

Smell ini terjadi ketika ada hirarki inheritance yang selalu ditambahkan bersama-sama.

Bayangkan ada dua atau lebih hirarki parent-children class. Lalu kita perlu menambahkan (extends) satu class baru di salah satu hirarki, hirarki lain ikut-ikutan juga butuh untuk extends class mengikuti hirarki ini. Contoh: Abstract class A di-extends menjadi A1 dan A2. Lalu ada abstract class B di-extends menjadi B1 dan B2. Ketika A di-extends menjadi A3, B juga ikut-ikutan butuh B3.

Untuk menghadapi smell ini, kita perlu mempertimbangkan apakah cocok bila hirarki-hirarki ini digabung saja menjadi satu.

Smell tidak perlu ditangani bila memang hirarki paralel ini disengaja untuk keperluan pemisahan konteks/tanggungjawab. Atau ketika digabung code malah menjadi lebih jorok.

Perhatikan code di package `before`. Hirarki `Shape2D` selalu berkembang berbarengan dengan hirarki `AreaInterface`. Bila ada `Shape2D` yang baru, misalnya `Circle`. maka `AreaInterface` juga akan ikut-ikutan membuat anak baru `CircleAreaCalculator`.

<Tabs>
<Tab name="Shape2D" text="Shape2D.java">

```java
public abstract class Shape2D {
	protected float width;
	protected float height;

	public float getWidth() {
		return width;
	}

	public void setWidth(float width) {
		this.width = width;
	}

	public float getHeight() {
		return height;
	}

	public void setHeight(float height) {
		this.height = height;
	}
}
```

</Tab>
<Tab name="Rectangle" text="Rectangle.java">

```java
public class Rectangle extends Shape2D {
  // ...
}
```

</Tab>
<Tab name="Triangle" text="Triangle.java">

```java
public class Triangle extends Shape2D {
  // ...
}
```

</Tab>
<Tab name="RectangleAreaCalculator" text="RectangleAreaCalculator.java">

```java
public class RectangleAreaCalculator implements AreaInterface {
	private Rectangle r;

	public RectangleAreaCalculator(Rectangle r) {
		super();
		this.r = r;
	}

	@Override
	public float area() {
		return r.getWidth() * r.getHeight();
	}
}
```

</Tab>
<Tab name="TriangleAreaCalculator" text="TriangleAreaCalculator.java">

```java
public class TriangleAreaCalculator implements AreaInterface {
	private Triangle t;

	public TriangleAreaCalculator(Triangle t) {
		super();
		this.t = t;
	}

	@Override
	public float area() {
		return t.getHeight() * t.getWidth() / 2;
	}

}
```

</Tab>
</Tabs>

## Penyelesaian

Kita pindahkan logika perhitungan area agar digabung saja ke dalam `Shape2D`.

<Tabs>
<Tab name="Rectangle" text="Rectangle.java">

```java
public class Rectangle extends Shape2D {
	@Override
	public float area() {
		return height * width;
	}
}
```

</Tab>
<Tab name="Triangle" text="Triangle.java">

```java
public class Triangle extends Shape2D {
	@Override
	public float area() {
		return height * width / 2;
	}
}
```

</Tab>
</Tabs>
