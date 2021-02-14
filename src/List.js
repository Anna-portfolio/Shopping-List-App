import React, { useState, useEffect } from "react";
import { data } from "./data";

const List = () => {
    const [items, setItems] = useState(data);

    const removeItem = (id) => {
        let newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    };

    useEffect(() => {
        document.title = `${items.length} Items to Buy`;
    });

    return (
        <React.Fragment>
            <h1>My Shopping List</h1>
            <h3>To buy: {items.length} items left</h3>
            {items.map((item) => {
                const { id, image, name } = item;
                return (
                    <article key={id} className="item">
                        <img src={image} alt={name} />
                        <h4>{name}</h4>
                        <button
                            type="button"
                            className="btn-done"
                            onClick={() => {
                                removeItem(id);
                            }}
                        ></button>
                    </article>
                );
            })}
            <button
                type="button"
                class="btn-clear"
                onClick={() => setItems([])}
            >
                Clear All
            </button>
        </React.Fragment>
    );
};

export default List;
