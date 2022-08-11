# Multifaceted Abstraction

Smell ini terjadi ketika ada class yang memiliki lebih dari satu tanggungjawab (violasi SRP). 

Smell ini mirip dengan smell divergent change Martin Fowler. Biasanya divergent change disertai juga dengan smell large class.

## Penyebab Smell

- **General-purpose abstractions**: software developer melakukan desain abstraksi yang berujung [God Object](https://en.wikipedia.org/wiki/God_object).
- **Evolution without periodic refactoring**: awalnya class masih langsing, namun seiring bertambahnya fitur, class bertambah tanggungjawab baru. Seharusnya ketika class semakin gemuk, developer sudah saatnya melakukan refactoring.
- **The burden of processes**: developer malas. Menambah method di class yang sudah ada memang lebih mudah ketimbang membuat class baru.

## Contoh

## Masalah

Perhatikan class <github-url to="before/Rectangle.java">Rectangle</github-url> di package `before`. Disana terdapat field `width` dan `weight`. Terdapat method `area()` dan `perimeter()`. Dan juga terdapat method `print(String style)`. 

Pada umumnya, domain logic dan presentation logic dipisah. Kita bisa berargumen bahwa class Rectangle memiliki dua tanggungjawab, yaitu mengurus kalkulasi Rectangle dan juga mengatur tampilan Rectangle ke dalam console.

### Penyelesaian

Kita pindahkan method `print` di class `Rectangle` ke class yang baru. Karena di `print` juga terdapat smell primitive obsession, sekalian kita buatkan struktur baru menggunakan strategy design pattern. Perhatikan hasil refactor-nya di package `after`.
