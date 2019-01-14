package se.seatCheat.loader;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import se.seatCheat.domain.Grouping;
import se.seatCheat.domain.Participant;
import se.seatCheat.domain.ParticipantRole;
import se.seatCheat.repository.GroupingRepository;
import se.seatCheat.repository.LayoutRepository;
import se.seatCheat.repository.ParticipantRepository;
import se.seatCheat.domain.Role;
import se.seatCheat.domain.User;
import se.seatCheat.repository.*;

import java.util.HashSet;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final ParticipantRepository participantRepository;
    private final LayoutRepository layoutRepository;
    private final GroupingRepository groupingRepository;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public DatabaseLoader(ParticipantRepository participantRepository, LayoutRepository layoutRepository, GroupingRepository groupingRepository, RoleRepository roleRepository, UserRepository userRepository) {
        this.participantRepository = participantRepository;
        this.layoutRepository = layoutRepository;
        this.groupingRepository = groupingRepository;
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void run (String... strings) throws Exception{

        roleRepository.save(new Role("ROLE_USER"));

        participantRepository.save(new Participant("Gerry"));
        participantRepository.save(new Participant("Patrik"));
        participantRepository.save(new Participant("Louise"));
        participantRepository.save(new Participant("Nina", ParticipantRole.Frontend));

        userRepository.save(new User("Andreas", "password", "andreas@academy" )
        .addRole(roleRepository.findByName("ROLE_USER").get()));

        Grouping testGrupp = new Grouping("C# HT18");
        groupingRepository.save(testGrupp);

//FUNGERAR för att ladda in pa och pb och grupp a
        Participant pA = new Participant("Nina");
        Participant pB = new Participant("Lina");

        groupingRepository.save(new Grouping("Java HT18", new HashSet<Participant>(){{
                add(pA);
                add(pB);
            }}));

//        // save a couple of publishers
//        Grouping gA = new Grouping("GA");
//        Grouping gB = new Grouping("GB");
//
//        participantRepository.save(new Participant("PA", new HashSet<Grouping>() {{
//                add(gA);
//                add(gB);
//            }}));



    }



}








//    @Override
//    public void run(String... strings) throws Exception {
//        // Top beers from https://www.beeradvocate.com/lists/top/
//        Stream.of("Kentucky Brunch Brand Stout", "Good Morning", "Very Hazy", "King Julius",
//                "Budweiser", "Coors Light", "PBR").forEach(name ->
//                repository.save(new Beer(name))
//        );
//        repository.findAll().forEach(System.out::println);
//    }
//}