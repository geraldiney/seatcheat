package se.seatCheat.service;

import org.springframework.stereotype.Service;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.ParticipantRepository;

import javax.servlet.http.Part;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static java.util.Arrays.asList;

@Service
public class ParticipantService {

    private final ParticipantRepository participantRepository;

    public ParticipantService(ParticipantRepository participantRepository) {
        this.participantRepository = participantRepository;
    }

    public List<Participant> shuffleParticipants(List<Participant> participants) {
        Collections.shuffle(participants);
        return participants;
    }


    public List<List<Participant>> generateGroups(int numberOfRows, int seatsPerRow) {

        List<Participant> participants = participantRepository.findAll();

        if (numberOfRows <= 0 || participants.size()>numberOfRows*seatsPerRow) {
            return null;
        }

        Participant [][] groups = new Participant[numberOfRows][seatsPerRow];

        int numberOfRemainingPersonsToPlaceIntoGroups = participants.size()% numberOfRows;

        for (int groupId = 0; groupId < numberOfRows; groupId++){
            if (numberOfRemainingPersonsToPlaceIntoGroups > 0){
                groups[groupId]= new Participant[seatsPerRow + 1];
                numberOfRemainingPersonsToPlaceIntoGroups --;
            }
            else {
                groups[groupId] = new Participant[seatsPerRow];
            }
        }
        List <Participant> randomizedParticipants = shuffleParticipants(participants);

        for (int groupId = 0, personId = 0; groupId < numberOfRows; groupId++){
            int groupSize = groups[groupId].length;

            for (int teamMember = 0; teamMember < groupSize; teamMember++, personId++){
                Participant participant = randomizedParticipants.get(personId);
                groups[groupId][teamMember]=participant;
            }
        }
        List<List<Participant>> participantList = new ArrayList<>();
        for (Participant[] group : groups) {
            List<Participant> l = Arrays.asList(group);
            participantList.add(l);
        }
        return (participantList);

    }
}
