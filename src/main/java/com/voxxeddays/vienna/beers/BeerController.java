package com.voxxeddays.vienna.beers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/beer")
@CrossOrigin("http://localhost:4200")
public class BeerController {
    @Autowired
    private BeerRepository beerRepository;

    @GetMapping
    public List<Beer> listBeers() {
        return beerRepository.findAll();
    }

    @PostMapping
    public void addBeer(@RequestBody Beer beer) {
        beerRepository.save(beer);
    }

    @PutMapping
    public void updateBeer(@RequestBody Beer beer) {
        beerRepository.save(beer);
    }

    @DeleteMapping
    public void deleteBeer(@RequestParam Long beerId) {
        beerRepository.deleteById(beerId);
    }
}
