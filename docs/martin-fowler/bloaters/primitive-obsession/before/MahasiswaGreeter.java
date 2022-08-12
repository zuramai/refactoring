package fowler.bloaters.primitive_obsession.before;

public class MahasiswaGreeter {
	public void greet(Mahasiswa m) {
		if (m.getType().equals("reguler")) {
			System.out.println("Selamat Datang, " + m.getName());
		} else if (m.getType().equals("global")) {
			System.out.println("Welcome, " + m.getName());
		}
	}
}
