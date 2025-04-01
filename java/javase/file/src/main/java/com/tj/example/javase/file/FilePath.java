package com.tj.example.javase.file;

import java.io.File;

public class FilePath {

    public static void main(String[] args) {
        // working directory
        System.out.println(System.getProperty("user.dir")); // => `pwd` or `$pwd`
        System.out.println(new File(".").getAbsolutePath()); // => relative path to `pwd` or `$pwd` (e.g. `pwd` + '/.')
        
        // system file separator
        System.out.println(File.separator); // `/` or `\`

        // path manipulation
        System.out.println(new File("/a/b/c").getParent()); // => `/a/b` or `\a\b`
        System.out.println(new File("/a/b", "c")); // => `/a/b/c` or `\a\b\c`
        System.out.println(new File("/a/b", "/c")); // => `/a/b/c` or `\a\b\c`
        System.out.println(new File("/a/b", "..")); // => `/a/b/..` or `\a\b\..`
        System.out.println(new File("/a/b", "../c")); // => `/a/b/../c` or `\a\b\..\c`
        System.out.println(new File("/a/b", "../../../../c")); // => `/a/b/../../../../c` or `\a\b\..\..\..\..\c`
    }
}
