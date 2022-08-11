package girish.abstraction.missing.after;

public abstract class ISBN {
	protected String completeCode;
	protected String group;
	protected String publisher;
	protected String title;
	protected String checkDigit;
	
	protected abstract boolean isValid(String isbn);
	public abstract ISBN isbn13();
	public abstract ISBN isbn10();
	
	public ISBN(String value) {
		if(!isValid(value)) {
			throw new IllegalArgumentException();
		}
		
		this.completeCode = value;
		this.group = value.substring(0, 2);
		this.publisher = value.substring(2, 6);
		this.title = value.substring(6, 9);
		this.checkDigit = value.substring(9, 10);
	}
	
	@Override
	public String toString() {
		return completeCode;
	}

	//other ISBN behaviors
}
