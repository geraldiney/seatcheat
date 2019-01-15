package se.seatCheat.controller;

import org.springframework.web.bind.annotation.*;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.ParticipantRepository;
import se.seatCheat.service.ParticipantService;

import java.util.List;

@RestController
public class ParticipantController {

    private ParticipantRepository participantRepository;
    private ParticipantService participantService;

    public ParticipantController(ParticipantRepository participantRepository, ParticipantService participantService) {
        this.participantRepository = participantRepository;
        this.participantService = participantService;
    }

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Participant> allParticipants(){
        return participantRepository.findAll();

    }

    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public Participant saveNewParticipant (@RequestParam String name){
        return participantRepository.save(new Participant(name));
        //return participantRepository.save(new Participant(name, role);

    }


}