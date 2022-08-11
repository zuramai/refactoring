package fowler.change_preventers.parallel_inheritance_hierarchies.after;

public class Rectangle extends Shape2D {

	@Override
	public float area() {
		return height * width;
	}

}