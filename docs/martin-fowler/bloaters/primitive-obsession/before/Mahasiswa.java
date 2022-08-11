package fowler.bloaters.primitive_obsession.before;

import java.util.Calendar;
import java.util.regex.Pattern;

public class Mahasiswa {
	private String name;
	private int dayOfBirth;
	private int monthOfBirth;
	private int yearOfBirth;
	
	//reguler | global
	private String type;
	
	public Mahasiswa(String name, String type, int dayOfBirth, int monthOfBirth, int yearOfBirth) {
		if(!isValidName(name)) {
			throw new IllegalArgumentException("name is not valid");
		}
		
		type = type.toLowerCase();
		if(!type.equals("reguler") && !type.equals("global")) {
			throw new IllegalArgumentException("type is not valid");
		}
		
		if(!isValidDate(dayOfBirth, monthOfBirth, yearOfBirth)) {
			throw new IllegalArgumentException("dob is not valid");
		}
		
		this.name = name;
		this.type = type;
		this.dayOfBirth = dayOfBirth;
		this.monthOfBirth = monthOfBirth;
		this.yearOfBirth = yearOfBirth;
	}

	private boolean isValidName(String name) {
		String regex = "^([A-Z\\'][a-z\\']*((\\s)))*[A-Z\\'][a-z\\']*$";
		Pattern pattern = Pattern.compile(regex);
		return pattern.matcher(name).matches();
	}
	
	private boolean isValidDate(int dayOfBirth, int monthOfBirth, int yearOfBirth) {
		Calendar cal = Calendar.getInstance();
		cal.setLenient(false);
		cal.set(yearOfBirth, monthOfBirth-1, dayOfBirth);
		try {
			cal.getTime();
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	
	public String getType() {
		return type;
	}
	
	public String getName() {
		return name;
	}
}
