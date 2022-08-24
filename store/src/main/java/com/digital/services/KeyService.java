package com.digital.services;

import com.digital.dtos.AuthKeys;
import com.digital.dtos.ProductKeyDTO;

import java.util.List;

public interface KeyService {

    ProductKeyDTO addNewKeyInDatabase(ProductKeyDTO key);

    void deleteKeyInDatabase(Long id);

    List<AuthKeys> getAllCompositeKeysByProductId(Long productId, Long quantity);

    List<String> getAllSimpleKeysByProductId(Long productId, Long quantity);
}
