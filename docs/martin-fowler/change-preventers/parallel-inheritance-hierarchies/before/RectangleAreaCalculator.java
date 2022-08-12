package fowler.change_preventers.parallel_inheritance_hierarchies.before;

public class RectangleAreaCalculator implements AreaInterface {
	private Rectangle r;

	public RectangleAreaCalculator(Rectangle r) {
		super();
		this.r = r;
	}

	@Override
	public float area() {
		return r.getWidth() * r.getHeight();
	}
}
