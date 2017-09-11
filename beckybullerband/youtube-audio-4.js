/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Stu Coston
 copyright 2017 Goby Creative LLC
 All Rights Reserved
 http://gobycreative.com 
*/

function onYouTubeIframeAPIReady(){
  var f=document.getElementById("youtube-audio-4"),
  t=document.createElement("img");
 
  t.setAttribute("id","youtube-icon"),
  t.style.cssText="cursor:pointer;cursor:hand",
  f.appendChild(t);
  
  var b=document.createElement("div");
  b.setAttribute("id","youtube-player"),
  
  f.appendChild(b);
  
  var o=function(f){
    var a=f?"IDzX9gL.png":"quyUPXN.png";
    t.setAttribute("src","https://i.imgur.com/"+a)
  };
  f.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  var r=new YT.Player("youtube-player",{
    height:"0",
    width:"0",
    videoId:f.dataset.video,
    playerVars:{
      autoplay:f.dataset.autoplay,
      loop:f.dataset.loop
    },
    events:{
      onReady:function(f){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(f){
        e.data===YT.PlayerState.ENDED&&o(!1)
      }
    }
  })
}
