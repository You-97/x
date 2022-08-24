package com.digital.services;

import com.digital.dtos.ProductDTO;

import java.io.IOException;
import java.util.List;

public interface ProductService {

    ProductDTO createProduct(ProductDTO dto) throws IOException;
    void deleteProduct(Long id);
    ProductDTO updateProduct(ProductDTO dto) throws IOException;
    List<ProductDTO> getAllProducts();
    ProductDTO getProduct(long id) throws IOException;
}
