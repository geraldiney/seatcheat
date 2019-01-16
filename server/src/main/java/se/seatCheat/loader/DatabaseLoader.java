package se.seatCheat.loader;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.core.parameters.P;
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

import javax.servlet.http.Part;
import java.util.HashSet;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final ParticipantRepository participantRepository;
    private final GroupingRepository groupingRepository;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    public DatabaseLoader(ParticipantRepository participantRepository, GroupingRepository groupingRepository, RoleRepository roleRepository, UserRepository userRepository) {
        this.participantRepository = participantRepository;
        this.groupingRepository = groupingRepository;
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void run (String... strings) throws Exception{

        System.out.println("Loading DBLoader...");

        roleRepository.save(new Role("ROLE_USER"));
        userRepository.save(new User("Andreas", "password", "andreas@academy" )
                .addRole(roleRepository.findByName("ROLE_USER").get()));

        //participantRepository.save(new Participant("Gerry", ParticipantRole.Backend));

//        Grouping testGrupp = new Grouping("C# HT18");
//        groupingRepository.save(testGrupp);


        Participant p1 = new Participant("Nina", ParticipantRole.Frontend);
        Participant p2 = new Participant("Lina", ParticipantRole.Frontend);
        Participant p3 = new Participant("Louise", ParticipantRole.Frontend);
        Participant p4 = new Participant("Patrik", ParticipantRole.Backend);
        Participant p5 = new Participant("Geraldine", ParticipantRole.Backend);
        Participant p6 = new Participant("William", ParticipantRole.Backend);
        Participant p7 = new Participant("Daniela", ParticipantRole.Frontend);
        Participant p8 = new Participant("Therese", ParticipantRole.Backend);

        groupingRepository.save(new Grouping("Java HT18", new HashSet<Participant>(){{
                add(p1);
                add(p2);
                add(p3);
                add(p4);
                add(p5);
                add(p6);
                add(p7);
                add(p8);
            }}));



        //detta block skapar Katt men inte katter
//        Grouping gA = new Grouping("Katter");
//        participantRepository.save(new Participant("Katt", new HashSet<Grouping>() {{
//                add(gA);
//            }}));

        System.out.println("DBLoader loaded.");


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