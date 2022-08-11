package girish.modularization.hub.after;

public class StringManipulation {	
	public static String toTitleCase(String s) {
		String result = "";
		
		boolean afterWhitespace = true;
		for (char c : s.toCharArray()) {
			if(Character.isWhitespace(c)) {
				afterWhitespace = true;
				result += c;
				continue;
			}
			
			if(afterWhitespace) {
				result += Character.toUpperCase(c);
				afterWhitespace = false;
			} else {
				result += Character.toLowerCase(c);
			}
		}
		
		return result;
	}
	
	//... other string manipulation methods
}
