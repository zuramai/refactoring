# Inappropriate Intimacy

[sourcemaking](https://sourcemaking.com/refactoring/smells/inappropriate-intimacy)

## Penjelasan Smell

Smell ini terjadi karena hubungan antar class yang terlalu intim, menyebabkan class yang satu mengeksploitasi internal field dan/atau method di class lain.

Hal ini berbahaya karena class yang internal logic-nya diakses bisa mendapat perlakuan yang tidak terduga.

Pada constructor di `Product.java`, class Product mengetahui ada fungsi `addTag` di Catalog dan menambahkan tag-nya sendiri ke Catalog.

<Tabs>
<Tab name="Product" text="Product.java">

```java
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

	// ...
}
```

</Tab>
<Tab name="Catalog" text="Catalog.java" :max-height="450">

```java
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
```

</Tab>
</Tabs>

Hal ini tentu berbahaya karena artinya, class Product bisa menambahkan tag apapun tanpa seizin Catalog.

## Penyelesaian

Catalog dan Product punya hubungan bidirectional yang tidak perlu, maka dilakukan [Change Bidirectional Association to Unidirectional](https://sourcemaking.com/refactoring/change-bidirectional-association-to-unidirectional). Dengan cara menghapus field `catalog` di dalam `Product`.

Semua method di class <github-url to="after/Catalog.java">Catalog</github-url> yang berhubungan dengan manipulasi tag access modifier-nya diubah menjadi private.

<Tabs>
<Tab name="Product" text="Product.java">

```java
public class Product {
	private UUID id;
	private String name;
	private double price;

	public Product(String name, double price) {
		this.id = UUID.randomUUID();
		this.name = name;
		this.price = price;
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
```

</Tab>
<Tab name="Catalog" text="Catalog.java" :max-height="450">

```java
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

	private void addTag(Product p, String tag) {
		Vector<String> tags = this.tags.get(p.getId());
		if(tags == null) {
			tags = new Vector<String>();
		}

		if(tags.contains(tag)) return;
		tags.add(tag);
		this.tags.put(p.getId(), tags);
	}

	private void removeTag(Product p, String tag) {
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
	private void newcomerTag() {
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
	private void cheapTag() {
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
```

</Tab>
</Tabs>
