import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBoxList from './CheckBoxList'
import AllCheck from './AllCheck';

function App() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkBoxList, setCheckBoxList] = useState([
    {
      id: 1,
      checked : false,
    },
    {
      id: 2,
      checked: true,
    },
    {
      id: 3,
      checked: true,
    },
  ]);
  const onToggleAll = useCallback(() => {
    let newCheckBoxList = null;
    if(allChecked){
      newCheckBoxList = checkBoxList.map(checkBox => ({...checkBox, checked: false}));
    }
    else{
      newCheckBoxList = checkBoxList.map(checkBox => ({...checkBox, checked: true}));
    }
    setAllChecked(!allChecked);
    setCheckBoxList(newCheckBoxList);
  }, [allChecked, checkBoxList]);

  const onToggle = useCallback(id => {
    const newCheckBoxList = checkBoxList.map(checkBox => checkBox.id === id ? { ...checkBox, checked: !checkBox.checked } : checkBox);
    let cnt = 0;
    newCheckBoxList.forEach(checkBox=>{
      if(checkBox.checked){
        cnt++;
      }
    })
    if(cnt === newCheckBoxList.length){
      setAllChecked(true);
    }
    else{
      setAllChecked(false);
    }
    setCheckBoxList(newCheckBoxList);
  }, [checkBoxList]);
  return (
    <div>
      <AllCheck checked={allChecked} onToggleAll={onToggleAll}></AllCheck>
      <CheckBoxList checkBoxList={checkBoxList} onToggle={onToggle}></CheckBoxList>
    </div>
  );
}

export default App;
