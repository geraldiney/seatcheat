package se.seatCheat.controller;

import org.springframework.web.bind.annotation.*;
import se.seatCheat.domain.Grouping;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.GroupingRepository;
import se.seatCheat.repository.ParticipantRepository;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class GroupingController {

    private GroupingRepository groupingRepository;
    private ParticipantRepository participantRepository;

    public GroupingController(GroupingRepository groupingRepository, ParticipantRepository participantRepository) {
        this.groupingRepository = groupingRepository;
        this.participantRepository=participantRepository;
    }

    @PostMapping("/addGroup")
    @CrossOrigin(origins = "http://localhost:3000")
    public Grouping saveNewGrouping (@RequestParam String name, @RequestParam int[] participants){
//        List<Participant> participants = participantRepository.findAll();
        Set<Participant> set = new HashSet();
//        System.out.println("hej från saveNewGroup");
        for(int id:participants){
            Long lId= Long.valueOf(id);
            set.add(participantRepository.findById(lId).get());
        }

        return groupingRepository.save(new Grouping(name, set));
    }


}
