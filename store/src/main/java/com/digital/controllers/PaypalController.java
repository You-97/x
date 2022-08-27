package com.digital.controllers;

import com.digital.services.EmailService;
import com.digital.services.PaypalService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/paypal")
public class PaypalController {

    private final PaypalService paypalService;
    private final EmailService emailService;

    public PaypalController(PaypalService paypalService, EmailService emailService) {
        this.paypalService = paypalService;
        this.emailService = emailService;
    }


    @PostMapping(value = "/make/payment")
    public Map<String, Object> makePayment(@RequestParam("sum") String sum){
        return paypalService.createPayment(sum);
    }

    @PostMapping(value = "/complete/payment")
    public Map<String, Object> completePayment(HttpServletRequest request){
        return paypalService.completePayment(request);
    }

    @PostMapping("/email")
    public String sendEMail(@RequestBody String email) {
        emailService.sendNewPasswordEmail("Youssef","****","youssefelgourari97@gmail.com");
        return "Hello";
    }
}
