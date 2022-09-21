# Data Clumps

[sourcemaking](https://sourcemaking.com/refactoring/smells/data-clumps)

## Penjelasan Smell

Smell ini terjadi ketika ada beberapa field atau parameter method yang selalu dipakai atau dioper bersama-sama. Bila terjadi hal seperti ini, berarti variabel-variabel ini bisa dipertimbangkan untuk digabungkan langsung dalam satu class.

Perhatikan class `Kelas` dan `Semester` di dalam package `before`. Pada kedua class ini, terdapat Date `start` dan `end`.

### Before

<Tabs>
<Tab name="kelas" text="Kelas.java">

```java

package fowler.bloaters.data_clumps.before;

import java.util.Date;

public class Kelas {
    private String course;
    private Date start;
    private Date end;

    public Date getStart() {
        return start;
    }

    public Date getEnd() {
        return end;
    }
}

```

</Tab>

<Tab name="semester" text="Semester.java">

```java
package fowler.bloaters.data_clumps.before;

import java.util.Date;

public class Semester {
	private String label;
	private Date start;
	private Date end;

	public Semester(String label, Date start, Date end) {
		super();
		this.label = label;
		this.start = start;
		this.end = end;
	}

	public String getLabel() {
		return label;
	}

	public Date getStart() {
		return start;
	}

	public Date getEnd() {
		return end;
	}
}

```

</Tab>

</Tabs>

## Penyelesaian

Karena selalu berbarengan, `start` dan `end` dipertimbangkan untuk digabung dalam class `DateRange`. Agar tidak hanya menjadi smell data class, kita dapat melengkapi class `DateRange` dengan behavior tertentu. Contohnya kita tambahkan validasi `start` tidak boleh melebihi `end`.

<Tabs>
<Tab name="kelas" text="Kelas.java">

```java
package fowler.bloaters.data_clumps.before;

import java.util.Date;

public class Kelas {
    private String course;
    private DateRange dateRange;

    public String getCourse() {
        return course;
    }

    public DateRange getDateRange() {
        return dateRange;
    }
}

```

</Tab>

<Tab name="semester" text="Semester.java">

```java
package fowler.bloaters.data_clumps.before;

import java.util.Date;

public class Semester {
	private String label;
	private DateRange dateRange;

	public Semester(String label, DateRange dateRange) {
		super();
		this.label = label;
		this.dateRange = dateRange;
	}

	public String getLabel() {
		return label;
	}

	public DateRange getDateRange() {
		return dateRange;
	}
}

```

</Tab>
<Tab name="daterange" text="DateRange.java">

```java
package fowler.bloaters.data_clumps.after;

import java.util.Date;

public class DateRange {
	private Date start;
	private Date end;

	public DateRange(Date start, Date end) {
		if(start.after(end)) {
			throw new IllegalArgumentException("start must be before end");
		}
		this.start = start;
		this.end = end;
	}

	public Date getStart() {
		return start;
	}

	public Date getEnd() {
		return end;
	}
}
```

</Tab>
</Tabs>
