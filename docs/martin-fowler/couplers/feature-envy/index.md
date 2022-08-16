# Feature Envy

[sourcemaking](https://sourcemaking.com/refactoring/smells/feature-envy)

## Penjelasan Smell

Smell ini terjadi bila ada sebuah method yang lebih sering mengakses data class lain ketimbang class sendiri. Class sendiri pun menjadi 'cemburu'. Bila hal ini terjadi, harus dipikirkan bagaimana cara mengusir method ini ke class lain tersebut.

Pada contoh <github-url to="before/Lecturer.java">Lecturer.java</github-url>, terdapat method `isScored` yang hanya mengakses data examiner di class Exam.

<Tabs>
<Tab name="Lecturer" text="Lecturer.java" :max-height="450">

```java {10-12}
public class Lecturer extends Binusian {

	public Lecturer(String id, String name) {
		super(id, name);
		if(id.length() != 5) {
			throw new IllegalArgumentException();
		}
	}

	public boolean isScored(Exam exam) {
		return exam.getExaminer() != null;
	}

	public void giveScore(Exam exam, int score) {
		if(isScored(exam)) {
			throw new IllegalArgumentException("exam already scored");
		}

		exam.setScore(this, score);
	}

}
```

</Tab>
<Tab name="Binusian" text="Binusian.java">

```java
public class Binusian {
	private String id;
	private String name;

	public Binusian(String id, String name) {
		this.id = id;
		this.name = name;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
```

</Tab>
<Tab name="Exam" text="Exam.java" :max-height="450">

```java
public class Exam {
	private Student student;
	private int score;
	private Lecturer examiner;

	public Exam(Student student) {
		this.student = student;
	}

	public int getScore() {
		return score;
	}

	public void setScore(Lecturer examiner, int score) {
		if(score < 0 || score > 100)
			throw new IllegalArgumentException("score must be between 0 - 100");

		this.examiner = examiner;
		this.score = score;
	}

	public Student getStudent() {
		return student;
	}

	public Lecturer getExaminer() {
		return examiner;
	}
}
```

</Tab>
</Tabs>

## Penyelesaian

Dilakukan [Move Method](https://sourcemaking.com/refactoring/move-method) pada fungsi `isScored`. Perhatikan di package `after`, isScored dipindahkan ke class Exam.

<Tabs>
<Tab name="Exam" text="Exam.java" :max-height="450">

```java
public class Exam {
	private Student student;
	private int score;
	private Lecturer examiner;

	public Exam(Student student) {
		this.student = student;
	}

	public int getScore() {
		return score;
	}

	public void setScore(Lecturer examiner, int score) {
		if(this.isScored()) {
			throw new IllegalArgumentException("exam already scored");
		}

		if(score < 0 || score > 100)
			throw new IllegalArgumentException("score must be between 0 - 100");

		this.examiner = examiner;
		this.score = score;
	}

	public Student getStudent() {
		return student;
	}

	public Lecturer getExaminer() {
		return examiner;
	}

	public boolean isScored() {
		return getExaminer() != null;
	}
}
```

</Tab>

<Tab name="Lecturer" text="Lecturer.java" :max-height="450">

```java
public class Lecturer extends Binusian {
	public Lecturer(String id, String name) {
		super(id, name);
		if(id.length() != 5) {
			throw new IllegalArgumentException();
		}
	}
}
```

</Tab>
</Tabs>

Selain itu, code fragment ini pun dipindahkan juga ke fungsi `setScore` di class Exam.

```java
if(this.isScored()) {
    throw new IllegalArgumentException("exam already scored");
}
```

## Tambahan

Di bukunya, Martin Fowler menyatakan bahwa ada beberapa kondisi class atau method yang sengaja dirancang untuk hanya consume data di class lain. Contoh yang paling umum terjadi adalah penggunaan design pattern Strategy atau Visitor. Design pattern ini masuk ke dalam Gang of Four Design Pattern, akan kita pelajari di semester depan.
