package fowler.change_preventers.shotgun_surgery.before;

public class PriceService {
	public void updatePrice(Product p, float newPrice) {
		if (newPrice < 0) {
			throw new IllegalArgumentException("price must be positive");
		}
		
		p.price = newPrice;
	}
}
