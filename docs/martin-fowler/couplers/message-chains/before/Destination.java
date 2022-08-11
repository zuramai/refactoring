package fowler.couplers.message_chains.before;

public class Destination {
	private String name;
	private Position position;
	
	public Destination(String name, Position position) {
		super();
		this.name = name;
		this.position = position;
	}

	public String getName() {
		return name;
	}
	
	public Position getPosition() {
		return position;
	}
}
