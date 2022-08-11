package girish.hierarchy.unfactored.before;

public class Monster extends GameObject implements Hittable {
	private int health;
	
	@Override
	public void hit(int damage) {
		health -= damage;
		if(health <= 0) {
			die();
		}
	}

	@Override
	public void die() {
		//...
	}
	
	//... other members and behaviors
}
