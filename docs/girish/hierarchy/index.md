# Hierarchy

![Girish hierarchy smell](hierarchy.png)

Semua smell di dalam grup ini berkaitan dengan kesalahan dalam merancang hierarki.

- Hierarchy Intro | [Link Video](https://www.youtube.com/watch?v=FvLtPJzya5o&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju)
- [Missing Hierarchy](missing/) | [Link Video](https://www.youtube.com/watch?v=Z0gVvdARFWw&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju)
- [Unnecessary Hierarchy](unnecessary/) | [Link Video](https://www.youtube.com/watch?v=hfNd8QPcWDk&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju)
- [Unfactored Hierarchy](unfactored/) | [Link Video](https://www.youtube.com/watch?v=IJFO8YlSosc&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju)
- [Wide Hierarchy](wide/) | [Link Video](https://www.youtube.com/watch?v=7pyZYGDz54w&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju)
- [Speculative Hierarchy](speculative/) | [Link Video](https://www.youtube.com/watch?v=WaI-tpREgd8&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju)

## Filosofi

![Human Taxonomy](hierarchy-philosophy.png)

Semua makhluk hidup (baik hewan, tumbuhan, manusia, bakteri, jamur, dan makhluk hidup lainnya) dikelompokkan berdasarkan klasifikasi spesies mulai dari kingdom, filum, class, ordo, family, genus, hingga spesies. Pengelompokkan makhluk hidup (taxonomy) tentunya mempermudah identifikasi makhluk hidup di muka bumi ini, termasuk manusia. Fakta menarik bahwa manusia merupakan spesies makhluk hidup bernamakan *Homo Sapiens*, dimana secara hierarki dapat ditujukan pada gambar diatas, merupakan hewan (bertulang belakang) Mamalia *ordo* Primata yang berevolusi dari saudara-saudara se-ordonya.

Semua ini tentunya merupakan kemajuan dalam dunia biologi berkat [Carl Linnaeus](https://en.wikipedia.org/wiki/Carl_Linnaeus) karena ialah yang merancang pengelompokan makhluk hidup secara taksonomis olehnya.

## Prinsip Hierarchy

<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/FvLtPJzya5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

![Girish hierarchy principles](hierarchy-principles.png )

Terdapat 5 prinsip dalam merancang hierarki:

- **Apply meaningful classification**: Terdapat 2 langkah penting dalam mengklasifikasikan suatu hierarki yaitu:
  1. Identifikasi kesamaan dan variasi dari berbagai jenis, temukan kesamaan sebagai superclass dan variasi sebagai subclass.
  2. Golongkan kesamaan dalam superclass/root (tentunya dalam bentuk *abstract class* atau *interface* jika abstraksi superclass berupa template) dan variasi dalam subclass/child/leaves (melalui `extends` atau `implements`).
- **Apply meaningful generalization**: Kelompokkan semua elemen-elemen (behaviour dan elemen) yang sama antar subclass sebagai bagian dari superclass. Generalization tentunya mempermudah pemakaian kembali code sehingga mengurangi jumlah duplikat dalam hierarki class.
- **Ensure substitutability**: Pastikan setiap reference yang diturunkan dari superclass bisa disubstitusi di subclass tanpa mengubah behaviour secara hierarkis alias sesuai dengan prinsip *Liskov’s Substitution (LSP)*. Kasus ini terjadi bila class turunannya melanggar prinsip LSP seperti pada [OO-Abusers - Refused Bequest](../../martin-fowler/oo-abusers/refused-bequest/).
- **Avoid redundant paths**: Hindari jalan pintas *inheritance* dikarenakan class turunan "cucu" sudah mengimplementasikan semuanya dari "kakek" hingga "anak" sehingga tidak berguna jika class "cicit" ambil jalan pintas dari kakeknya padahal class tersebut merupakan turunan dari cucu-nya sendiri. _(ya apalagi kalo Tamika sampai nekat ambil jalan pintas dari Kakek Sugiono padahal bapaknya Tamika sendiri adalah anaknya Kakek Sugiono)_
- **Ensure proper ordering**: Pastikan subclass/anaknya bergantung dengan superclass/parentnya, bukan sebaliknya. Jika hal ini terjadi sebaliknya, maka bisa mempersulit dalam reusability *parent class* secara hierarkis.

Berdasarkan pada pengamatan hierarchy smell, terdapat pelanggaran prinsip hierarki antara lain:

| Hierarchy smell | Pelanggaran prinsip hierarchy | Penyebab | Martin Fowler smells |
| --- | --- | --- | --- |
| Missing Hierarchy | Apply meaningful classification | Pemakaian conditional checking untuk menentukan behaviour object yang seharusnya dapat diganti dengan polymorphism | - |
| Unnecessary Hierarchy | Apply meaningful classification | Developer membuatkan subclass hanya karena masalah perbedaan attribute bukan pada perbedaan behaviour | - |
| Unfactored Hierarchy | Apply meaningful generalization | Terdapat duplikat antara sesama saudara subclass atau antar subclass dengan superclass | Duplicate Code (class-to-class) |
| Wide Hierarchy | Apply meaningful generalization | Superclass mempunyai banyak anakan langsung tanpa intermediate class | - |
| Speculative Hierarchy | Apply meaningful generalization | Adanya class yang dibuatkan oleh developer karena alasan spekulatif untuk memenuhi kasus tertentu | Speculative Generalities |
| Deep Hierarchy | Apply meaningful generalization | Pembuatan hierarki terlalu besar dan terlalu dalam subclass levelnya. | - |
| Rebellious Hierarchy | Ensure substitutability | Subclass menolak behaviour dari superclass | Refused Bequest |
| Broken Hierarchy | Ensure substitutability | Hubungan relationship antar superclass dan subclass terputus meski ada inheritance | ? |
| Multipath Hierarchy | Avoid redundant paths | Subclass (cucu) mengambil jalan pintas inheritance ke base class | ? |
| Cyclic Hierarchy | Ensure proper ordering | Superclass bergantung pada subclass | Feature Envy |

---

Repository ini hanyalah rangkuman dari buku Suryanarayana et al. dengan sedikit tambahan informasi lain. Diharapkan mahasiswa juga membaca sumber aslinya pada bab 6 halaman 123 - 192.
