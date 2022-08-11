package fowler.change_preventers.parallel_inheritance_hierarchies.before;

public class TriangleAreaCalculator implements AreaInterface {
	private Triangle t;

	public TriangleAreaCalculator(Triangle t) {
		super();
		this.t = t;
	}

	@Override
	public float area() {
		return t.getHeight() * t.getWidth() / 2;
	}

}
