package fowler.bloaters.primitive_obsession.after;

public abstract class MahasiswaGreeter {
	public abstract void greet();
	
	public static MahasiswaGreeter factory(Mahasiswa m) {
		if(m.getType().getClass() == Reguler.class) {
			return new MahasiswaRegulerGreeter(m);
		} else if(m.getType().getClass() == Global.class) {
			return new MahasiswaGlobalGreeter(m);
		}
		return null;
	}
}
