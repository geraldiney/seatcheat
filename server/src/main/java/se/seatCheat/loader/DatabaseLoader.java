package se.seatCheat.loader;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import se.seatCheat.domain.Grouping;
import se.seatCheat.domain.Participant;
import se.seatCheat.domain.Role;
import se.seatCheat.repository.GroupingRepository;
import se.seatCheat.repository.LayoutRepository;
import se.seatCheat.repository.ParticipantRepository;

import javax.servlet.http.Part;
import java.util.HashSet;
import java.util.Optional;
import java.util.concurrent.Flow;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final ParticipantRepository participantRepository;
    private final LayoutRepository layoutRepository;
    private final GroupingRepository groupingRepository;

    public DatabaseLoader(ParticipantRepository participantRepository, LayoutRepository layoutRepository, GroupingRepository groupingRepository) {
        this.participantRepository = participantRepository;
        this.layoutRepository = layoutRepository;
        this.groupingRepository = groupingRepository;
    }

    @Override
    public void run (String... strings) throws Exception{

        participantRepository.save(new Participant("Gerry"));
        participantRepository.save(new Participant("Patrik"));
        participantRepository.save(new Participant("Louise"));

        participantRepository.save(new Participant("Nina", Role.Frontend));

        Grouping testGrupp = new Grouping("grupp1");
        groupingRepository.save(testGrupp);

//FUNGERAR för att ladda in pa och pb och grupp a
        Participant pA = new Participant("PA");
        Participant pB = new Participant("PB");

        groupingRepository.save(new Grouping("A", new HashSet<Participant>(){{
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