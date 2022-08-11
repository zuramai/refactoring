package girish.abstraction.imperative.before;

public class DisplayReport {
	public void display(Report report) {
		String s = "";
		
		s += report.getTitle();
		s += "\n\n";
		s += report.getBody();
		
		System.out.println(s);
	}
}
