package girish.hierarchy.wide.after;

public class Monster extends GameUnit {
	
	@Override
	public void hit(int damage) {
		this.reduceHealth(damage);
	}

	@Override
	public void die() {
		//...
	}
	
	//... other members and behaviors
}
