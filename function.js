function getidbyfunction(idname)
{
    const findidd = document.getElementById(idname);
    findidd.classList.add('hidden');
}

function showid(idname)
{
    const selectid = document.getElementById(idname)
    selectid.classList.remove('hidden');
}

function setbackgroundcolor(bid)
{
    const fiind = document.getElementById(bid);
    fiind.classList.add('bg-orange-400');
}

function removebackgroundcolor(bid)
{
    const fiind = document.getElementById(bid);
    fiind.classList.remove('bg-orange-400');
}

function createrandomalphabet()
{

    const alphabetstring ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');
    console.log(alphabets);

    const randomnumber = Math.random() * 25;
    const index = Math.round(randomnumber);
     

    const alphabet = alphabets[index];
    //console.log(index,alphabet);
    
    return alphabet;
}



function getelementbybuttonid(buttonid)
{
    const getbuttonelement = document.getElementById(buttonid);
    const buttonelementtext = getbuttonelement.innerText;
    const buttonvalue = parseInt(buttonelementtext);
    return buttonvalue;
}

function setbuttonvalue (buttonid,value)
{
    const setbutton = document.getElementById(buttonid);
    setbutton.innerText = value ;
}

function getelementbyid(elementid)
{
    const ffindelement = document.getElementById(elementid);
    const textt = ffindelement.innerText;
    return textt;
}