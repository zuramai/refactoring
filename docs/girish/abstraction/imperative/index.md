# Imperative Abstraction

Smell ini terjadi ketika sebuah operasi dibuat menjadi sebuah class, dan di dalam class ini, hanya punya satu method saja.

Sesuai namanya, paradigma OOP: **OBJECT**-oriented programming. Class di dalam OOP wajarnya berupa kata benda. Bukan kata kerja atau kata sifat. Method baru boleh kata kerja. Interface baru boleh kata sifat.

## Penyebab Smell

- **Procedural thinking**: software developer menggunakan paradigma prosedural saat coding paradigma OOP.

## Contoh

### Masalah

Perhatikan package <github-url to="before">before</github-url>. Terdapat class CreateReport, DisplayReport, dan CopyReport. Disini sudah jelas terjadi imperative abstraction karena ketiga class tersebut merupakan kata kerja, bukan kata benda.

<Tabs>
<Tab name="Report" text="Report.java">

```java
public class Report {
	private String title;
	private String body;

	public void setTitle(String title) {
		this.title = title;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getTitle() {
		return title;
	}

	public String getBody() {
		return body;
	}
}
```

</Tab>
<Tab name="DisplayReport" text="DisplayReport.java">

```java
public class DisplayReport {
	public void display(Report report) {
		String s = "";

		s += report.getTitle();
		s += "\n\n";
		s += report.getBody();

		System.out.println(s);
	}
}
```

</Tab>
<Tab name="CopyReport" text="CopyReport.java">

```java
public class CopyReport {
	public Report copy(Report report) {
		Report r = new Report();

		r.setTitle(report.getTitle());
		r.setBody(report.getBody());

		return r;
	}
}
```

</Tab>
<Tab name="CreateReport" text="CreateReport.java">

```java
public class CreateReport {
	public Report create(String title, String body) {
		Report r = new Report();

		r.setTitle(title);
		r.setBody(body);

		return r;
	}
}
```

</Tab>
</Tabs>

### Penyelesaian

Operasi di dalam DisplayReport dan CopyReport, dipindahkan sebagai method ke dalam class Report. CreateReport dipindahkan sebagai constructor class Report.

<Tabs>
<Tab name="Report" text="Report.java">

```java
public class Report {
	private String title;
	private String body;

	public Report(String title, String body) {
		this.title = title;
		this.body = body;
	}

	public void display() {
		String s = "";

		s += title;
		s += "\n\n";
		s += body;

		System.out.println(s);
	}

	public Report copy() {
		try {
			return (Report) this.clone();
		} catch (CloneNotSupportedException e) {}
		return null;
	}

	public String getTitle() {
		return title;
	}

	public String getBody() {
		return body;
	}
}
```

</Tab>
</Tabs>

## When to Ignore

Smell ini tidak perlu di-refactor bila class memang sengaja dibuat imperatif. Biasa terjadi ketika menerapkan design pattern state, command, atau strategy. Ketiga design pattern ini adalah Gang of Four design pattern, akan dipelajari di semester depan.
