package fowler.oo_abusers.refused_bequest.before;

import java.util.Vector;

public class Stack<E> extends Vector<E> {
	
	public void push(E data) {
		this.add(data);
	}
	
	public void pop() {
		this.removeElementAt(this.size()-1);
	}
	
	public E peek() {
		return this.elementAt(this.size()-1);
	}
	
	/*
	 * you cannot remove by index, use pop instead
	 */
	@Override
	public synchronized E remove(int index) {
		return null;
	}
}
