package com.digital.repositories;

import com.digital.entities.Product;
import com.digital.entities.ProductKey;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductKeyRepository extends JpaRepository<ProductKey, Long> {

    public List<ProductKey> findProductKeysByProduct(Product product);
}
