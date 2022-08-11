package girish.abstraction.missing.after;

public class Book {
	private ISBN isbn;
	private String author;
	private String name;
	
	public Book(String isbn, String author, String name) {
		super();
		
		this.isbn = ISBNFactory.create(isbn);		
		this.author = author;
		this.name = name;
	}
	
	public ISBN getIsbn() {
		return isbn;
	}
	
	//other Book behaviors
}
