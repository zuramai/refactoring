package fowler.couplers.message_chains.after;

public class Manhattan extends DistanceCalculator {

	@Override
	public double distance(double x1, double y1, double x2, double y2) {
		double diffX = this.round(x1-x2, 6);
		double diffY = this.round(y1-y2, 6);
		return this.round(diffX + diffY, 6);
	}

}
