package hello;

import org.springframework.data.repository.CrudRepository;

import hello.User;

public interface UserRepository extends CrudRepository<User, Long> {
}
