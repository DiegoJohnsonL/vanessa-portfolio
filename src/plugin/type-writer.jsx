import React from 'react'
import TypeIt from "typeit-react";


export const TypeWriter = () => {
    return (
        <>
            <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                    instance.type("Graphic Designer! ").pause(750).delete(18).pause(750).type("Video Editor! ").pause(750).delete(14).pause(750).type("Fake Natty! 😝")
                    // Remember to return it!
                    return instance;
                }}
            />
        </>
    )
}

