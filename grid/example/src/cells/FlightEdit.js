import React, { useState } from "react";
import { getValueOfDate } from "../utils/DateUtility";

const FlightEdit = ({ rowData, rowUpdateCallBack }) => {
    const [updatedRowData, setUpdatedRowData] = useState(rowData);
    const { flight } = updatedRowData;

    const updateRowData = (updatedFlightData) => {
        const updatedRow = {
            ...updatedRowData,
            flight: updatedFlightData
        };
        setUpdatedRowData(updatedRow);
        rowUpdateCallBack(updatedRow);
    };

    const updateFlightnoValue = (e) => {
        const updatedFlightData = {
            ...flight,
            flightno: e.target.value
        };
        updateRowData(updatedFlightData);
    };

    const updateDateValue = (e) => {
        const updatedFlightData = {
            ...flight,
            date: getValueOfDate(e.target.value, "cell")
        };
        updateRowData(updatedFlightData);
    };

    const { flightno, date } = flight;
    return (
        <div>
            {flightno ? <input type="text" value={flightno} onChange={updateFlightnoValue} /> : null}
            {date ? <input type="date" value={getValueOfDate(date, "calendar")} onChange={updateDateValue} /> : null}
        </div>
    );
};
export default FlightEdit;
