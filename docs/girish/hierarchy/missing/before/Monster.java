package girish.hierarchy.missing.before;

public class Monster extends GameObject {
	private int health;
	
	public void hit(int damage) {
		health -= damage;
	}
	
	//... other members and behaviors
}
