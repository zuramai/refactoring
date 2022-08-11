package fowler.bloaters.primitive_obsession.after;

import java.util.regex.Pattern;

public class FullName {
	private String value;
	
	public FullName(String value) {
		if(!isValidName(value)) {
			throw new IllegalArgumentException("name is not valid");
		}
		
		this.value = value;
	}

	private boolean isValidName(String name) {
		String regex = "^([A-Z\\'][a-z\\']*((\\s)))*[A-Z\\'][a-z\\']*$";
		Pattern pattern = Pattern.compile(regex);
		return pattern.matcher(name).matches();
	}
	
	public String getValue() {
		return value;
	}
}
