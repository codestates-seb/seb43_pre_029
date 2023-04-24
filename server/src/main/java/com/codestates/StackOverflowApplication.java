package com.codestates;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EntityScan(
		basePackageClasses = {Jsr310JpaConverters.class},
		basePackages = {"com.codestates"}
)
@EnableJpaAuditing
public class StackOverflowApplication {

	public static void main(String[] args) {
		SpringApplication.run(StackOverflowApplication.class, args);
		//test!!!!!!!!!!!!!
	}

}
