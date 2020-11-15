package entity;

import java.io.Serializable;
import java.util.List;

public class PageResult implements Serializable {
    private long total; //总条数

    private List rows;  //当前页的结果

    public PageResult(long total, List rows) {
        super();
        this.total = total;
        this.rows = rows;
    }

    public long getTotal() {
        return total;
    }

    public List getRows() {
        return rows;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public void setRows(List rows) {
        this.rows = rows;
    }
}
