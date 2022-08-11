package girish.encapsulation.leaky.after;

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
	
	@Override
	public Object clone() throws CloneNotSupportedException {
		return new ToDo(name);
	}
	
	//...
}
