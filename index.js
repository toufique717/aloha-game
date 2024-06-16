/*function play()
{
    const idselect = document.getElementById('homescreen');
    idselect.classList.add('hidden');

    const findplaysection = document.getElementById('playsection');
    findplaysection.classList.remove('hidden');
} */


    function keyboardhandeler(event)
    {

        const playerpressed = event.key
        console.log( playerpressed );

        if (playerpressed ==='Escape')
            {
                gameover();
            }
        const currentalphabetelement = document.getElementById('currentalphabet');
        const elementc = currentalphabetelement.innerText;
        const expectedelementc = elementc.toLocaleLowerCase();
        console.log(playerpressed,expectedelementc)

        if (playerpressed==expectedelementc)
        {
            console.log("You got a point");

            const felementset =  getelementbybuttonid('cscore');
            const finalscore = felementset +1;
            setbuttonvalue ('cscore',finalscore);
            //const currentscoreelement = document.getElementById('cscore');
            //const currentnumber = currentscoreelement.innerText;
            //const cnumber = parseInt(currentnumber);
            //const ccnumber = cnumber + 1;
            //currentscoreelement.innerText = ccnumber;
        }

        else
        {
            console.log("You loss your life");
            const felementsetl =  getelementbybuttonid('life');
            const finalscorel = felementsetl - 1;
            setbuttonvalue ('life',finalscorel);

             if( finalscorel === 0){
                gameover();
             }

            //const life = document.getElementById('life');
            //const lifeelement = life.innerText;
            //const lifeelementint = parseInt(lifeelement);
            //const clife = lifeelementint - 1;
            //life.innerText = clife;
        }

        continuegame();
        removebackgroundcolor(expectedelementc)
    }

    document.addEventListener('keyup',keyboardhandeler)


function continuegame()
{
 const alphabet = createrandomalphabet();
 console.log('your alphabet is', alphabet);
 const findbigalphabet = document.getElementById('currentalphabet');
 findbigalphabet.innerText = alphabet;
 setbackgroundcolor(alphabet);

}


function play()
{
    getidbyfunction('homescreen');
    getidbyfunction('gameover');
    setbuttonvalue ('life',5);
    setbuttonvalue ('cscore',0);
    showid('playsection');
    continuegame();
}

function gameover()
{
    getidbyfunction('playsection');
    showid('gameover');
    const lastscoree = getelementbybuttonid('cscore');
    setbuttonvalue ('lastscore',lastscoree);

    const currentalphabet = getelementbyid('currentalphabet');
    removebackgroundcolor(currentalphabet);
}