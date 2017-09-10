/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Stu Coston
 copyright 2017 Goby Creative LLC
 All Rights Reserved
 http://gobycreative.com 
*/

function onYouTubeIframeAPIReady(){
  var a=document.getElementById("youtube-audio-1"),
  b=document.getElementById("youtube-audio-2"),
  c=document.getElementById("youtube-audio-3"),
  d=document.getElementById("youtube-audio-4"),
  e=document.getElementById("youtube-audio-5"),
  f=document.getElementById("youtube-audio-6"),
  g=document.getElementById("youtube-audio-7"),
  h=document.getElementById("youtube-audio-8"),
  i=document.getElementById("youtube-audio-9"),
  j=document.getElementById("youtube-audio-10"),
  k=document.getElementById("youtube-audio-11"),
  l=document.getElementById("youtube-audio-12"),
  
  t=document.createElement("img");
  t.setAttribute("id","youtube-icon"),
  t.style.cssText="cursor:pointer;cursor:hand",
  
  a.appendChild(t);
  b.appendChild(t);
  c.appendChild(t);
  d.appendChild(t);
  e.appendChild(t);
  f.appendChild(t);
  g.appendChild(t);
  h.appendChild(t);
  i.appendChild(t);
  j.appendChild(t);
  k.appendChild(t);
  l.appendChild(t);
  
  var m=document.createElement("div");
  m.setAttribute("id","youtube-player"),
  
  a.appendChild(m);
  b.appendChild(m);
  c.appendChild(m);
  d.appendChild(m);
  e.appendChild(m);
  f.appendChild(m);
  g.appendChild(m);
  h.appendChild(m);
  i.appendChild(m);
  j.appendChild(m);
  k.appendChild(m);
  l.appendChild(m);
  
  var n=function(a){
    var m=a?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var o=function(b){
    var m=b?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var p=function(c){
    var m=c?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var q=function(d){
    var m=d?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var s=function(e){
    var m=e?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var u=function(f){
    var m=f?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var v=function(g){
    var m=g?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var w=function(h){
    var m=h?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var x=function(i){
    var m=i?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var y=function(j){
    var m=j?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var z=function(k){
    var m=k?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
 var aa=function(l){
    var m=l?"IDzX9gL.png":"quyUPXN.png",
    t.setAttribute("src","https://i.imgur.com/"+m)
  };
  
  a.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  b.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  c.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  d.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  e.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  f.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  g.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  h.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  i.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  j.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  k.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  l.onclick=function(){
    r.getPlayerState()===YT.PlayerState.PLAYING||r.getPlayerState()===YT.PlayerState.BUFFERING?(r.pauseVideo(),o(!1)):(r.playVideo(),o(!0))
  };
  
  var r=new YT.Player("youtube-player",{
    height:"0",
    width:"0",
    videoId:e.dataset.video,
    playerVars:{
      autoplay:a.dataset.autoplay,
      autoplay:b.dataset.autoplay,
      autoplay:c.dataset.autoplay,
      autoplay:d.dataset.autoplay,
      autoplay:e.dataset.autoplay,
      autoplay:f.dataset.autoplay,
      autoplay:g.dataset.autoplay,
      autoplay:h.dataset.autoplay,
      autoplay:i.dataset.autoplay,
      autoplay:k.dataset.autoplay,
      autoplay:k.dataset.autoplay,
      autoplay:l.dataset.autoplay,
      
      loop:a.dataset.loop,
      loop:b.dataset.loop,
      loop:c.dataset.loop,
      loop:d.dataset.loop,
      loop:e.dataset.loop,
      loop:f.dataset.loop,
      loop:g.dataset.loop,
      loop:h.dataset.loop,
      loop:i.dataset.loop,
      loop:j.dataset.loop,
      loop:k.dataset.loop,
      loop:l.dataset.loop
    },
    events:{
    
      onReady:function(a){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(b){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(c){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(d){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(e){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(f){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(g){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(h){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(i){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(j){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(k){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      onReady:function(l){
        r.setPlaybackQuality("small"),
        o(r.getPlayerState()!==YT.PlayerState.CUED)
      },
      
      onStateChange:function(a){
        a.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(b){
        b.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(c){
        c.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(d){
        d.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(e){
        e.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(f){
        f.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(g){
        g.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(h){
        h.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(i){
        i.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(j){
        j.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(k){
        k.data===YT.PlayerState.ENDED&&o(!1)
      }
      onStateChange:function(l){
        l.data===YT.PlayerState.ENDED&&o(!1)
      }
    }
  })
}
