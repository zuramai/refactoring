package girish.encapsulation.leaky.before;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Vector;

import org.junit.jupiter.api.Test;

class ToDoListTest {

	@Test
	void test() {
		ToDoList td = new ToDoList();
		
		td.add(new ToDo("a"));
		assert(td.getByName("a") != null);
		
		Vector<ToDo> list = td.getList();
		list.elementAt(0).setName("b");

		assert(td.getByName("b") != null);
	}

}
