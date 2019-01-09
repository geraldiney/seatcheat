package se.seatCheat.service;

import org.springframework.stereotype.Service;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.ParticipantRepository;

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

    public List<Participant> shuffleParticipants() {

        List<Participant> participants = participantRepository.findAll();
        Collections.shuffle(participants);
        return participants;
    }

    public List<List<Participant>> generateGroups(int numberOfGroups) {

        List<Participant> participants = participantRepository.findAll();

        if (numberOfGroups <= 0 || participants.size() < numberOfGroups) {
            return null;
        }

        //räkna ut hur många participants varje grupp/bord
        //Placera ut participants i grupp/bord

        Participant [][] groups = new Participant[numberOfGroups][];

        int minimumGroupSize = participants.size()/numberOfGroups;
        int numberOfRemainingPersonsToPlaceIntoGroups = participants.size()% numberOfGroups;

        for (int groupId = 0; groupId < numberOfGroups; groupId++){
            if (numberOfRemainingPersonsToPlaceIntoGroups > 0){
                groups[groupId]= new Participant[minimumGroupSize + 1];
                numberOfRemainingPersonsToPlaceIntoGroups --;
            }
            else {
                groups[groupId] = new Participant[minimumGroupSize];
            }
        }
        List <Participant> randomizedParticipants = shuffleParticipants();

        for (int groupId = 0, personId = 0; groupId < numberOfGroups; groupId++){
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
