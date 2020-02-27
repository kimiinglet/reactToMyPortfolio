import React from "react"

function Time() {
    
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 30,
        
    }

    if(hours < 12) {
        timeOfDay = "morning"
        // styles.color = "#047262"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        // styles.color = "#062046"
    } else {
        timeOfDay = "night" 
        // styles.color = "#037189"
    }


    return (
        <h1 id="time" style={styles}>Good {timeOfDay}!</h1>
    )
}

export default Time