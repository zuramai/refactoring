package fowler.oo_abusers.switch_statements.after;

import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.jupiter.api.Test;

class TestShape {

	@Test
	void testInvalidShape() {
		boolean catched = false;
		try {
			ShapeFactory factory = new ShapeFactory();
			factory.create("a", 5);
		} catch (Exception e) {
			catched = true;
		}
		
		assert(catched);
	}
	
	@Test
	void testprint() {
		ShapeFactory factory = new ShapeFactory();
		Shape triangle = null;
		Shape square = null;
		
		try {
			triangle = factory.create("triangle", 3);
			square = factory.create("square", 2);
		} catch (Exception e) {
			fail("create failed");
		}
		
		PrintStream oldOut = System.out;
		ByteArrayOutputStream outContent = new ByteArrayOutputStream();
		System.setOut(new PrintStream(outContent));
		
		triangle.print();
		String expectedTriangle = "*\r\n**\r\n***";
		assertEquals(expectedTriangle, outContent.toString().trim());
		outContent.reset();
		
		square.print();
		String expectedSquare = "**\r\n**";
		assertEquals(expectedSquare, outContent.toString().trim());
		outContent.reset();
		
		System.setOut(oldOut);
	}

	@Test
	void testCount() {
		ShapeFactory factory = new ShapeFactory();
		Shape triangle = null;
		Shape square = null;
		
		try {
			triangle = factory.create("triangle", 3);
			square = factory.create("square", 5);
		} catch (Exception e) {
			fail("create failed");
		}
		
		assertEquals(triangle.charNeeded(), 6);
		assertEquals(square.charNeeded(), 25);
	}
}
