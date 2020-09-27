import React  from 'react';
import uniqid from 'uniqid';

const Overview = ({tasks}) => {
    return (
        <div className="list-body">
            <ul>
                {tasks.map((task) => (
                    <li key={uniqid()}>{task.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Overview;