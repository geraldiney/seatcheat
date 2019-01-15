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


    //för att förbereda för mer funktionalitet borde denna fkt ta in en List<Participants>

    public List<List<Participant>> generateGroups(int numberOfRows, int seatsPerRow, boolean rowSeating) {

        List<Participant> participants = participantRepository.findAll();

        if (numberOfRows <= 0 || participants.size() > numberOfRows * seatsPerRow) {
            return null;
        }

        //generates double array from layout input
        Participant[][] groups = new Participant[numberOfRows][seatsPerRow];

        participants = shuffleParticipants(participants);

        //seating based on rowseating, filling up rows from the "front"
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

        //seating based on groups, filling up "groups" in turn
        for (int seat=0, pI =0; seat<seatsPerRow; seat++){
            for (int row = 0; row < numberOfRows; row ++, pI++){
                if (participants.size()== pI){
                    return arrayToList(groups);
                }
                groups[row][seat]=participants.get(pI);
            }
        }
        return arrayToList(groups);
    }

    public List<List<Participant>> arrayToList(Participant[][] arrays) {
        List<List<Participant>> participantList = new ArrayList<>();
        for (Participant[] array : arrays) {
            List<Participant> tempList = Arrays.asList(array);
            participantList.add(tempList);
        }
        return participantList;
    }
    public List<List<Participant>> arrayToListNonNull(Participant[][] arrays) {
        List<List<Participant>> participantList = new ArrayList<>();
        for (Participant[] array : arrays) {
            List<Participant> tempList = new ArrayList<>();
            for (Participant participant : array)
                if (participant!=null)
                    tempList.add(participant);
            if (!tempList.isEmpty())
                participantList.add(tempList);
        }
        return participantList;
    }

    public List<List<Participant>> generateGroupsBasedOnRole(int numberOfRows, int seatsPerRow, boolean rowSeating){

        List<Participant> participants = participantRepository.findAll();

        for (Participant participant: participants) {

        }

        return null;
    }
}
