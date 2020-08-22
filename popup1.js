var name_text = document.getElementById('name');
var IT_link= document.getElementById('IT_link');
// website_link.href='javascript:void(0);';
var CSE_link = document.getElementById('CSE_link');
// linkedin_link.href='javascript:void(0);';
var ECE_link= document.getElementById('ECE_link');
var SH_link = document.getElementById('SH_link');
var Training_link = document.getElementById('Training_link');
// github_link.href='javascript:void(0);';

let array = ["name","IT","CSE","ECE","SH","Training"];
// let array2 = {
//     "name":"Ashwin",
//     "website":"https://www.google.com",
//     "medium":"https://www.medium.com"
// };
// chrome.storage.sync.set(array2);
function void_click(){
    void(0);
}
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.innerHTML=links.name+"'s ";
        
        if(links.IT)
        IT_link.href=links.IT;
        else
           IT_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.CSE)
        CSE_link.href=links.CSE;
        else
           CSE_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        

        if(links.ECE)
            ECE_link.href=links.ECE;
        else
        ECE_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.SH)
            SH_link.href=links.SH;
        else
            SH_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.Training)
            Training_link.href=links.Training;
        else
            Training_link.addEventListener('click',function(event){
                event.preventDefault();
            });
    }
});