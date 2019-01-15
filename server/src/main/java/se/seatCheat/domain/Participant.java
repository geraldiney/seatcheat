package se.seatCheat.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class Participant implements Serializable {

    @Id @GeneratedValue
    private Long id;
    private String name;
    @Enumerated(EnumType.ORDINAL) //using ordinal - writes the enum index to db (otherwise string representation)
    private ParticipantRole participantRole;

    @ManyToMany(mappedBy = "participants", fetch = FetchType.EAGER)
    private Set<Grouping> groupings;

    public Participant() { }
    public Participant(String name) {
        this.name = name;
    }
//    public Participant (String name, Grouping grouping){
//        this.name=name;
//        this.groupings.add(grouping);
//    }
    public Participant (String name, Set<Grouping> set){
        this.name=name;
        this.groupings=set;
    }
    public Participant (String name, ParticipantRole participantRole){
        this.name=name;
        this.participantRole = participantRole;
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

    public ParticipantRole getParticipantRole() {
        return participantRole;
    }

    public void setRole(){
        this.participantRole = participantRole;
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
