# Alternative Classes with Different Interfaces

[sourcemaking](https://sourcemaking.com/refactoring/smells/alternative-classes-with-different-interfaces)

## Penjelasan Smell

Ada beberapa class yang memiliki fungsi yang sama, namun tidak datang dari interface atau abstract class.

Kesamaan fungsi yang dimaksud adalah fungsi memiliki tujuan yang sama. Namun bisa saja memiliki nama yang berbeda, atau bisa juga memiliki parameter yang serupa namun beda urutan, atau ada parameter yang satuan, ada yang berupa objek ([Preserve whole object](https://sourcemaking.com/refactoring/preserve-whole-object)).

Hal ini bisa terjadi bisa karena class-class tersebut dikerjakan oleh programmer yang berbeda. Sehingga antar programmer tidak sadar ada yang bisa dibuatkan interface diantara code mereka berdua.

Atau bisa karena tidak mengikuti prinsip DIP ([Dependency Inversion Principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)).

Contohnya, class <github-url to="before/Ghost.java">Ghost.java</github-url> memiliki fungsi `paint` yang bertujuan menggambar Ghost dari spritesheet yang tersedia.
```java
public class Ghost {
	public void paint(Graphics2D g){
		//draw Ghost pixel from spritesheet
	}
}
```

Di sisi lain, class <github-url to="before/PacMan.java">PacMan.java</github-url> memiliki fungsi `draw` yang bertujuan sama. Menggambar PacMan dari spritesheet yang tersedia.

```java
public class PacMan {
	public void draw(Graphics2D g){
		//draw PacMan pixel from spritesheet
	}
}
```

## Penyelesaian

Untuk contoh kasus ini, kita melakukan [Extract Superclass](https://sourcemaking.com/refactoring/extract-superclass). Kita membuat interface <github-url to="after/Drawable.java">Drawable.java</github-url> yang akan di-implement oleh kedua class.

```java
public interface Drawable {
	public void draw(Graphics2D g);
}
```

Pada class PacMan sebelumnya, nama fungsi adalah `draw`, sedangkan pada Ghost nama fungsi adalah `paint`. Dipilih salah satu dari kedua sinonim tersebut yang akan dipakai. Misal diputuskan `draw` yang dipakai sebagai nama method di interface `Drawable`, maka dilakukan [Rename Method](https://sourcemaking.com/refactoring/rename-method) pada fungsi `paint` di <github-url to="after/Ghost.java">Ghost.java</github-url>.
