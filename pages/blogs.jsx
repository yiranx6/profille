import axios from "axios";
import { useEffect, useState } from "react";
function Blogs({d}) {
    const [word, setWord] = useState("")
    useEffect(() => {
        setWord(d);
        return () => {
        }
    }, [d]);

    return (
        <div>
            I am {word};
        </div>
    )
}
export default Blogs
