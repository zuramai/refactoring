# Shotgun Surgery

[sourcemaking](https://sourcemaking.com/refactoring/smells/shotgun-surgery)

## Penjelasan Smell

Smell ini terjadi ketika kita ingin mengganti atau menambahkan fitur ke dalam code, kita perlu mengganti bagian code yang tersebar di banyak class lain. Analoginya adalah bila seseorang ditembak dengan senjata api jenis shotgun, luka tembak akan menyebar di banyak tempat.

Perhatikan code di package `before`. Class `PriceService` dan `PriceIncludeTaxService`, di dalamnya terdapat code untuk mengubah price yang access modifier-nya public. Masing-masing fungsi update juga memiliki validasi price masing-masing.

<Tabs>
<Tab name="PriceService" text="PriceService.java">

```java
public class PriceService {
	public void updatePrice(Product p, float newPrice) {
		if (newPrice < 0) {
			throw new IllegalArgumentException("price must be positive");
		}

		p.price = newPrice;
	}
}
```

</Tab>
<Tab name="PriceIncludeTaxService" text="PriceIncludeTaxService.java">

```java
public class PriceIncludeTaxService {
	public void updatePrice(Product p, float newPrice, float tax) {
		if (newPrice < 0) {
			throw new IllegalArgumentException("price must be positive");
		}

		if (tax < 0 || tax > 1) {
			throw new IllegalArgumentException("tax must be between 0-1");
		}

		p.price = newPrice * (tax+1);
	}
}
```

</Tab>
<Tab name="Product" text="Product.java">

```java
public class Product {
	public String name;
	public float price;

	public Product(String name, float price) {
		this.name = name;
		this.price = price;
	}

}
```

</Tab>
</Tabs>

Sekarang, kita mendapatkan permintaan fitur baru dimana setiap kali ada update value pada class `Product`, maka kita melakukan logging menggunakan class <github-url to="after/Logger.java">Logger</github-url>.

```java
public class Logger {
	public void log(String... keyvals) {
		if(keyvals.length % 2 == 1)
			throw new IllegalArgumentException("invalid key value pair");

		String msg = "";
		for(int i = 0; i < keyvals.length; i+=2) {
			msg = keyvals[i] + "=" + keyvals[i+1];
		}

		System.out.println(msg);
	}
}
```

Bila kita tidak segera melakukan refactor, kita perlu selalu melakukan perubahan ke setiap bagian code update value yang tersebar di banyak class. Karena ini hanya contoh, tersebarnya baru di dua class saja. Bayangkan bila tersebar di puluhan class. Selain capek, hal ini juga rawan _human-error_ karena bisa ada bagian code yang lupa diganti.

Contoh masalah lainnya: bila cara validasi price diganti, kita juga perlu melakukan shotgun surgery.

## Penyelesaian

Kita ubah access modifier price menjadi private. Code validasi price dipindahkan ke `setPrice`. Lalu fungsi setter ditambahkan logging. Sekarang, update value price sudah terpusat di dalam fungsi `setPrice`, sehingga bila suatu saat nanti ada perubahan mengenai update value price, kita cukup mengubah 1x saja di satu tempat.

<Tabs>
<Tab name="Product" text="Product.java">

```java
public class Product {
	private String name;
	private float price;
	private Logger logger;

	public Product(String name, float price) {
		this.name = name;
		this.price = price;
		this.logger = new Logger();
	}

	public void setName(String name) {
		logger.log("action", "update", "name", name);
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setPrice(float price) {
		if (price < 0) {
			throw new IllegalArgumentException("price must be positive");
		}

		logger.log("action", "update", "price", price+"");
		this.price = price;
	}

	public float getPrice() {
		return price;
	}
}
```

</Tab>
<Tab name="PriceService" text="PriceService.java">

```java
public class PriceService {
	public void updatePrice(Product p, float newPrice) {
		p.setPrice(newPrice);
	}
}
```

</Tab>
<Tab name="PriceIncludeTaxService" text="PriceIncludeTaxService.java">

```java
public class PriceIncludeTaxService {
	public void updatePrice(Product p, float newPrice, float tax) {
		if (tax < 0 || tax > 1) {
			throw new IllegalArgumentException("tax must be between 0-1");
		}

		p.setPrice(newPrice * (tax+1));
	}
}
```

</Tab>
<Tab name="Logger" text="Logger.java">

```java
public class Logger {
	public void log(String... keyvals) {
		if(keyvals.length % 2 == 1)
			throw new IllegalArgumentException("invalid key value pair");

		String msg = "";
		for(int i = 0; i < keyvals.length; i+=2) {
			msg = keyvals[i] + "=" + keyvals[i+1];
		}

		System.out.println(msg);
	}
}
```

</Tab>
</Tabs>
