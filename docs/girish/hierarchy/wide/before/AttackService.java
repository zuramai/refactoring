package girish.hierarchy.wide.before;

public class AttackService {
	public void hit(GameObject obj, int damage) {
		if(obj instanceof Hittable) {
			((Hittable) obj).hit(damage);
		}
	}
}
