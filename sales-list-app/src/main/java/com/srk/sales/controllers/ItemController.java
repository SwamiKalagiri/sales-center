package com.srk.sales.controllers;

import com.srk.sales.domain.Item;
import com.srk.sales.repositories.ItemRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
class ItemController {
  private ItemRepository repository;

  public ItemController(ItemRepository repository) {
    this.repository = repository;
  }

  @GetMapping("/getItems")
  public Collection<Item> getItems() {
    return new ArrayList<>(repository.findAll());
  }
}
