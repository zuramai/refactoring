package fowler.oo_abusers.refused_bequest_2.after;

public class Square extends Shape2D {

	@Override
	public float area() {
		return this.width * this.height;
	}
	
	@Override
	public void setWidth(float width) {
		super.setWidth(width);
		super.setHeight(width);
	}
	
	@Override
	public void setHeight(float height) {
		super.setWidth(height);
		super.setHeight(height);
	}
}