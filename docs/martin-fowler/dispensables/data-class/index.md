# Data Class

[sourcemaking](https://sourcemaking.com/refactoring/smells/data-class)

## Penjelasan Smell

Bila class hanya cuma sebagai *dumb data holders*, class bisa dipertimbangkan untuk dibuang dengan cara digabung dengan class lain. *Dumb data holders* berarti class ini hanya memiliki field dan fungsi setter getter saja.

Ketika produk baru awal-awal di-code, sangat wajar bila banyak class yang belum memiliki behavior (baru isi data saja). Namun, bila produk sudah makin berkembang, namun masih ada suatu class yang hanya berisi setter/getter, sudah sinyal kuat untuk dilakukan refactor.

Pada contoh kasus <github-url to="before/FullName.java">FullName.java</github-url>, class hanya berisi setter getter untuk field `firstName` dan `lastName`.


<Tabs>
<Tab name="fullname" text="FullName.java">

```java
package fowler.dispensables.data_class.before;

public class FullName {
	private String firstName;
	private String lastName;
	
	public FullName(String firstName, String lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
}
```

</Tab>

<Tab name="user" text="User.java">

```java
package fowler.dispensables.data_class.before;

public class User {
	private FullName fullName;
	
	private String address;
	private String phone;
	
	//...
	//another User behaviors...
	//...
	
	public void login() {
		//...
	}
	
	public void logout() {
		//...
	}
}
```
</Tab>

</Tabs>

## Penyelesaian

Semua field dari FullName dipindahkan menggunakan [Move Method](https://sourcemaking.com/refactoring/move-method) ke <github-url to="after/User.java">User.java</github-url>. Kemudian class FullName dihapus.

<Tabs>
<Tab name="user" text="User.java">

```java
package fowler.dispensables.data_class.after;

public class User {
	private String firstName;
	private String lastName;
	
	private String address;
	private String phone;
	
	//...
	//another User behaviors...
	//...
	
	public void login() {
		//...
	}
	
	public void logout() {
		//...
	}
}
```

</Tab>
</Tabs>