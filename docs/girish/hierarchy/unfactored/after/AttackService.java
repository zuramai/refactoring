package girish.hierarchy.unfactored.after;

public class AttackService {
	public void hit(GameObject obj, int damage) {
		if(obj instanceof Hittable) {
			((Hittable) obj).hit(damage);
		}
	}
}
