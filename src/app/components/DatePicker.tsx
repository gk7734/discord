import './scss/DatePicker.scss';
import { IoIosArrowDown } from 'react-icons/io';
import {useBirthStore} from "@/app/store/useStore";

const DatePicker = () => {
    const { birth, setYear, setMonth, setDay } = useBirthStore();

    return (
        <div className="date-picker">
            <label>생년월일<sup className="required">*</sup></label>
            <div className="picker-box">
                <div className="inputBox">
                    <input type="text" placeholder={'년'} value={birth.year} onChange={(e) => setYear(e.target.valueAsNumber)} />
                    <IoIosArrowDown size={24} color={'rgba(182, 185, 193, 0.75)'} className={`icon`} />
                </div>
                <div className="inputBox">
                    <input type="text" placeholder={'월'} value={birth.month} onChange={(e) => setMonth(e.target.valueAsNumber)} />
                    <IoIosArrowDown size={24} color={'rgba(182, 185, 193, 0.75)'} className={`icon`} />
                </div>
                <div className="inputBox">
                    <input type="text" placeholder={'일'} value={birth.day} onChange={(e) => setDay(e.target.valueAsNumber)} />
                    <IoIosArrowDown size={24} color={'rgba(182, 185, 193, 0.75)'} className={`icon`} />
                </div>
            </div>
        </div>
    );
};

export default DatePicker;
