public class Circle {
  int radius;
  public Circle(int radius) {
    this.radius = radius;
  }
  public double getArea() {
    return 3.14*radius*radius;
  }

public static void main(String[] args) {
  Circle [] c; // Circle 배열에 대한 레퍼런스 변수 c 선언
  c = new Circle[5]; // 5개짜리 레퍼런스 배열 생성

  for (int i=0; i<c.length; i++) // c.length는 여기서, 배열 c의 크기이고 이는 5이다.
      c[i] = new Circle(i) // 배열의 각 원소 객체 생성

  for (int i=0; i<c.length; i++) // 배열에 있는 모든 Circle 객체의 면적 출력
      System.out.print((int)(c[i].getArea()) + " "); // c[i]
  }
}
