package fowler.bloaters.large_class.after;

import java.util.Vector;

public class Semesters {
	private Vector<Semester> semesters;
	
	public Semesters() {
		this.semesters = new Vector<Semester>();
	}

	public boolean add(Semester s) {
		if(!isLabelUnique(s.getLabel())) {
			throw new IllegalArgumentException("label must be unique");
		}
		return semesters.add(s);
	}
	
	public int size() {
		return semesters.size();
	}
	
	public void removeAtIndex(int idx) {
		semesters.removeElementAt(idx);
	}
	
	public void show() {
		for(int i = 0; i < semesters.size(); i++) {
			Semester s = semesters.elementAt(i);
			System.out.println((i+1) + ". " + s.toString());
		}
		System.out.println("");
	}
	
	public boolean isLabelUnique(String label) {
		for(Semester s : semesters) {
			if(s.getLabel().equalsIgnoreCase(label)) return false;
		}
		return true;
	}
}
