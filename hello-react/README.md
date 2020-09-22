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
