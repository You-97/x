package com.digital.controllers;

import com.digital.dtos.ProductDTO;
import com.digital.services.ProductServiceImpl;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import static com.digital.constants.FileConstant.FORWARD_SLASH;
import static com.digital.constants.FileConstant.USER_FOLDER;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;

@RestController
@RequestMapping("/products")
@CrossOrigin("http://localhost:4200")
public class ProductResource {

    private final ProductServiceImpl productService;

    public ProductResource(ProductServiceImpl productService) {
        this.productService = productService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable("id") long id) throws IOException {
        return ResponseEntity.ok().body(productService.getProduct(id));
    }

    @GetMapping()
    public ResponseEntity<List<ProductDTO>> getProducts() {
        return ResponseEntity.ok().body(productService.getAllProducts());
    }

    @PostMapping(value = "/new", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ProductDTO> createSecondProduct(@RequestParam(value = "image")MultipartFile image,
                                                          @RequestParam("name") String name,
                                                          @RequestParam("price") Double price,
                                                          @RequestParam("oldPrice") Double oldPrice,
                                                          @RequestParam("description") String description,
                                                          @RequestParam("type") String type) throws IOException {
        ProductDTO product = ProductDTO.builder()
                .name(name)
                .description(description)
                .price(price)
                .oldPrice(oldPrice)
                .type(type)
                .image(image)
                .build();
        return ResponseEntity.ok().body(productService.createProduct(product));
    }

    @GetMapping(path = "/image/{username}/{fileName}", produces = IMAGE_JPEG_VALUE)
    public byte[] getProfileImage(@PathVariable("username") String username,
                                  @PathVariable("fileName") String fileName) throws IOException {
        return Files.readAllBytes(Paths.get(USER_FOLDER + username + FORWARD_SLASH + fileName));
    }

    /*@PutMapping("/update")
    public ResponseEntity<ProductDTO> updateProduct(ProductDTO dto) throws IOException {
        return ResponseEntity.ok().body(productService.updateProduct(dto));
    }*/

    @PutMapping("/update")
    public ResponseEntity<ProductDTO> updateSecondProduct(@RequestParam(value = "image", required = false)MultipartFile image,
                                                          @RequestParam("name") String name,
                                                          @RequestParam("id") long id,
                                                          @RequestParam("price") Double price,
                                                          @RequestParam("oldPrice") Double oldPrice,
                                                          @RequestParam("description") String description,
                                                          @RequestParam("type") String type) throws IOException {
        ProductDTO product = ProductDTO.builder()
                .id(id)
                .name(name)
                .description(description)
                .price(price)
                .oldPrice(oldPrice)
                .type(type)
                .image(image)
                .build();
        return ResponseEntity.ok().body(productService.updateProduct(product));
    }


    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable("id") long id) {
        productService.deleteProduct(id);
        return "product deleted";
    }
}
