package fowler.bloaters.primitive_obsession.after;

import java.util.Date;

public class Main {
	public static void main(String[] args) {
		new Main();
	}
	
	public Main() {
		Mahasiswa m = new Mahasiswa(
				"Amir Budianto", 
				new Date(99, 11, 8), 
				new Reguler()
		);
		
		MahasiswaGreeter greeter = MahasiswaGreeter.factory(m);
		greeter.greet();
	}
}
