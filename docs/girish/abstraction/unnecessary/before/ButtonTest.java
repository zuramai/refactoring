package girish.abstraction.unnecessary.before;

import static org.junit.jupiter.api.Assertions.*;

import java.awt.Color;

import javax.swing.JButton;
import javax.swing.JFrame;

import org.junit.jupiter.api.Test;

class ButtonTest {

	@Test
	void test() {
		JFrame frame = new JFrame();
		frame.setVisible(true);
		frame.setSize(300, 200);
		
		JButton button = new BlueButton("submit");
		
		frame.add(button);
		
		try{Thread.sleep(3000);}catch(InterruptedException e){}
	}

}
