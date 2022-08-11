package fowler.couplers.middle_man.before;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ShoppingCartTest {

	@Test
	void test() {
		Item item1 = new Item("indomie", 3000);
		Item item2 = new Item("telur", 1000);
		
		ShoppingCart cart = new ShoppingCart();
		cart.add(item1);
		cart.add(item2);
		
		assertEquals(cart.totalPrice(), 4000);
	}

}
