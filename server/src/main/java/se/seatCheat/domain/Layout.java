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

    public Layout(int numberOfRows, int seatsPerRow) {
        this.numberOfRows = numberOfRows;
        this.seatsPerRow = seatsPerRow;
    }

    public Layout() {}

    @OneToMany(mappedBy = "layout", fetch = FetchType.EAGER)
    private Set<Participant> participants;

    public void addParticipant(Participant participant) {
       participants.add(participant);
    }

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
}
