package girish.encapsulation.deficient.after;

public class SizeRequirement {
	//...
	
	/** The alignment, specified as a value between 0.0 and 1.0,
	inclusive. To specify centering, the alignment should be 0.5. */
	private float alignment;
	
	public void setAlignment(float alignment) {
		if(alignment < 0 || alignment > 1) {
			throw new IllegalArgumentException("alignment must be between 0.0 and 1.0");
		}
		this.alignment = alignment;
	}
	
	public float getAlignment() {
		return alignment;
	}
	
	//...
}
