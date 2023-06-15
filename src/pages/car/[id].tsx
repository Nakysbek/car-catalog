import React from 'react';
import {useRouter} from "next/router";

const CarPage = () => {

    const {push, replace} = useRouter()

    return (
        <div>
            <button onClick={() => push('/')}>go home</button>
            <button onClick={() => replace('/')}>go home</button>
        </div>
    );
};

export default CarPage;