# Programming 2

Welcome to the Programming 2 course! 👋 In this course, we will deepen our programming skills and apply previously learned programming techniques, including in the context of databases. In addition to syntax and necessary libraries, we will focus on unit testing, automation tools, and version control.

👉 [Full course description](https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3AE)

## Plagiarism & using generative AI tools

**Copying code from other students is strictly forbidden, and automated plagiarism checks are used to detect it**. Systematic plagiarism will lead to a failing grade and a report of cheating.

Also, **using generative AI tools (e.g., ChatGPT or Copilot) to generate solutions directly is strictly forbidden and considered plagiarism**. If you are using Visual Studio Code's GitHub Copilot extension or some other code generation autocomplete extension, make sure they are disabled. Instead, you should use generative AI tools to ask advice, such as "How to filter items in a stream using Java" or "What is the purpose of interfaces in Java". Use these tools to **improve your learning, not replace your thinking**.

## Schedule

> [!IMPORTANT]
> To confirm your course participation, **you must submit the first week's exercises before the deadline**. Course assessment is based on weekly exercise points. Submissions made after the weekly deadline won't earn points.

The course requirements include weekly exercises covering different areas of the course. Exercises are submitted to [GitHub](https://github.com/). **Exercises must be submitted according to the schedule**, and late submissions will generally not be accepted. In cases of force majeure, **extensions must be requested well in advance of the exercise deadline**.

The course's attendance policies follow Haaga-Helia's common policies. Attendance should be marked on Moodle during each session.

The weekly topics and exercise deadlines can be found in Moodle's "Course outline" page.

## Confirming the course participation

**To confirm your course participation, it is necessary to submit the firt week's exercises before the deadline.** The first week's exercises will revisit topics you have learned previously. The purpose of this practice is not to stop anyone from learning or completing the course but to make sure that everyone can get started with the course without problems.

## Submitting exercises

The course has weekly exercises that need to be submitted before the deadline. Exercises will be submitted to GitHub. Don't hesitate to ask for help with the exercises during the lessons from the teacher or your fellow students.

## Assesment

> [!CAUTION]
> Submissions made after the weekly deadline won't earn points, unless discussed otherwise before the deadline.

The course assessment is based on the 0 to 5 grading scale. The final grade is based on the **weekly exercise submissions** and the **final exam points**. At least 20% exercise points (8 out of 40) and 50% of exam points are required for a passing grade.

Based on the weekly exercise points (8 weeks and 5 points from each week), you'll get the **exercise grade** between 0 and 5 using the following formula:

```java
// totalExercisePoints = week1Points + ... + week8Points
public double calculateExerciseGrade(double totalExercisePoints) {
  if (totalExercisePoints < 8) {
    return 0;
  }

  return Math.round(totalExercisePoints / 8);
}
```

Based on the exam points, you'll get and **exam grade** based on the [following formula](./materials/exam-instructions.md).

60% of the final grade is based on the exercise grade and 40% on the exam grade. That is, the final grade is calculated using the following formula:

```java
public int calculateFinalGrade(int exerciseGrade, int examGrade) {
  return Math.round(exerciseGrade * 0.6 + examGrade * 0.4);
}
```

### Exam

Read the [exam instructions](./materials/exam-instructions.md) to learn more about the exam.

## Workload

The course lasts 8 weeks and is worth 5 credits. This means that the official workload in hours is around 135 hours, which responds to around 17 hours a week. That being said, reserve enough time for the course each week.

```java
int durationInWeeks = 8;
int credits = 5;
int workHoursForOneCredit = 27;

int totalWorkHours = credits * workHoursForOneCredit;
System.out.println(totalWorkHours); // 135 hours

double workHoursForOneWeek = 1.0 * totalWorkHours / durationInWeeks;
System.out.println(workHoursForOneWeek); // 16.875 hours a week
```

## Finding information

This course material is mostly based on external online resources, such as documentation and tutorials. Each topic contains links to relevant materials but **you will also need to find relevant resources yourself**.

The purpose of the course exercises is not only to assess whether you have understood the material presented in the lessons or learning materials; rather, solving the exercises requires independent information gathering. Alongside working independently, we recommend asking questions during the lessons.

## Using sources of information

Programming problems often have ready-made or partial solutions available across the Internet, from forums to tutorials. In the worst case, you might find a solution that works for your problem, but don't fully understand what the code does or why it solves the issue. In professional software development, this can lead to potentially serious consequences.

Using online sources and drawing inspiration from them is allowed and encouraged, but you must not simply copy solutions; you need to understand how your code works. Additionally, especially since this is a university course, you are required to cite your sources when you borrow code, for example, from StackOverflow. An appropriate citation could be the webpage URL as a Java comment alongside the borrowed code, or another type of reference compliant with the source’s terms of use.

## Prerequisites

> _"The course prerequisite is that you have passed the course Programming 1 (SOF005AS2AE), or can demonstrate equivalent skills and knowledge prior commencing the course. We recommend that you take the course Data Management and Databases (SOF001AS2AE) alongside the Programming 2 course if you don't already have equivalent skills in basics of databases and SQL."_
>
> [_Course description_](<[https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3A](https://opinto-opas.haaga-helia.fi/course_unit/SOF001AS3AE)>)

If you haven't acquired solid skills from the Programming 1 course, this course will require a significant amount of work and personal effort.
