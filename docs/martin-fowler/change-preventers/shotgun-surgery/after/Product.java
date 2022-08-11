package fowler.change_preventers.shotgun_surgery.after;

public class Product {
	private String name;
	private float price;
	private Logger logger;
	
	public Product(String name, float price) {
		this.name = name;
		this.price = price;
		this.logger = new Logger();
	}
	
	public void setName(String name) {
		logger.log("action", "update", "name", name);
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	
	public void setPrice(float price) {
		if (price < 0) {
			throw new IllegalArgumentException("price must be positive");
		}
		
		logger.log("action", "update", "price", price+"");
		this.price = price;
	}
	
	public float getPrice() {
		return price;
	}
}
