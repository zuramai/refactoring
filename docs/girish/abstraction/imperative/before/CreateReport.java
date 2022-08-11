package girish.abstraction.imperative.before;

public class CreateReport {
	public Report create(String title, String body) {
		Report r = new Report();
		
		r.setTitle(title);
		r.setBody(body);
		
		return r;
	}
}
