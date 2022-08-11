package girish.hierarchy.wide.after;

/**
 * 
 * Game Object yang punya health 
 * ...
 * 
 * @author mrp130
 *
 */
public abstract class GameUnit extends GameObject implements Hittable {
	private int health;
	
	protected void reduceHealth(int damage) {
		health -= damage;
		if(health <= 0) {
			die();
		}
	}
	
	//...
}
