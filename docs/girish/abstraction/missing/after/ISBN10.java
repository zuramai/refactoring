package girish.abstraction.missing.after;

public class ISBN10 extends ISBN {
	public ISBN10(String value) {
		super(value);
	}
	
	@Override
	protected boolean isValid(String isbn) {
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

	@Override
	public ISBN isbn13() {
		String newIsbn = "978" + completeCode.substring(0, 9);
		
		int total = 0;
		int multiplier = 1;
		for(int i = 0; i < newIsbn.length(); i++) {			
			int digit = newIsbn.charAt(i) - '0';
			total += digit * multiplier;
			multiplier = multiplier == 1 ? 3 : 1;
		}
		
		int checkDigit = 10 - (total % 10);
		newIsbn += String.valueOf(checkDigit);
		
		return new ISBN13(newIsbn);
	}

	@Override
	public ISBN isbn10() {
		try {
			return (ISBN) this.clone();
		} catch (CloneNotSupportedException e) {}
		return null;
	}

}
