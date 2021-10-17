import java.util.HashMap;
import java.util.Random;

class Flywaight {

    private static String employeeType[] = { "Developer", "Tester" };
    private static String skills[] = { "JS", "Java", "HTML" };

    public static void main(String args[]) {
        for (int i = 0; i < 15; i++) {
            __Employee e = __EmployeeFactory.getEmployee(getRandomEmployeeType());
            e.assignSkill(getRandomSkill());
            e.task();
        }

        System.out.println("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

        for (int i = 0; i < 10; i++) {
            __Employee e = __EmployeeFactory.getEmployee("Developer");
            e.assignSkill(getRandomSkill());
            e.task();
        }

        System.out.println("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

        for (int i = 0; i < 10; i++) {
            __Employee e = __EmployeeFactory.getEmployee("Tester");
            e.assignSkill(getRandomSkill());
            e.task();
        }

    }

    public static String getRandomEmployeeType() {
        Random r = new Random();
        int randInt = r.nextInt(employeeType.length);
        return employeeType[randInt];
    }

    public static String getRandomSkill() {
        Random r = new Random();
        int randInt = r.nextInt(skills.length);
        return skills[randInt];
    }
}

interface __Employee {
    public void assignSkill(String skill);

    public void task();
}

class Developer implements __Employee {
    private final String JOB;
    private String skill;

    public Developer() {
        this.JOB = "Fix the bugs";
    }

    @Override
    public void assignSkill(String skill) {
        this.skill = skill;

    }

    @Override
    public void task() {
        System.out.println("Developer with skill: " + this.skill + ", and with Job : " + this.JOB);

    }

}

class Tester implements __Employee {
    private final String JOB;
    private String skill;

    public Tester() {
        this.JOB = "Test the issues";
    }

    @Override
    public void assignSkill(String skill) {
        this.skill = skill;

    }

    @Override
    public void task() {
        System.out.println("Tester with skill: " + this.skill + ", and with Job : " + this.JOB);

    }

}