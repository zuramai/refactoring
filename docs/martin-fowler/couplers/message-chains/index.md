# Message Chains

[sourcemaking](https://sourcemaking.com/refactoring/smells/message-chains)

## Penjelasan Smell

Smell ini terjadi ketika ingin mengakses sebuah method, perlu dilakukan pemanggilan dari hasil return method lainnya sehingga membentuk rantai: `obj.a().b().c()`.

Perhatikan <github-url to="before/DistanceTest.java">DistanceTest.java</github-url>, terdapat message chaining ketika ingin mengakses latitude dan longitude.

<Tabs>
<Tab name="DistanceTest" text="DistanceTest.java">

```java{15-18,29-32}
class DistanceTest {
	static BojekDriver driver;
	static Destination destination;

	@BeforeAll
	static void init() {
		driver = new BojekDriver("Amir", new Position(-6.201932, 106.781529));
		destination = new Destination("Binus Anggrek", new Position(-6.201935, 106.781525));
	}

	@Test
	void manhattan() {
		DistanceCalculator calc = new Manhattan();
		double result = calc.distance(
			driver.getCurrentPosition().getLatitude(),
			driver.getCurrentPosition().getLongitude(),
			destination.getPosition().getLatitude(),
			destination.getPosition().getLongitude()
		);

		double expected = 0.000007;
		assertEquals(expected, result);
	}

	@Test
	void euclidean() {
		DistanceCalculator calc = new Euclidean();
		double result = calc.distance(
			driver.getCurrentPosition().getLatitude(),
			driver.getCurrentPosition().getLongitude(),
			destination.getPosition().getLatitude(),
			destination.getPosition().getLongitude()
		);

		double expected = 0.000005;
		assertEquals(expected, result);
	}
}
```

</Tab>
<Tab name="BojekDriver" text="BojekDriver.java">

```java
public class BojekDriver {
	private String name;
	private Position currentPosition;

	public BojekDriver(String name, Position currentPosition) {
		super();
		this.name = name;
		this.currentPosition = currentPosition;
	}

	public String getName() {
		return name;
	}

	public Position getCurrentPosition() {
		return currentPosition;
	}
}
```

</Tab>
<Tab name="Position" text="Position.java">

```java
public class Position {
	private double latitude;
	private double longitude;

	public Position(double latitude, double longitude) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public double getLongitude() {
		return longitude;
	}
}
```

</Tab>
</Tabs>

## Penyelesaian

Dilakukan [Hide Delegate](https://sourcemaking.com/refactoring/hide-delegate). Perhatikan class [BojekDriver](after/BojekDriver.java) dan <github-url to="after/Destination.java">Destination</github-url>, telah ditambahkan fungsi `latitude()` dan `longitude()` yang sebenarnya melakukan delegasi chaining yang dilakukan di package before. Hal ini dilakukan agar class client tidak merasakan adanya chaining, disembunyikan di dalam sini.

<Tabs>
<Tab name="BojekDriver" text="BojekDriver.java">

```java{19-21,23-25}
public class BojekDriver {
	private String name;
	private Position currentPosition;

	public BojekDriver(String name, Position currentPosition) {
		super();
		this.name = name;
		this.currentPosition = currentPosition;
	}

	public String getName() {
		return name;
	}

	public Position getCurrentPosition() {
		return currentPosition;
	}

	public double latitude() {
		return this.getCurrentPosition().getLatitude();
	}

	public double longitude() {
		return this.getCurrentPosition().getLongitude();
	}
}
```

</Tab>
<Tab name="Destination" text="Destination.java">

```java{19-21,23-25}
public class Destination {
	private String name;
	private Position position;

	public Destination(String name, Position position) {
		super();
		this.name = name;
		this.position = position;
	}

	public String getName() {
		return name;
	}

	public Position getPosition() {
		return position;
	}
}
```

</Tab>
</Tabs>

Alhasil, seperti yang bisa dilihat di <github-url to="after/DistanceTest.java">DistanceTest.java</github-url> di package after, message chain sudah tidak ada.

## Tambahan

Jangan terlalu agresif mengurusi message chain karena bisa menyebabkan smell Middle Man.

Pertimbangkan mengurusi message chain bila terjadi di banyak tempat atau kebetulan ada class yang behavior-nya cocok untuk menampung method delegasi.
