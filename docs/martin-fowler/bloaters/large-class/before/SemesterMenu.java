package fowler.bloaters.large_class.before;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import java.util.Vector;

public class SemesterMenu {
	private Vector<Semester> semesters;
	private Scanner scan;
	
	public SemesterMenu() {
		semesters = new Vector<Semester>();
		scan = new Scanner(System.in); 
	}
	
	public void open() {
		while(menu()) {}
	}

	private boolean menu(){
		showSemesters();
		int input = printAndGetMenu();
		switch(input){
		case 1: create(); break;
		case 2: delete(); break;
		case 3: return false;
		}
		return true;
	}

	private void create() {		
		String label;
		do {
			label = getStringInput("Input label", 3, 20);
		} while(!isLabelUnique(label));
		
		Date startDate, endDate;
		do {
			startDate = getDateInput("Input start date", "yyyy-MM-dd");	
			endDate = getDateInput("Input end date", "yyyy-MM-dd");
		} while(startDate.after(endDate));

		semesters.add(new Semester(label, startDate, endDate));
	}
	
	private boolean isLabelUnique(String label) {
		for(Semester s : semesters) {
			if(s.getLabel().equalsIgnoreCase(label)) return false;
		}
		return true;
	}

	private void delete() {
		int input = getIntInput("Choose semester", 1, semesters.size());
		semesters.removeElementAt(input-1);
	}
	
	private int printAndGetMenu() {
		System.out.println("1. Create");
		System.out.println("2. Delete");
		System.out.println("3. Exit");
		return getIntInput("input menu", 1, 3);
	}

	private void showSemesters() {
		for(int i = 0; i < semesters.size(); i++) {
			Semester s = semesters.elementAt(i);
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

			System.out.print((i+1) + ". ");
			showSemester(s, format);
			System.out.println("");
		}
		System.out.println("");
	}

	private void showSemester(Semester s, SimpleDateFormat format) {
		System.out.print(s.getLabel());
		System.out.print(" - ");
		System.out.print(format.format(s.getStart()));
		System.out.print(" - ");
		System.out.print(format.format(s.getEnd()));
	}

	private Date getDateInput(String message, String format) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
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
	
	private int getIntInput(String message, int min, int max) {
		int input;
		do{
			System.out.print(message + " ["+min+"-"+max+"]: ");
			try {
				input = scan.nextInt();
			} catch (Exception e) {
				input = 0;
			} finally {
				scan.nextLine();
			}
		}while(input < min || input > max);
		return input;
	}
	
	private String getStringInput(String message, int min, int max) {
		String input;
		do{
			System.out.print(message + " ["+min+"-"+max+" chars]: ");
			input = scan.nextLine().trim();
		}while(input.length() < min || input.length() > max);
		return input;
	}
}
