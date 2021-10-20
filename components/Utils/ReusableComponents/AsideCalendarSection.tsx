import React, {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
interface Props {
    infoData: any;
}
const AsideCalendarSection: React.FunctionComponent<Props> = (props) => {
    const {infoData} = props;
    const [value, onChange] = useState(new Date());
    return (
        <section className="calendar">
            <div className="calendar__content">
                <div className="calendar__title">
                    <h3>{infoData.title}</h3>
                </div>
                <div className="calendar__item">
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div>
        </section>
    );
};
export default AsideCalendarSection;
