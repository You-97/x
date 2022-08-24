package com.digital.dtos;

import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
public class ProductDTO {

    private Long id;
    private String description;
    private Double oldPrice;
    private String name;
    private String type;
    private Double price;
    private MultipartFile image;
    private String productImagePath;
}
