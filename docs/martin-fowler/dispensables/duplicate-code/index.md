# Duplicate Code

[sourcemaking](https://sourcemaking.com/refactoring/smells/duplicate-code)

## Penjelasan Smell

Terdapat bagian code yang sama atau mirip.

Kadang kesamaan terlihat jelas sehingga mudah di-refactor. Namun terkadang, harus putar otak untuk membuat beberapa bagian code yang mirip menjadi lebih generic.

Satu hal yang bisa menjadi _rule of thumb_ adalah [Rule of Three](<https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)>). Bila bagian code sudah di copy-paste tiga kali, ini sudah menjadi lampu merah untuk segera dilakukan refactor.

Pada contoh kasus di <github-url to="before/Foo.java">Foo.java</github-url> terdapat banyak bagian code yang duplikat di method bar, baz, dan qux.

<Tabs>
<Tab name="Foo" text="Foo.java" :max-height="450">

```java
package fowler.dispensables.duplicate_code.before;

public class Foo {
	public void bar(){
		//clear screen
		for(int i = 0; i < 26; i++){
			System.out.println("");
		}

		//print = 3x
		for(int i = 0; i < 3; i++){
			System.out.print("=");
		}
		System.out.println("");
		System.out.println("Bar");

		//print = 3x
		for(int i = 0; i < 3; i++){
			System.out.print("=");
		}
		System.out.println("");
	}

	public void baz(){
		//clear screen
		for(int i = 0; i < 26; i++){
			System.out.println("");
		}

		//print = 3x
		for(int i = 0; i < 3; i++){
			System.out.print("=");
		}
		System.out.println("");
		System.out.println("Baz");

		//print = 3x
		for(int i = 0; i < 3; i++){
			System.out.print("=");
		}
		System.out.println("");
	}

	public void qux(){
		//clear screen
		for(int i = 0; i < 26; i++){
			System.out.println("");
		}

		//print = 3x
		for(int i = 0; i < 3; i++){
			System.out.print("=");
		}
		System.out.println("");
		System.out.println("Qux");

		//print = 3x
		for(int i = 0; i < 3; i++){
			System.out.print("=");
		}
		System.out.println("");
	}
}
```

</Tab>
</Tabs>

## Penyelesaian

Terjadi [extract method](https://sourcemaking.com/refactoring/extract-method) di banyak tempat. Selain itu, `for` yang serupa tetapi tidak sama juga diakali dengan cara di-extract namun ditambahi variabel sehingga bisa digunakan di ketiga fungsi tersebut.

```java{5-6,10-11,15-16}
package fowler.dispensables.duplicate_code.after;

public class Foo {
	public void bar(){
		clearScreen();
		printWithBorder("Bar");
	}

	public void baz(){
		clearScreen();
		printWithBorder("Baz");
	}

	public void qux(){
		clearScreen();
		printWithBorder("Qux");
	}

	private void printWithBorder(String text) {
		printNTimes("=", 3);
		System.out.println("");
		System.out.println(text);
		printNTimes("=", 3);
		System.out.println("");
	}

	private void clearScreen() {
		for(int i = 0; i < 26; i++){
			System.out.println("");
		}
	}

	private void printNTimes(String s, int n) {
		for(int i = 0; i < n; i++){
			System.out.print(s);
		}
	}
}
```
