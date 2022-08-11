package fowler.dispensables.dead_code.after;

public class PriceCalculator {
	public double calculate(double price, boolean isDiscount){
		double discountPrice = 0;
	
		if(isDiscount) discountPrice = price * 0.15;
		
		return price - discountPrice;
	}
}
