# Duplicate Code

[sourcemaking](https://sourcemaking.com/refactoring/smells/duplicate-code)

### Penjelasan Smell

Terdapat bagian code yang sama atau mirip.

Kadang kesamaan terlihat jelas sehingga mudah di-refactor. Namun terkadang, harus putar otak untuk membuat beberapa bagian code yang mirip menjadi lebih generic.

Satu hal yang bisa menjadi *rule of thumb* adalah [Rule of Three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)). Bila bagian code sudah di copy-paste tiga kali, ini sudah menjadi lampu merah untuk segera dilakukan refactor.

Pada contoh kasus di [Foo.java](before/Foo.java) terdapat banyak bagian code yang duplikat di method bar, baz, dan qux.

### Penyelesaian

Terjadi [extract method](https://sourcemaking.com/refactoring/extract-method) di banyak tempat. Selain itu, `for` yang serupa tetapi tidak sama juga diakali dengan cara di-extract namun ditambahi variabel sehingga bisa digunakan di ketiga fungsi tersebut.