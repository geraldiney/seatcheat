package se.seatCheat.service;

import org.springframework.stereotype.Service;
import se.seatCheat.domain.Participant;
import se.seatCheat.repository.ParticipantRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class LayoutService {

    private final ParticipantRepository participantRepository;

    public LayoutService(ParticipantRepository participantRepository) {
        this.participantRepository = participantRepository;
    }

    public List<Participant> shuffleParticipants(List<Participant> participants) {
        Collections.shuffle(participants);
        return participants;
    }


    public List<List<Participant>> generateGroups(int numberOfRows, int seatsPerRow) {

        List<Participant> participants = participantRepository.findAll();

        if (numberOfRows <= 0 || participants.size() > numberOfRows * seatsPerRow) {
            return null;
        }

        //genererar dubbelarray utifrån layout input

        Participant[][] groups = new Participant[numberOfRows][seatsPerRow];

        int numberOfRemainingPersonsToPlaceIntoGroups = participants.size() % numberOfRows;
        int fullGroups = participants.size() / numberOfRows;

        boolean rowSeating = true;
        participants = shuffleParticipants(participants);

        if (rowSeating) {

            //pI = participant index
            for (int row = 0, pI = 0; row < numberOfRows; row++) {
                for (int seat = 0; seat < seatsPerRow; seat++, pI++) {
                    if (participants.size() == pI) {
                        return arrayToList(groups);
                    }
                    groups[row][seat] = participants.get(pI);
                }
            }
        }

        for (int groupId = 0; groupId < numberOfRows; groupId++) {
            if (numberOfRemainingPersonsToPlaceIntoGroups > 0) {
                groups[groupId] = new Participant[fullGroups + 1];
                numberOfRemainingPersonsToPlaceIntoGroups--;
            } else {
                groups[groupId] = new Participant[fullGroups];
            }
        }

        for (int groupId = 0, personId = 0; groupId < numberOfRows; groupId++) {
            int groupSize = groups[groupId].length;

            for (int teamMember = 0; teamMember < groupSize; teamMember++, personId++) {
                Participant participant = participants.get(personId);
                groups[groupId][teamMember] = participant;
            }
        }
        return arrayToList(groups);
    }

    public List<List<Participant>> arrayToList(Participant[][] arrays) {
        List<List<Participant>> participantList = new ArrayList<>();
        for (Participant[] array : arrays) {
            List<Participant> l = Arrays.asList(array);
            participantList.add(l);
        }
        return participantList;
    }
}
