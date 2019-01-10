package se.seatCheat.loader;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import se.seatCheat.domain.Grouping;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.GroupingRepository;
import se.seatCheat.repository.LayoutRepository;
import se.seatCheat.repository.ParticipantRepository;

import javax.servlet.http.Part;
import java.util.Optional;

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

        Grouping testGrupp = new Grouping("grupp1");
        groupingRepository.save(testGrupp);

        participantRepository.save(new Participant("Nina"));

//        Optional<Participant> testPart = participantRepository.findById(1L);
//        if (testPart.isPresent()) {
//            testPart.get().addGrouping(testGrupp);
//            participantRepository.save(testPart.get());
//        }
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