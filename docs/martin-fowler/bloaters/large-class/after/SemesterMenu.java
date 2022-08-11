package fowler.bloaters.large_class.after;

import java.util.Date;

import fowler.bloaters.large_class.after.input.DateInputter;
import fowler.bloaters.large_class.after.input.IntInputter;
import fowler.bloaters.large_class.after.input.StringInputter;

public class SemesterMenu {
	private Semesters semesters;
	
	public SemesterMenu(Semesters s) {
		semesters = s;
	}
	
	public void open() {
		while(menu()) {}
	}

	private boolean menu(){
		semesters.show();
		int input = printAndGetMenu();
		switch(input){
		case 1: create(); break;
		case 2: delete(); break;
		case 3: return false;
		}
		return true;
	}
	
	private int printAndGetMenu() {
		System.out.println("1. Create");
		System.out.println("2. Delete");
		System.out.println("3. Exit");
		return new IntInputter("input menu", 1, 3).get();
	}
	
	private void create() {		
		String label;
		do {
			label = new StringInputter("Input label", 3, 20).get();
		} while(!semesters.isLabelUnique(label));
		
		Date startDate, endDate;
		do {
			startDate = new DateInputter("Input start date", "yyyy-MM-dd").get();	
			endDate = new DateInputter("Input end date", "yyyy-MM-dd").get();
		} while(startDate.after(endDate));

		semesters.add(new Semester(label, startDate, endDate));
	}

	private void delete() {
		int input = new IntInputter("Choose semester", 1, semesters.size()).get();
		semesters.removeAtIndex(input-1);
	}
}
