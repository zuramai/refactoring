package girish.modularization.hub.before;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utilities {
	public static boolean validateEmail(String email) {
		String regex = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
		 
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(email);
		
		return matcher.matches();
	}
	
	//... other validation methods
	
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
