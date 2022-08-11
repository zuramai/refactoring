package fowler.couplers.middle_man.after;

public class Item {
	private String name;
	private int price;
	
	public Item(String name, int price) {
		if(!isPriceValid(price)) 
			throw new IllegalArgumentException("invalid price");
		
		this.name = name;
		this.price = price;
	}
	
	public boolean isPriceValid(int price) {
		return price >= 0;
	}
	
	public String getName() {
		return name;
	}
	
	public int getPrice() {
		return price;
	}
}
