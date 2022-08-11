package fowler.bloaters.primitive_obsession.after;

import java.util.Date;

public class Mahasiswa {
	private String name;
	private Date dob;
	private Type type;
	
	public Mahasiswa(String name, Date dob, Type type) {
		super();
		this.name = name;
		this.dob = dob;
		this.type = type;
	}
	
	public String getName() {
		return name;
	}
	
	public Date getDob() {
		return dob;
	}
	
	public Type getType() {
		return type;
	}
}
