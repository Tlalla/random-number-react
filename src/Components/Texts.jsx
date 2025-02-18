import { useState } from "react";
const Texts=()=>{
    const [text, setText] = useState(false);
    const showBlock = () => {
    setText(true);
  };
  const hideBlock = ()=>{
    setText(false);
  }
    return(
        <div>
            <div className="showBlock">
            <button className="showButton" onClick={showBlock}>Notifications</button>
            <div className="textBlock" style={{display: text ? 'block' : "none"}}>
                <p>Заказ доставлен</p>
                <hr/>
                <p>Рекомендуется забрать посылку до 15 декабря. Хорошего вам дня!</p>
                <hr/>
                <button className="close" onClick={hideBlock}>Закрыть</button>
            </div>
            </div>
        </div>
    )
}
export default Texts;