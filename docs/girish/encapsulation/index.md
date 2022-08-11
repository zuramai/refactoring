# Encapsulation

![Girish encapsulation smell](encapsulation.png)

Semua smell di dalam grup ini berkaitan dengan kesalahan dalam merancang enkapsulasi dalam interface/abstraksi.

- Encapsulation Intro | [Link Video](https://www.youtube.com/watch?v=WqXM5lHEwGY&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&index=1)
- [Deficient Encapsulation](deficient/) | [Link Video](https://www.youtube.com/watch?v=r-wphP9hQ8E&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&index=2)
- [Leaky Encapsulation](leaky/) | [Link Video](https://www.youtube.com/watch?v=FXLKSYTwk_0&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&index=3)
- [Missing Encapsulation](missing/) | [Link Video](https://www.youtube.com/watch?v=tHKGrugra70&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&index=4)
- [Unexploited Encapsulation](unexploited/) | [Link Video](https://www.youtube.com/watch?v=qQC5cXVuX9Y&list=PLG_Cu5FmqSk2KHT6lXngRvcOmOzuk4_ju&index=5)

## Filosofi

Sebuah mobil mempunyai setir, pedal gas, dan pedal rem. Pedal rem berfungsi untuk melakukan pengereman mobil. Pengereman mobil sendiri mempunyai beberapa jenis, salah satunya adalah pengereman Anti-locking Braking System (ABS). Terkait terhadap kasus tersebut kita sebagai driver tentunya tidak perlu mengetahui detail mengenai sistem pengereman, karena kita cukup mengetahui pengereman tersebut melalui pedal rem kita sehingga detail sistem pengereman seperti ABS tidak diketahui secara langsung oleh kita.

## Prinsip Encapsulation

<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WqXM5lHEwGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


![Girish encapsulation principles](encapsulation-principles.png)

Menurut Girish Suryanarayana dkk, terdapat 2 prinsip encapsulation yaitu:

- **Hide implementation details** - Class tidak perlu mengetahui detail implementasi member dan algoritma yang dimiliki oleh abstraksi.
- **Hide variations** - Class tidak perlu mengetahui variasi-variasi yang dimiliki pada hierarki sehingga ia cukup mengetahui implementasi abstraknya saja.

Berdasarkan pada pengamatan abstraction smell, terdapat pelanggaran prinsip encapsulation antara lain:

| Encapsulation smell | Pelanggaran prinsip encapsulation | Penyebab | Martin Fowler smells |
| --- | --- | --- | --- |
| Deficient Encapsulation | Hide implementation details | Adanya akses terhadap member abstraksi, terutama jika access modifier `public` | Inappropriate Intimacy |
| Leaky Encapsulation | Hide implementation details | - List: Data diperoleh dengan *swallow copy* bukan *deep copy*<br>- Penamaan method yang mengandung detail implementasi | Inappropriate Intimacy |
| Missing Encapsulation | Hide variations | a. Tidak ada pembagian Class<br>b. Hierarki bucin alias ada hierarki kembar | Divergent Changes, Parallel Inheritence |
| Unexploited Encapsulation | Hide variations | Penggunaan `if-else` atau `switch` statement dalam object type checking | Switch Statements |


---

Repository ini hanyalah rangkuman dari buku Suryanarayana et al. dengan sedikit tambahan informasi lain. Diharapkan mahasiswa juga membaca sumber aslinya pada bab 4 halaman 61 - 91.
