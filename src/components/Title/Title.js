// import { useEffect } from "react";
import './Title.css';

function Title ({title, subtitle}) {
    console.log('Props en title: ', title, subtitle);

    // useEffect(() => {
    //     console.log('Hola me cree');
    //     return () => {
    //         console.log('Me destrui');
    //     }
    // }, [])

    return(
        <>
            <h1 className="Title">{title}</h1>
            <h2 className="Title">{subtitle}</h2>
        </>
    )
};

export default Title;