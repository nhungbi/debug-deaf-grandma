
let goodbyes = 0
alert('HI KID!')
while (true) {
    let userInput = prompt()
    if ( userInput === "" ) {
        alert("WHAT!?")

    } else if ( userInput === "GOODBYE!" ) {
        goodbyes ++

        if ( goodbyes === 1 ) {
            alert("LEAVING SO SOON?")
        }
        else if ( goodbyes === 2 ) {
            alert("LATER, SKATER!")
            break
        }}
    else if (userInput.toUpperCase() != userInput ) {
        alert("SPEAK UP, KID!")
    }
    else if (userInput.toUpperCase() === userInput) {
        alert('NO, NOT SINCE 1946!')
    }
}