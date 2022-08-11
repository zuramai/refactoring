# Duplicate Abstraction

Smell ini terjadi ketika ada abstraksi (class/interface) yang kembar. Mirip dengan smell `alternative classes with different interfaces` milik Martin Fowler.

Suryanarayana et al. membagi dua jenis:

- **Identical name**: nama mirip, behavior beda. Sebaiknya dipertimbangkan nama lain yang lebih cocok agar tidak ambigu.
- **Identical implementation**: behavior sama. Dipertimbangkan untuk digabung.

## Penyebab Smell

- **Copy-paste programming**: developer melakukan copy-paste di sana-sini yang mengakibatkan class duplikat.
- **Lack of communication**: abstraksi dibuat oleh developer yang berbeda. Karena tidak ada komunikasi antar developer, tidak sengaja ada abtraksi yang duplikat.
- **Classes declared non-extensible**: class dideklarasi tidak bisa di-extends lagi (di Java pakai keyword `final`). Sehingga developer terpaksa melakukan copy-paste code ke class baru.
