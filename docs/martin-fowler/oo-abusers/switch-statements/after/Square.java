package fowler.oo_abusers.switch_statements.after;

public class Square extends Shape {

	public Square(int size) {
		super(size);
	}

	@Override
	public void print() {
		for (int i = 0; i < size; i++) {
			for (int j = 0; j < size; j++) {
				System.out.print("*");
			}
			System.out.println("");
		}
	}

	@Override
	public int charNeeded() {
		return size * size;
	}

}
