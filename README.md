# Programming 2

Welcome to the Programming 2 course! 👋 In this course, we will deepen our programming skills and apply previously learned programming techniques, including in the context of databases. In addition to syntax and necessary libraries, we will focus on unit testing, automation tools, and version control.

👉 [Full course description](https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3AE)

## 📅 Weekly schedule

The course requirements include weekly exercises covering different areas of the course. [GitHub Classroom](https://classroom.github.com/) will be used for the technical implementation of the exercises. Exercises must be submitted according to the schedule, and late submissions will generally not be accepted. In cases of force majeure, _extensions must be requested well in advance of the exercise deadline_.

There are two types of weekly sessions:

- Theory sessions on Wednesdays from 14:00 to 16:45. During these sessions, we will cover the week's topic.
- Lab sessions on Fridays from 11:00 to 13:45 (lunch break at around 11:45 - 12:30). During these sessions, we will work on the week's exercises.

The course's attendance policies follow Haaga-Helia's common policies. Attendance should be marked on Moodle during each session.

The weekly topics and exercise deadlines can be found below. The exercise descriptions can be found in Moodle's "Exercises" tab.

👉 [Here are the code examples covered during the lessons](https://github.com/hh-programming-2/lessons)

| Week | Topic                                   | Deadline       |
| ---- | --------------------------------------- | -------------- |
| 1    | [Version control and tools of the course](#week-1) | 29.10. at 9:00 |
| 2    | [The Map data structure](#week-2)                  | 5.11. at 9:00  |
| 3    | [Unit testing](#week-3)                            | 12.11. at 9:00 |
| 4    | [Inheritance and interfaces](#week-4)              | 19.11. at 9:00 |
| 5    | [Streams and lambdas](#week-5)                     | 26.11. at 9:00 |
| 6    | [JDBC & DAO](#week-6)                              | 3.12. at 9:00  |
| 7    | [Data structures and algorithms](#week-7)          | 10.12. at 9:00 |
| 8    | [Advanced and applied topics](#week-8)             | 13.12. at 23:59 |

<div id="week-1"></div>

### Week 1: Version control and tools of the course

> [!IMPORTANT]
> To confirm your course participation, you must submit the first week's exercises before the deadline.

In the first week of the course, we will get acquainted with the tools we will be using throughout the remainder of the course. Our goal is to enable the application to run smoothly outside of the code editor and to automate if needed, the building, dependency installation, packaging, and testing of the application.

Git version control will be used in this course for distributing assignments, submitting them, and for automatic evaluation. In future courses and in working life, you will likely use version control as an essential part of daily work.

The course's Java content revisits topics covered in Programming 1, aiming to ensure that by the end of the first week, all participants have a sufficient foundation in topics like collections and object-oriented programming to study the subsequent topics.

#### Recommended materials

Command-line/terminal:

> _"In your development process, you'll undoubtedly be required to run some commands in the terminal (or on the "command line" — these are effectively the same thing). This article provides an introduction to the terminal, the essential commands you'll need to enter into it, how to chain commands together, and how to add your own command line interface (CLI) tools."_
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

Java in Visual Studio Code:

- [How to set up Java in Visual Studio Code (YouTube)](https://www.youtube.com/watch?v=BB0gZFpukJU)

#### Exercises

> [!NOTE]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle. Submitting the "Git installation and GitHub account" exercise in Moodle is necessary to receive exercise points.

- Git installation and GitHub account
- Git "Hello world"
- Warming up

---

<div id="week-2"></div>

### Week 2: The Map data structuce

> _"Maps are data structures stores a collection of key-value pairs. Each key is unique and allows for quick access to values. A real life example of a map could be storing the grades for students in a class (student name is key, grade is value)."_
>
> [Data Structures & Algorithms, Google](https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/)

#### Recommended materials

- [Map and HashMap in Java (Coding with John, YouTube)](https://youtu.be/H62Jfv1DJlU)
- [Using Maps to Store Key Value Pairs (dev.java)](https://dev.java/learn/api/collections-framework/maps/)
- [Managing the Content of a Map (dev.java)](https://dev.java/learn/api/collections-framework/working-with-keys-and-values/)
- [Lesson examples](https://github.com/hh-programming-2/lessons?tab=readme-ov-file#lesson-2-map)

#### Exercises

> [!NOTE]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Map exercises

---

<div id="week-3"></div>

### Week 3: Unit testing

This week, we will get familiar with JUnit unit testing and write our own unit tests for existing code.

#### Recommended materials

- [JUnit 5 User Guide (junit.org)](https://junit.org/junit5/docs/current/user-guide/)
- [Java Unit Testing with JUnit (Coding with John, YouTube)](https://youtu.be/vZm0lHciFsQ)
- [Introduction to testing (mooc.fi)](https://java-programming.mooc.fi/part-6/3-introduction-to-testing)
- [Lesson examples](https://github.com/hh-programming-2/lessons?tab=readme-ov-file#lesson-3-junit)

#### Exercises

> [!NOTE]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- JUnit exercises

---

<div id="week-4"></div>

### Week 4: Inheritance and interfaces

This week, we will deepen our object-oriented programming skills by exploring inheritance and interfaces. Inheritance and interfaces are object-oriented solutions that promote code reusability and compatibility.

#### Recommended materials

- [Objects, Classes, Interfaces, Packages, and Inheritance (dev.java)](https://dev.java/learn/oop/)
- [Java Polymorphism Fully Explained In 7 Minutes (Coding with John, YouTube)](https://youtu.be/jhDUxynEQRI)
- [Super Keyword in Java Full Tutorial - How to Use "super" (Coding with John, YouTube)](https://www.youtube.com/watch?v=Qb_NUn0TSAU)
- [Inheritance and interfaces (mooc.fi)](https://java-programming.mooc.fi/part-9)
- [Lesson examples](https://github.com/hh-programming-2/lessons?tab=readme-ov-file#lesson-4-object-modelling-inheritance-and-interfaces)

#### Exercises

> [!NOTE]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Interfaces and inheritance

---

<div id="week-5"></div>

### Week 5: Streams and lambdas

> _"The **Stream API** is probably the second most important feature added to Java SE 8, after the **lambda expressions**. In a nutshell, the Stream API is about providing an implementation of the well known map-filter-reduce algorithm to the JDK._
>
> _The Collections Framework is about storing and organizing your data in the memory of your JVM. You can see the Stream API as a companion framework to the Collections Framework, to process this data in a very efficient way. Indeed, you can open a stream on a collection to process the data it contains."_
>
> Processing Data in Memory Using the Stream API. https://dev.java/learn/api/streams/map-filter-reduce/

#### Recommended materials

- [The Stream API (dev.java)](https://dev.java/learn/api/streams/)
- [Lambda Expressions in Java (Coding with John, YouTube)](https://youtu.be/tj5sLSFjVj4)
- [Optionals In Java (Coding with John, YouTube)](https://youtu.be/vKVzRbsMnTQ)
- [Java 8 STREAMS Tutorial (Oggi AI, YouTube)](https://youtu.be/t1-YZ6bF-g0)
- [The Java 8 Stream API Tutorial (baeldung.com)](https://www.baeldung.com/java-8-streams)
- [Lesson examples](https://github.com/hh-programming-2/lessons?tab=readme-ov-file#lesson-5-streams-lambdas-and-optionals)

#### Exercises

> [!NOTE]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Streams and lambdas

---

<div id="week-6"></div>

### Week 6: JDBC & DAO

This week, we will start by learning how to establish a connection to a database from a Java program and perform basic CRUD operations (Create, Read, Update, & Delete). We will also explore the DAO (Data Access Object) design pattern, which models both database operations and the data contained in the database using Java classes.

#### Recommended materials

- [Java Database Connectivity (Telusko, YouTube)](https://youtu.be/7v2OnUti2eM)
- [Introduction to JDBC (baeldung.com)](https://www.baeldung.com/java-jdbc)
- [Lesson examples](https://github.com/hh-programming-2/lessons?tab=readme-ov-file#lesson-6-database-connection-with-java-jdbc)

#### Exercises

> [!NOTE]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- SQL databases (Chinook, JDBC & DAO)

---

<div id="week-7"></div>

### Week 7: Data structures and algorithms

> _"A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer."_
>
> Oxford Languages

#### Recommended materials

- [Wordplay exercise (lesson exercise)](https://github.com/ohjelmointi2/wordplay-exercise)
- [Lesson examples](https://github.com/hh-programming-2/lessons?tab=readme-ov-file#lesson-7-data-structures-and-algorithms)

> _"The purpose of this exercise is to explore various data structures and algorithms, especially from the perspective of their performance. We will also touch on performance testing of programs and the concept of asymptotic runtime._
>
> _The first part of the exercise focuses on the performance of Java lists. In the second part, the application to be developed will use an open dataset of names and dictionary entries to find Finnish first names that also have another meaning in the dictionary. Examples of such names include Tuuli ("wind") and Onni ("luck" or "happiness")."_

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

#### Exercises

> [!NOTE]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Sorting and filtering

---

<div id="week-8"></div>

### Week 8: Advanced and applied topics

At the end of the course, we will deepen and apply previous topics, exploring concepts such as concurrency and recursion.

#### Recommended materials

- [Virtual Threads (dev.java)](https://dev.java/learn/new-features/virtual-threads/)
- [Lesson: Concurrency (docs.oracle.com)](https://docs.oracle.com/javase/tutorial/essential/concurrency/)
- [Java Concurrency (baeldung.com)](https://www.baeldung.com/java-concurrency)
- [Java Threads (w3schools.com)](https://www.w3schools.com/java/java_threads.asp)
- [Lesson examples](https://github.com/hh-programming-2/lessons?tab=readme-ov-file#lesson-8-threads-and-recursion)

#### Exercises

> [!NOTE]  
> You can find the exercise descriptions in the "Exercises" tab in Moodle.

- Commit history
- ⭐ Bonus exercise: Generics and Sudoku

---

## ✅ Confirming the course participation

**To confirm your course participation, it is necessary to submit the firt week's exercises before the deadline.** The first week's exercises will revisit topics you have learned previously. The purpose of this practice is not to stop anyone from learning or completing the course but to make sure that everyone can get started with the course without problems.

## 💬 Communication channels

Course-related discussion is organized in Teams. If you are stuck with your code or you don't understand the materials or exercises, don't hesitate to ask for help. It is likely that other students have similar issues, so send your questions to the course channel for others to learn as well instead of as a private message.

## 📥 Submitting exercises

The course has weekly exercises which need to be submitted before the deadline. Exercises will be submitted to GitHub. Don't hesitate to ask for help with the exercises during the lessons or in Teams from the teacher or your fellow students.

## 📊 Assesment

The course assesment is based on the 0 to 5 grading scale. The final grade is calculated from the exercises' average so that each week's exercises have the same weight. Grades from individual exercises aren't rounded, but the possible rounding is done only once the final grade is calculated.

This is roughly the formula for the final grade:

```java
int numberOfWeeks = 8

double week1GitHelloWorldPoints = 1
double week1WarmingUpPoints = 4.5
// Week points are from 0 to 5
// Week 1 points calculation is a bit special, because there's two separate exercises
double week1Points = (week1GitHelloWorldPoints + week2WarmingUpPoints * 0.8)
double week2Points = 4.9
double week3Points = 4.4
double week4Points = 4.2
double week5Points = 3.5
double week6Points = 2.7
double week7Points = 5.0
double week8Points = 5.0

// The final grade is calculated as the average of the week points and rounded up 
double totalPoints = week1Points + week2Points + week3Points + week4Points // ...
double finalGrade = Math.round(totalPoints / numberOfWeeks)
System.out.println("Your final grade is: " + finalGrade);
```

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

> _"The course prerequisite is that you have passed the course Programming 1 (SOF005AS2AE), or can demonstrate equivalent skills and knowledge prior commencing the course. We recommend that you take the course Data Management and Databases (SOF001AS2AE) alongside the Programming 2 course if you don't already have equivalent skills in basics of databases and SQL."_
>
> [_Course description_](<[https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3A](https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3AE)>)

If you haven't acquired solid skills from the Programming 1 course, this course will require a significant amount of work and personal effort.
