package fowler.dispensables.duplicate_code.after;

public class Foo {
	public void bar(){
		clearScreen();
		printWithBorder("Bar");
	}
	
	public void baz(){
		clearScreen();
		printWithBorder("Baz");
	}
	
	public void qux(){
		clearScreen();
		printWithBorder("Qux");
	}

	private void printWithBorder(String text) {
		printNTimes("=", 3);
		System.out.println("");
		System.out.println(text);
		printNTimes("=", 3);
		System.out.println("");
	}

	private void clearScreen() {
		for(int i = 0; i < 26; i++){
			System.out.println("");
		}
	}
	
	private void printNTimes(String s, int n) {
		for(int i = 0; i < n; i++){
			System.out.print(s);
		}
	}
}
