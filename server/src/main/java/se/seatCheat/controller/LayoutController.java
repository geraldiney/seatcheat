package se.seatCheat.controller;

import org.springframework.web.bind.annotation.*;
import se.seatCheat.domain.Layout;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.LayoutRepository;
import se.seatCheat.security.CurrentUser;
import se.seatCheat.security.UserPrincipal;
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
    public Layout saveNewLayout (@RequestParam int numberOfRows,@RequestParam int seatsPerRow, @RequestParam boolean rowSeating) {
        return layoutRepository.save(new Layout(numberOfRows, seatsPerRow, rowSeating));
    }

    // Framtida användning
//    public Layout saveNewLayout(@CurrentUser UserPrincipal currentUser) {
//        currentUser.getId();
//        return null;
//    }


    @GetMapping("/api/generate-groups")
    @CrossOrigin(origins = "http://localhost:3000")
    public List <List<Participant>>  generateGroups (){

        return layoutService.generateGroups(3, 2, true);
    }

    @PostMapping ("/api/generate-groups")
    @CrossOrigin(origins = "http://localhost:3000")
    public List <List<Participant>> generateGroups(@RequestParam Long id){
        Layout layout= layoutRepository.findById(id).get();
        return layoutService.generateGroups(layout.getNumberOfRows(),layout.getSeatsPerRow(), layout.isRowSeating());
    }


}
