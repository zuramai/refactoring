package fowler.bloaters.long_method.before;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import java.util.Vector;

import fowler.bloaters.long_method.after.Semester;

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
		//menampilkan semua semester yang ada
		for(int i = 0; i < semesters.size(); i++) {
			Semester s = semesters.elementAt(i);
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			
			System.out.print((i+1) + ". ");
			System.out.print(s.getLabel());
			System.out.print(" - ");
			System.out.print(format.format(s.getStart()));
			System.out.print(" - ");
			System.out.print(format.format(s.getEnd()));
			System.out.println("");
		}
		System.out.println("");
		
		//menampilkan menu
		System.out.println("1. Create");
		System.out.println("2. Delete");
		System.out.println("3. Exit");
		
		//input
		int input = 0;
		do{
			System.out.print("Input [1-3]: ");
			try {
				input = scan.nextInt();
			} catch (Exception e) {
				input = 0;
			} finally {
				scan.nextLine();
			}
		}while(input < 1 || input > 3);
		
		//switch menu by input
		switch(input){
		case 1: create(); break;
		case 2: delete(); break;
		case 3: return false;
		}
		return true;
	}

	private void delete() {
		int input = 0;
		do{
			System.out.print("Choose semester [1-"+semesters.size()+"]: ");
			try {
				input = scan.nextInt();
			} catch (Exception e) {
				input = 0;
			} finally {
				scan.nextLine();
			}
		}while(input < 1 || input > semesters.size());
		semesters.removeElementAt(input-1);
	}

	private void create() {
		String label = "";
		do {
			System.out.print("Input label [3-20 chars]: ");
			label = scan.nextLine().trim();
		} while(label.length() < 3 || label.length() > 20 || !isLabelUnique(label));

		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		format.setLenient(false);
		
		Date startDate = null;
		Date endDate = null;
		
		do {
			do {
				try {
					System.out.print("Input start date [yyyy-MM-dd]: ");
					String input = scan.nextLine().trim();
					startDate = format.parse(input);
				} catch (Exception e) {
					startDate = null;
				}
			} while(startDate == null);
			
			do {
				try {
					System.out.print("Input end date [yyyy-MM-dd]: ");
					String input = scan.nextLine().trim();
					endDate = format.parse(input);
				} catch (Exception e) {
					endDate = null;
				}
			} while(endDate == null);
		}while(startDate.after(endDate));
					
		semesters.add(new Semester(label, startDate, endDate));
	}
	
	private boolean isLabelUnique(String label) {
		for(Semester s : semesters) {
			if(s.getLabel().equalsIgnoreCase(label)) return false;
		}
		return true;
	}
}
