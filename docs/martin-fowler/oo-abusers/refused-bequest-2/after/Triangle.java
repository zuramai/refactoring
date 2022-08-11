package fowler.oo_abusers.refused_bequest_2.after;

public class Triangle extends Shape2D {

	@Override
	public float area() {
		return (this.width * this.height) / 2;
	}
	
}