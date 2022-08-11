package girish.abstraction.imperative.before;

public class CopyReport {
	public Report copy(Report report) {
		Report r = new Report();
		
		r.setTitle(report.getTitle());
		r.setBody(report.getBody());
		
		return r;
	}
}
