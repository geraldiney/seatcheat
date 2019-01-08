package se.seatCheat.domain;

import javax.persistence.*;

@Entity
public class Participant {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    public Participant() {
    }

    public Participant(String name) {
        this.name = name;
    }

    public Participant(String name, Layout layout) {
        this.name = name;
        this.layout = layout;
    }

    @ManyToOne
    private Layout layout;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Participant{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
