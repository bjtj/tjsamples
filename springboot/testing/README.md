# Spring Boot with TDD— Part I #

<https://medium.com/@sheikarbaz5/spring-boot-with-tdd-test-driven-development-part-i-be1b90da51e>

## Mockito ##

<https://site.mockito.org/>

Tasty mocking framework for unit tests in Java

```gradle
repositories { mavenCentral() }
dependencies { testImplementation "org.mockito:mockito-core:3.+" }
```

verify interactions

```java
import static org.mockito.Mockito.*;

// mock creation
List mockedList = mock(List.class);

// using mock object - it does not throw any "unexpected interaction" exception
mockedList.add("one");
mockedList.clear();

// selective, explicit, highly readable verification
verify(mockedList).add("one");
verify(mockedList).clear();
```

stub method calls

```java
// you can mock concrete classes, not only interfaces
LinkedList mockedList = mock(LinkedList.class);

// stubbing appears before the actual execution
when(mockedList.get(0)).thenReturn("first");

// the following prints "first"
System.out.println(mockedList.get(0));

// the following prints "null" because get(999) was not stubbed
System.out.println(mockedList.get(999));
```

### MockMvc ###

<https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/web/servlet/MockMvc.html>

**Example**

```java
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

// ...

WebApplicationContext wac = ...;

MockMvc mockMvc = webAppContextSetup(wac).build();

mockMvc.perform(get("/form"))
    .andExpect(status().isOk())
    .andExpect(content().mimeType("text/html"))
    .andExpect(forwardedUrl("/WEB-INF/layouts/main.jsp"));
```

### @Autowire MockMvc - Spring Data Rest ###

<https://stackoverflow.com/a/48626397>

```java
@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc // <-- this is the fix 
public class RestResourceTests {

  @Autowired
  private MockMvc mockMvc; // <-- now injects with repositories wired.
```

## Hamcrest ##

<http://hamcrest.org/>

Matchers that can be combined to create flexible expressions of intent

<http://hamcrest.org/JavaHamcrest/tutorial>

```java
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat; 
import static org.hamcrest.Matchers.*;

public class BiscuitTest {
  @Test 
  public void testEquals() { 
    Biscuit theBiscuit = new Biscuit("Ginger"); 
    Biscuit myBiscuit = new Biscuit("Ginger"); 
    assertThat(theBiscuit, equalTo(myBiscuit)); 
  } 
} 
```
