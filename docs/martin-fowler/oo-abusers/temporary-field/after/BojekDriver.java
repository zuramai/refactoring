package fowler.oo_abusers.temporary_field.after;

import java.util.Vector;

public class BojekDriver {
	String name;
	Location destination;
	Location current;
	
	Vector<Location> shortestPath(){
		return new AStar().shortestPath(current, destination);
	}
}
