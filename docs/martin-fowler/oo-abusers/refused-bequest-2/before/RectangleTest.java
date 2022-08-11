package fowler.oo_abusers.refused_bequest_2.before;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class RectangleTest {
	
	@Test
	void test() {
		foo(new Rectangle());
		foo(new Square());
	}
	
	void foo(Rectangle r) {
		r.setHeight(10);
		r.setWidth(20);
		assertEquals(200, r.area());
	}
}
