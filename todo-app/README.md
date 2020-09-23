# Todo Project
![image](https://user-images.githubusercontent.com/45222982/93972330-07305900-fdad-11ea-9c3e-ef90ed07a345.png)

## Components
- TodoTemplate: root component
- TodoInsert: 새로운 항복 입력, 추가
- TodoListItem: TodoList에 보여질 각 항목에 대한 정보
- TodoList: map을 이용해 TodoListItem컴포넌트로 변환하여 보여줌

## NOTE
 - props로 전달해야 할 함수를 만들때는 useCallback을 사용하여 감싸는 것을 습관화 할 것
 - form태그를 사용하면 enter도 가능하지만 e.preventDefault()를 이용해 새로고침 방지해야함
 - 크롬 개발자도구 performance 녹화 기능을 통해 성능을 측정가능 **자주사용하자**
