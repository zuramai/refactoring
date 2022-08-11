package fowler.bloaters.primitive_obsession.after;

public class MahasiswaGlobalGreeter extends MahasiswaGreeter {
	private Mahasiswa m;
	
	public MahasiswaGlobalGreeter(Mahasiswa m) {
		super();
		this.m = m;
	}

	@Override
	public void greet() {
		System.out.println("Welcome, " + m.getName());
	}

}
