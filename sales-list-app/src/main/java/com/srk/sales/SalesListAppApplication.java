package com.srk.sales;

import com.srk.sales.domain.Item;
import com.srk.sales.repositories.ItemRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Collections;
import java.util.stream.Stream;

@EnableResourceServer
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

	@Bean
	public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
		config.setAllowedMethods(Collections.singletonList("*"));
		config.setAllowedHeaders(Collections.singletonList("*"));
		source.registerCorsConfiguration("/**", config);
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return bean;
	}
}
