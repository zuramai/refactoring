package fowler.oo_abusers.refused_bequest_2.before;

public class Rectangle {
	protected float width;
	protected float height;

	public float area() {
		return width * height;
	}

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