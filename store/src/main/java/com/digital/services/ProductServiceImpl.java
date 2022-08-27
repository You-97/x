package com.digital.services;

import com.digital.dtos.ProductDTO;
import com.digital.entities.Product;
import com.digital.repositories.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.digital.constants.FileConstant.*;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

@Service
@Slf4j
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public ProductDTO createProduct(ProductDTO dto) throws IOException {
        String generatedId = UUID.randomUUID().toString().replace("-", "");
        Product product = new Product();
        product.setId(null);
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setType(dto.getType());
        product.setGeneratedId(generatedId);
        product.setDescription(dto.getDescription());
        product.setOldPrice(dto.getOldPrice());
        Product savedProduct = productRepository.save(product);

        saveProfileImage(savedProduct, dto.getImage());
        return ProductDTO.builder()
                .id(savedProduct.getId())
                .productImagePath(savedProduct.getImagePath())
                .name(savedProduct.getName())
                .type(savedProduct.getType())
                .price(savedProduct.getPrice())
                .oldPrice(savedProduct.getOldPrice())
                .description(savedProduct.getDescription())
                .build();
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public ProductDTO updateProduct(ProductDTO dto) throws IOException {
        Product product = productRepository.findById(dto.getId())
                .orElseThrow(()-> new RuntimeException("Product not exist"));
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setType(dto.getType());
        product.setDescription(dto.getDescription());
        product.setOldPrice(dto.getOldPrice());
        Product savedProduct = productRepository.save(product);
        if (dto.getImage() != null) {
            saveProfileImage(savedProduct, dto.getImage());
        }

        return ProductDTO.builder()
                .id(savedProduct.getId())
                .productImagePath(savedProduct.getImagePath())
                .name(savedProduct.getName())
                .type(savedProduct.getType())
                .price(savedProduct.getPrice())
                .oldPrice(savedProduct.getOldPrice())
                .description(savedProduct.getDescription())
                .build();
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream().map(s-> {
            return ProductDTO.builder()
                    .id(s.getId())
                    .oldPrice(s.getOldPrice())
                    .name(s.getName())
                    .price(s.getPrice())
                    .type(s.getType())
                    .description(s.getDescription())
                    .productImagePath(s.getImagePath())
                    .build();
        }).collect(Collectors.toList());
    }

    @Override
    public ProductDTO getProduct(long id) throws IOException {
        Product product = productRepository.findById(id).orElseThrow(()-> new RuntimeException("product not found by id : " + id));
        return ProductDTO.builder()
                .name(product.getName())
                .description(product.getDescription())
                .oldPrice(product.getOldPrice())
                .type(product.getType())
                .price(product.getPrice())
                .productImagePath(product.getImagePath())
                .build();
    }

    private void saveProfileImage(Product product, MultipartFile profileImage) throws IOException {
        if (profileImage != null ){
            Path userFolder = Paths.get(USER_FOLDER + product.getGeneratedId()).toAbsolutePath().normalize();
            if (!Files.exists(userFolder)) {
                Files.createDirectories(userFolder);
                log.info(DIRECTORY_CREATED + userFolder);
            }
            Files.deleteIfExists(Paths.get(userFolder + product.getGeneratedId() + DOT + JPG_EXTENSION));
            Files.copy(profileImage.getInputStream(),userFolder.resolve(product.getGeneratedId() + DOT + JPG_EXTENSION), REPLACE_EXISTING);
            product.setImagePath(setProfileImageUrl(product.getGeneratedId()));
            productRepository.save(product);
            log.info(FILE_SAVED_IN_FILE_SYSTEM + profileImage.getOriginalFilename());
        }
    }

    private String setProfileImageUrl(String username) {
        return ServletUriComponentsBuilder.fromCurrentContextPath().path(USER_IMAGE_PATH + username + FORWARD_SLASH + username + DOT + JPG_EXTENSION).toUriString();
    }
    
    private byte[] getProfileImage(String generatedId, String fileName) throws IOException {
        return Files.readAllBytes(Paths.get(USER_FOLDER + generatedId + FORWARD_SLASH + fileName + DOT + JPG_EXTENSION ));
    }
}
