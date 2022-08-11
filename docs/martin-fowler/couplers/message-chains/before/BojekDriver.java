package fowler.couplers.message_chains.before;

public class BojekDriver {
	private String name;
	private Position currentPosition;

	public BojekDriver(String name, Position currentPosition) {
		super();
		this.name = name;
		this.currentPosition = currentPosition;
	}

	public String getName() {
		return name;
	}
	
	public Position getCurrentPosition() {
		return currentPosition;
	}	
}
