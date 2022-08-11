package fowler.bloaters.primitive_obsession.before;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class MahasiswaTest {

	@Test
	void testSuccess() {
		try {
			Mahasiswa m = new Mahasiswa("Amir Budianto", "reguler", 20, 11, 1999);	
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}

	@Test
	void testErrorName() {
		try {
			Mahasiswa m = new Mahasiswa("amir budianto123", "reguler", 20, 11, 1999);	
		} catch (Exception e) {
			return;
		}
		fail("exception is expected");
	}
	
	@Test
	void testErrorDoB() {
		try {
			Mahasiswa m = new Mahasiswa("Amir Budianto", "reguler", 37, 11, 1999);	
		} catch (Exception e) {
			return;
		}
		fail("exception is expected");
	}
}
