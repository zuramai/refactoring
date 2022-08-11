package fowler.change_preventers.divergent_change.after;

public abstract class RectanglePrinter {
	protected Rectangle r;
	
	public RectanglePrinter(Rectangle r) {
		super();
		this.r = r;
	}

	public abstract void print();
}
