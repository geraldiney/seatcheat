package se.seatCheat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.seatCheat.domain.User;

import java.util.List;
import java.util.Optional;
// ev restrepositry controller annotation?


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);


    List<User> findByIdIn(List<Long> userIds);


    Boolean existsByEmail(String email);
}