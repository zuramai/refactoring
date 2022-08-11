package girish.modularization.cyclic.before;

import java.util.Vector;

public class TaxCalculator {
	
	public double computeAmount(Order order) {
		Vector<Item> items = order.getItems();
		
		double amount = 0;
		for (Item item : items) {
			amount += item.getCost();
		}
		
		return amount + calculateTax(amount);
	}
	
	private double calculateTax(double amount) {
		return amount * 0.1;
	}
}
