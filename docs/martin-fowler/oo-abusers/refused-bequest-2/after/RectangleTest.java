package fowler.oo_abusers.refused_bequest_2.after;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class RectangleTest {
	
	@Test
	void test() {
		foo(new Rectangle());
		foo(new Square());
		foo(new Triangle());
	}
	
	void foo(Shape2D r) {
		r.setHeight(10);
		r.setWidth(20);
		
		int expected;
		if (r instanceof Rectangle) {
			expected = 200;
		} else if (r instanceof Square) {
			expected = 400;
		} else if (r instanceof Triangle){
			expected = 100;
		} else {
			return;
		}
		
		assertEquals(expected, r.area());
	}
}
