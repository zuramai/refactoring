package girish.hierarchy.unfactored.before;

public class Player extends GameObject implements Hittable {
	private int armor;
	private int health;
	
	@Override
	public void hit(int damage) {
		double damageMultiplier = (1-((0.052*armor)/(0.9+0.048*Math.abs(armor))));
		if(damageMultiplier < 0) damageMultiplier = 0;
		
		health -= (damage * damageMultiplier);
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
