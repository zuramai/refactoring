package girish.encapsulation.leaky.before;

public class ToDo {
	//...
	private String name;
	
	public ToDo(String name) {
		super();
		this.name = name;
	}

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	//...
}
