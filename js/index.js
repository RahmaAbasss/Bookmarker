var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');
var alertName = document.getElementById('alertName');
var alertExite = document.getElementById('alertExite')

// console.log(siteNameInput ,siteUrlInput );

var infoList;

if(localStorage.getItem("infoList")==null)
{
    infoList=[];
}
else
{
    infoList= JSON.parse(localStorage.getItem("infoList"));
    // console.log(infoList);
    displayInfo(infoList);
}

function addSubmit()
{

if( nameValidation() === true & urlValidation() === true){

    var info ={
        sitename:siteNameInput.value,
        siteurl:siteUrlInput.value,
    }
    
    infoList.push(info);
    displayInfo(infoList);
    localStorage.setItem("infoList",JSON.stringify(infoList));
    clearForm();
    // console.log(infoList);

}

}

function clearForm()
{
    siteNameInput.value=''
    siteUrlInput.value=''
}

function displayInfo(infos)
{
  var cartona =``;

  for (var i=0 ; i<infos.length; i++)
  {
//    console.log(infos[i].sitename);
   cartona+=`  <tr>
   <td class="text-white" >${infos[i].sitename}</td>
   <td class="text-white">${infos[i].siteurl}</td>
   <td>
   <a class="btn btn-primary rounded-pill" href="http://uyyhtr" target="_blank">visit</a>
      
   </td>
   <td>
       <button onclick="deleteInfo(${i})" class="btn btn-danger rounded-pill">delete</button>
   </td>
   </tr>`
}
  document.getElementById('tBody').innerHTML=cartona;
}

function deleteInfo(index)
{
    // console.log('delete');
    infoList.splice(index,1);
    localStorage.setItem("infoList",JSON.stringify(infoList));
    // console.log(infoList);
    displayInfo(infoList);
}
function nameValidation()
{
    if(siteName.value===''){
        alertName.classList.remove('d-none');
        return false;
    }
    else{
        alertName.classList.add('d-none');
        return true;
    }
}

function urlValidation()
{
    if(siteUrl.value===''){
        alertExite.classList.remove('d-none');
        return false;
    }
    else{
        alertExite.classList.add('d-none');
        return true;
    }
}

