package fowler.change_preventers.parallel_inheritance_hierarchies.after;

public class Triangle extends Shape2D {
	
	@Override
	public float area() {
		return height * width / 2;
	}
	
}