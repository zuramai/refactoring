package fowler.change_preventers.parallel_inheritance_hierarchies.after;

public abstract class Shape2D implements AreaInterface {
	protected float width;
	protected float height;

	public float getWidth() {
		return width;
	}

	public void setWidth(float width) {
		this.width = width;
	}

	public float getHeight() {
		return height;
	}

	public void setHeight(float height) {
		this.height = height;
	}
}
