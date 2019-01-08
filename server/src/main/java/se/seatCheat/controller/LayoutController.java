package se.seatCheat.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import se.seatCheat.domain.Layout;
import se.seatCheat.repository.LayoutRepository;

import java.util.List;

@RestController
public class LayoutController {

    private LayoutRepository layoutRepository;

    public LayoutController(LayoutRepository layoutRepository) {
        this.layoutRepository = layoutRepository;
    }

    @GetMapping("/layouts")
    public List<Layout> viewLayouts() {
        return layoutRepository.findAll();
    }
}
