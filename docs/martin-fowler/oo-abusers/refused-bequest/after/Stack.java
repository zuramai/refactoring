package fowler.oo_abusers.refused_bequest.after;

import java.util.Vector;

public class Stack<E> {
	private Vector<E> vector = new Vector<>();
	
	public void push(E data) {
		vector.add(data);
	}
	
	public void pop() {
		vector.removeElementAt(vector.size()-1);
	}
	
	public E peek() {
		return vector.elementAt(vector.size()-1);
	}
}
