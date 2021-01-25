package com.journaldev.spring.main;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

// https://mkyong.com/unittest/junit-4-tutorial-2-expected-exception-test/
// https://stackoverflow.com/a/6527990
// https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html

public class SpringMainTest {

    @Rule
    public ExpectedException expectedEx = ExpectedException.none();

    @Test
    public void testSpringMain() {
	expectedEx.expect(RuntimeException.class);
	expectedEx.expectMessage("Dummy Exception");
	
	SpringMain.main(null);
    }
}
