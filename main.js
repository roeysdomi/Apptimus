const bannersList=[]
loadFromLocalStorage()
//-------------------listeners-------------------
document.getElementsByClassName("submit")[0].addEventListener("click", function(){
    const inputImg=document.getElementsByClassName("input-img")[0].value
    const inputLink=document.getElementsByClassName("input-link")[0].value
    createNewBanner("banners-list",inputLink,inputImg)
    const forSave={"img":inputImg,"link":inputLink}
    bannersList.push(forSave)
});
document.getElementsByClassName("save")[0].addEventListener("click", function(){
    saveTolocalStorage()
});
document.getElementsByClassName("clear")[0].addEventListener("click", function(){
    deleteFromlocalStorage()
});

//-------------------functions-------------------
function createNewBanner(element_id,redirect_link,banner_img)
{
   const bannersElement=document.getElementById(element_id)
   const newBanner=document.createElement("div")
   newBanner.className="banner-item"
   const newLinkBanner=document.createElement("a")
   newLinkBanner.href=redirect_link
   newLinkBanner.target="_blank"
   const imgBanner=document.createElement("img")
   imgBanner.src=banner_img
   imgBanner.className="banner-pic"
   //appending
   bannersElement.appendChild(newBanner)
   newBanner.appendChild(newLinkBanner)
   newLinkBanner.appendChild(imgBanner)
}
function saveTolocalStorage(){
    localStorage.setItem("banners-data", JSON.stringify(bannersList));
}
function deleteFromlocalStorage(){
    localStorage.removeItem("banners-data");
    document.getElementById("banners-list").innerHTML=""
}
function loadFromLocalStorage(){
    const banners=localStorage.getItem("banners-data")
    if(banners){
          const bannersArray=JSON.parse(banners);
          bannersArray.map(banner=>{
            createNewBanner("banners-list",banner.link,banner.img)
          })
    }
}