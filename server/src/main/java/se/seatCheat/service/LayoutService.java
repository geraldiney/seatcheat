package se.seatCheat.service;

import org.springframework.stereotype.Service;
import se.seatCheat.domain.Layout;
import se.seatCheat.domain.Participant;
import se.seatCheat.domain.ParticipantRole;
import se.seatCheat.repository.LayoutRepository;
import se.seatCheat.repository.ParticipantRepository;

import javax.servlet.http.Part;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class LayoutService {

    private final ParticipantRepository participantRepository;
    private final LayoutRepository layoutRepository;

    public LayoutService(ParticipantRepository participantRepository, LayoutRepository layoutRepository) {
        this.participantRepository = participantRepository;
        this.layoutRepository = layoutRepository;
    }

    public List<List<Participant>> sortParticipants(Long id){

        List<Participant> participants = participantRepository.findAll();

        List<Participant> listFE = new ArrayList<>();
        List<Participant> listBE = new ArrayList<>();

        for (Participant participant: participants){
            if (participant.getParticipantRole()== ParticipantRole.Frontend)
                listFE.add(participant);
            else if (participant.getParticipantRole()==ParticipantRole.Backend)
                listBE.add(participant);
        }

        Collections.shuffle(listFE);
        Collections.shuffle(listBE);

        participants.clear();
        participants.addAll(listFE);
        participants.addAll(listBE);

        return generateSeating(id, participants);
    }

    public List<List<Participant>> useAllParticipants (Long id){
        List<Participant> participants = participantRepository.findAll();
        Collections.shuffle(participants);
        return generateSeating(id, participants);
    }

    public List<List<Participant>> generateSeating(Long id, List<Participant> participants) {
        Layout layout= layoutRepository.findById(id).get();
        int numberOfRows= layout.getNumberOfRows();
        int seatsPerRow = layout.getSeatsPerRow();
        boolean rowSeating = layout.isRowSeating();

        //genererar dubbelarray utifrån layout input
        Participant[][] groups = new Participant[numberOfRows][seatsPerRow];

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

    public List<Participant> shuffleParticipants(List<Participant> participants) {
        Collections.shuffle(participants);
        return participants;
    }
}
