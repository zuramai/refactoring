package fowler.dispensables.lazy_class.after;

public class Price {
	private int value;
	
	public Price(int value) throws Exception {
		if(!isPriceValid(value)) {
			throw new Exception("price not valid");
		}
		
		this.value = value;
	}

	private boolean isPriceValid(int value){
		return value >= 0;
	}
	
	public int getValue() {
		return value;
	}
}
