import React from "react";

export function ConfigurationTitleSection({ className, title }) { 
    return (
        <div className={`${className}`} >
            {title}
        </div>
    );
}