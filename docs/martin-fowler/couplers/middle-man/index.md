# Middle Man

[sourcemaking](https://sourcemaking.com/refactoring/smells/middle-man)

## Penjelasan Smell

Middle Man adalah class yang isinya hanya delegasi saja, tidak ada behavior lain selain delegasi ke class lain.

Perhatikan `LinkedList.java` dan `ShoppingCart.java`. `ShoppingCart` melakukan `add` pada `LinkedList`. Namun ternyata di dalam `LinkedList`, dia hanya delegasi ke `java.util.Vector`.

<Tabs>
<Tab name="ShoppingCart" text="ShoppingCart.java">

```java
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
```

</Tab>
<Tab name="LinkedList" text="LinkedList.java">

```java
public class LinkedList<E> {
	private Vector<E> v = new Vector<E>();

	public void add(E o){
		v.addElement(o);
	}

	public void remove(E o){
		v.remove(o);
	}

	@SuppressWarnings("unchecked")
	public Vector<E> getList() {
		return (Vector<E>) v.clone();
	}
}
```

</Tab>
<Tab name="Item" text="Item.java">

```java
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
```

</Tab>
</Tabs>

## Penyelesaian

Hapus si Middle Man, yaitu `LinkedList`. Sekarang di package after, class `ShoppingCart` langsung mengakses `java.util.Vector`.

<Tabs>
<Tab name="ShoppingCart" text="ShoppingCart.java">

```java
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
```

</Tab>
</Tabs>

## Tambahan

Ada beberapa design pattern yang memang dirancang untuk delegasi, seperti: Adapter, Proxy, Bridge, Facade atau Mediator. Namun dalam design pattern ini bukan sekadar delegasi mentah-mentah, ada sedikit fitur di dalamnya. Design pattern ini masuk ke dalam Gang of Four Design Pattern, akan kita pelajari di semester depan.
