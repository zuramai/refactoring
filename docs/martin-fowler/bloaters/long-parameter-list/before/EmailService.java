package fowler.bloaters.long_parameter_list.before;

public interface EmailService {
	public void send(String email, String cc, String body);
}
