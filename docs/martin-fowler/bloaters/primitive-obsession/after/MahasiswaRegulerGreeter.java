package fowler.bloaters.primitive_obsession.after;

public class MahasiswaRegulerGreeter extends MahasiswaGreeter {
	private Mahasiswa m;
	
	public MahasiswaRegulerGreeter(Mahasiswa m) {
		super();
		this.m = m;
	}

	@Override
	public void greet() {
		System.out.println("Selamat Datang, " + m.getName());
	}

}
