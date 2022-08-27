package com.digital.enumeration;

import static com.digital.constants.Authority.*;

public enum Role {
    ROLE_USER(USER_AUTHORITIES);

    private final String[] authorities;

    Role(String... authorities) {
        this.authorities = authorities;
    }

    public String[] getAuthorities() {
        return authorities;
    }
}
