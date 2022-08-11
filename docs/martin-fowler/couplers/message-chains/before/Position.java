package fowler.couplers.message_chains.before;

public class Position {
	private double latitude;
	private double longitude;
	
	public Position(double latitude, double longitude) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}
	
	public double getLongitude() {
		return longitude;
	}	
}
