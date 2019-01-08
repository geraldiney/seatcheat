package se.seatCheat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.seatCheat.domain.Layout;

public interface LayoutRepository extends JpaRepository <Layout, Long> {
}
