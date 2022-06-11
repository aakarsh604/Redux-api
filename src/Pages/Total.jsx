import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Total = () => {
    const [total, settotal] = useState(0);
    const [pending, setpending] = useState(0);
    const data = useSelector(state=> state.todo.getTodos.data);

    let pend = data.filter((todo)=> {
        return todo.isComplete === true;
    });

    useEffect(()=> {
        settotal(data.length);
        setpending(data.length-pend.length)
    }, [ data ] );
    
  return (
    <div style={{ marginTop: "25px"}}>{`${pending} task pending out of ${total} tasks`}</div>
  )
}

export default Total