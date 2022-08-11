package fowler.bloaters.large_class.after;

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
