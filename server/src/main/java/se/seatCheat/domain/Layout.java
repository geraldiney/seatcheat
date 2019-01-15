package se.seatCheat.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Layout {

    @Id
    @GeneratedValue
    private Long id;
    private int numberOfRows;
    private int seatsPerRow;
    private boolean rowSeating;

    public Layout(int numberOfRows, int seatsPerRow, boolean rowSeating) {
        this.numberOfRows = numberOfRows;
        this.seatsPerRow = seatsPerRow;
        this.rowSeating = rowSeating;
    }

    public Layout() {}

//    @OneToMany(mappedBy = "layout", fetch = FetchType.EAGER)
//    private Set<Participant> participants;

//    public void addParticipant(Participant participant) {
//       participants.add(participant);
//    }

    public Long getId() {
        return id;
    }

    public int getNumberOfRows() {
        return numberOfRows;
    }

    public void setNumberOfRows(int numberOfRows) {
        this.numberOfRows = numberOfRows;
    }

    public int getSeatsPerRow() {
        return seatsPerRow;
    }

    public void setSeatsPerRow(int seatsPerRow) {
        this.seatsPerRow = seatsPerRow;
    }

    public boolean isRowSeating() {
        return rowSeating;
    }

    public void setRowSeating(boolean rowSeating) {
        this.rowSeating = rowSeating;
    }
}
