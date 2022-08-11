package fowler.oo_abusers.refused_bequest.after;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TestStack {

	@Test
	void test() {
		Stack<String> stack = new Stack<>();
		
		stack.push("a");
		stack.push("b");
		stack.push("c");
		stack.push("d");
		
		assertEquals(stack.peek(), "d");
		
		stack.pop();
		stack.pop();

		assertEquals(stack.peek(), "b");
	}

}
