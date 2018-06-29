import React from "react";

import Pet from "./Pet"

function Friend(props) {

    const petList = props.pets.map((animal, i) => <Pet key={animal.name + i} beast={animal}></Pet>);

        return (
            <div>
                <h1>Name: {props.human.name}</h1>
                <h2>Age: {props.human.age}</h2>
                <h3>Pets</h3>
                {petList}
                <hr/>
            </div>
        );
}

export default Friend;