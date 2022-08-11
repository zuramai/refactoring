package fowler.couplers.middle_man.after;

import java.util.Vector;

public class ShoppingCart {
	private Vector<Item> items;
		
	public ShoppingCart() {
		this.items = new Vector<>();
	}

	public void add(Item item){
		items.add(item);
	}
	
	public void remove(Item item){
		items.remove(item);
	}
	
	public double totalPrice() {
		double total = 0.0;
		for (Item item : items) {
			total += item.getPrice();
		}
		return total;
	}
}
