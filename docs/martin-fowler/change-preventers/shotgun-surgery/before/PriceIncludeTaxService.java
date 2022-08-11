package fowler.change_preventers.shotgun_surgery.before;

public class PriceIncludeTaxService {
	public void updatePrice(Product p, float newPrice, float tax) {
		if (newPrice < 0) {
			throw new IllegalArgumentException("price must be positive");
		}
		
		if (tax < 0 || tax > 1) {
			throw new IllegalArgumentException("tax must be between 0-1");
		}
		
		p.price = newPrice * (tax+1);
	}
}
