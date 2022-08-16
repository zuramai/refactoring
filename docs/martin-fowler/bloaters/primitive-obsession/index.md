# Primitive Obsession

[sourcemaking](https://sourcemaking.com/refactoring/smells/primitive-obsession)

## Penjelasan Smell

Smell ini terjadi ketika ada field atau parameter yang memakai tipe data primitif, padahal behavior-nya lebih daripada tipe data yang ia gunakan.

Hal ini tidak terjadi hanya di tipe data primitif `int`, `float`, dan sebagainya saja. Hal ini juga bisa terjadi di tipe data lain di level abstraksi yang lebih tinggi. Misalnya `String`. Intinya adalah, bila programmer menyimpan data dengan sebuah tipe data, padahal behavior dari data itu lebih dari tipe data yang ia gunakan, berarti sebenarnya harus diganti atau dibuatkan class baru.

Perhatikan contoh <github-url to="before/Mahasiswa.java">Mahasiswa.java</github-url>. Terdapat field `name` menggunakan String dan tanggal lahir yang dipecah-pecah menjadi integer. Padahal `name` memiliki validasi sesuai dengan regex dalam code, dan tanggal lahir memiliki validasi tanggal harus valid.

<Tabs>
<Tab name="Mahasiswa" text="Mahasiswa.java" :max-height="450">

```java
public class Mahasiswa {
	private String name;
	private int dayOfBirth;
	private int monthOfBirth;
	private int yearOfBirth;

	//reguler | global
	private String type;

	public Mahasiswa(String name, String type, int dayOfBirth, int monthOfBirth, int yearOfBirth) {
		if(!isValidName(name)) {
			throw new IllegalArgumentException("name is not valid");
		}

		type = type.toLowerCase();
		if(!type.equals("reguler") && !type.equals("global")) {
			throw new IllegalArgumentException("type is not valid");
		}

		if(!isValidDate(dayOfBirth, monthOfBirth, yearOfBirth)) {
			throw new IllegalArgumentException("dob is not valid");
		}

		this.name = name;
		this.type = type;
		this.dayOfBirth = dayOfBirth;
		this.monthOfBirth = monthOfBirth;
		this.yearOfBirth = yearOfBirth;
	}

	private boolean isValidName(String name) {
		String regex = "^([A-Z\\'][a-z\\']*((\\s)))*[A-Z\\'][a-z\\']*$";
		Pattern pattern = Pattern.compile(regex);
		return pattern.matcher(name).matches();
	}

	private boolean isValidDate(int dayOfBirth, int monthOfBirth, int yearOfBirth) {
		Calendar cal = Calendar.getInstance();
		cal.setLenient(false);
		cal.set(yearOfBirth, monthOfBirth-1, dayOfBirth);
		try {
			cal.getTime();
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	public String getType() {
		return type;
	}

	public String getName() {
		return name;
	}
}
```

</Tab>
<Tab name="MahasiswaGreeter" text="MahasiswaGreeter.java">

```java
public class MahasiswaGreeter {
	public void greet(Mahasiswa m) {
		if (m.getType().equals("reguler")) {
			System.out.println("Selamat Datang, " + m.getName());
		} else if (m.getType().equals("global")) {
			System.out.println("Welcome, " + m.getName());
		}
	}
}
```

</Tab>
</Tabs>

Selain itu, terdapat juga field `type` menggunakan String. Padahal value `type` hanya boleh Reguler atau Global. Selain itu, `type` juga digunakan pada <github-url to="before/MahasiswaGreeter.java">MahasiswaGreeter</github-url> yang di dalam sini terdapat smell switch statement.

## Penyelesaian

Dilakukan [Extract Class](https://sourcemaking.com/refactoring/extract-class) pada `name`, dibuatkan class baru bernama <github-url to="after/FullName.java">FullName</github-url>. Kemudian [replace data value with object](https://sourcemaking.com/refactoring/replace-data-value-with-object) pada field `name` di class Mahasiswa.

Untuk integer `dayOfBirth`, `monthOfBirth`, dan `yearOfBirth`, kita ganti menggunakan class java.util.Date bawaan dari Java.

Untuk logic Greeter, kita gunakan [replace type code with state/strategy](https://sourcemaking.com/refactoring/replace-type-code-with-state-strategy).

<Tabs>
<Tab name="Mahasiswa" text="Mahasiswa.java">

```java
public class Mahasiswa {
	private FullName name;
	private Date dob;
	private Type type;

	public Mahasiswa(FullName name, Date dob, Type type) {
		super();
		this.name = name;
		this.dob = dob;
		this.type = type;
	}

	public FullName getName() {
		return name;
	}

	public Date getDob() {
		return dob;
	}

	public Type getType() {
		return type;
	}
}
```

</Tab>
<Tab name="MahasiswaGreeter" text="MahasiswaGreeter.java">

```java
public abstract class MahasiswaGreeter {
	public abstract void greet();

	public static MahasiswaGreeter factory(Mahasiswa m) {
		if(m.getType().getClass() == Reguler.class) {
			return new MahasiswaRegulerGreeter(m);
		} else if(m.getType().getClass() == Global.class) {
			return new MahasiswaGlobalGreeter(m);
		}
		return null;
	}
}
```

</Tab>
<Tab name="FullName" text="FullName.java">

```java
public class FullName {
	private String value;

	public FullName(String value) {
		if(!isValidName(value)) {
			throw new IllegalArgumentException("name is not valid");
		}

		this.value = value;
	}

	private boolean isValidName(String name) {
		String regex = "^([A-Z\\'][a-z\\']*((\\s)))*[A-Z\\'][a-z\\']*$";
		Pattern pattern = Pattern.compile(regex);
		return pattern.matcher(name).matches();
	}

	public String getValue() {
		return value;
	}
}
```

</Tab>
</Tabs>
