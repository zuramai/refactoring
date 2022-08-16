# Large Class

[sourcemaking](https://sourcemaking.com/refactoring/smells/large-class)

## Penjelasan Smell

Smell ini terjadi ketika ada sebuah class yang memiliki terlalu banyak method dan/atau line of code.

Code yang mengandung Large Class berpotensi melanggar [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) bila terdapat terlalu banyak jenis tanggungjawab yang dilakukan oleh satu class. Bila Large Class disertai dengan pelanggaran SRP, maka terjadi juga smell Divergent Change.

Pada contoh `SemesterMenu.java`, class ini bukan hanya berurusan dengan menu dan input console untuk CRUD semester saja. Class ini juga pegang kendali untuk pembuatan vector semester. Class ini juga terbebani dengan banyaknya variasi cara input di method `getDateInput`, `getIntInput`, dan `getStringInput`.

<Tabs>
<Tab name="semesterMenu" text="SemesterMenu.java" :max-height="450">

```java
package fowler.bloaters.large_class.before;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import java.util.Vector;

public class SemesterMenu {
	private Vector<Semester> semesters;
	private Scanner scan;

	public SemesterMenu() {
		semesters = new Vector<Semester>();
		scan = new Scanner(System.in);
	}

	public void open() {
		while(menu()) {}
	}

	private boolean menu(){
		showSemesters();
		int input = printAndGetMenu();
		switch(input){
		case 1: create(); break;
		case 2: delete(); break;
		case 3: return false;
		}
		return true;
	}

	private void create() {
		String label;
		do {
			label = getStringInput("Input label", 3, 20);
		} while(!isLabelUnique(label));

		Date startDate, endDate;
		do {
			startDate = getDateInput("Input start date", "yyyy-MM-dd");
			endDate = getDateInput("Input end date", "yyyy-MM-dd");
		} while(startDate.after(endDate));

		semesters.add(new Semester(label, startDate, endDate));
	}

	private boolean isLabelUnique(String label) {
		for(Semester s : semesters) {
			if(s.getLabel().equalsIgnoreCase(label)) return false;
		}
		return true;
	}

	private void delete() {
		int input = getIntInput("Choose semester", 1, semesters.size());
		semesters.removeElementAt(input-1);
	}

	private int printAndGetMenu() {
		System.out.println("1. Create");
		System.out.println("2. Delete");
		System.out.println("3. Exit");
		return getIntInput("input menu", 1, 3);
	}

	private void showSemesters() {
		for(int i = 0; i < semesters.size(); i++) {
			Semester s = semesters.elementAt(i);
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

			System.out.print((i+1) + ". ");
			showSemester(s, format);
			System.out.println("");
		}
		System.out.println("");
	}

	private void showSemester(Semester s, SimpleDateFormat format) {
		System.out.print(s.getLabel());
		System.out.print(" - ");
		System.out.print(format.format(s.getStart()));
		System.out.print(" - ");
		System.out.print(format.format(s.getEnd()));
	}

	private Date getDateInput(String message, String format) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		sdf.setLenient(false);

		Date date = null;
		do {
			try {
				System.out.print(message + " ["+format+"]: ");
				String input = scan.nextLine().trim();
				date = sdf.parse(input);
			} catch (Exception e) {
				date = null;
			}
		} while(date == null);
		return date;
	}

	private int getIntInput(String message, int min, int max) {
		int input;
		do{
			System.out.print(message + " ["+min+"-"+max+"]: ");
			try {
				input = scan.nextInt();
			} catch (Exception e) {
				input = 0;
			} finally {
				scan.nextLine();
			}
		}while(input < min || input > max);
		return input;
	}

	private String getStringInput(String message, int min, int max) {
		String input;
		do{
			System.out.print(message + " ["+min+"-"+max+" chars]: ");
			input = scan.nextLine().trim();
		}while(input.length() < min || input.length() > max);
		return input;
	}
}
```

</Tab>
<Tab name="main" text="Main.java">

```java
package fowler.bloaters.large_class.before;

public class Main {
	public static void main(String[] args) {
		new Main();
	}

	public Main() {
		SemesterMenu semesterMenu = new SemesterMenu();
		semesterMenu.open();
	}
}
```

</Tab>

<Tab name="semester" text="Semester.java">

```java
package fowler.bloaters.large_class.before;

import java.util.Date;

public class Semester {
	private String label;
	private Date start;
	private Date end;

	public Semester(String label, Date start, Date end) {
		super();
		this.label = label;
		this.start = start;
		this.end = end;
	}

	public String getLabel() {
		return label;
	}

	public Date getStart() {
		return start;
	}

	public Date getEnd() {
		return end;
	}
}
```

</Tab>

</Tabs>

## Penyelesaian

Dilakukan [Extract Class](https://sourcemaking.com/refactoring/extract-class) pada:

- vector Semester dan validasi-validasinya diekstrak ke class baru bernama `Semesters`.
- fungsi `getDateInput`, `getIntInput`, dan `getStringInput` dibuat menjadi 3 class yang terpisah. Lalu [Extract Superclass](https://sourcemaking.com/refactoring/extract-superclass) menjadi abstract class Console.

Dilakukan [Move Method](https://sourcemaking.com/refactoring/move-method) pada:

- fungsi `showSemester` menjadi `toString` di class Semester.
- fungsi `showSemesters` menjadi `show` di class Semesters.
- fungsi `isLabelUnique` pindah ke class Semesters.

<Tabs>
<Tab name="semesterMenu" text="SemesterMenu.java" :max-height="450">

```java
public class SemesterMenu {
	private Semesters semesters;

	public SemesterMenu(Semesters s) {
		semesters = s;
	}

	public void open() {
		while(menu()) {}
	}

	private boolean menu(){
		semesters.show();
		int input = printAndGetMenu();
		switch(input){
		case 1: create(); break;
		case 2: delete(); break;
		case 3: return false;
		}
		return true;
	}

	private int printAndGetMenu() {
		System.out.println("1. Create");
		System.out.println("2. Delete");
		System.out.println("3. Exit");
		return new IntInputter("input menu", 1, 3).get();
	}

	private void create() {
		String label;
		do {
			label = new StringInputter("Input label", 3, 20).get();
		} while(!semesters.isLabelUnique(label));

		Date startDate, endDate;
		do {
			startDate = new DateInputter("Input start date", "yyyy-MM-dd").get();
			endDate = new DateInputter("Input end date", "yyyy-MM-dd").get();
		} while(startDate.after(endDate));

		semesters.add(new Semester(label, startDate, endDate));
	}

	private void delete() {
		int input = new IntInputter("Choose semester", 1, semesters.size()).get();
		semesters.removeAtIndex(input-1);
	}
}
```

</Tab>
<Tab name="main" text="Main.java">

```java
public class Main {
	public static void main(String[] args) {
		Semesters s = new Semesters();
		new Main(s);
	}

	public Main(Semesters s) {
		SemesterMenu semesterMenu = new SemesterMenu(s);
		semesterMenu.open();
	}
}
```

</Tab>

<Tab name="semester" text="Semester.java">

```java
public class Semester {
	private String label;
	private Date start;
	private Date end;

	public Semester(String label, Date start, Date end) {
		if(start.after(end)) {
			throw new IllegalArgumentException("start date must before end date");
		}
		this.label = label;
		this.start = start;
		this.end = end;
	}

	public String getLabel() {
		return label;
	}

	public Date getStart() {
		return start;
	}

	public Date getEnd() {
		return end;
	}

	@Override
	public String toString() {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		return label + " - " + format.format(start) + " - " + format.format(end);
	}
}
```

</Tab>
<Tab name="semesters" text="Semesters.java">

```java
public class Semesters {
	private Vector<Semester> semesters;

	public Semesters() {
		this.semesters = new Vector<Semester>();
	}

	public boolean add(Semester s) {
		if(!isLabelUnique(s.getLabel())) {
			throw new IllegalArgumentException("label must be unique");
		}
		return semesters.add(s);
	}

	public int size() {
		return semesters.size();
	}

	public void removeAtIndex(int idx) {
		semesters.removeElementAt(idx);
	}

	public void show() {
		for(int i = 0; i < semesters.size(); i++) {
			Semester s = semesters.elementAt(i);
			System.out.println((i+1) + ". " + s.toString());
		}
		System.out.println("");
	}

	public boolean isLabelUnique(String label) {
		for(Semester s : semesters) {
			if(s.getLabel().equalsIgnoreCase(label)) return false;
		}
		return true;
	}
}
```

</Tab>

</Tabs>

Lihat hasilnya di package <github-url to="after/SemesterMenu.java">after</github-url>.
