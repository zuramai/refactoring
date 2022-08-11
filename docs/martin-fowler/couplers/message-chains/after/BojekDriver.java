package fowler.couplers.message_chains.after;

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
	
	public double latitude() {
		return this.getCurrentPosition().getLatitude();
	}
	
	public double longitude() {
		return this.getCurrentPosition().getLongitude();
	}
}
