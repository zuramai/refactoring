# Missing Hierarchy


<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Z0gVvdARFWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


Smell ini terjadi ketika mayoritas class-class turunannya (subclass) mempunyai method/behaviour yang seharusnya bisa ditempatkan pada superclass sebagai method atau `abstract` method.

Smell ini seringkali disandingkan dengan smell [Switch-statements](../../../martin-fowler/oo-abusers/switch-statements/) dikarenakan smell ini identik dengan pemakaian `if-else` atau `switch` statements yang berulang-ulang (termasuk dengan `instanceof` untuk class matching pada object dan typecasting).

## Penyebab

- **Misguided simplistic design & Procedural approach to design**: Developer (minim pengalaman/prosedural) menganggap bahwa pemakaian type value dan conditional statement dapat menyederhanakan desain software.
- **Overlooking inheritance as a design technique**: Developer menganggap inheritance berfungsi lebih ke penambahan variasi desain ketimbang untuk keperluan hierarkis.

## Penyelesaian

Untuk menuntaskan smell tersebut, ada dua cara penyelesaian smell tersebut yaitu:

- Jika smell tersebut terjadi karena kesamaan method, lakukan introduce interface atau extract ke abstract class (superclass) untuk class-class terkait.
- Jika smell tersebut terjadi dimana conditional statements dapat dijadikan class, extract method-method dan member sebagai superclass (abstract/interface) dimana setiap class turunannya mengimplementasikan method-method abstract dari superclass. Teknik ini tentunya akan menjalankan polymorphism method secara langsung pada object variatifnya.

## Contoh

## Contoh 1: `java.swing.plaf.windows.XPStyle` margin problems

![Hierarchical view of 'java.swing.plaf.windows.XPStyle'](hierarchy-missing-1.png "Hierarchical view of 'java.swing.plaf.windows.XPStyle'")

Salah satu kasus yang disinggung oleh Girish adalah masalah margin dari class `java.swing.plaf.windows.XPStyle` dimana terdapat bagian code yang melakukan cek margin dari ketiga komponen tersebut yaitu `AbstractButton`, `JToolBar`, dan `JTextComponent` yang seharusnya dapat dijadikan interface tersendiri pada method `getBorderInsets(Component c, Insets insets)` sebagai berikut:

```java
public Insets getBorderInsets(Component c, Insets insets){
  Insets margin = null;
  //
  // Ideally we’d have an interface defined for classes which
  // support margins (to avoid this hackery), but we’ve
  // decided against it for simplicity
  //
  if (c instanceof AbstractButton) {
    margin = ((AbstractButton)c).getMargin();
  } else if (c instanceof JToolBar) {
    margin = ((JToolBar)c).getMargin();
  } else if (c instanceof JTextComponent) {
    margin = ((JTextComponent)c).getMargin();
  }
  // rest of the code elided ...
}
```

Salah satu penyelesaian dari smell tersebut adalah dengan membuat interface bernama `MarginSupported` yang berisikan method setter dan getter Margin yang akan dipakai oleh ketiga component yaitu `AbstractButton`, `JToolBar`, dan `JTextComponent`.

Meski demikian, developer Java juga mengakui adanya kesalahan yang menyebabkan smell ini terjadi karena masalah tanggungnya developer dan kesederhanaan code.

## Contoh 2: Player, Monster, and NPC attack problems

Pada kasus dalam package <github-url to="before/GameObject">GameObject.java</github-url>, terdapat 3 class entity yang menyangkut masalah attack, dimana salah satu classnya yaitu `NPC` adalah entity yang tidak dapat diserang oleh entity lain. Ketika class `GameObject.java` dijadikan perwakilan atas entity-entity tersebut, penyerangan seharusnya tidak boleh terjadi pada `NPC` karena NPC tidak mempunyai darah.

Di sisi lain, dipergunakanlah class <github-url to="before/AttackService.java">AttackService.java</github-url> untuk menyelesaikan kasus penyerangan NPC, dimana class ini menyangkut adanya conditional checking pada snippet code berikut:

```java
public void hit(GameObject obj, int damage) {
  if(obj instanceof Monster) {
    ((Monster) obj).hit(damage);
  } else if(obj instanceof Player) {
    ((Player) obj).hit(damage);
  }
}
```

Snippet code/method `hit()` tentunya menimbulkan smell karena adanya pemakaian conditional checking yang berulang-ulang pada method tersebut. Sebagai gantinya, pada package <github-url to="after/AttackService.java">AttackService</github-url>, pemakaian polymorphism dipergunakan untuk menyelesaikan smell tersebut dengan membuat interface [Hittable](after/Hittable.java) yang mengimplementasikan method `hit(int damage)` untuk dipergunakan pada class `Monster` dan `Player` dimana pada class <github-url to="after/AttackService.java">AttackService.java</github-url> dalam package `after`, hanya ada pemanggilan method polymorphism dari method `hit(GameObject obj, int damage)` sebagai berikut:

```java
public void hit(GameObject obj, int damage) {
  if(obj instanceof Hittable) {
    ((Hittable) obj).hit(damage);
  }
}
```

## Julukan

- **Tag class**: Terjadi karena adanya pemakaian tag field (hardcoded variables) untuk cek variasi class.
- **Missing inheritance**: Adanya bagian code yang terindikasi duplikat atau pemakaian “switch-case” statements yang seharusnya digantikan dengan inheritance.
- **Collapsed type hierarchy**: Terjadi karena adanya pemakaian 2 atau lebih conditional check yang digunakan untuk menentukan behaviour.
- **Embedded features**: Terjadi karena adanya pemakaian toggle attribute untuk menentukan behaviour dari class-class lain.


## When to Ignore
Smell ini dapat dibiarkan jika class tersebut difungsikan untuk pemakaian design pattern berbasis Factory class atau untuk keperluan input dari file/user prompts dengan encoding teks/inputan sebagai object dalam Java.
