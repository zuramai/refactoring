package fowler.oo_abusers.refused_bequest_2.before;

public class Triangle extends Rectangle{
	@Override
	public float area() {
		return (this.width * this.height) / 2;
	}
}