package girish.encapsulation.deficient.testing_using_reflection;

import static org.junit.jupiter.api.Assertions.*;

import java.lang.reflect.Method;

import org.junit.jupiter.api.Test;

class FooTest {	
	@Test
	void test() {
		Foo f = new Foo();
		assertEquals(4, f.baz());
		
		try {
			Method bar = f.getClass().getDeclaredMethod("bar", null);
			bar.setAccessible(true);
			Object result = bar.invoke(f, null);
			assertEquals(2, result);
		} catch(Exception e) {
			fail(e);
		}
		
		
	}

}
