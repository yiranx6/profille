import axios from "axios";

import { useEffect, useState } from "react";



function blogs({d}) {
    const [word, setWord] = useState("")
    useEffect(() => {
        setWord(d);
        console.log(d);
        return () => {
        }
    }, [d]);

    return (
        <div>
            I am {word};
        </div>
    )
}




export default blogs
