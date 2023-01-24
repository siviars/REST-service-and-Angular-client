package com.example.userservice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT f FROM User f " +
            "WHERE f.firstName = ?1 " +
            "OR f.lastName = ?2 " +
            "OR f.gender = ?3 " +
            "OR f.dateOfBirth = ?4 ")
    List<User> search(String name, String surname, String gender, String birth);

}
