package se.seatCheat.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Grouping {
    @GeneratedValue @Id
    private Long id;
    private String name;

    @ManyToMany
    @JoinTable(
            name = "NAMN",
            joinColumns = @JoinColumn(name = "grouping_id"),
            inverseJoinColumns = @JoinColumn(name = "participant_id"))
    private Set<Participant> participants;



    public Grouping(){}

    public Grouping(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
