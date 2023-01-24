package com.example.userservice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/User")
    public void save(@RequestBody User user) {
        userService.save(user);
    }

    @GetMapping("/User")
    public ResponseEntity<List<User>> get() {
        return new ResponseEntity<>(userService.get(), HttpStatus.OK);
    }

    @GetMapping("/search/{name}/{surname}/{gender}/{birth}")
    public ResponseEntity<List<User>> search(@PathVariable("name") String name,
                                             @PathVariable("surname") String surname,
                                             @PathVariable("gender") String gender,
                                             @PathVariable("birth") String birth) {
        return new ResponseEntity<>(userService.search(name, surname, gender, birth), HttpStatus.OK);
    }

}
