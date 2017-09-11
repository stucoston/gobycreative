/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Stu Coston
 copyright 2017 Goby Creative LLC
 All Rights Reserved
 http://gobycreative.com 
*/

function onYouTubeIframeAPIReady(){
  var one=document.getElementById("youtube-audio-1"),
      two=document.getElementById("youtube-audio-2"),
      three=document.getElementById("youtube-audio-3"),
      four=document.getElementById("youtube-audio-4"),
      five=document.getElementById("youtube-audio-5"),
      six=document.getElementById("youtube-audio-6"),
      seven=document.getElementById("youtube-audio-7"),
      eight=document.getElementById("youtube-audio-8"),
      nine=document.getElementById("youtube-audio-9"),
      ten=document.getElementById("youtube-audio-10"),
      eleven=document.getElementById("youtube-audio-11"),
      twelve=document.getElementById("youtube-audio-12"),
      
      t1=document.createElement("img"),
      t2=document.createElement("img"),
      t3=document.createElement("img"),
      t4=document.createElement("img"),
      t5=document.createElement("img"),
      t6=document.createElement("img"),
      t7=document.createElement("img"),
      t8=document.createElement("img"),
      t9=document.createElement("img"),
      t10=document.createElement("img"),
      t11=document.createElement("img"),
      t12=document.createElement("img");
 
   t1.setAttribute("id","youtube-icon-1"),
   t2.setAttribute("id","youtube-icon-2"),
   t3.setAttribute("id","youtube-icon-3"),
   t4.setAttribute("id","youtube-icon-4"),
   t5.setAttribute("id","youtube-icon-5"),
   t6.setAttribute("id","youtube-icon-6"),
   t7.setAttribute("id","youtube-icon-7"),
   t8.setAttribute("id","youtube-icon-8"),
   t9.setAttribute("id","youtube-icon-9"),
   t10.setAttribute("id","youtube-icon-10"),
   t11.setAttribute("id","youtube-icon-11"),
   t12.setAttribute("id","youtube-icon-12"),
   
   t1.style.cssText="cursor:pointer;cursor:hand",
   t2.style.cssText="cursor:pointer;cursor:hand",
   t3.style.cssText="cursor:pointer;cursor:hand",
   t4.style.cssText="cursor:pointer;cursor:hand",
   t5.style.cssText="cursor:pointer;cursor:hand",
   t6.style.cssText="cursor:pointer;cursor:hand",
   t7.style.cssText="cursor:pointer;cursor:hand",
   t8.style.cssText="cursor:pointer;cursor:hand",
   t9.style.cssText="cursor:pointer;cursor:hand",
   t10.style.cssText="cursor:pointer;cursor:hand",
   t11.style.cssText="cursor:pointer;cursor:hand",
   t12.style.cssText="cursor:pointer;cursor:hand",
  
  one.appendChild(t1);
  two.appendChild(t2);
  three.appendChild(t3);
  four.appendChild(t4);
  five.appendChild(t5);
  six.appendChild(t6);
  seven.appendChild(t7);
  eight.appendChild(t8);
  nine.appendChild(t9);
  ten.appendChild(t10);
  eleven.appendChild(t11);
  twelve.appendChild(t12);
  
  var divOne=document.createElement("div"),
      divTwo=document.createElement("div"),
      divThree=document.createElement("div"),
      divFour=document.createElement("div"),
      divFive=document.createElement("div"),
      divSix=document.createElement("div"),
      divSeven=document.createElement("div"),
      divEight=document.createElement("div"),
      divNine=document.createElement("div"),
      divTen=document.createElement("div"),
      divEleven=document.createElement("div"),
      divTwelve=document.createElement("div");
  
    divOne.setAttribute("id","youtube-player-1"),
    divTwo.setAttribute("id","youtube-player-2"),
    divThree.setAttribute("id","youtube-player-3"),
    divFour.setAttribute("id","youtube-player-4"),
    divFive.setAttribute("id","youtube-player-5"),
    divSix.setAttribute("id","youtube-player-6"),
    divSeven.setAttribute("id","youtube-player-7"),
    divEight.setAttribute("id","youtube-player-8"),
    divNine.setAttribute("id","youtube-player-9"),
    divTen.setAttribute("id","youtube-player-10"),
    divEleven.setAttribute("id","youtube-player-11"),
    divTwelve.setAttribute("id","youtube-player-12"),
  
  one.appendChild(divOne);
  two.appendChild(divTwo);
  three.appendChild(divThree);
  four.appendChild(divFour);
  five.appendChild(divFive);
  six.appendChild(divSix);
  seven.appendChild(divSeven);
  eight.appendChild(divEight);
  nine.appendChild(divNine);
  ten.appendChild(divTen);
  eleven.appendChild(divEleven);
  twelve.appendChild(divTwelve);
  
  var a=function(one){
    var divOne=one?"IDzX9gL.png":"quyUPXN.png";
    t1.setAttribute("src","https://i.imgur.com/"+divOne)
  };
 var b=function(two){
    var divTwo=two?"IDzX9gL.png":"quyUPXN.png";
    t2.setAttribute("src","https://i.imgur.com/"+divTwo)
  };
 var c=function(three){
    var divThree=three?"IDzX9gL.png":"quyUPXN.png";
    t3.setAttribute("src","https://i.imgur.com/"+divThree)
  };
 var d=function(four){
    var divFour=four?"IDzX9gL.png":"quyUPXN.png";
    t4.setAttribute("src","https://i.imgur.com/"+divFour)
  };
 var e=function(five){
    var divFive=five?"IDzX9gL.png":"quyUPXN.png";
    t5.setAttribute("src","https://i.imgur.com/"+divFive)
  };
 var f=function(six){
    var divSix=six?"IDzX9gL.png":"quyUPXN.png";
    t6.setAttribute("src","https://i.imgur.com/"+divSix)
  };
 var g=function(seven){
    var divSeven=seven?"IDzX9gL.png":"quyUPXN.png";
    t7.setAttribute("src","https://i.imgur.com/"+divSeven)
  };
 var h=function(eight){
    var divEight=eight?"IDzX9gL.png":"quyUPXN.png";
    t8.setAttribute("src","https://i.imgur.com/"+divEight)
  };
 var i=function(nine){
    var divNine=nine?"IDzX9gL.png":"quyUPXN.png";
    t9.setAttribute("src","https://i.imgur.com/"+divNine)
  };
 var j=function(ten){
    var divTen=ten?"IDzX9gL.png":"quyUPXN.png";
    t10.setAttribute("src","https://i.imgur.com/"+divTen)
  };
 var k=function(eleven){
    var divEleven=eleven?"IDzX9gL.png":"quyUPXN.png";
    t11.setAttribute("src","https://i.imgur.com/"+divEleven)
  };
 var l=function(twelve){
    var divTwelve=twelve?"IDzX9gL.png":"quyUPXN.png";
    t12.setAttribute("src","https://i.imgur.com/"+divTwelve)
  };
  
  one.onclick=function(){
    y1.getPlayerState()===YT.PlayerState.PLAYING||y1.getPlayerState()===YT.PlayerState.BUFFERING?(y1.pauseVideo(),a(!1)):(y1.playVideo(),a(!0))
  };
  two.onclick=function(){
    y2.getPlayerState()===YT.PlayerState.PLAYING||y2.getPlayerState()===YT.PlayerState.BUFFERING?(y2.pauseVideo(),b(!1)):(y2.playVideo(),b(!0))
  };
  three.onclick=function(){
    y3.getPlayerState()===YT.PlayerState.PLAYING||y3.getPlayerState()===YT.PlayerState.BUFFERING?(y3.pauseVideo(),c(!1)):(y3.playVideo(),c(!0))
  };
  four.onclick=function(){
    y4.getPlayerState()===YT.PlayerState.PLAYING||y4.getPlayerState()===YT.PlayerState.BUFFERING?(y4.pauseVideo(),d(!1)):(y4.playVideo(),d(!0))
  };
  five.onclick=function(){
    y5.getPlayerState()===YT.PlayerState.PLAYING||y5.getPlayerState()===YT.PlayerState.BUFFERING?(y5.pauseVideo(),e(!1)):(y5.playVideo(),e(!0))
  };
  six.onclick=function(){
    y6.getPlayerState()===YT.PlayerState.PLAYING||y6.getPlayerState()===YT.PlayerState.BUFFERING?(y6.pauseVideo(),f(!1)):(y6.playVideo(),f(!0))
  };
  seven.onclick=function(){
    y7.getPlayerState()===YT.PlayerState.PLAYING||y7.getPlayerState()===YT.PlayerState.BUFFERING?(y7.pauseVideo(),g(!1)):(y7.playVideo(),g(!0))
  };
  eight.onclick=function(){
    y8.getPlayerState()===YT.PlayerState.PLAYING||y8.getPlayerState()===YT.PlayerState.BUFFERING?(y8.pauseVideo(),h(!1)):(y8.playVideo(),h(!0))
  };
  nine.onclick=function(){
    y9.getPlayerState()===YT.PlayerState.PLAYING||y9.getPlayerState()===YT.PlayerState.BUFFERING?(y9.pauseVideo(),i(!1)):(y9.playVideo(),i(!0))
  };
  ten.onclick=function(){
    y10.getPlayerState()===YT.PlayerState.PLAYING||y10.getPlayerState()===YT.PlayerState.BUFFERING?(y10.pauseVideo(),j(!1)):(y10.playVideo(),j(!0))
  };
  eleven.onclick=function(){
    y11.getPlayerState()===YT.PlayerState.PLAYING||y11.getPlayerState()===YT.PlayerState.BUFFERING?(y11.pauseVideo(),k(!1)):(y11.playVideo(),k(!0))
  };
  twelve.onclick=function(){
    y12.getPlayerState()===YT.PlayerState.PLAYING||y12.getPlayerState()===YT.PlayerState.BUFFERING?(y12.pauseVideo(),l(!1)):(y12.playVideo(),l(!0))
  };
  
  var y1=new YT.Player("youtube-player-1",{
    height:"0",
    width:"0",
    videoId:one.dataset.video,
    playerVars:{
      autoplay:one.dataset.autoplay,    
      loop:one.dataset.loop,
    },
    events:{
      onReady:function(one){
        y1.setPlaybackQuality("small"),
        a(y1.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(one){
        one.data===YT.PlayerState.ENDED&&a(!1)
      }
    }
  })
  
  var y2=new YT.Player("youtube-player-2",{
    height:"0",
    width:"0",
    videoId:two.dataset.video,
    playerVars:{
      autoplay:two.dataset.autoplay,    
      loop:two.dataset.loop,
    },
    events:{
      onReady:function(two){
        y2.setPlaybackQuality("small"),
        b(y2.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(two){
        two.data===YT.PlayerState.ENDED&&b(!1)
      }
    }
  })
  
  var y3=new YT.Player("youtube-player-3",{
    height:"0",
    width:"0",
    videoId:three.dataset.video,
    playerVars:{
      autoplay:three.dataset.autoplay,    
      loop:three.dataset.loop,
    },
    events:{
      onReady:function(three){
        y3.setPlaybackQuality("small"),
        c(y3.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(three){
        three.data===YT.PlayerState.ENDED&&c(!1)
      }
    }
  })
  
  var y4=new YT.Player("youtube-player-4",{
    height:"0",
    width:"0",
    videoId:four.dataset.video,
    playerVars:{
      autoplay:four.dataset.autoplay,    
      loop:four.dataset.loop,
    },
    events:{
      onReady:function(four){
        y4.setPlaybackQuality("small"),
        d(y4.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(four){
        four.data===YT.PlayerState.ENDED&&d(!1)
      }
    }
  })
  
  var y5=new YT.Player("youtube-player-5",{
    height:"0",
    width:"0",
    videoId:five.dataset.video,
    playerVars:{
      autoplay:five.dataset.autoplay,    
      loop:five.dataset.loop,
    },
    events:{
      onReady:function(five){
        y5.setPlaybackQuality("small"),
        e(y5.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(five){
        five.data===YT.PlayerState.ENDED&&e(!1)
      }
    }
  })
  
  var y6=new YT.Player("youtube-player-6",{
    height:"0",
    width:"0",
    videoId:six.dataset.video,
    playerVars:{
      autoplay:six.dataset.autoplay,    
      loop:six.dataset.loop,
    },
    events:{
      onReady:function(six){
        y6.setPlaybackQuality("small"),
        f(y6.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(six){
        six.data===YT.PlayerState.ENDED&&f(!1)
      }
    }
  })
  
  var y7=new YT.Player("youtube-player-7",{
    height:"0",
    width:"0",
    videoId:seven.dataset.video,
    playerVars:{
      autoplay:seven.dataset.autoplay,    
      loop:seven.dataset.loop,
    },
    events:{
      onReady:function(seven){
        y7.setPlaybackQuality("small"),
        g(y7.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(seven){
        seven.data===YT.PlayerState.ENDED&&g(!1)
      }
    }
  })
  
  var y8=new YT.Player("youtube-player-8",{
    height:"0",
    width:"0",
    videoId:eight.dataset.video,
    playerVars:{
      autoplay:eight.dataset.autoplay,    
      loop:eight.dataset.loop,
    },
    events:{
      onReady:function(eight){
        y8.setPlaybackQuality("small"),
        h(y8.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(eight){
        eight.data===YT.PlayerState.ENDED&&h(!1)
      }
    }
  })
  
  var y9=new YT.Player("youtube-player-9",{
    height:"0",
    width:"0",
    videoId:nine.dataset.video,
    playerVars:{
      autoplay:nine.dataset.autoplay,    
      loop:nine.dataset.loop,
    },
    events:{
      onReady:function(nine){
        y9.setPlaybackQuality("small"),
        i(y9.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(nine){
        nine.data===YT.PlayerState.ENDED&&i(!1)
      }
    }
  })
  
  var y10=new YT.Player("youtube-player-10",{
    height:"0",
    width:"0",
    videoId:ten.dataset.video,
    playerVars:{
      autoplay:ten.dataset.autoplay,    
      loop:ten.dataset.loop,
    },
    events:{
      onReady:function(ten){
        y10.setPlaybackQuality("small"),
        j(y10.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(ten){
        ten.data===YT.PlayerState.ENDED&&j(!1)
      }
    }
  })
  
  var y11=new YT.Player("youtube-player-11",{
    height:"0",
    width:"0",
    videoId:eleven.dataset.video,
    playerVars:{
      autoplay:eleven.dataset.autoplay,    
      loop:eleven.dataset.loop,
    },
    events:{
      onReady:function(eleven){
        y11.setPlaybackQuality("small"),
        k(y11.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(eleven){
        eleven.data===YT.PlayerState.ENDED&&k(!1)
      }
    }
  })
  
  var y12=new YT.Player("youtube-player-12",{
    height:"0",
    width:"0",
    videoId:twelve.dataset.video,
    playerVars:{
      autoplay:twelve.dataset.autoplay,    
      loop:twelve.dataset.loop,
    },
    events:{
      onReady:function(twelve){
        y12.setPlaybackQuality("small"),
        l(y12.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(twelve){
        twelve.data===YT.PlayerState.ENDED&&l(!1)
      }
    }
  })
  
}
