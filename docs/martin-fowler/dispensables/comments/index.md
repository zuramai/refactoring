# Comments

[sourcemaking](https://sourcemaking.com/refactoring/smells/comments)

### Penjelasan Smell

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

Pada contoh [MenuPrinter.java](before/MenuPrinter.java), terdapat banyak komentar. 

Lebih parahnya, terdapat hidden-side-effect pada fungsi `printMenu`. Di komentar diatas menu, tertulis bahwa fungsi ini melakukan print kemudian scan (terjadi [temporal cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science))). Sedangkan nama fungsi hanya `printMenu` saja. Tentu saja ini menyesatkan programmer lain yang akan memakai fungsi ini.

### Penyelesaian

Dilakukan [extract method](https://sourcemaking.com/refactoring/extract-method) pada bagian-bagian di dalam fungsi, dan dilakukan [rename method](https://sourcemaking.com/refactoring/rename-method) pada fungsi `printMenu` menjadi `printMenuAndGetInput`.
