package se.seatCheat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.seatCheat.domain.Grouping;

public interface GroupingRepository extends JpaRepository <Grouping, Long> {
}
