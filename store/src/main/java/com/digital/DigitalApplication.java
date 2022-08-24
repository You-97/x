package com.digital;

import com.digital.services.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;

@SpringBootApplication
public class DigitalApplication implements CommandLineRunner {

	public static final String USER_FOLDER = System.getProperty("user.home") + "/images/products/";

	@Autowired
	ProductServiceImpl productService;

	public static void main(String[] args) {
		SpringApplication.run(DigitalApplication.class, args);
		new File(USER_FOLDER).mkdirs();
	}

	@Override
	public void run(String... args) throws Exception {
		//byte[] bytes = productService.getProfileImage("8e71fcc61fc142a19fee01abc2575da7", "8e71fcc61fc142a19fee01abc2575da7");
	}
}
