package com.srk.sales;

import com.srk.sales.domain.Item;
import com.srk.sales.repositories.ItemRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class SalesListAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalesListAppApplication.class, args);
	}

	@Bean
	ApplicationRunner init(ItemRepository repository) {
		return args -> {
			Stream.of("Car", "Laptop", "Phone", "Toy", "Bicycle",
					"Motorcycle").forEach(name -> {
				Item item = new Item();
				item.setName(name);
				item.setDescription(name + " for sale...");
				repository.save(item);
			});
			repository.findAll().forEach(System.out::println);
		};
	}
}
