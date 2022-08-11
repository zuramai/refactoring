package fowler.change_preventers.shotgun_surgery.after;

public class PriceService {
	public void updatePrice(Product p, float newPrice) {		
		p.setPrice(newPrice);
	}
}
