# Lazy Class

[sourcemaking](https://sourcemaking.com/refactoring/smells/lazy-class)

## Penjelasan Smell

Memecah class memang bagus, terlebih bila bertujuan untuk memenuhi Single Responsibility Principle (SRP). Class yang terlalu gemuk juga sudah dibahas di code smell Large Class.

Namun, class yang terlalu kecil juga tidak baik karena semakin banyak class yang harus dibaca, semakin sulit programmer memahami code suatu produk.

Lazy class adalah kondisi dimana class memiliki fungsi yang minim, ekstrimnya hanya memiliki satu buah fungsi.

Lazy class bisa saja terjadi karena refactoring. Awalnya class ini memiliki fungsi yang banyak. Namun, satu per satu dipindahkan ke class lain karena pertimbangan tertentu.

Pada contoh di <github-url to="before/PriceValidator.java">PriceValidator.java</github-url>. Class hanya memiliki satu buah fungsi untuk validasi harga.

<Tabs>
<Tab name="PriceValidator" text="PriceValidator.java">

```java
public class PriceValidator {
	public static boolean validate(int value){
		return value >= 0;
	}
}
```

</Tab>
<Tab name="Price" text="Price.java">

```java
public class Price {
	private int value;

	public Price(int value) throws Exception {
		if(!PriceValidator.validate(value)) {
			throw new Exception("price not valid");
		}
		this.value = value;
	}

	public int getValue() {
		return value;
	}
}
```

</Tab>
</Tabs>

## Penyelesaian

Fungsi `validate` dipindahkan ke class <github-url to="after/Price.java">Price.java</github-url> kemudian diberi nama yang lebih sesuai untuk class Price: `isPriceValid`. Setelah dipindahkan, class PriceValidator bisa dihapus.

<Tabs>
<Tab name="Price" text="Price.java">

```java
public class Price {
	private int value;

	public Price(int value) throws Exception {
		if(!isPriceValid(value)) {
			throw new Exception("price not valid");
		}

		this.value = value;
	}

	private boolean isPriceValid(int value){
		return value >= 0;
	}

	public int getValue() {
		return this.value;
	}
}
```

</Tab>
</Tabs>
