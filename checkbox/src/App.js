import React, { useState, useCallback, useEffect } from 'react';
import CheckBoxList from './CheckBoxList'
import CheckBoxItem from './CheckBoxItem';

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
  // const onToggleAll = useCallback(() => {
  //   let newCheckBoxList = null;
  //   if(allChecked){
  //     newCheckBoxList = checkBoxList.map(checkBox => ({...checkBox, checked: false}));
  //   }
  //   else{
  //     newCheckBoxList = checkBoxList.map(checkBox => ({...checkBox, checked: true}));
  //   }
  //   setAllChecked(!allChecked);
  //   setCheckBoxList(newCheckBoxList);
  // }, [allChecked]);

  // const onToggle = useCallback(id => {
  //   const newCheckBoxList = checkBoxList.map(checkBox => checkBox.id === id ? { ...checkBox, checked: !checkBox.checked } : checkBox);
  //   let cnt = 0;
  //   newCheckBoxList.forEach(checkBox=>{
  //     if(checkBox.checked){
  //       cnt++;
  //     }
  //   })
  //   if(cnt === newCheckBoxList.length){
  //     setAllChecked(true);
  //   }
  //   else{
  //     setAllChecked(false);
  //   }
  //   setCheckBoxList(newCheckBoxList);
  // }, [checkBoxList]);
  
  useEffect(() => {
    const result = checkBoxList.reduce((prev, cur) => prev && cur.checked, true);
    setAllChecked(result);
  }, [checkBoxList]);

  const onToggleAll = useCallback(() => {
    setCheckBoxList(checkBoxList.map(checkBox => ({ ...checkBox, checked: !allChecked })));
  }, [allChecked]);

  const onToggle = useCallback(id => {
    setCheckBoxList(checkBoxList.map(checkBox => checkBox.id === id ? { ...checkBox, checked: !checkBox.checked } : checkBox));
  }, [checkBoxList]);

  return (
    <div>
      <CheckBoxItem checked={allChecked} onToggle={onToggleAll}></CheckBoxItem>
      <hr/>
      <CheckBoxList checkBoxList={checkBoxList} onToggle={onToggle}></CheckBoxList>
    </div>
  );
}

export default App;
