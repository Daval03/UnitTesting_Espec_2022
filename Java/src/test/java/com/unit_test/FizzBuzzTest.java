package com.unit_test;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class FizzBuzzTest {

    public FizzBuzz FB;
    @BeforeEach
    public void setUp(){
        FB = new FizzBuzz();
        System.out.println("Created");
    }
    
    @DisplayName("Play FizzBuzz with number = 1") 
    @Test
    public void testNumber() {
        String fizzBuzz = FB.play(1);

        Assertions.assertEquals(fizzBuzz, "1");
    }

    @DisplayName("Play FizzBuzz with number = 3") 
    @Test
    public void testFizz() {
        String fizzBuzz = FB.play(3);

        Assertions.assertEquals(fizzBuzz, "Fizz");
    }

    @DisplayName("Play FizzBuzz with number = 5") 
    @Test
    public void testBuzz() {
        String fizzBuzz = FB.play(5);

        Assertions.assertEquals(fizzBuzz, "Buzz");
    }

    @DisplayName("Don´t play FizzBuzz with number = 0") 
    @Test
    public void testZero() {
        Assertions.assertThrows(IllegalArgumentException.class, 
        () -> FB.play(0));
    }

    @AfterEach
    public void tearDown(){
        FB = null;
    }
}
