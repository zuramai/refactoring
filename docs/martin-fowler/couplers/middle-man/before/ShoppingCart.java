package fowler.couplers.middle_man.before;

public class ShoppingCart {
	private LinkedList<Item> items;
		
	public ShoppingCart() {
		this.items = new LinkedList<>();
	}

	public void add(Item item){
		items.add(item);
	}
	
	public void remove(Item item){
		items.remove(item);
	}
	
	public double totalPrice() {
		double total = 0.0;
		for (Item item : items.getList()) {
			total += item.getPrice();
		}
		return total;
	}
}
