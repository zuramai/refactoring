# Long Parameter List

[sourcemaking](https://sourcemaking.com/refactoring/smells/long-parameter-list)

## Penjelasan Smell

Smell ini terjadi ketika ada method yang memiliki jumlah parameter yang terlalu banyak. Hal ini membuat code menjadi sulit dibaca dan juga menyebabkan _cognitive overload_ pada programmer karena ada beban memori harus mengingat-ingat letak parameter. Lebih berbahayanya lagi jika parameter memiliki tipe data yang sama. Bisa saja tidak sengaja tertukar posisinya.

Perhatikan contoh <github-url to="before/WalletNotification.java">WalletNotification.java</github-url>. Terdapat method `balanceNotif(String name, String email, int amount, int current)`.

<Tabs>
<Tab name="WalletNotification" text="WalletNotification.java">

```java
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
```

</Tab>
</Tabs>

## Penyelesaian

Dilakukan [Preserve Whole Object](https://sourcemaking.com/refactoring/preserve-whole-object) pada method `balanceNotif` sehingga menjadi `balanceNotif(User user, int amount)`. Karena name, email, dan current balance bisa didapatkan langsung dari object user.

```java
public void balanceNotif(User user, int amount) {
  ...
}
```
