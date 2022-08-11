package girish.hierarchy.missing.after;

public class Monster extends GameObject implements Hittable {
	private int health;
	
	@Override
	public void hit(int damage) {
		health -= damage;
	}
	
	//... other members and behaviors
}
