package com.digital.exception.domain;

public class EmailExistException extends Exception {

    public EmailExistException(String message) {
        super(message);
    }
}
