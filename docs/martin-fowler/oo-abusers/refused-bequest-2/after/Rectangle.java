package fowler.oo_abusers.refused_bequest_2.after;

public class Rectangle extends Shape2D {

	@Override
	public float area() {
		return width * height;
	}
	
}