

let editMode=true ;
let sourceMode=false ;

function enableEditMode()
{
    richTextField.document.designMode='on' ;
} ;
function execCmd(command) 
{
    richTextField.document.execCommand(command,false,null) ;
}

function execCommandWithArg(command,arg)
{
    richTextField.document.execCommand(command,false,arg) ;
}

function togglToSource()
{
    if(sourceMode)
    {
        richTextField.document.getElementsByTagName('body')[0].innerHTML= richTextField.document.getElementsByTagName('body')[0].textContent ;
        sourceMode=false ;
    }
    else 
    {
        richTextField.document.getElementsByTagName('body')[0].textContent= richTextField.document.getElementsByTagName('body')[0].innerHTML ;
        sourceMode=true ;
    }


}


function togglToEdit()
{
    if(editMode) 
    {
        richTextField.document.designMode='off' ;
        editMode=false ;
    }
    else
    {
        richTextField.document.designMode='on' ;

        editMode=true ;
 
    }
 
}