import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text ? "" : "error";
    const showAlert = () => {
        if (error) {
           setTimeout(() => {
              alert("введите текст...");
           }, 300)
        } else {
           setTimeout(() => {
              alert(text);
           }, 300)
        }
        setText('');
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                {/*should work (должно работать)*/}
                <SuperInputText
                    value={text}
                    dimention={'small'}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*should work (должно работать)*/}
                <SuperButton onClick={showAlert} variant='danger' size='medium'>
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                {/*should work (должно работать)*/}
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    Some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    );
}

export default HW4;
