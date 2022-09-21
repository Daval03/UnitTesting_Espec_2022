package com.unit_test;

public class FizzBuzz {

    public String play(int i) {

        if(i==0) throw new IllegalArgumentException("Number must not be zero.");

        if (i%3==0) return "Fizz";
        else if (i%5==0) return "Buzz";
        
        return String.valueOf(i);
    }
    
}
