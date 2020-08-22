var name_text = document.getElementById('name');
var IT_link = document.getElementById('IT');
var CSE_link = document.getElementById('CSE ');
var ECE_link = document.getElementById('ECE');
var SH_link = document.getElementById('SH');
var Training_link = document.getElementById('Training');
var save_button = document.getElementById('save');
let array = ["name","IT","CSE","ECE","SH","Training"];
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.value=links.name+" ";
        if(links.IT)
            IT_link.value=links.IT;
        if(links.CSE)
            CSE_link.value=links.CSE;
        if(links.ECE)
            ECE_link.value=links.ECE;
        if(links.SH)
            SH_link.value=links.SH;
        if(links.Training)
        Training_link.value=links.Training;
    }
});
save_button.addEventListener('click',function(){
    UpdateLinks();
});
function UpdateLinks(){
    let dict = {
        "name":name_text.value,
        "IT":IT_link.value,
        "CSE":CSE_link.value,
        "ECE":ECE_link.value,
        "SH":SH_link.value,
        "Training":Training_link.value
    }
chrome.storage.sync.set(dict,function(){
        if(!chrome.runtime.error){
            console.log("Links Updated");
            window.location.pathname='popup1.html'
        }
    });
}
