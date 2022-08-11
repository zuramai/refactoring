package fowler.bloaters.long_parameter_list.before;

public class MockEmailService implements EmailService {

	@Override
	public void send(String email, String cc, String body) {
		System.out.println("this is only mock");
		System.out.println("email sent");
	}

}
