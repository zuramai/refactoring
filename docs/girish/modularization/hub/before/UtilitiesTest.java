package girish.modularization.hub.before;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class UtilitiesTest {

	@Test
	void testTitleCase() {
		String s = "halo  dunia!";
		
		String result = Utilities.toTitleCase(s);
		assertEquals("Halo  Dunia!", result);
	}
	
	@Test
	void testEmail() {
		assertFalse(Utilities.validateEmail("halo  dunia!"));
		assertFalse(Utilities.validateEmail("abc123"));
		assertFalse(Utilities.validateEmail("abc123@abc.com@"));
		
		assertTrue(Utilities.validateEmail("abc123@abc.com"));
	}

}
