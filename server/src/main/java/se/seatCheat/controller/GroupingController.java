package se.seatCheat.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.GroupingRepository;
import se.seatCheat.service.ParticipantService;

import java.util.List;

@RestController
public class GroupingController {

    private ParticipantService participantService;

    public GroupingController(ParticipantService participantService) {
        this.participantService = participantService;
    }

    @GetMapping("/api/generate-groups")
    @CrossOrigin(origins = "http://localhost:3000")
    public List <List<Participant>>  generateGroups (){
        return participantService.generateGroups(3, 2);
    }
}
