package com.digital.services;

import com.digital.dtos.AuthKeys;
import com.digital.dtos.ProductKeyDTO;
import com.digital.entities.Product;
import com.digital.entities.ProductKey;
import com.digital.repositories.ProductKeyRepository;
import com.digital.repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class KeyServiceImpl implements KeyService {

    private final ProductKeyRepository productKeyRepository;
    private final ProductRepository productRepository;

    public KeyServiceImpl(ProductKeyRepository productKeyRepository, ProductRepository productRepository) {
        this.productKeyRepository = productKeyRepository;
        this.productRepository = productRepository;
    }

    @Override
    public ProductKeyDTO addNewKeyInDatabase(ProductKeyDTO key) {
        Product product = productRepository.findById(key.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not exist !!"));
        ProductKey productKey = ProductKey.builder()
                .email(key.getEmail())
                .password(key.getPassword())
                .productKey(key.getProductKey())
                .valid(true)
                .product(product)
                .validityTime(key.getValidityTime())
                .build();
        ProductKey resultProductKey = productKeyRepository.save(productKey);
        return ProductKeyDTO.builder()
                .email(resultProductKey.getEmail())
                .password(resultProductKey.getPassword())
                .productKey(resultProductKey.getProductKey())
                .validityTime(resultProductKey.getValidityTime())
                .build();
    }

    @Override
    public void deleteKeyInDatabase(Long id) {
        ProductKey key = productKeyRepository.findById(id).orElseThrow(()-> new RuntimeException("Product ket not exist in data base"));
        key.setProduct(null);
        productKeyRepository.saveAndFlush(key);
        productKeyRepository.delete(key);
    }

    @Override
    public List<AuthKeys> getAllCompositeKeysByProductId(Long productId, Long quantity) {

        Product prd = productRepository.findById(productId).orElseThrow(()-> new RuntimeException("Product not found in database"));
        List<ProductKey> keys = productKeyRepository.findProductKeysByProduct(prd);
        List<AuthKeys> responseKeys = new ArrayList<>();

        for (int i = 0; i < quantity; i++) {
            AuthKeys authKeys = AuthKeys.builder()
                    .email(keys.get(i).getEmail())
                    .password(keys.get(i).getPassword())
                    .build();
            responseKeys.add(authKeys);
        }
        return responseKeys;
    }

    @Override
    public List<String> getAllSimpleKeysByProductId(Long productId, Long quantity) {
        Product prd = productRepository.findById(productId).orElseThrow(()-> new RuntimeException("Product not found in database"));
        List<ProductKey> keys = productKeyRepository.findProductKeysByProduct(prd);
        List<String> responseKeys = new ArrayList<>();

        for (int i = 0; i < quantity; i++) {
            responseKeys.add(keys.get(i).getProductKey());
        }
        return responseKeys;
    }
}
