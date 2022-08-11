package fowler.oo_abusers.switch_statements.before;


import static org.junit.jupiter.api.Assertions.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.jupiter.api.Test;

class TestShape {

	@Test
	void testPrint() {
		ShapePrinter sp = new ShapePrinter();
		
		PrintStream oldOut = System.out;
		ByteArrayOutputStream outContent = new ByteArrayOutputStream();
		System.setOut(new PrintStream(outContent));
		
		sp.print("Triangle", 3);
		String expectedTriangle = "*\r\n**\r\n***";
		
		assertEquals(expectedTriangle, outContent.toString().trim());
		outContent.reset();
		
		sp.print("a", 5);
		assertEquals("invalid shape", outContent.toString().trim());
		outContent.reset();
		
		sp.print("Square", 2);
		String expectedSquare = "**\r\n**";
		assertEquals(expectedSquare, outContent.toString().trim());
		outContent.reset();
		
		System.setOut(oldOut);
	}

	@Test
	void testCount() {
		CharNeededCounter sp = new CharNeededCounter();
		
		assertEquals(sp.count("Triangle", 3), 6);
		assertEquals(sp.count("a", 5), -1);
		assertEquals(sp.count("Square", 5), 25);
	}
}
