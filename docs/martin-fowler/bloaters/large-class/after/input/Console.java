package fowler.bloaters.large_class.after.input;

import java.util.Scanner;

public abstract class Console<E> {
	protected static Scanner scan = new Scanner(System.in);
	public abstract E get();
}
