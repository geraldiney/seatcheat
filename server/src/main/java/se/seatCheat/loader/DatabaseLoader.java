package se.seatCheat.loader;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import se.seatCheat.domain.Layout;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.LayoutRepository;
import se.seatCheat.repository.ParticipantRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final ParticipantRepository participantRepository;
    private final LayoutRepository layoutRepository;

    public DatabaseLoader(ParticipantRepository participantRepository, LayoutRepository layoutRepository) {
        this.participantRepository = participantRepository;
        this.layoutRepository = layoutRepository;
    }

    @Override
    public void run (String... strings) throws Exception{
        Layout l = new Layout(10, 5);
        layoutRepository.save(l);
        participantRepository.save(new Participant("Said", l));
        participantRepository.save(new Participant("Anna", l));

        participantRepository.save(new Participant("Nina"));
        participantRepository.save(new Participant("Gerry"));
        participantRepository.save(new Participant("Patrik"));
        participantRepository.save(new Participant("Louise"));
        participantRepository.save(new Participant("Lina"));

        participantRepository.findAll().forEach(System.out::println);
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