# Refused Bequest

[sourcemaking](https://sourcemaking.com/refactoring/smells/refused-bequest)

## Penjelasan Smell

Refused bequest arti harafiahnya adalah "menolak warisan". Dalam smell ini, sebuah class turunan tidak memakai seluruh method hasil extendsnya. Hal ini mengarah ke violasi LSP dan/atau ISP.

Dalam contoh kasus, terdapat class `Stack.java` yang melakukan extends terhadap java.util.Vector.

Di dalam class `Stack`, terdapat fungsi standar sebuah stack LIFO. yaitu: pop, push, dan peek.

<Tabs>
<Tab name="Stack" text="Stack.java">

```java
public class Stack<E> extends Vector<E> {

	public void push(E data) {
		this.add(data);
	}

	public void pop() {
		this.removeElementAt(this.size()-1);
	}

	public E peek() {
		return this.elementAt(this.size()-1);
	}

	/*
	 * you cannot remove by index, use pop instead
	 */
	@Override
	public synchronized E remove(int index) {
		return null;
	}
}
```

</Tab>
</Tabs>

Namun, terdapat satu masalah. java.util.Vector memiliki banyak fungsi yang memungkinkan class melakukan manipulasi data di dalam array (misalnya bisa hapus data menggunakan indeks). Tentu saja ini melanggar prinsip LIFO (Last-In First-Out).

Oleh karena itu, di class `Stack`, diakali dengan cara melakukan override pada masing-masing fungsi java.util.Vector yang tidak ingin digunakan, dan kita menghilangkan kinerjanya dengan cara menghapus pemanggilan super.

Sebelumnya seperti ini:

```java
@Override
public synchronized E remove(int index) {
  return super.remove(index);
}
```

Return super kita ubah menjadi return null. Sehingga remove by index tidak terjadi.

```java
/*
* you cannot remove by index, use pop instead
*/
@Override
public synchronized E remove(int index) {
  return null;
}
```

Hal ini menjadi code smell **Refused Bequest**, karena class Stack menolak warisan dari class Vector.

## Penyelesaian

Untuk contoh kasus ini, kita melakukan [Replace Inheritance with Delegation](https://sourcemaking.com/refactoring/replace-inheritance-with-delegation).

Hubungan `is-a` tidak cocok untuk Stack dan Vector. Kita ubah hubungannya menjadi hubungan `has-a`.

class `Stack` menyimpan java.util.Vector sebagai field-nya. Pop, push, dan peek dilakukan dengan Vector ini.

```java
public class Stack<E> {
	private Vector<E> vector = new Vector<>();

	public void push(E data) {
		vector.add(data);
	}

	public void pop() {
		vector.removeElementAt(vector.size()-1);
	}

	public E peek() {
		return vector.elementAt(vector.size()-1);
	}
}
```

## java.util.Stack

Java sudah memiliki class Stack-nya sendiri di package `java.util`. Class Stack disini dibuat sendiri hanya untuk keperluan studi kasus. FYI, java.util.Stack adalah hasil inherit dari java.util.Vector. Anda dapat menghapus data di tengah-tengah Stack layaknya menggunakan Vector.
