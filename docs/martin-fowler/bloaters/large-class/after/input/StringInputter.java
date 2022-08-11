package fowler.bloaters.large_class.after.input;

public class StringInputter extends Console<String> {
	private String message;
	private int min, max;
	
	public StringInputter(String message, int min, int max) {
		super();
		this.message = message;
		this.min = min;
		this.max = max;
	}

	@Override
	public String get() {
		String input;
		do{
			System.out.print(message + " ["+min+"-"+max+" chars]: ");
			input = scan.nextLine().trim();
		}while(input.length() < min || input.length() > max);
		return input;
	}

}
