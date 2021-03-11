package kinobillett.controller;

import kinobillett.billett.Billett;
import kinobillett.repository.AppRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

    @RestController
    @RequestMapping("/api/kinobillett/")

    public class controller {
        @Autowired
        AppRepo repo;

        @PostMapping("/billett")
        public void lagre(Billett billett) {
            repo.leggInn(billett);
        }

        @GetMapping("/billett")
        public ArrayList<Billett> hent() {
            return repo.hentAlle();
        }

        @DeleteMapping("/billett")
        public void slett() {
            repo.slettAlle(); }
    }