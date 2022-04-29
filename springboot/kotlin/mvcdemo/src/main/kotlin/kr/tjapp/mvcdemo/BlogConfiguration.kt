package kr.tjapp.mvcdemo

import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Bean
import org.springframework.boot.ApplicationRunner

@Configuration
class BlogConfiguration {

    @Bean
    fun databaseInitializer(userRepository: UserRepository,
                            articleRepository: ArticleRepository) = ApplicationRunner {
        val smaldini = userRepository.save(User("smaldini", "Stéphane", "Maldini"))
        articleRepository.save(Article(
                                   title = "Reactor Bismuth is out",
                                   headline = "Lorem ipsum",
                                   content = "dolor sit amet",
                                   author = smaldini
        ))
        articleRepository.save(Article(
                                   title = "Reactor Aluminium has landed",
                                   headline = "Lorem ipsum",
                                   content = "dolor sit amet",
                                   author = smaldini
        ))
    }
}
