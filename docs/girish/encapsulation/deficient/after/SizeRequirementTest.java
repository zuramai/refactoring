package girish.encapsulation.deficient.after;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class SizeRequirementTest {

	@Test
	void test() {
		SizeRequirement sr = new SizeRequirement();
		sr.setAlignment(1);
		assertEquals(1, sr.getAlignment());
		
		assertThrows(IllegalArgumentException.class, () -> {
			sr.setAlignment(100);
		});
	}

}
