package fowler.change_preventers.divergent_change.after;

public class FullRectanglePrinter extends RectanglePrinter {

	public FullRectanglePrinter(Rectangle r) {
		super(r);
	}

	@Override
	public void print() {
		for(int i = 0; i < r.getHeight(); i++) {
			for(int j = 0; j < r.getWidth(); j++) {
				System.out.print("*");
			}
			System.out.println("");
		}
	}

}
