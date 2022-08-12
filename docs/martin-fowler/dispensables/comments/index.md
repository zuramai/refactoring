# Comments

[sourcemaking](https://sourcemaking.com/refactoring/smells/comments)

## Penjelasan Smell

Nama method atau atribut haruslah sudah self-explain tanpa harus diberi comment. Begitu juga logic flow di dalam fungsi. Bila logic flow perlu dijelaskan, dapat dipertimbangkan code tersebut sebagai bagian dari smell Long Method dan perlu di-extract.

Comment boleh diberikan sebagai dokumentasi. Contohnya untuk bahasa pemrograman Java, digunakan [Javadoc](https://www.tutorialspoint.com/java/java_documentation.htm) menggunakan `/** */` sebagai dokumentasi. Penggunaan `//` untuk single line atau `/* */` untuk multiline dihindari.

```java
/**
* The HelloWorld program implements an application that
* simply displays "Hello World!" to the standard output.
*
* @author  John Doe
* @version 1.0
* @since   2020-03-20
*/
public class HelloWorld { ... }
```

Pada contoh <github-url to="before/MenuPrinter.java">MenuPrinter.java</github-url>, terdapat banyak komentar.

Lebih parahnya, terdapat hidden-side-effect pada fungsi `printMenu`. Di komentar diatas menu, tertulis bahwa fungsi ini melakukan print kemudian scan (terjadi [temporal cohesion](<https://en.wikipedia.org/wiki/Cohesion_(computer_science)>)). Sedangkan nama fungsi hanya `printMenu` saja. Tentu saja ini menyesatkan programmer lain yang akan memakai fungsi ini.

<Tabs>
<Tab name="menuPrinter" text="MenuPrinter.java">

```java
public class MenuPrinter {
	//print kemudian scan dan return hasil scan
  public int printMenu(){
		//print header
		System.out.println("====");
		System.out.println("Menu");
		System.out.println("====");

		//print menu
		System.out.println("1. Foo");
		System.out.println("2. Bar");
		System.out.println("3. Baz");
		System.out.println("4. Exit");

		//scan input
		int input = 0;
		Scanner sc = new Scanner(System.in);
		do{
			System.out.println("Input [1-4]: ");
			sc.nextInt();
			sc.nextLine();
		}while(input < 1 || input > 4);
		sc.close();
		return input;
	}
}
```

</Tab>
</Tabs>

## Penyelesaian

Dilakukan [extract method](https://sourcemaking.com/refactoring/extract-method) pada bagian-bagian di dalam fungsi, dan dilakukan [rename method](https://sourcemaking.com/refactoring/rename-method) pada fungsi `printMenu` menjadi `printMenuAndGetInput`. Jadi, kita dapat membuang komentar-komentar yang tidak perlu (karena nama fungsinya sudah menjelaskan).

<Tabs>
<Tab name="menuPrinter" text="MenuPrinter.java">

```java{2}
public class MenuPrinter {
  public int printMenuAndGetInput(){
    printHeader();
    printMenu();
    return getInput();
  }

  private void printHeader() {
    System.out.println("====");
    System.out.println("Menu");
    System.out.println("====");
  }

  private void printMenu() {
    System.out.println("1. Foo");
    System.out.println("2. Bar");
    System.out.println("3. Baz");
    System.out.println("4. Exit");
  }

  private int getInput() {
    int input = 0;
    Scanner sc = new Scanner(System.in);

    do{
      System.out.println("Input [1-4]: ");
      sc.nextInt();
      sc.nextLine();
    }while(input < 1 || input > 4);

    sc.close();
    return input;
  }
}
```

</Tab>
</Tabs>
