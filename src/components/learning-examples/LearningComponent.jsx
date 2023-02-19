
import FirstComponent, { FifthComponent } from "./FirstComponent";
import FourthComponent from "./FourthComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

export default function LearningComponent() {
    return(
        <div>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent/>
            <FifthComponent/>
        </div>
    )
}