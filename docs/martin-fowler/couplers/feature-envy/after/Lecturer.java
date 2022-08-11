package fowler.couplers.feature_envy.after;

public class Lecturer extends Binusian {

	public Lecturer(String id, String name) {
		super(id, name);
		if(id.length() != 5) {
			throw new IllegalArgumentException();
		}
	}
}
