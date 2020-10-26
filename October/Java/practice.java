import java.util.ArrayList;
import java.util.Scanner;

// 중간고사 과제입니다. 201701391 국제통상학과 박상민입니다.
// 반복문, 조건문, break 또는 continue, 배열과 문자열을모두 포함하는 프로그램 만들기
public class ParkSangMin {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 문자열
		Scanner input = new Scanner(System.in); // input 값을 받아주는 명령입니다.
		String[] array = new String[4]; // 배열에 4가지의 문자열을 집어넣습니다.
		array[0] = "ruler";
		array[1] = "pencil";
		array[2] = "laptop";
		array[3] = "money";
		
		String one = "첫 번째 주머니에 있습니다.";
		String two = "두 번째 주머니에 있습니다.";
		String three = "세 번째 주머니에 있습니다.";
		String four = "네 번째 주머니에 있습니다.";
		
		ArrayList<String> arrayList = new ArrayList<>(); // 문자열
		for (String temp : array) {
			arrayList.add(temp);
		}
		// 새로운 ArrayList를 만들고, array 배열의 원소 저장 변수를 temp로 만들고, arrayList에 temp를 추가시킵니다.
		System.out.println("입력해보세요: "); // 값을 받습니다.
		String Things = input.next(); // 입력한 값을 문자화합니다.
		while (true) { // while 반복문을 시작합니다.
			if (Things.contains(array[0])) { // 입력한 값이 array의 첫째항을 포함한다면
				System.out.println(one); // String one(첫 번째 주머니에 있습니다)을 호출합니다.
				break;
			}
			else if (Things.contains(array[1])) { // 입력한 값이 array의 둘째항을 포함한다면
				System.out.println(two); // String two(두 번째 주머니에 있습니다)을 호출합니다.
				break;
			} else if (Things.contains(array[2])) { // 입력한 값이 array의 셋째항을 포함한다면
				System.out.println(three); // String three(세 번째 주머니에 있습니다)을 호출합니다.
				break;
			} else if (Things.contains(array[3])) { // 입력한 값이 array의 넷째항을 포함한다면
				System.out.println(four);  // String four(네 번째 주머니에 있습니다)을 호출합니다.
				break;
			} else { // 입력한 값이 array의 각자 항에 없다면
				System.out.println("없습니다"); // 없음을 호출합니다.
				break;
			}
		}
		input.close(); // input을 닫아줍니다.
	}

}

// 해당 물건이 어디에 있는 지 확인하는 프로그램입니다.

// while True로 while문을 만들고 난 후에 (조건문 사용)
// 물건을 Scanning을 통해 입력받은 후(문자열로) 리스트 안에 있다면 "몇 번째 주머니에 있는지"+ break,
// 없다면 없다고 출력하는 프로그램입니다. 