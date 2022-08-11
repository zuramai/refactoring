package girish.abstraction.missing.after;

public class ISBNFactory {
	public static ISBN create(String completeCode) {
		if(completeCode.length() == 10) {
			return new ISBN10(completeCode);
		}
		
		if(completeCode.length() == 13) {
			return new ISBN13(completeCode);
		}
		
		throw new IllegalArgumentException();
	}
}
