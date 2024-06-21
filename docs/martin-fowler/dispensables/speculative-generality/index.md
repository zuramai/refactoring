# Speculative Generality

[sourcemaking](https://sourcemaking.com/refactoring/smells/speculative-generality)

## Penjelasan Smell

Class, method, field, atau parameter yang sudah disiapkan walaupun belum dipakai. Bahkan sebenarnya tidak ada dalam requirement.

Biasanya karena programmer sok ide, berspekulasi, bahwa ini akan dibutuhkan. Namun ternyata setelah produk berjalan lama, spekulasinya ini tidak terbukti.

Hal ini tentunya menjadi masalah karena kita membuat code lebih sulit dibaca untuk hal yang tidak perlu.

Salah satu prinsip extreme programming (XP) yang terkenal adalah [You aren't gonna need it (YAGNI)](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it). Disarankan oleh XP untuk tidak menambahkan fungsionalitas sampai benar-benar diperlukan.

Contohnya, pada package `before`.

Requirement dari client adalah Price bisa memiliki Currency antara IDR atau USD.

Programmer berspekulasi bahwa IDR dan USD adalah kurs jenis tradisional, nantinya akan ada kurs jenis digital seperti bitcoin. Oleh karena itu, Programmer membuat hirarki seperti di dalam package `before`.

<Tabs>
<Tab name="Currency" text="Currency.java">

```java
public abstract class Currency {
	public abstract String getCode();
}

```
</Tab>

<Tab name="Traditional" text="Traditional.java">

```java
public abstract class Traditional extends Currency {

}

```
</Tab>

<Tab name="Digital" text="Digital.java">

```java
public abstract class Digital extends Currency {

}

```
</Tab>

<Tab name="IDR" text="IDR.java">

```java
public class IDR extends Traditional {
	@Override
	public String getCode() {
		return "IDR";
	}
}
```
</Tab>

<Tab name="USD" text="USD.java">

```java
public class USD extends Traditional {
	@Override
	public String getCode() {
		return "USD";
	}
}

```
</Tab>

<Tab name="Price" text="Price.java">

```java
public class Price {
	int value;
	Currency currency;
	
	public Price(int value, Currency currency) {
		this.value = value;
		this.currency = currency;
	}
	
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public Currency getCurrency() {
		return currency;
	}
	public void setCurrency(Currency currency) {
		this.currency = currency;
	}
}

```
</Tab>

</Tabs>

## Penyelesaian

Dilakukan [Collapse Hierarchy](https://sourcemaking.com/refactoring/collapse-hierarchy). Class `Traditional` dan `Digital` dihapus. class `USD` dan `IDR` menjadi turunan langsung dari class `Currency`.

<Tabs>
<Tab name="Currency" text="Currency.java">

```java
public abstract class Currency {
	public abstract String getCode();
}

```
</Tab>

<Tab name="IDR" text="IDR.java">

```java
public class IDR extends Currency {
	@Override
	public String getCode() {
		return "IDR";
	}
}

```
</Tab>

<Tab name="USD" text="USD.java">

```java
public class USD extends Currency {
	@Override
	public String getCode() {
		return "USD";
	}
}
```
</Tab>

<Tab name="Price" text="Price.java">

```java
public class Price {
	int value;
	Currency currency;
	
	public Price(int value, Currency currency) {
		this.value = value;
		this.currency = currency;
	}
	
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public Currency getCurrency() {
		return currency;
	}
	public void setCurrency(Currency currency) {
		this.currency = currency;
	}
}
```
</Tab>


</Tabs>
