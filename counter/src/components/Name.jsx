import React, { useState } from "react";

export const Name = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);

    return (
        <div>
            <h1>Shameem</h1>
        </div>
    );
}