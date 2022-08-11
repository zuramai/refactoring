package fowler.bloaters.long_parameter_list.before;

public class WalletNotification {
	private EmailService emailService;

	public WalletNotification(EmailService emailService) {
		super();
		this.emailService = emailService;
	}
	
	public void balanceNotif(String name, String email, int amount, int current) {
		if(amount == 0) {
			throw new IllegalArgumentException("tidak ada perubahan saldo");
		}
		
		String body = "";
		
		if (amount > 0) { 
			body = String.format(
				"Halo %s, ada %.2f masuk ke akunmu nih. " + 
				"Sekarang balance-mu menjadi %.2f", name, amount, current);
		} if(amount < 0) {
			body = String.format(
					"Halo %s, ada %.2f keluar dari akunmu nih. " + 
					"Sekarang balance-mu menjadi %.2f", name, amount, current);
		}
		
		this.emailService.send(email, "example@company.com", body);
	}
}
