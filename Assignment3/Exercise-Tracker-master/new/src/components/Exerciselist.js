import React from "react";
import Exercise from "./Exercise";

function Exerciselist({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercise">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Reps</th>
                    <th> Weight </th>
                    <th> Unit </th>
                    <th> Date  </th>
                    <th> Edit </th>
                    <th> Delete</th>
                </tr>
            </thead>
            <tbody>

                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    onDelete={onDelete} onEdit={onEdit}
                    key={i} />)}

            </tbody>
        </table>

    );
}

export default Exerciselist;