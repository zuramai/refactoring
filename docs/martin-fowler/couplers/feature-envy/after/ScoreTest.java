package fowler.couplers.feature_envy.after;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class ScoreTest {

	@Test
	void test() {
		Lecturer lecturer = new Lecturer("D9876", "Pak Budi");
		Student student = new Student("1234567890", "Amir");
		
		Exam exam = new Exam(student);
		
		exam.setScore(lecturer, 70);
	}

}
