package fowler.couplers.inappropriate_intimacy.before;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.Vector;

public class Catalog {
	public final static String NEWCOMER_TAG = "newcomer";
	public final static String CHEAP_TAG = "cheap";
	
	private String name;
	private Vector<Product> products;
	private Map<UUID, Vector<String>> tags;

	public Catalog(String name) {
		this.name = name;
		this.products = new Vector<Product>();
		this.tags = new HashMap<UUID, Vector<String>>();
	}
	
	public void print() {
		System.out.println("catalog " + name + ":");
		for (Product product : products) {
			String line = "";
			
			line += product.getId() + " ";
			line += product.getName() + " ";
			line += product.getPrice() + " ";
			
			Vector<String> tags = this.tags.get(product.getId());
			if(tags != null) {
				line += String.join(",", tags);
			} 
			
			System.out.println(line);
		}
	}
	
	public void addTag(Product p, String tag) {
		Vector<String> tags = this.tags.get(p.getId());
		if(tags == null) {
			tags = new Vector<String>();
		}
		
		if(tags.contains(tag)) return;
		tags.add(tag);
		this.tags.put(p.getId(), tags);
	}
	
	public void removeTag(Product p, String tag) {
		Vector<String> tags = this.tags.get(p.getId());
		if(tags == null) {
			return;
		}
		
		while(tags.remove(tag)) {}
		this.tags.put(p.getId(), tags);
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	
	public void addProduct(Product p) {
		products.add(p);
		newcomerTag();
		cheapTag();
	}
	
	/**
	 * give newcomer tag to the 3 latest product
	 */
	public void newcomerTag() {
		int n = products.size();
		if(n > 3) {
			for(int i = 0; i < n-3; i++) {
				removeTag(products.elementAt(i), NEWCOMER_TAG);
			}
		}
		
		int start = n-3 > 0 ? n-3 : 0; 
		for(int i = start; i < n; i++) {
			addTag(products.elementAt(i), NEWCOMER_TAG);
		}
	}
	
	/**
	 * give cheap tag to top 3 cheapest product
	 */
	public void cheapTag() {
		Vector<Product> sortByPrice = (Vector<Product>) products.clone();
		sortByPrice.sort(new Comparator<Product>() {
			@Override
			public int compare(Product o1, Product o2) {
				if(o1.getPrice() == o2.getPrice()) return 0;
				if(o1.getPrice() < o2.getPrice()) return -1;
				return 1;
			}
		});
		
		for (Product product : sortByPrice) {
			removeTag(product, CHEAP_TAG);
		}
		
		int n = sortByPrice.size() > 3 ? 3 : sortByPrice.size();
		for(int i = 0; i < n; i++) {
			addTag(sortByPrice.elementAt(i), CHEAP_TAG);
		}
	}
}
