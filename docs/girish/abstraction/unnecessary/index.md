# Unnecessary Abstraction

Smell ini terjadi ketika ada class yang dibuat padahal tidak dibutuhkan.

Smell ini mirip dengan speculative generality Martin Fowler.

## Penyebab Smell

- **Procedural thinking in object-oriented languages**: developer belum terbiasa dengan paradigma OOP sehingga salah dalam melakukan desain class.
- **Over-engineering**: developer membuat desain yang sebenarnya tidak dibutuhkan/overkill, alias sok ide.

## Contoh

## Masalah

Di package before, terdapat <github-url to="before/BlueButton.java">RedButton](before/RedButton.java) dan [BlueButton</github-url> yang sebenarnya hanya menentukan background class javax.swing.JButton. Selain menentukan background, kedua class tersebut tidak memiliki behavior lain.

## Penyelesaian

Terlalu berlebihan bila sampai kita melakukan inheritance hanya untuk membedakan warna. Warna background sudah cukup diwakilkan oleh atribut di dalam JButton yang bisa diatur menggunakan `setBackground()`. Kedua class RedButton dan BlueButton bisa dihapus. Perhatikan <github-url to="after/ButtonTest.java">ButtonTest</github-url> di package after.