# Long Method

[sourcemaking](https://sourcemaking.com/refactoring/smells/long-method)

## Penjelasan Smell

Smell ini terjadi ketika ada sebuah method yang terlalu panjang. Method yang terlalu panjang dapat ditentukan dengan beberapa indikator:

- Programmer kesulitan memahami method. Perlu membaca dengan detail baris per baris berulang-ulang untuk memahami tujuan code ini
- Programmer perlu menuliskan internal comment untuk mengklarifikasi tujuan beberapa line of code
- Satu method memiliki banyak tanggungjawab
- Terdapat hidden-side-effect di dalam method. Nama method tidak sesuai dengan apa yang dilakukan di dalamnya.
- Melebihi N baris. N ini merupakan angka yang ditentukan oleh masing-masing tim. Beda perusahaan atau beda bahasa pemrograman bisa beda angka. Di sourcemaking, dibilang tidak boleh lebih dari 10 baris.

Pada contoh <github-url to="before/SemesterMenu.java">SemesterMenu.java</github-url>, terdapat method `menu`, `create`, dan `delete` yang melebihi 10 baris.

<Tabs>
<Tab name="SemesterMenu" text="SemesterMenu.java" :max-height="450">

```java
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
		//menampilkan semua semester yang ada
		for(int i = 0; i < semesters.size(); i++) {
			Semester s = semesters.elementAt(i);
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

			System.out.print((i+1) + ". ");
			System.out.print(s.getLabel());
			System.out.print(" - ");
			System.out.print(format.format(s.getStart()));
			System.out.print(" - ");
			System.out.print(format.format(s.getEnd()));
			System.out.println("");
		}
		System.out.println("");

		//menampilkan menu
		System.out.println("1. Create");
		System.out.println("2. Delete");
		System.out.println("3. Exit");

		//input
		int input = 0;
		do{
			System.out.print("Input [1-3]: ");
			try {
				input = scan.nextInt();
			} catch (Exception e) {
				input = 0;
			} finally {
				scan.nextLine();
			}
		}while(input < 1 || input > 3);

		//switch menu by input
		switch(input){
		case 1: create(); break;
		case 2: delete(); break;
		case 3: return false;
		}
		return true;
	}

	private void delete() {
		int input = 0;
		do{
			System.out.print("Choose semester [1-"+semesters.size()+"]: ");
			try {
				input = scan.nextInt();
			} catch (Exception e) {
				input = 0;
			} finally {
				scan.nextLine();
			}
		}while(input < 1 || input > semesters.size());
		semesters.removeElementAt(input-1);
	}

	private void create() {
		String label = "";
		do {
			System.out.print("Input label [3-20 chars]: ");
			label = scan.nextLine().trim();
		} while(label.length() < 3 || label.length() > 20 || !isLabelUnique(label));

		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		format.setLenient(false);

		Date startDate = null;
		Date endDate = null;

		do {
			do {
				try {
					System.out.print("Input start date [yyyy-MM-dd]: ");
					String input = scan.nextLine().trim();
					startDate = format.parse(input);
				} catch (Exception e) {
					startDate = null;
				}
			} while(startDate == null);

			do {
				try {
					System.out.print("Input end date [yyyy-MM-dd]: ");
					String input = scan.nextLine().trim();
					endDate = format.parse(input);
				} catch (Exception e) {
					endDate = null;
				}
			} while(endDate == null);
		}while(startDate.after(endDate));

		semesters.add(new Semester(label, startDate, endDate));
	}

	private boolean isLabelUnique(String label) {
		for(Semester s : semesters) {
			if(s.getLabel().equalsIgnoreCase(label)) return false;
		}
		return true;
	}
}
```

</Tab>
<Tab name="Main" text="Main.java" :max-height="450">

```java
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
<Tab name="Semester" text="Semester.java" :max-height="450">

```java
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

Dilakukan [Extract Method](https://sourcemaking.com/refactoring/extract-method) pada method `menu`, `create`, dan `delete`.

<Tabs>
<Tab name="SemesterMenu" text="SemesterMenu.java" :max-height="450">

```java
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
<Tab name="Main" text="Main.java" :max-height="450">

```java
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
<Tab name="Semester" text="Semester.java" :max-height="450">

```java
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

Code di dalam method `menu` diekstrak menjadi `showSemesters()`, `printAndGetMenu()`, dan `showSemester()`.

Untuk method create, delete, dan bagian code input menu. Kita dapat melihat terdapat [duplicate code](https://sourcemaking.com/refactoring/smells/duplicate-code) yang juga membuat method menjadi panjang. Hal ini dapat diatasi dengan mengakali logic input menjadi method `getDateInput`, `getIntInput`, dan `getStringInput`.

## Tambahan

Refactor pada contoh `SemesterMenu` ini belum selesai. Terdapat smell Large Class yang akan diurus [disini](../large-class/).
