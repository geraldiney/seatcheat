package se.seatCheat.controller;

import org.springframework.web.bind.annotation.*;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.ParticipantRepository;

import java.util.List;

@RestController
public class ParticipantController {

    private ParticipantRepository participantRepository;

    public ParticipantController(ParticipantRepository participantRepository) {
        this.participantRepository = participantRepository;
    }

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Participant> allParticipants(){
        return participantRepository.findAll();
    }

    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public void saveNewParticipant (@RequestParam String name){
        participantRepository.save(new Participant(name));

        participantRepository.findAll().forEach(System.out::println);

    }

}


