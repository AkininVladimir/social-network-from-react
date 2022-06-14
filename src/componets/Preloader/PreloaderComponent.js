import React from "react";
import preloader from '../Preloader/Loading.gif';

let PreloaderComponent =(props)=> {
    return (
        <div>
            <img src={preloader}/>
        </div>
    )

}

export default PreloaderComponent;
