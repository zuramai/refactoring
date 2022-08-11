package girish.abstraction.missing.after;

public class ISBN13 extends ISBN {
	public ISBN13(String value) {
		super(value);
	}
	
	@Override
	protected boolean isValid(String isbn) {
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

	@Override
	public ISBN isbn13() {
		try {
			return (ISBN) this.clone();
		} catch (CloneNotSupportedException e) {}
		return null;
	}

	@Override
	public ISBN isbn10() {
		String newIsbn = completeCode.substring(3, 12);
		
		int total = 0;
		int multiplier = 10;
		for(int i = 0; i < newIsbn.length(); i++) {			
			int digit = newIsbn.charAt(i) - '0';
			total += digit * multiplier;
			--multiplier;
		}
		
		int checkDigit = (11 - (total % 11)) % 11;
		newIsbn += String.valueOf(checkDigit);
		
		return new ISBN10(newIsbn);
	}

}
