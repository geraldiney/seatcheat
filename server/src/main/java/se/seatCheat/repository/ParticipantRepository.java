package se.seatCheat.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import se.seatCheat.domain.Participant;

@RepositoryRestController
public interface ParticipantRepository extends JpaRepository <Participant, Long>{

}
