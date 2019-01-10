package se.seatCheat.controller;

import org.springframework.web.bind.annotation.*;
import se.seatCheat.domain.Layout;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.LayoutRepository;

import java.util.List;

@RestController
public class LayoutController {

    private LayoutRepository layoutRepository;

    public LayoutController(LayoutRepository layoutRepository) {
        this.layoutRepository = layoutRepository;
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
}
