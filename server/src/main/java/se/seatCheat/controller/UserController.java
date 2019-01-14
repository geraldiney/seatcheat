package se.seatCheat.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import se.seatCheat.domain.User;
import se.seatCheat.repository.UserRepository;

@RestController
public class UserController {
    private UserRepository userRepository;


    @PostMapping ("api/registration")
    @CrossOrigin(origins = "http://localhost:3000")
    public User registerUser(@RequestParam String name, @RequestParam String email){
return null;
    }
}



