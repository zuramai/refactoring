package girish.hierarchy.missing.before;

public class Player extends GameObject {
	private int armor;
	private int health;
	
	public void hit(int damage) {
		double damageMultiplier = (1-((0.052*armor)/(0.9+0.048*Math.abs(armor))));
		if(damageMultiplier < 0) damageMultiplier = 0;
		
		health -= (damage * damageMultiplier);
	}
	
	//... other members and behaviors
}
