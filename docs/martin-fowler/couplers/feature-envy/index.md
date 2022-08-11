# Feature Envy

[sourcemaking](https://sourcemaking.com/refactoring/smells/feature-envy)

### Penjelasan Smell

Smell ini terjadi bila ada sebuah method yang lebih sering mengakses data class lain ketimbang class sendiri. Class sendiri pun menjadi 'cemburu'. Bila hal ini terjadi, harus dipikirkan bagaimana cara mengusir method ini ke class lain tersebut.

Pada contoh [Lecturer.java](before/Lecturer.java), terdapat method `isScored` yang hanya mengakses data examiner di class Exam.

```java
public boolean isScored(Exam exam) {
  return exam.getExaminer() != null;
}
```

### Penyelesaian

Dilakukan [Move Method](https://sourcemaking.com/refactoring/move-method) pada fungsi `isScored`. Perhatikan di package `after`, isScored dipindahkan ke class Exam.

Selain itu, code fragment ini pun dipindahkan juga ke fungsi `setScore` di class Exam.

```java
if(this.isScored()) {
    throw new IllegalArgumentException("exam already scored");
  }
```

### Tambahan

Di bukunya, Martin Fowler menyatakan bahwa ada beberapa kondisi class atau method yang sengaja dirancang untuk hanya consume data di class lain. Contoh yang paling umum terjadi adalah penggunaan design pattern Strategy atau Visitor. Design pattern ini masuk ke dalam Gang of Four Design Pattern, akan kita pelajari di semester depan.