# Data Clumps


## Penjelasan Smell

Smell ini terjadi ketika ada beberapa field atau parameter method yang selalu dipakai atau dioper bersama-sama. Bila terjadi hal seperti ini, berarti variabel-variabel ini bisa dipertimbangkan untuk digabungkan langsung dalam satu class.

Perhatikan class `Kelas` dan `Semester` di dalam package `before`. Pada kedua class ini, terdapat Date `start` dan `end`.

<Tabs>
<Tab name="app" text="App.java">

```js
export default { 
    data () {
        return {
        msg: `Highlighted!
        This line isn't highlighted,
        but this and the next 2 are.`,
        motd: 'VitePress is awesome',
        lorem: 'ipsum'
        }
    }
}
```

</Tab>
<Tab name="make" text="Make.java">

```js
export default { 
}
```

</Tab>
</Tabs>

## Penyelesaian

Karena selalu berbarengan, `start` dan `end` dipertimbangkan untuk digabung dalam class `DateRange`. Agar tidak hanya menjadi smell data class, kita dapat melengkapi class `DateRange` dengan behavior tertentu. Contohnya kita tambahkan validasi `start` tidak boleh melebihi `end`.