## Props
 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있음
 
## children
 태그 사이의 내용을 보여주는 props
 
## state
 컴포넌트 내부에서 바뀔 수 있는 값, props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며 자식 컴포넌트에선 바꿀 수 없다 // *부모 컴포넌트의 메서드 호출시 유동적으로 사용가능*
 
## 리액트에서 이벤트
 1. 이름은 camelCase로 작성 **onclick -> onClick**
 2. 이벤트에 자바스크리브 코드를 전달하는 것이 아닌, 함수 형태의 값을 전달(함수의 주소를 전달)
 3. DOM 요소에만 이벤트를 설정할 수 있음

- 이벤트 종류
 - Clipboard
 - Composition
 - Keyboard
 - Focus
 - Form
 - Mouse
 - Selection
 - Touch
 - UI
 - Wheel
 - Media
 - Image
 - Animation
 - Transition
 
 ### ref?
 DOM을 직접적으로 건드려야 할 때 // focus를 줄 때 주로 사용

## 자주 사용하는 JavaScript 배열 

1. concat : 기존의 push함수는 기존 배열 자체를 변경해 주는 반면, 새로운 배열을 만들어 준다는 차이점 // **React는 불변성을 유지해주어야함**
2. map : 배열 값을 사용하여 JSX코드로 된 배열을 새로 생성 // **key값을 사용해 데이터의 유일성을 설정해야함**
3. filter : 특정 조건을 만족하는 원소들만 쉽게 분류할 수 있음

```
import React, {useState} from 'react';

const IterationSample = () =>{
    const [names, setNames] = useState([
        {id: 1, text:'눈사람'},
        {id: 2, text:'얼음'},
        {id: 3, text:'눈'},
        {id: 4, text:'바람'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const onChange = (e)=>{setInputText(e.target.value);}
    const onClick = ()=>{
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }
    const onRemove = (id)=>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    const namesList = names.map(name=><li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>);
    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </div>
    )
}

export default IterationSample;
```
## LifeCycle Method
라이프사이클은 총 세가지
 - 마운트
 - 업데이트
 - 언마운트
 
### 마운트
 DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트(Mount)라고 하며 이때 호출하는 메소드는 다음과 같다
 - constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메소드
 - getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메소드
 - render: 우리가 준비한 UI를 렌더링하는 메소드
 - componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메소드
 
### 업데이트
 컴포넌트는 다음과 같은 총 네가지 경우에 업데이트
 1. props가 바뀔 때
 2. state가 바뀔 때
 3. 부모 컴포넌트가 리렌더링될 때
 4. this.forceUpdate로 강제로 렌더링을 트리거할 때
 
### LifeCycle method 종류

- render : 컴포넌트 모양새를 정의, 유일한 필수 메소드
- constructor: 컴포넌트의 생성자 메소드로 컴포넌트를 만들 때 처음으로 실행
- getDerivedStateFromProps: 리액트 v16.3 이후에 생긴 메소드로 props로 받아 온 값을 state에 동기화시키는 용도로 사용되며 마운트, 업데이트될 떄 호출
- componentDidMount: 컴포넌트를 만들고 렌더링을 마친 후 실행
- shouldComponentUpdate: props || state를 변경했을 때, 리렌더링을 시작할지 여부를 지정 must return true || false
- getSnapshotBeforeUpdate: render한 결과물을 반영하기 직전에 호출외며 업데이트하기 직전의 값을 참고할 일이 있을 때 활용
- componentDidUpdate: 리렌더링을 완료한 후 실행
- componentWillUnMount: 컴포넌트를 DOM에서 제거할 때 실행
- componentDidCatch: 렌더링 도중 에러가 발생했을 때 먹통이 되지 않고 UI를 보여 줄 수 있게 해줌
