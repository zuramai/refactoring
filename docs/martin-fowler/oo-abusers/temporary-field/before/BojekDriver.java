package fowler.oo_abusers.temporary_field.before;

import java.util.Vector;

import fowler.oo_abusers.temporary_field.after.Location;

public class BojekDriver {
	String name;
	Location destination;
	Location current;
	
	private int f;
	private int g;
	private int h;
	
	Vector<Location> shortestPath(){
		Vector<Location> paths = new Vector<>();
		
		//...
		//complex A* algorithm code. using f, g, h variable
		//...
		
		return paths;
	}
}
