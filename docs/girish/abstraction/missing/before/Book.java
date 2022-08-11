package girish.abstraction.missing.before;

public class Book {
	private String isbn;
	private String author;
	private String name;
	
	public Book(String isbn, String author, String name) {
		super();
		
		if(isbn.length() != 10 && isbn.length() != 13) {
			throw new IllegalArgumentException();
		}
		
		if(!isIsbnValid(isbn)) {
			throw new IllegalArgumentException();
		}
		
		this.isbn = isbn;
		this.author = author;
		this.name = name;
	}
	
	public String convertToIsbn13() {
		if(isbn.length() == 13) {
			return isbn;
		}
		
		String newIsbn = "978" + isbn.substring(0, 9);
		
		int total = 0;
		int multiplier = 1;
		for(int i = 0; i < newIsbn.length(); i++) {			
			int digit = newIsbn.charAt(i) - '0';
			total += digit * multiplier;
			multiplier = multiplier == 1 ? 3 : 1;
		}
		
		int checkDigit = 10 - (total % 10);
		newIsbn += String.valueOf(checkDigit);
		
		return newIsbn;
	}
	
	public String convertToIsbn10() {
		if(isbn.length() == 10) {
			return isbn;
		}
		
		String newIsbn = isbn.substring(3, 12);
		
		int total = 0;
		int multiplier = 10;
		for(int i = 0; i < newIsbn.length(); i++) {			
			int digit = newIsbn.charAt(i) - '0';
			total += digit * multiplier;
			--multiplier;
		}
		
		int checkDigit = (11 - (total % 11)) % 11;
		newIsbn += String.valueOf(checkDigit);
		
		return newIsbn;
	}

	private boolean isIsbnValid(String isbn) {
		if(isbn.length() == 10) {
			return isbn10Check(isbn);
		}
		
		if(isbn.length() == 13) {
			return isbn13Check(isbn);
		}
		
		return false;
	}
	
	private boolean isbn10Check(String isbn) {
		int total = 0;
		
		int multiplier = 10;
		for(int i = 0; i < isbn.length(); i++) {
			char c = isbn.charAt(i);
			if(c < '0' || c > '9') return false;
			
			int digit = c - '0';
			total += digit * multiplier;
			--multiplier;
		}
		
		return total % 11 == 0;
	}
	
	private boolean isbn13Check(String isbn) {
		int total = 0;
		int multiplier = 1;
		
		for (int i = 0; i < isbn.length(); i++) {
			char c = isbn.charAt(i);
			if(c < '0' || c > '9') return false;
			
			int digit = c - '0';
			total += digit * multiplier;
			multiplier = multiplier == 1 ? 3 : 1;
		}
		
		return total % 10 == 0;
	}
	
	//other Book behaviors
}
