package fowler.couplers.message_chains.after;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

class DistanceTest {
	static BojekDriver driver;
	static Destination destination;
	
	@BeforeAll
	static void init() {
		driver = new BojekDriver("Amir", new Position(-6.201932, 106.781529));
		destination = new Destination("Binus Anggrek", new Position(-6.201935, 106.781525));
	}
	
	@Test
	void manhattan() {
		DistanceCalculator calc = new Manhattan();
		double result = calc.distance(
			driver.latitude(), 
			driver.longitude(), 
			destination.latitude(), 
			destination.longitude()
		);
		
		double expected = 0.000007;
		assertEquals(expected, result);
	}

	@Test
	void euclidean() {
		DistanceCalculator calc = new Euclidean();
		double result = calc.distance(
			driver.latitude(), 
			driver.longitude(), 
			destination.latitude(), 
			destination.longitude()
		);

		double expected = 0.000005;
		assertEquals(expected, result);
	}
}
