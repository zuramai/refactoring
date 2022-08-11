package girish.abstraction.multifaceted.after;

public class Rectangle {
	private int width;
	private int height;
	
	public Rectangle(int width, int height) {
		if(width <= 0 || height <= 0) {
			throw new IllegalArgumentException("width and height must be greater than zero");
		}
		
		this.width = width;
		this.height = height;
	}
	
	public int getWidth() {
		return width;
	}
	
	public int getHeight() {
		return height;
	}
	
	public int area() {
		return width * height;
	}
	
	public int perimeter() {
		return 2 * (width + height);
	}
}
