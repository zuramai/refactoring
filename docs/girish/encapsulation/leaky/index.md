# Leaky Encapsulation

<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/FXLKSYTwk_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Smell ini terjadi jika pada suatu abstraction membocorkan detail melalui suatu method/interface. Smell ini berbeda dengan Deficient Encapsulation dimana kebocoran abstraction tersebut terjadi pada method yang sudah benar dalam access modifier. Selain itu, penamaan public method/implementation yang mengumbar-umbarkan detail implementation juga menimbulkan smell ini (Misal dalam class `List` terdapat public method bernama `bubbleSort()` yang seharusnya dapat diganti nama dengan `sort()` sehingga dapat diubah implementasi dari proses sorting tersebut).

## Penyebab smell

- **Lack of awareness of what should be "hidden"**: Developer kurang mengetahui bahwa implementasi tersebut harus disembunyikan dari abstraksi lain sehingga developer tersebut kadang tidak sengaja membocorkan akses tersebut ke abstraksi lain.
- **Viscosity**: Dimana kasus tersebut memerlukan upaya ekstra agar dapat menciptakan "leak-proof" interface. Pada kasus tersebut, developer terkadang harus menyelesaikan project dengan cepat dan jorok sehingga membiarkan class tersebut dicap smell karenanya.
- **Use of fine-grained interface**: Pemakaian interface yang terlalu lengkap (termasuk setter dan getternya) sehingga membocorkan detail implementasi yang seharusnya tidak diperlukan.

## Contoh 1: *Swallowed-copy of Collections*

## Masalah

![Member class TodoList](leaky-1.png)

Di package before, terdapat class <github-url to="before/ToDoList.java">TodoList</github-url> dimana terdapat method `getList()` yang seharusnya return Vector salinan dari `list`.

```java
public Vector<ToDo> getList() {
  //shallow copy
  return list;
}
```

Namun tanpa disadari, dikarenakan Java merupakan bahasa pemrograman yang dibekali dengan [variable referencing](https://www.geeksforgeeks.org/is-there-any-concept-of-pointers-in-java/), variabel yang direturn merupakan referensi dari `list` pada class tersebut. Dikarenakan variabel hasil return method tersebut merupakan referensi terhadap `list` atau istilah kerennya adalah *shallow copy*, maka ketika variabel hasil shallow copy tersebut mengalami perubahan, maka referensi terkait juga ikutan berubah sehingga dapat menimbulkan masalah secara sistematis terhadap `list` tersebut.

## Penyelesaian

Dikarenakan method tersebut meminta Vector salinan dari `list`, maka salah satu cara menyelesaikan masalah tersebut adalah dengan *deep copy*, dimana variabel `list` diperoleh dengan cloning sehingga menghasilkan copy untuk variabel yang mereka return.

```java
public Vector<ToDo> getList() {
  //deep copy
  Vector<ToDo> result = new Vector<>();

  for (ToDo toDo : list) {
    try {
      result.add((ToDo) toDo.clone());
    } catch (CloneNotSupportedException e) {
      e.printStackTrace();
    }
  }
  return result;
}
```

Sehingga ketika method dalam <github-url to="after/ToDoList.java">TodoList (after)</github-url> tersebut di-invoke, maka setiap isi dari todo list akan diclone ke Vector baru sehingga diperoleh Vector hasil clone dimana setiap modifikasi yang dilakukan pada list tersebut tidak berpengaruh pada list asli dari class tersebut.

## Catatan

Pada beberapa bahasa pemrograman (termasuk Java), kasus **shallow copy** juga terjadi pada Object dimana ketika suatu variabel yang diassign dari Object mengalami perubahan nilai (baik dari referensi asli maupun variabel pengikutnya), maka variabel-variabel yang mengikuti referensi asli dari Object tersebut mengalami perubahan nilai.

```java
Rectangle r1 = new Rectangle(20);
Rectangle r2 = r1; //shallow copy (return as reference of r1)
r2.setLength(40);
System.out.println("Rectangle 1 length: " + r1.getLength());
System.out.println("Rectangle 2 length: " + r2.getLength());
```

Sebagai solusinya, pergunakan **deep copy** pada setiap `Vektor`/`ArrayList`/`Collections` beserta membernya untuk dibuatkan copy dari variabel tersebut beserta isinya secara utuh dengan method `clone()` sehingga ketika variabel pengikutnya (returner) ataupun variabel asli mengalami perubahan value, maka variabel lain yang mengikutinya tidak mengalami perubahan.

```java
Rectangle r1 = new Rectangle(20);
Rectangle r2 = r1.clone(); //deep copy (return as value of r1!)
r2.setLength(40);
System.out.println("Rectangle 1 length: " + r1.getLength());
System.out.println("Rectangle 2 length: " + r2.getLength());
```

Maka dengan penggunaan `clone()` setidaknya dapat menyelesaikan kasus *shallow copy* pada Object sehingga tidak mempengaruhi Object secara struktural.

## Contoh 2: Penamaan method yang mengumbarkan detail implementasi

Dalam beberapa kasus, misal dalam class `List` terdapat algoritma yang memaparkan detail mengenai sorting pada suatu list.

```java
public class List {
  public boolean isSorted() {
    ...
  }

  public void bubbleSort() {
    ...
  }
}
```

Jika algoritma tersebut perlu diganti implementasi dari `bubbleSort()` menjadi `quickSort()` atau algoritma-algoritma sorting lainnya, tentunya memerlukan waktu yang tidak sebentar untuk mengubah isi dan nama method sekaligus. Sebagai gantinya, kita dapat mengubah nama public method dari `bubbleSort()` menjadi `sort()` sehingga dapat mempermudah implementasi dari proses sorting tersebut dan mencegah user mengetahui detail pada proses sorting List tersebut.

## When to Ignore

Adalah bila kasus tersebut terjadi pada *low-level class* yang berisikan implementasi yang sangat detail dan tidak bakal dipakai sama client class di tempat lain karena class tersebut berperan untuk membantu class yang hierarkinya lebih tinggi dan dipakai oleh Client (higher hierarchical class means usable API implementation). Salah satu contoh kasus *low-level class* adalah class <github-url to="../../../../martin-fowler/oo-abusers/temporary-field/after/AStar.java">AStar.java</github-url>[]()

```java
public class AStar {
  private int f;
  private int g;
  private int h;

  Vector<Location> shortestPath(Location current, Location destination){
    Vector<Location> paths = new Vector<>();

    //...
    //complex A* algorithm code. using f, g, h variable
    //...

    return paths;
  }
}
```

Pada contoh class `AStar.java`, secara struktural class tersebut memiliki variabel `f`, `g`, dan `h` dimana class tersebut juga berisikan detail rumus A* dimana rumus tersebut hanya dipakai untuk membantu class `BojekDriver.java` dan tidak digunakan pada client class sehingga smell tersebut dapat diabaikan/ignore.

Girish dalam bukunya juga memberikan catatan pada developer untuk mengabaikan smell-smell yang terjadi pada low-level class yang berperan sebagai helper untuk class dengan hierarkinya lebih tinggi:

> In such cases, when public interface is designed purposefully in this way, clients should be warned that the improper use of those public methods might result in violating the integrity of the object

(Rujukan: 4.2.7 - Practical considerations (hal 78))
