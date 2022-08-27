package com.digital.entities;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Builder
public class ProductKey implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String productKey;
    private String email;
    private String password;
    private Boolean valid;
    private Double validityTime; // TODO verify this

    @ManyToOne
    private Product product;

}
