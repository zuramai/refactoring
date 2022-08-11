package fowler.couplers.middle_man.before;

import java.util.Vector;

public class LinkedList<E> {
	private Vector<E> v = new Vector<E>();
	
	public void add(E o){
		v.addElement(o);
	}
	
	public void remove(E o){
		v.remove(o);
	}
	
	@SuppressWarnings("unchecked")
	public Vector<E> getList() {
		return (Vector<E>) v.clone();
	}
}
