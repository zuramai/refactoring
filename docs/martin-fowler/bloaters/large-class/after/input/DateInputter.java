package fowler.bloaters.large_class.after.input;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateInputter extends Console<Date> {
	private String message;
	private String format;
	
	public DateInputter(String message, String format) {
		super();
		this.message = message;
		this.format = format;
	}

	@Override
	public Date get() {
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		sdf.setLenient(false);
		
		Date date = null;
		do {
			try {
				System.out.print(message + " ["+format+"]: ");
				String input = scan.nextLine().trim();
				date = sdf.parse(input);
			} catch (Exception e) {
				date = null;
			}
		} while(date == null);
		return date;
	}

}
