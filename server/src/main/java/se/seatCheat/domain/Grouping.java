package se.seatCheat.domain;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Grouping {
    @GeneratedValue @Id
    private Long id;
    private String name;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "NAMN",
            joinColumns = @JoinColumn(),
            inverseJoinColumns = @JoinColumn())
    private Set<Participant> participants;


    public Grouping(){}

    public Grouping(String name) {
        this.name = name;
    }
    public Grouping(String name, Set<Participant> set){
        this.name=name;
        this.participants=set;
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

    public void addParticipant(Participant participant){
        System.out.println(participant);
        participants.add(participant);
    }


    @Override
    public String toString() {
        return "Grouping{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
