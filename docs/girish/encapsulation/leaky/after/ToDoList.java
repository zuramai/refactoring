package girish.encapsulation.leaky.after;

import java.util.Vector;

public class ToDoList {
	//...
	private Vector<ToDo> list;
	
	public ToDoList() {
		list = new Vector<>();
	}
	
	public Vector<ToDo> getList() {
		//deep copy
		Vector<ToDo> result = new Vector<>();
		
		for (ToDo toDo : list) {
			try {
				result.add((ToDo) toDo.clone());
			} catch (CloneNotSupportedException e) {
				e.printStackTrace();
			}
		}
		
		return result;
	}
	
	public ToDo getByName(String name) {
		for (ToDo toDo : list) {
			if(toDo.getName().equals(name)) return toDo;
		}
		
		return null;
	}
	
	public void add(ToDo t) {
		list.add(t);
	}
	
	// ...
}
