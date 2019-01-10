//package se.seatCheat.domain;
//
//import javax.persistence.*;
//
//@Entity
//public class ParticipantGroup {
//    @GeneratedValue @Id
//    private Long id;
//
//    @ManyToOne
//    private Grouping grouping;
//
//    @ManyToOne
//    private Participant participant;
//
//    public ParticipantGroup(Grouping grouping, Participant participant) {
//        this.grouping = grouping;
//        this.participant = participant;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public Grouping getGrouping() {
//        return grouping;
//    }
//
//    public Participant getParticipant() {
//        return participant;
//    }
//}