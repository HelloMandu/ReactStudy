import React, { useState, useCallback, useEffect } from "react";
import CheckBoxItem from "./CheckBoxItem";
import CheckBoxList from "./CheckBoxList";

const CheckBox = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkBoxList, setCheckBoxList] = useState([
    {
      id: 1,
      checked: false,
      explain: '개인정보 처리방칭 필수 동의',
      look:''
    },
    {
      id: 2,
      checked: false,
      explain: '이용약관 필수 동의',
      look:''
    },
    {
      id: 3,
      checked: false,
      explain: '이벤트 알림 선택',
      detail:''
    },
  ]);
  useEffect(() => {
    const result = checkBoxList.reduce(
      (prev, cur) => prev && cur.checked,
      true
    );
    setAllChecked(result);
  }, [checkBoxList]);

  const onToggleAll = useCallback(() => {
    setCheckBoxList(
      checkBoxList.map((checkBox) => ({ ...checkBox, checked: !allChecked }))
    );
  }, [allChecked]);

  const onToggle = useCallback(
    (id) => {
      setCheckBoxList(
        checkBoxList.map((checkBox) =>
          checkBox.id === id
            ? { ...checkBox, checked: !checkBox.checked }
            : checkBox
        )
      );
    },
    [checkBoxList]
  );

  return (
    <div className="SignUpList">
      <div className="CheckBox All">
        <CheckBoxItem
          checked={allChecked}
          onToggle={onToggleAll}
        ></CheckBoxItem>
        <div className="explain">
          모두 동의합니다
        </div>
      </div>
      <CheckBoxList
        checkBoxList={checkBoxList}
        onToggle={onToggle}
      ></CheckBoxList>
    </div>
  );
};

export default CheckBox;
