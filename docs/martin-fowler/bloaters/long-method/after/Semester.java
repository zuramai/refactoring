package fowler.bloaters.long_method.after;

import java.util.Date;

public class Semester {
	private String label;
	private Date start;
	private Date end;
	
	public Semester(String label, Date start, Date end) {
		super();
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
}
