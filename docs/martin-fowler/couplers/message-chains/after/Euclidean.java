package fowler.couplers.message_chains.after;

public class Euclidean extends DistanceCalculator {

	@Override
	public double distance(double x1, double y1, double x2, double y2) {
		double diffX = Math.pow(x1-x2, 2);
		double diffY = Math.pow(y1-y2, 2);
		
		double square = Math.sqrt(diffX + diffY);
		return this.round(square, 6);
	}

}
