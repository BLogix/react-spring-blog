import React from 'react';
import {AppContext} from "./Context";

export const withContext = (Component)=>{
    return function ContextComponent(props){
        return(
            <AppContext.Consumer>
                {(contexts) => <Component {...props} {...contexts}/>}
            </AppContext.Consumer>
        )
    }
};