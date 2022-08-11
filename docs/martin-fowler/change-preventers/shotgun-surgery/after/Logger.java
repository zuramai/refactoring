package fowler.change_preventers.shotgun_surgery.after;

public class Logger {
	public void log(String... keyvals) {
		if(keyvals.length % 2 == 1) 
			throw new IllegalArgumentException("invalid key value pair");
		
		String msg = "";
		for(int i = 0; i < keyvals.length; i+=2) {
			msg = keyvals[i] + "=" + keyvals[i+1];
		}
		
		System.out.println(msg);
	}
}
