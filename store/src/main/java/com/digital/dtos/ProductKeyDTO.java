package com.digital.dtos;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
public class ProductKeyDTO {

    private String productKey;
    private String email;
    private String password;
    private Double price;
    private Date validityTime;
    private long productId;
}
