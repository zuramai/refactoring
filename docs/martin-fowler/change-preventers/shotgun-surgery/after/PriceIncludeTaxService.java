package fowler.change_preventers.shotgun_surgery.after;

public class PriceIncludeTaxService {
	public void updatePrice(Product p, float newPrice, float tax) {
		if (tax < 0 || tax > 1) {
			throw new IllegalArgumentException("tax must be between 0-1");
		}
		
		p.setPrice(newPrice * (tax+1));
	}
}
