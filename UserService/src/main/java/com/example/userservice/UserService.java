package com.example.userservice;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public List<User> get() {
        return userRepository.findAll();
    }

    public List<User> search(String name, String surname, String gender, String birth) {
        return userRepository.search(name, surname, gender, birth);
    }

}
