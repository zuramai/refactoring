package girish.modularization.cyclic.after;

import java.util.Vector;

import girish.modularization.cyclic.after.Item;

public class Order {
	private int id;
	//...
	
	private Vector<Item> items;
	
	public Order(int id) {
		super();
		this.id = id;
		this.items = new Vector<Item>();
	}
	
	public void addItem(Item i) {
		items.add(i);
	}
	
	public Vector<Item> getItems() {
		Vector<Item> items = new Vector<>();
		for (Item item : this.items) {
			items.add(new Item(item.getCost()));
		}
		return items;
	}
	
	public double getAmount() {
		TaxCalculator calc = new TaxCalculator();
		
		Vector<Item> items = getItems();
		
		double amount = 0;
		for (Item item : items) {
			amount += item.getCost();
		}
		
		return amount + calc.calculateTax(amount);
	}
	
}
