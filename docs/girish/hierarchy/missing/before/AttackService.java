package girish.hierarchy.missing.before;

public class AttackService {
	public void hit(GameObject obj, int damage) {
		if(obj instanceof Monster) {
			((Monster) obj).hit(damage);
		} else if(obj instanceof Player) {
			((Player) obj).hit(damage);
		}
	}
}
