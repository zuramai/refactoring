package fowler.couplers.message_chains.before;

import java.math.BigDecimal;
import java.math.RoundingMode;

public abstract class DistanceCalculator {
	public abstract double distance(double x1, double y1, double x2, double y2);
	
	protected double round(double value, int places) {
	    if (places < 0) throw new IllegalArgumentException();
	 
	    BigDecimal bd = new BigDecimal(Double.toString(value));
	    bd = bd.setScale(places, RoundingMode.HALF_UP);
	    return bd.doubleValue();
	}
}
