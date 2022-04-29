package kr.tjapp.mvcdemo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication
// import org.springframework.boot.Banner

@SpringBootApplication
@EnableConfigurationProperties(BlogProperties::class)
class MvcdemoApplication

fun main(args: Array<String>) {
	  runApplication<MvcdemoApplication>(*args) {
        // setBannerMode(Banner.Mode.OFF)
    }
}
