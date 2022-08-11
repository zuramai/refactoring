package fowler.couplers.feature_envy.before;

public class Exam {
	private Student student;
	private int score;
	private Lecturer examiner;
		
	public Exam(Student student) {
		this.student = student;
	}

	public int getScore() {
		return score;
	}
	
	public void setScore(Lecturer examiner, int score) {
		if(score < 0 || score > 100) 
			throw new IllegalArgumentException("score must be between 0 - 100");
		
		this.examiner = examiner;
		this.score = score;
	}
	
	public Student getStudent() {
		return student;
	}
	
	public Lecturer getExaminer() {
		return examiner;
	}
}
