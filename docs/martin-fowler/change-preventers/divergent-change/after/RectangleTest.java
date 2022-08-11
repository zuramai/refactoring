package fowler.change_preventers.divergent_change.after;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class RectangleTest {

	@Test
	void test() {
		Rectangle r = new Rectangle(5, 3);
		assertEquals(r.area(), 15);
		assertEquals(r.perimeter(), 16);
		
		new BorderRectanglePrinter(r).print();
		System.out.println("");
		new FullRectanglePrinter(r).print();
	}

}
