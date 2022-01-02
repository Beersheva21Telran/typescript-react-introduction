import * as React from "react"
type InputDataProps = {
    colorsFn: (colors: string[]) => void,
    timeZoneFn: (timeZone: string) => void
}
const InputData:React.FC<InputDataProps> = (props) => {
    let inputColorsEl: any;
    let inputTimeZoneEl: any;
    React.useEffect(()=>{
        inputColorsEl = document.getElementById("input-colors");
        inputTimeZoneEl = document.getElementById("input-time-zone");
    }, [])
    function returnColors() {
        const colorsStr:string = inputColorsEl.value;
        props.colorsFn(colorsStr.split(" "));

    }
    function returnTimeZone() {
        props.timeZoneFn(inputTimeZoneEl.value);
    }
    return <div>
        <input id="input-colors" placeholder="Enter colors separated by space"/> <button onClick={returnColors}>GO</button>
        <input id="input-time-zone" placeholder="Enter timeZone"/> <button onClick={returnTimeZone}>GO</button>
    </div>
}
export default InputData;