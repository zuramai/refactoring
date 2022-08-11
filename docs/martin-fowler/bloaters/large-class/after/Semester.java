package fowler.bloaters.large_class.after;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Semester {
	private String label;
	private Date start;
	private Date end;
	
	public Semester(String label, Date start, Date end) {
		if(start.after(end)) {
			throw new IllegalArgumentException("start date must before end date");
		}
		this.label = label;
		this.start = start;
		this.end = end;
	}
	
	public String getLabel() {
		return label;
	}
	
	public Date getStart() {
		return start;
	}
	
	public Date getEnd() {
		return end;
	}
	
	@Override
	public String toString() {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		return label + " - " + format.format(start) + " - " + format.format(end);
	}
}
