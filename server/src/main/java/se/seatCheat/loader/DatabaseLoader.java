package se.seatCheat.loader;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Component;
import se.seatCheat.domain.*;
import se.seatCheat.repository.GroupingRepository;
import se.seatCheat.repository.LayoutRepository;
import se.seatCheat.repository.ParticipantRepository;
import se.seatCheat.repository.*;

import javax.servlet.http.Part;
import java.util.HashSet;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final ParticipantRepository participantRepository;
    private final GroupingRepository groupingRepository;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final LayoutRepository layoutRepository;

    public DatabaseLoader(LayoutRepository layoutRepository, ParticipantRepository participantRepository, GroupingRepository groupingRepository, RoleRepository roleRepository, UserRepository userRepository) {
        this.participantRepository = participantRepository;
        this.groupingRepository = groupingRepository;
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.layoutRepository=layoutRepository;
    }

    @Override
    public void run (String... strings) throws Exception{

        System.out.println("Loading DBLoader...");


        roleRepository.save(new Role("ROLE_USER"));
        userRepository.save(new User("Andreas", "andreas@academy.se", "123456" )
                .addRole(roleRepository.findByName("ROLE_USER").get()));

        layoutRepository.save(new Layout(4,6,true));

        Participant p1 = new Participant("Nina", ParticipantRole.Frontend);
        Participant p2 = new Participant("Lina", ParticipantRole.Backend);
        Participant p3 = new Participant("Louise", ParticipantRole.Tester);
        Participant p4 = new Participant("Patrik", ParticipantRole.ProductOwner);
        Participant p5 = new Participant("Gerry", ParticipantRole.UX);
        Participant p6 = new Participant("William", ParticipantRole.Frontend);
        Participant p7 = new Participant("Daniela", ParticipantRole.Backend);
        Participant p8 = new Participant("Therese", ParticipantRole.Tester);
        Participant p9 = new Participant("Björn", ParticipantRole.ProductOwner);
        Participant p10 = new Participant("Hamid", ParticipantRole.UX);
        Participant p11 = new Participant("Albin", ParticipantRole.Frontend);
        Participant p12 = new Participant("Henrik", ParticipantRole.Backend);
        Participant p13 = new Participant("Jonas", ParticipantRole.Tester);
        Participant p14 = new Participant("Rikard", ParticipantRole.ProductOwner);
        Participant p15 = new Participant("Vincent", ParticipantRole.UX);
        Participant p16 = new Participant("Kherota", ParticipantRole.Frontend);
        Participant p17 = new Participant("Welid", ParticipantRole.Backend);
        Participant p18 = new Participant("Viktor", ParticipantRole.Tester);
        Participant p19 = new Participant("TT", ParticipantRole.ProductOwner);
        Participant p20 = new Participant("Johan", ParticipantRole.UX);



        groupingRepository.save(new Grouping("JHT18", new HashSet<Participant>(){{
                add(p1);
                add(p2);
                add(p3);
                add(p4);
                add(p5);
                add(p6);
                add(p7);
                add(p8);
                add(p9);
                add(p10);
                add(p11);
                add(p12);
                add(p13);
                add(p14);
                add(p15);
                add(p16);
                add(p17);
                add(p18);
                add(p19);
                add(p20);
            }}));

//        Participant s1 = new Participant("Nina", ParticipantRole.Frontend);
//        Participant s2 = new Participant("Lina", ParticipantRole.Backend);
//        Participant s3 = new Participant("Louise", ParticipantRole.Tester);
//
//            groupingRepository.save(new Grouping("JVT18", new HashSet<Participant>(){{
//            add(s1);
//            add(s2);
//            add(s3);
//        }}));


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