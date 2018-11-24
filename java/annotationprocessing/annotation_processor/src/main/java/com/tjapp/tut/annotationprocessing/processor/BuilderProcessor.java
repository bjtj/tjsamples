package com.tjapp.tut.annotationprocessing.processor;

import java.io.*;
import java.util.*;
import javax.tools.*;
import javax.lang.model.*;
import javax.lang.model.type.*;
import javax.lang.model.element.*;
import javax.annotation.*;
import javax.annotation.processing.*;
import com.google.auto.service.*;


@SupportedAnnotationTypes("com.tjapp.tut.annotationprocessing.processor.BuilderProperty")
@SupportedSourceVersion(SourceVersion.RELEASE_8)
@AutoService(Processor.class)
public class BuilderProcessor extends AbstractProcessor {

    // @Override
    // public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
    // 	return false;
    // }

    @Override
    public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
	for (TypeElement annotation : annotations) {
	    Set<? extends Element> annotationElements = roundEnv.getElementsAnnotatedWith(annotation);
	    // Map<Boolean, List<Element>> annotatedMethods = annotatedElements.stream().
	    // 	collect(Collectors.
	    // 		partitioningBy(element -> 
	    // 			       ((ExecutableType)elment.asType()).getParameterTypes().size() == 1 &&
	    // 			       element.getSimpleName().toString().startsWith("set")));

	    List<Element> setters = new ArrayList<Element>();
	    List<Element> otherMethods = new ArrayList<Element>();

	    for (Element element : annotationElements) {
		if (((ExecutableType)element.asType()).getParameterTypes().size() == 1 &&
		    element.getSimpleName().toString().startsWith("set")) {
		    setters.add(element);
		} else {
		    otherMethods.add(element);
		}
	    }

	    // otherMethods.forEach(element -> processingEnv.getMessager().printMessage(Diagnostic.Kind.ERROR, "@BuilderProperty must be applied to a setXxx method with a single argument", element));

	    for (Element element : otherMethods) {
		processingEnv.getMessager().
		    printMessage(Diagnostic.Kind.ERROR,
				 "@BuilderProperty must be applied to a setXxx method with a single argument",
				 element);
	    }

	    if (setters.isEmpty()) {
		continue;
	    }

	    String className = ((TypeElement)setters.get(0).getEnclosingElement()).getQualifiedName().toString();

	    // Map<String, String> setterMap = setters.stream().
	    // 	collect(Collectors.
	    // 		toMap(setter ->
	    // 		      setter.getSimpleName().toString(),
	    // 		      setter ->
	    // 		      ((ExecutableType)setter.asType()).getParameterTypes().get(0).toString()));

	    Map<String, String> setterMap = new HashMap<String, String>();
	    for (Element setter : setters) {
		setterMap.put(setter.getSimpleName().toString(),
			      ((ExecutableType)setter.asType()).getParameterTypes().get(0).toString());
	    }

	    try {
		writeBuilderFile(className, setterMap);
	    } catch (IOException e) {
		e.printStackTrace();
	    }

	}
	return true;
    }

    private void writeBuilderFile(String className, Map<String, String> setterMap) throws IOException {
	String packageName = null;
	int lastDot = className.lastIndexOf('.');
	if (lastDot > 0) {
	    packageName = className.substring(0, lastDot);
	}

	String simpleClassName = className.substring(lastDot + 1);
	String builderClassName = className + "Builder";
	String builderSimpleClassName = builderClassName.substring(lastDot + 1);

	JavaFileObject builderFile = processingEnv.getFiler().createSourceFile(builderClassName);
	PrintWriter out = null;
	try {
	    out = new PrintWriter(builderFile.openWriter());
	    if (packageName != null) {
		out.print("package ");
		out.print(packageName);
		out.println(";");
		out.println();
	    }

	    out.print("public class ");
	    out.print(builderSimpleClassName);
	    out.println(" {");
	    out.println();

	    out.print("    private ");
	    out.print(simpleClassName);
	    out.print(" object = new ");
	    out.print(simpleClassName);
	    out.println("();");
	    out.println();

	    out.print("    public ");
	    out.print(simpleClassName);
	    out.println(" build() {");
	    out.println("        return object;");
	    out.println("    }");
	    out.println();

	    // setterMap.entrySet().forEach(setter -> {
	    for (Map.Entry<String, String> setter : setterMap.entrySet()) {
		String methodName = setter.getKey();
		String argumentType = setter.getValue();

		out.print("    public ");
		out.print(builderSimpleClassName);
		out.print(" ");
		out.print(methodName);

		out.print("(");

		out.print(argumentType);
		out.println(" value) {");
		out.print("        object.");
		out.print(methodName);
		out.println("(value);");
		out.println("        return this;");
		out.println("    }");
		out.println();

		// });
	    }

	    out.println("}");
	} finally {
	    if (out != null) {
		out.close();
	    }
	}
    }
}
