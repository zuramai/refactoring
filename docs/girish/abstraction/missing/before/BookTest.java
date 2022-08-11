package girish.abstraction.missing.before;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class BookTest {

	@Test
	void testISBN10() {
		assertDoesNotThrow(() -> new Book("0306406152", "", ""));
		assertDoesNotThrow(() -> new Book("0596007124", "", ""));
		assertDoesNotThrow(() -> new Book("1491950358", "", ""));
		assertThrows(IllegalArgumentException.class, () -> new Book("1491950359", "", ""));
		assertThrows(IllegalArgumentException.class, () -> new Book("149195035a", "", ""));
	}
	
	@Test
	void testISBN13() {
		assertDoesNotThrow(() -> new Book("9780306406157", "", ""));
		assertDoesNotThrow(() -> new Book("9780596007126", "", ""));
		assertDoesNotThrow(() -> new Book("9781491950357", "", ""));
		assertThrows(IllegalArgumentException.class, () -> new Book("9781491950359", "", ""));
		assertThrows(IllegalArgumentException.class, () -> new Book("978149195035a", "", ""));
	}

	@Test
	void testConvert10to13() {
		Book b;
		
		b = new Book("0306406152", "", "");
		assertEquals("9780306406157", b.convertToIsbn13());

		b = new Book("0596007124", "", "");
		assertEquals("9780596007126", b.convertToIsbn13());
		
		b = new Book("1491950358", "", "");
		assertEquals("9781491950357", b.convertToIsbn13());
	}
	
	@Test
	void testConvert13to10() {
		Book b;
		
		b = new Book("9780306406157", "", "");
		assertEquals("0306406152", b.convertToIsbn10());

		b = new Book("9780596007126", "", "");
		assertEquals("0596007124", b.convertToIsbn10());
		
		b = new Book("9781491950357", "", "");
		assertEquals("1491950358", b.convertToIsbn10());
	}
}
