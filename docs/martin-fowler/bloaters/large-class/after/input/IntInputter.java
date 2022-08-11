package fowler.bloaters.large_class.after.input;

public class IntInputter extends Console<Integer> {
	private String message;
	private int min, max;
	
	public IntInputter(String message, int min, int max) {
		super();
		this.message = message;
		this.min = min;
		this.max = max;
	}

	@Override
	public Integer get() {
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

}
