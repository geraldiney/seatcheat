package se.seatCheat.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Layout {

    @Id
    @GeneratedValue
    private Long id;
    private int numberOfParticipants;
    private int numberOfParticipantsPerSeatingUnit;

    public Layout(int numberOfParticipants, int numberOfParticipantsPerSeatingUnit) {
        this.numberOfParticipants = numberOfParticipants;
        this.numberOfParticipantsPerSeatingUnit = numberOfParticipantsPerSeatingUnit;
    }

    @OneToMany(mappedBy = "layout", fetch = FetchType.EAGER)
    private Set<Participant> participants;

    public Long getId() {
        return id;
    }

    public int getNumberOfParticipants() {
        return numberOfParticipants;
    }

    public void setNumberOfParticipants(int numberOfParticipants) {
        this.numberOfParticipants = numberOfParticipants;
    }

    public int getNumberOfParticipantsPerSeatingUnit() {
        return numberOfParticipantsPerSeatingUnit;
    }

    public void setNumberOfParticipantsPerSeatingUnit(int numberOfParticipantsPerSeatingUnit) {
        this.numberOfParticipantsPerSeatingUnit = numberOfParticipantsPerSeatingUnit;
    }
}
