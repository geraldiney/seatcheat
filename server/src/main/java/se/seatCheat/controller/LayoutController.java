package se.seatCheat.controller;

import org.springframework.web.bind.annotation.*;
import se.seatCheat.domain.Layout;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.LayoutRepository;
import se.seatCheat.service.LayoutService;

import java.util.List;

@RestController
public class LayoutController {

    private LayoutRepository layoutRepository;
    private LayoutService layoutService;

    public LayoutController(LayoutRepository layoutRepository, LayoutService layoutService) {
        this.layoutRepository = layoutRepository;
        this.layoutService = layoutService;
    }

    @GetMapping("/api/layouts")
    public List<Layout> viewLayouts() {
        return layoutRepository.findAll();

    }

    @PostMapping("/api/addLayout")
    @CrossOrigin(origins = "http://localhost:3000")
    public Layout saveNewLayout (@RequestParam int numberOfRows,@RequestParam int seatsPerRow){
        return layoutRepository.save(new Layout(numberOfRows, seatsPerRow));
    }

    @GetMapping("/api/generate-groups")
    @CrossOrigin(origins = "http://localhost:3000")
    public List <List<Participant>>  generateGroups (){
        return layoutService.generateGroups(3, 2);
    }


}
