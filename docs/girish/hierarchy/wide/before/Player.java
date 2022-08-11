package girish.hierarchy.wide.before;

public class Player extends GameUnit {
	private int armor;
	
	@Override
	public void hit(int damage) {
		double damageMultiplier = (1-((0.052*armor)/(0.9+0.048*Math.abs(armor))));
		if(damageMultiplier < 0) damageMultiplier = 0;
		
		this.reduceHealth((int)(damage * damageMultiplier));
	}
	
	@Override
	public void die() {
		//...
	}
	
	//... other members and behaviors
}
