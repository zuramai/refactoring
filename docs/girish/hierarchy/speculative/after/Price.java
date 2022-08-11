package girish.hierarchy.speculative.after;

public class Price {
	int value;
	Currency currency;
	
	public Price(int value, Currency currency) {
		this.value = value;
		this.currency = currency;
	}
	
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public Currency getCurrency() {
		return currency;
	}
	public void setCurrency(Currency currency) {
		this.currency = currency;
	}
}
