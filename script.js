console.log("welcome")
//Initialize the varabiles
let songIndex = 0
let audioElement = new Audio("/songs/4.mp3")
let masterPlay = document.getElementById("masterPlay")
let mastersongname = document.getElementById("mastersongname")
let progressbar =document.getElementById("ProgressBar")
let gif =document.getElementById("gif")
let songitems = Array.from(document.getElementsByClassName("songitems"))
let songitemPlay = Array.from(document.getElementsByClassName("songitemPlay"))

let songs = [
    {songName:"Warriyo - Mortals(feat. Laura Brehm)",filePath:"/songs/0.mp3",coverPath:"covers/1.jpg"},
    {songName:"Cielo - Huma-Huma",filePath:"/songs/1.mp3",coverPath:"covers/2.jpg"},
    {songName:"Deaf Kev - Invincible",filePath:"/songs/2.mp3",coverPath:"covers/3.jpg"},
    {songName:"Different Heaven and EHId - My Heart ",filePath:"/songs/3.mp3",coverPath:"covers/4.jpg"},
    {songName:"Havana",filePath:"/songs/4.mp3",coverPath:"covers/5.png"},
    {songName:"6",filePath:"/songs/5.mp3",coverPath:"covers/6.jpg"},
    {songName:"7",filePath:"/songs/6.mp3",coverPath:"covers/7.jpg"},
    {songName:"8",filePath:"/songs/7.mp3",coverPath:"covers/8.jpg"},
    {songName:"jiya dhadak dhadak jaye re",filePath:"/songs/8.mp3",coverPath:"covers/9.jpg"},
    {songName:"9",filePath:"/songs/9.mp3",coverPath:"covers/10.jpg"},
   
]
songitems.forEach((element , i)=>{
 element.getElementsByTagName("img")[0].src=songs[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})



// audioelement.play()
//handel play/pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')  
        masterPlay.classList.add('fa-pause-circle')  
        gif.style.opacity = 1

    }
    else
     {
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')  
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0  
    }
})
//Listen To Events
audioElement.addEventListener("timeupdate",()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(progressbar.value * audioElement.duration)/100
})

const makeAllPlays = ()=>{
    songitemPlay.forEach((element)=>{ 
            element.classList.remove('fa-pause-circle')
            element.classList.add('fa-play-circle')
            
        
        })
}

songitemPlay.forEach((element)=>{
element.addEventListener('click',(e)=>{
makeAllPlays();
 const songIndex=parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle')
e.target.classList.add('fa-pause-circle')

 audioElement.src=(`/songs/${songIndex}.mp3`)   

audioElement.currentTime=0;
audioElement.play();
mastersongname.innerText=songs[songIndex].songName

masterPlay.classList.remove('fa-play-circle')  
masterPlay.classList.add('fa-pause-circle') 

})
})

document.getElementById("next").addEventListener('click',()=>{
    if (songIndex > 8) {
        songIndex=0
    } else {
       songIndex +=1 
    }
    audioElement.src=(`/songs/${songIndex}.mp3`)   

    audioElement.currentTime=0;
    audioElement.play();
    mastersongname.innerText=songs[songIndex].songName

    masterPlay.classList.remove('fa-play-circle')  
    masterPlay.classList.add('fa-pause-circle') 
    console.log(songIndex)
    
})
document.getElementById("previous").addEventListener('click',()=>{
    if (songIndex<=0 || songIndex==9) {
        songIndex=1
    } else {
       songIndex +=1 
    }
    audioElement.src=(`/songs/${songIndex}.mp3`)   

    audioElement.currentTime=0;
    audioElement.play();
    mastersongname.innerText=songs[songIndex].songName
    masterPlay.classList.remove('fa-play-circle')  
    masterPlay.classList.add('fa-pause-circle') 
    console.log(songIndex)
})
