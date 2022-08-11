package girish.modularization.hub.after;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class UtilitiesTest {

	@Test
	void testTitleCase() {
		String s = "halo  dunia!";
		
		String result = StringManipulation.toTitleCase(s);
		assertEquals("Halo  Dunia!", result);
	}
	
	@Test
	void testEmail() {
		assertFalse(Validator.validateEmail("halo  dunia!"));
		assertFalse(Validator.validateEmail("abc123"));
		assertFalse(Validator.validateEmail("abc123@abc.com@"));
		
		assertTrue(Validator.validateEmail("abc123@abc.com"));
	}

}
