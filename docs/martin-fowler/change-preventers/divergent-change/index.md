# Divergent Change

[sourcemaking](https://sourcemaking.com/refactoring/smells/divergent-change)

Martin Fowler:

> Divergent change occurs when one module is often changed in different ways for different reasons. If you look at a module and say, “Well, I will have to change these three functions every time I get a new database; I have to change these four functions every time there is a new financial instrument,” this is an indication of divergent change. The database interaction and financial processing problems are separate contexts, and we can make our programming life better by moving such contexts into separate modules. That way, when we have a change to one context, we only have to understand that one context and ignore the other. We always found this to be important, but now, with our brains shrinking with age, it becomes all the more imperative. Of course, you often discover this only after you’ve added a few databases or financial instruments; context boundaries are usually unclear in the early days of a program and continue to shift as a software system’s capabilities change.

### Penjelasan Smell

Hati-hati ketika mempelajari smell ini dari sourcemaking karena bagian *Signs and Symptoms* di sourcemaking berbeda dengan definisi Martin Fowler di bukunya. Kita akan menggunakan definisi sesuai dengan sumbernya.

Seperti di paragraf dari Martin Fowler diatas, smell ini terjadi ketika sebuah class sering berubah untuk alasan yang berbeda-beda. Dengan kata lain, class ini melanggar Single Responsibility Principle.

Disebut di paragraf diatas: *context boundaries are usually unclear*. Terkadang sulit untuk menentukan apa yang menjadi tanggungjawab class ini atau bukan. Hal ini kembali ke diskusi tim masing-masing ketika code design, atau menunggu gejala benar-benar jelas ketika terbukti benar class ini sering berubah untuk alasan yang berbeda. Pemisahan tanggungjawab paling klasik adalah menggunakan MVC dimana model, view, dan controller dipisah. Bila ingin pemisahan yang lebih detail, Anda juga bisa menggunakan **layered architecture** yang sudah diajarkan di kelas DDD.

Perhatikan class [Rectangle](before/Rectangle.java) di package `before`. Disana terdapat field `width` dan `weight`. Terdapat method `area()` dan `perimeter()`. Dan juga terdapat method `print(String style)`. Kita bisa berargumen bahwa class ini memiliki dua tanggungjawab, yaitu mengurus kalkulasi Rectangle dan juga mengatur tampilan Rectangle ke dalam console.

### Penyelesaian

Kita pindahkan method `print` di class `Rectangle` ke class yang baru. Karena di `print` juga terdapat smell primitive obsession, sekalian kita buatkan struktur baru menggunakan strategy design pattern. Perhatikan hasil refactor-nya di package `after`.