import React  from 'react';

const Overview = ({tasks}) => {
    return (
        <div className="list-body">
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Overview;