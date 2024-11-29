# Programming 2

Welcome to the Programming 2 course! 👋 In this course, we will deepen our programming skills and apply previously learned programming techniques, including in the context of databases. In addition to syntax and necessary libraries, we will focus on unit testing, automation tools, and version control.

![cat typing](https://github.com/user-attachments/assets/00f31207-cd68-4bb7-8b78-d0fc0d9b8d67)

## 📅 Weekly schedule

The course requirements include weekly exercises covering different areas of the course. GitHub Classroom and a Teams group will be used for the technical implementation of the assignments. Assignments must be submitted according to the schedule, and late submissions will generally not be accepted. In cases of force majeure, extensions must be requested well in advance of the assignment deadline.

[Here are the code examples covered during the lessons](https://github.com/hh-programming-2/lessons)


### Week 1: Version control and tools of the course

In the first week of the course, we will get acquainted with the tools we will be using throughout the remainder of the course. Our goal is to enable the application to run smoothly outside of the code editor and to automate, if needed, the building, dependency installation, packaging, and testing of the application.

Git version control will be used in this course for distributing assignments, submitting them, and for automatic evaluation. In future courses and in working life, you will likely use version control as an essential part of daily work.

The course's Java content revisits topics covered in Programming 1, aiming to ensure that by the end of the first week, all participants have a sufficient foundation in topics like collections and object-oriented programming to study the subsequent topics.

#### Recommended materials

Command-line/terminal:

> *"In your development process, you'll undoubtedly be required to run some commands in the terminal (or on the "command line" — these are effectively the same thing). This article provides an introduction to the terminal, the essential commands you'll need to enter into it, how to chain commands together, and how to add your own command line interface (CLI) tools."*
>
> [Command line crash course. mdn web docs.](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

Git:

- [What is version control? (Atlassian)](https://www.atlassian.com/git/tutorials/what-is-version-control). Also, check the following [video](https://youtu.be/xQujH0ElTUg).
- [What is Git (Atlassian)](https://www.atlassian.com/git/tutorials/what-is-git)
- [Install Git (Atlassian)](https://www.atlassian.com/git/tutorials/install-git)
- [Git add](https://www.atlassian.com/git/tutorials/saving-changes)
- [Git Cheat Sheet, pdf (GitHub)](https://education.github.com/git-cheat-sheet-education.pdf)

Gradle:

- [Gradle tutorial for complete beginners (YouTube)](https://youtu.be/-dtcEMLNmn0)

#### Exercises (DL 29.10. at 22)

> [!IMPORTANT]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Git "Hello world
- Warming up

----

### Week 2: The Map data structuce

> *"Maps are data structures stores a collection of key-value pairs. Each key is unique and allows for quick access to values. A real life example of a map could be storing the grades for students in a class (student name is key, grade is value)."*
>
> [*Data Structures & Algorithms, Google*](https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/)

#### Recommended materials

- [Map and HashMap in Java (Coding with John, YouTube)](https://youtu.be/H62Jfv1DJlU)
- [Using Maps to Store Key Value Pairs (dev.java)](https://dev.java/learn/api/collections-framework/maps/)
- [Managing the Content of a Map (dev.java)](https://dev.java/learn/api/collections-framework/working-with-keys-and-values/)
- [Ohjelmointi 2 kurssin map-materiaali](https://ohjelmointi2.github.io/map/)

#### Exercises (DL 5.11. at 22)

> [!IMPORTANT]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Map exercises

----

### Week 3: Unit testing

This week, we will get familiar with JUnit unit testing and write our own unit tests for existing code.

#### Recommended materials

- [JUnit 5 User Guide (junit.org)](https://junit.org/junit5/docs/current/user-guide/)
- [Java Unit Testing with JUnit (Coding with John, YouTube)](https://youtu.be/vZm0lHciFsQ)
- [Johdatus ohjelmien testaamiseen (mooc.fi)](https://ohjelmointi-20.mooc.fi/osa-6/3-johdatus-ohjelmien-testaamiseen)
- [Ohjelmointi 2 kurssin JUnit materiaalit (ohjelmointi2.github.io)](https://ohjelmointi2.github.io/testaus/)

#### Exercises (DL 12.11. at 22)

> [!IMPORTANT]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- JUnit exercises

----

### Week 4: Inheritance and interfaces

This week, we will deepen our object-oriented programming skills by exploring inheritance and interfaces. Inheritance and interfaces are object-oriented solutions that promote code reusability and compatibility.

#### Recommended materials

- [Objects, Classes, Interfaces, Packages, and Inheritance (dev.java)](https://dev.java/learn/oop/)
- [Java Polymorphism Fully Explained In 7 Minutes (Coding with John, YouTube)](https://youtu.be/jhDUxynEQRI)
- [Super Keyword in Java Full Tutorial - How to Use "super" (Coding with John, YouTube)](https://www.youtube.com/watch?v=Qb_NUn0TSAU)
- [Perintä ja rajapinnat (mooc.fi)](https://ohjelmointi-20.mooc.fi/osa-9)
- [Ohjelmointi 2 kurssin perintä ja rajapinnat materiaalit (ohjelmointi2.github.io)](https://ohjelmointi2.github.io/perint%C3%A4-ja-rajapinnat/)

#### Exercises (DL 19.11. at 22)

> [!IMPORTANT]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Interfaces and inheritance

-----

### Week 5: Streams and lambdas

> *"The **Stream API** is probably the second most important feature added to Java SE 8, after the **lambda expressions**. In a nutshell, the Stream API is about providing an implementation of the well known map-filter-reduce algorithm to the JDK.*
>
> *The Collections Framework is about storing and organizing your data in the memory of your JVM. You can see the Stream API as a companion framework to the Collections Framework, to process this data in a very efficient way. Indeed, you can open a stream on a collection to process the data it contains."*
>
> Processing Data in Memory Using the Stream API. https://dev.java/learn/api/streams/map-filter-reduce/

#### Recommended materials

- [The Stream API (dev.java)](https://dev.java/learn/api/streams/)
- [Lambda Expressions in Java (Coding with John, YouTube)](https://youtu.be/tj5sLSFjVj4)
- [Optionals In Java (Coding with John, YouTube)](https://youtu.be/vKVzRbsMnTQ)
- [Java 8 STREAMS Tutorial (Oggi AI, YouTube)](https://youtu.be/t1-YZ6bF-g0)
- [The Java 8 Stream API Tutorial (baeldung.com)](https://www.baeldung.com/java-8-streams)
- [Ohjelmointi 2 kurssin stream-lambda-materiaali](https://ohjelmointi2.github.io/stream-lambda)

#### Exercises (DL 26.11. at 22)

> [!IMPORTANT]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Streams and Lambdas

-----

### Week 6: JDBC & DAO

This week, we will start by learning how to establish a connection to a database from a Java program and perform basic CRUD operations (Create, Read, Update, & Delete). We will also explore the DAO (Data Access Object) design pattern, which models both database operations and the data contained in the database using Java classes.

#### Recommended materials

- [Java Database Connectivity (Telusko, YouTube)](https://youtu.be/7v2OnUti2eM)
- [Introduction to JDBC (baeldung.com)](https://www.baeldung.com/java-jdbc)
- [Ohjelmointi 2 kurssin JDBC-materiaali, osin hieman vanhentunutta](https://ohjelmointi2.github.io/tietokannat/)

#### Exercises (DL 3.12. at 22)

> [!IMPORTANT]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- SQL databases (Chinook, JDBC & DAO)

-----

### Week 7: Data structures and algorithms

> *"A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer."*
>
> Oxford Languages

#### Recommended materials

Lesson exercise:

- Wordplay-exercise

Th

> *"The purpose of this exercise is to explore various data structures and algorithms, especially from the perspective of their performance. We will also touch on performance testing of programs and the concept of "asymptotic runtime.*
>
> *The first part of the exercise focuses on the performance of Java lists. In the second part, the application to be developed will use an open dataset of names and dictionary entries to find Finnish first names that also have another meaning in the dictionary. Examples of such names include Tuuli ("wind") and Onni ("luck" or "happiness")"*

Videos:

- [Sorting Algorithms Explained Visually (Beyond Fireship)](https://youtu.be/RfXt_qHDEPw)
- [Quicksort Sort Algorithm in Java (Coding with John, YouTube)](https://www.youtube.com/watch?v=h8eyY7dIiN4)
- [Merge Sort Algorithm in Java (Coding with John, YouTube)](https://www.youtube.com/watch?v=bOk35XmHPKs)
- [Insertion Sort Algorithm in Java (Coding with John, YouTube)](https://www.youtube.com/watch?v=0lOnnd50cGI)
- [Bubble Sort Algorithm Tutorial in Java (Coding with John, YouTube)](https://www.youtube.com/watch?v=g8qeaEd2jTc)

Articles:

- [Algorithms Every Programmer Should Know (dev.to)](https://dev.to/surajondev/algorithms-every-programmer-should-know-part-1-searching-algorithm-1hd3)
- [10 Algorithms Every Developer Should Learn (dev.to)](https://dev.to/codesphere/10-algorithms-every-developer-should-learn-3lnm)
- [6 Data Structures Every Programmer Should Learn (medium.com)](https://medium.com/javarevisited/6-data-structures-every-programmer-should-learn-a24de0f3fc3b)
- [Ohjelmointi 2 kurssin tietorakenteet ja algoritmit materiaali](https://ohjelmointi2.github.io/algoritmit/)

#### Exercises (DL 10.12. at 22)

> [!IMPORTANT]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Sorting and filtering

-----

### Week 8: Advanced and applied Topics

At the end of the course, we will deepen and apply previous topics, exploring concepts such as concurrency and recursion.

#### Recommended materials

- [Virtual Threads (dev.java)](https://dev.java/learn/new-features/virtual-threads/) 
- [Lesson: Concurrency (docs.oracle.com)](https://docs.oracle.com/javase/tutorial/essential/concurrency/) 
- [Java Concurrency (baeldung.com)](https://www.baeldung.com/java-concurrency) 
- [Java Threads (w3schools.com)](https://www.w3schools.com/java/java_threads.asp)
- [Ohjelmointi 2: rinnakkaisuus (ohjelmointi2.github.io)](https://ohjelmointi2.github.io/rinnakkaisuus/)

**Exercises (DL 15.12. at 22)**

> [!IMPORTANT]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Commit history

-----

## ✅ Confirming the course participation

**To confirm your course participation, it is necessary to submit the firt week's exercises before the deadline.** The first week's exercises will revisit topics you have learned previously. The purpose of this practice is not to stop anyone from learning or completing the course but to make sure that everyone can get started with the course without problems.

## 💬 Communication channels

Course-related discussion is organized in Teams. If you are stuck with your code or you don't understand the materials or exercises, don't hesitate to ask for help. It is likely that other students have similar issues, so send your questions to the course channel for others to learn as well instead of as a private message.

## 📥 Submitting exercises

The course has weekly exercises which need to be submitted before the deadline. Exercises will be submitted to GitHub. Don't hesitate to ask for help with the exercises during the lessons or in Teams from the teacher or your fellow students.

## 📊 Assesment

The course assesment is based on the 0 to 5 grading scale. The final grade is calculated from the exercises' average so that each week's exercises have the same weight. Grades from individual exercises aren't rounded, but the possible rounding is done only once the final grade is calculated.

## ⏱️ Workload

The course lasts 8 weeks and is worth 5 credits. This means that the official workload in hours is around 135 hours, which responds to around 17 hours a week. That being said, reserve enough time for course each week.

```java
int durationInWeeks = 8;
int credits = 5;
int workHoursForOneCredit = 27;

int totalWorkHours = credits * workHoursForOneCredit;
System.out.println(totalWorkHours); // 135 hours

double workHoursForOneWeek = 1.0 * totalWorkHours / durationInWeeks;
System.out.println(workHoursForOneWeek); // 16.875 hours a week
```


## 🔍 Finding information

This course material is mostly based on external online resources, such as documentation and tutorials. Each topic contains links to relevant materials but **you will also need to find relevant resources yourself**.

The purpose of the course exercises is not only to assess whether you have understood the material presented in the lessons or learning materials; rather, solving the exercises requires independent information gathering. Alongside working independently, we recommend asking questions and discussing topics on the course's Teams channel.

## 📑 Using sources of information

Programming problems often have ready-made or partial solutions available across the Internet, from forums to tutorials. In the worst case, you might find a solution that works for your problem but don't fully understand what the code does or why it solves the issue. In professional software development, this can lead to potentially serious consequences.

Using online sources and drawing inspiration from them is allowed and encouraged, but you must not simply copy solutions; you need to understand how your code works. Additionally, especially since this is a university course, you are required to cite your sources when you borrow code, for example, from StackOverflow. An appropriate citation could be the webpage URL as a Java comment alongside the borrowed code, or another type of reference compliant with the source’s terms of use.

## 🧠 Prerequisites

> *"The course prerequisite is that you have passed the course Programming 1 (SOF005AS2AE), or can demonstrate equivalent skills and knowledge prior commencing the course. We recommend that you take the course Data Management and Databases (SOF001AS2AE) alongside the Programming 2 course if you don't already have equivalent skills in basics of databases and SQL."*
>
> [*Course description*]([https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3A](https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3AE))

If you haven't acquired solid skills from the Programming 1 course, this course will require a significant amount of work and personal effort.

