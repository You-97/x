package com.digital.controllers;

import com.digital.dtos.ProductKeyDTO;
import com.digital.services.KeyServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/keys")
public class KeyResource {

    private final KeyServiceImpl keyService;

    public KeyResource(KeyServiceImpl keyService) {
        this.keyService = keyService;
    }

    @PostMapping()
    public ResponseEntity<ProductKeyDTO> createProduct(ProductKeyDTO dto) {
        return ResponseEntity.ok().body(keyService.addNewKeyInDatabase(dto));
    }

    @DeleteMapping("/{id}")
    public void deleteProductKey(@PathVariable("id") long id) {
        keyService.deleteKeyInDatabase(id);
    }
}
