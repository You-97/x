package com.digital.dtos;

import lombok.Data;

@Data
public class PayloadRestPassword {

    private String email;
    private String password;
    private String last;
}
