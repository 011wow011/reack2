import React from "react";


const students = [
    {
        id: 1,
        name: "주호"
    },

    {
        id: 2,
        name: "재영"
    },
    {
        id: 3,
        name: "선경"
    },
    {
        id: 4,
        name: "선우"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;