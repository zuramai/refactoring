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
