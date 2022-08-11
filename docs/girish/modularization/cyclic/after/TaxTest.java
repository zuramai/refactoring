package girish.modularization.cyclic.after;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TaxTest {

	@Test
	void test() {
		Order order = new Order(1);
		
		order.addItem(new Item(1000));
		order.addItem(new Item(2000));
		order.addItem(new Item(3000));
		
		assertEquals(6600, order.getAmount());
	}

}
