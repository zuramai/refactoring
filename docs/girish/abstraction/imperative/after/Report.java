package girish.abstraction.imperative.after;

public class Report {
	private String title;
	private String body;
	
	public Report(String title, String body) {
		this.title = title;
		this.body = body;
	}
	
	public void display() {
		String s = "";
		
		s += title;
		s += "\n\n";
		s += body;
		
		System.out.println(s);
	}
	
	public Report copy() {
		try {
			return (Report) this.clone();
		} catch (CloneNotSupportedException e) {}
		return null;
	}

	public String getTitle() {
		return title;
	}
	
	public String getBody() {
		return body;
	}
}
