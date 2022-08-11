# Middle Man

[sourcemaking](https://sourcemaking.com/refactoring/smells/middle-man)

### Penjelasan Smell

Middle Man adalah class yang isinya hanya delegasi saja, tidak ada behavior lain selain delegasi ke class lain.

Perhatikan [LinkedList.java](before/LinkedList.java) dan [ShoppingCart.java](before/ShoppingCart.java). `ShoppingCart` melakukan `add` pada `LinkedList`. Namun ternyata di dalam `LinkedList`, dia hanya delegasi ke `java.util.Vector`.


### Penyelesaian

Hapus si Middle Man, yaitu `LinkedList`. Sekarang di package after, class `ShoppingCart` langsung mengakses `java.util.Vector`.

### Tambahan

Ada beberapa design pattern yang memang dirancang untuk delegasi, seperti: Adapter, Proxy, Bridge, Facade atau Mediator. Namun dalam design pattern ini bukan sekadar delegasi mentah-mentah, ada sedikit fitur di dalamnya. Design pattern ini masuk ke dalam Gang of Four Design Pattern, akan kita pelajari di semester depan.
