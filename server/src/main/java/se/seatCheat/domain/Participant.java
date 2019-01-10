package se.seatCheat.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Participant {

    @Id @GeneratedValue
    private Long id;
    private String name;

    @ManyToMany(mappedBy = "participants", fetch = FetchType.EAGER)
    Set<Grouping> groupings;

    public Participant() {
    }
    public Participant(String name) {
        this.name = name;
    }

    public Participant (String name, Grouping grouping){
        this.name=name;
        this.groupings.add(grouping);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }


    public void addGrouping(Grouping grouping) {
        groupings.add(grouping);
    }

    @Override
    public String toString() {
        return "Participant{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
