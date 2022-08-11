package fowler.couplers.inappropriate_intimacy.before;

import java.util.UUID;
import java.util.Vector;

public class Product {
	private Catalog catalog;
	private UUID id;
	private String name;
	private double price;
	
	public Product(String name, double price, Catalog catalog) {
		this.id = UUID.randomUUID();
		this.name = name;
		this.price = price;
		this.catalog = catalog;
		this.catalog.addTag(this, Catalog.NEWCOMER_TAG);
	}
	
	public UUID getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public double getPrice() {
		return price;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}
}
