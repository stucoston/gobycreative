/* 
 YouTube Audio Embed 
 --------------------
 
 Author: Stu Coston
 copyright 2017 Goby Creative LLC
 All Rights Reserved
 http://gobycreative.com 
*/

function onYouTubeIframeAPIReady(){
  var s1=document.getElementById("youtube-audio-1"),
      s2=document.getElementById("youtube-audio-2"),
      s3=document.getElementById("youtube-audio-3"),
      s4=document.getElementById("youtube-audio-4"),
      s5=document.getElementById("youtube-audio-5"),
      s6=document.getElementById("youtube-audio-6"),
      s7=document.getElementById("youtube-audio-7"),
      s8=document.getElementById("youtube-audio-8"),
      s9=document.getElementById("youtube-audio-9"),
      s10=document.getElementById("youtube-audio-10"),
      s11=document.getElementById("youtube-audio-11"),
      s12=document.getElementById("youtube-audio-12"),
     /* s13=document.getElementById("youtube-audio-13"),
      s14=document.getElementById("youtube-audio-14"),
      s15=document.getElementById("youtube-audio-15"),
      s16=document.getElementById("youtube-audio-16"),
      s17=document.getElementById("youtube-audio-17"),
      s18=document.getElementById("youtube-audio-18"),
      s19=document.getElementById("youtube-audio-19"),
      s20=document.getElementById("youtube-audio-20"),
      s21=document.getElementById("youtube-audio-21"),
      s22=document.getElementById("youtube-audio-22"),
      s23=document.getElementById("youtube-audio-23"),
      s24=document.getElementById("youtube-audio-24"),
      s25=document.getElementById("youtube-audio-25"),*/
      
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
     /* t13=document.createElement("img"),
      t14=document.createElement("img"),
      t15=document.createElement("img"),
      t16=document.createElement("img"),
      t17=document.createElement("img"),
      t18=document.createElement("img"),
      t19=document.createElement("img"),
      t20=document.createElement("img"),
      t21=document.createElement("img"),
      t22=document.createElement("img"),
      t23=document.createElement("img"),
      t24=document.createElement("img"),
      t25=document.createElement("img");*/
 
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
   /* t13.setAttribute("id","youtube-icon-13"),
    t14.setAttribute("id","youtube-icon-14"),
    t15.setAttribute("id","youtube-icon-15"),
    t16.setAttribute("id","youtube-icon-16"),
    t17.setAttribute("id","youtube-icon-17"),
    t18.setAttribute("id","youtube-icon-18"),
    t19.setAttribute("id","youtube-icon-19"),
    t20.setAttribute("id","youtube-icon-20"),
    t21.setAttribute("id","youtube-icon-21"),
    t22.setAttribute("id","youtube-icon-22"),
    t23.setAttribute("id","youtube-icon-23"),
    t24.setAttribute("id","youtube-icon-24"),
    t25.setAttribute("id","youtube-icon-25"),*/
   
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
   /* t13.style.cssText="cursor:pointer;cursor:hand",
    t14.style.cssText="cursor:pointer;cursor:hand",
    t15.style.cssText="cursor:pointer;cursor:hand",
    t16.style.cssText="cursor:pointer;cursor:hand",
    t17.style.cssText="cursor:pointer;cursor:hand",
    t18.style.cssText="cursor:pointer;cursor:hand",
    t19.style.cssText="cursor:pointer;cursor:hand",
    t20.style.cssText="cursor:pointer;cursor:hand",
    t21.style.cssText="cursor:pointer;cursor:hand",
    t22.style.cssText="cursor:pointer;cursor:hand",
    t23.style.cssText="cursor:pointer;cursor:hand",
    t24.style.cssText="cursor:pointer;cursor:hand",
    t25.style.cssText="cursor:pointer;cursor:hand",*/
  
  s1.appendChild(t1);
  s2.appendChild(t2);
  s3.appendChild(t3);
  s4.appendChild(t4);
  s5.appendChild(t5);
  s6.appendChild(t6);
  s7.appendChild(t7);
  s8.appendChild(t8);
  s9.appendChild(t9);
  s10.appendChild(t10);
  s11.appendChild(t11);
  s12.appendChild(t12);
 /* s13.appendChild(t13);
  s14.appendChild(t14);
  s15.appendChild(t15);
  s16.appendChild(t16);
  s17.appendChild(t17);
  s18.appendChild(t18);
  s19.appendChild(t19);
  s20.appendChild(t20);
  s21.appendChild(t21);
  s22.appendChild(t22);
  s23.appendChild(t23);
  s24.appendChild(t24);
  s25.appendChild(t25);*/
  
  var div1=document.createElement("div"),
      div2=document.createElement("div"),
      div3=document.createElement("div"),
      div4=document.createElement("div"),
      div5=document.createElement("div"),
      div6=document.createElement("div"),
      div7=document.createElement("div"),
      div8=document.createElement("div"),
      div9=document.createElement("div"),
      div10=document.createElement("div"),
      div11=document.createElement("div"),
      div12=document.createElement("div");
     /* div13=document.createElement("div"),
      div14=document.createElement("div"),
      div15=document.createElement("div"),
      div16=document.createElement("div"),
      div17=document.createElement("div"),
      div18=document.createElement("div"),
      div19=document.createElement("div"),
      div20=document.createElement("div"),
      div21=document.createElement("div"),
      div22=document.createElement("div"),
      div23=document.createElement("div"),
      div24=document.createElement("div"),
      div25=document.createElement("div");*/
  
    div1.setAttribute("id","youtube-player-1"),
    div2.setAttribute("id","youtube-player-2"),
    div3.setAttribute("id","youtube-player-3"),
    div4.setAttribute("id","youtube-player-4"),
    div5.setAttribute("id","youtube-player-5"),
    div6.setAttribute("id","youtube-player-6"),
    div7.setAttribute("id","youtube-player-7"),
    div8.setAttribute("id","youtube-player-8"),
    div9.setAttribute("id","youtube-player-9"),
    div10.setAttribute("id","youtube-player-10"),
    div11.setAttribute("id","youtube-player-11"),
    div12.setAttribute("id","youtube-player-12"),
   /* div13.setAttribute("id","youtube-player-13"),
    div14.setAttribute("id","youtube-player-14"),
    div15.setAttribute("id","youtube-player-15"),
    div16.setAttribute("id","youtube-player-16"),
    div17.setAttribute("id","youtube-player-17"),
    div18.setAttribute("id","youtube-player-18"),
    div19.setAttribute("id","youtube-player-19"),
    div20.setAttribute("id","youtube-player-20"),
    div21.setAttribute("id","youtube-player-21"),
    div22.setAttribute("id","youtube-player-22"),
    div23.setAttribute("id","youtube-player-23"),
    div24.setAttribute("id","youtube-player-24"),
    div25.setAttribute("id","youtube-player-25"),*/
  
  s1.appendChild(div1);
  s2.appendChild(div2);
  s3.appendChild(div3);
  s4.appendChild(div4);
  s5.appendChild(div5);
  s6.appendChild(div6);
  s7.appendChild(div7);
  s8.appendChild(div8);
  s9.appendChild(div9);
  s10.appendChild(div10);
  s11.appendChild(div11);
  s12.appendChild(div12);
 /* s13.appendChild(div13);
  s14.appendChild(div14);
  s15.appendChild(div15);
  s16.appendChild(div16);
  s17.appendChild(div17);
  s18.appendChild(div18);
  s19.appendChild(div19);
  s20.appendChild(div20);
  s21.appendChild(div21);
  s22.appendChild(div22);
  s23.appendChild(div23);
  s24.appendChild(div24);
  s25.appendChild(div25);*/
  
  var c1=function(s1){
    var div1=s1?"IDzX9gL.png":"quyUPXN.png";
    t1.setAttribute("src","https://i.imgur.com/"+div1)
  };
 var c2=function(s2){
    var div2=s2?"IDzX9gL.png":"quyUPXN.png";
    t2.setAttribute("src","https://i.imgur.com/"+div2)
  };
 var c3=function(s3){
    var div3=s3?"IDzX9gL.png":"quyUPXN.png";
    t3.setAttribute("src","https://i.imgur.com/"+div3)
  };
 var c4=function(s4){
    var div4=s4?"IDzX9gL.png":"quyUPXN.png";
    t4.setAttribute("src","https://i.imgur.com/"+div4)
  };
 var c5=function(s5){
    var div5=s5?"IDzX9gL.png":"quyUPXN.png";
    t5.setAttribute("src","https://i.imgur.com/"+div5)
  };
 var c6=function(s6){
    var div6=s6?"IDzX9gL.png":"quyUPXN.png";
    t6.setAttribute("src","https://i.imgur.com/"+div6)
  };
 var c7=function(s7){
    var div7=s7?"IDzX9gL.png":"quyUPXN.png";
    t7.setAttribute("src","https://i.imgur.com/"+div7)
  };
 var c8=function(s8){
    var div8=s8?"IDzX9gL.png":"quyUPXN.png";
    t8.setAttribute("src","https://i.imgur.com/"+div8)
  };
 var c9=function(s9){
    var div9=s9?"IDzX9gL.png":"quyUPXN.png";
    t9.setAttribute("src","https://i.imgur.com/"+div9)
  };
 var c10=function(s10){
    var div10=s10?"IDzX9gL.png":"quyUPXN.png";
    t10.setAttribute("src","https://i.imgur.com/"+div10)
  };
 var c11=function(s11){
    var div11=s11?"IDzX9gL.png":"quyUPXN.png";
    t11.setAttribute("src","https://i.imgur.com/"+div11)
  };
 var c12=function(s12){
    var div12=s12?"IDzX9gL.png":"quyUPXN.png";
    t12.setAttribute("src","https://i.imgur.com/"+div12)
  };
/* var c13=function(s13){
    var div13=s13?"IDzX9gL.png":"quyUPXN.png";
    t13.setAttribute("src","https://i.imgur.com/"+div13)
  };
 var c14=function(s14){
    var div14=s14?"IDzX9gL.png":"quyUPXN.png";
    t14.setAttribute("src","https://i.imgur.com/"+div14)
  };
 var c15=function(s15){
    var div15=s15?"IDzX9gL.png":"quyUPXN.png";
    t15.setAttribute("src","https://i.imgur.com/"+div15)
  };
 var c16=function(s16){
    var div16=s16?"IDzX9gL.png":"quyUPXN.png";
    t16.setAttribute("src","https://i.imgur.com/"+div16)
  };
 var c17=function(s17){
    var div17=s17?"IDzX9gL.png":"quyUPXN.png";
    t17.setAttribute("src","https://i.imgur.com/"+div17)
  };
 var c18=function(s18){
    var div18=s18?"IDzX9gL.png":"quyUPXN.png";
    t18.setAttribute("src","https://i.imgur.com/"+div18)
  };
 var c19=function(s19){
    var div19=s19?"IDzX9gL.png":"quyUPXN.png";
    t19.setAttribute("src","https://i.imgur.com/"+div19)
  };
 var c20=function(s20){
    var div20=s20?"IDzX9gL.png":"quyUPXN.png";
    t20.setAttribute("src","https://i.imgur.com/"+div20)
  };
 var c21=function(s21){
    var div21=s21?"IDzX9gL.png":"quyUPXN.png";
    t21.setAttribute("src","https://i.imgur.com/"+div21)
  };
 var c22=function(s22){
    var div22=s22?"IDzX9gL.png":"quyUPXN.png";
    t22.setAttribute("src","https://i.imgur.com/"+div22)
  };
 var c23=function(s23){
    var div23=s23?"IDzX9gL.png":"quyUPXN.png";
    t23.setAttribute("src","https://i.imgur.com/"+div23)
  };
 var c24=function(s24){
    var div24=s24?"IDzX9gL.png":"quyUPXN.png";
    t24.setAttribute("src","https://i.imgur.com/"+div24)
  };
 var c25=function(s25){
    var div25=s25?"IDzX9gL.png":"quyUPXN.png";
    t25.setAttribute("src","https://i.imgur.com/"+div25)
  };*/
  
  s1.onclick=function(){
    y1.getPlayerState()===YT.PlayerState.PLAYING||y1.getPlayerState()===YT.PlayerState.BUFFERING?(y1.pauseVideo(),c1(!1)):(y1.playVideo(),c1(!0))
  };
  s2.onclick=function(){
    y2.getPlayerState()===YT.PlayerState.PLAYING||y2.getPlayerState()===YT.PlayerState.BUFFERING?(y2.pauseVideo(),c2(!1)):(y2.playVideo(),c2(!0))
  };
  s3.onclick=function(){
    y3.getPlayerState()===YT.PlayerState.PLAYING||y3.getPlayerState()===YT.PlayerState.BUFFERING?(y3.pauseVideo(),c3(!1)):(y3.playVideo(),c3(!0))
  };
  s4.onclick=function(){
    y4.getPlayerState()===YT.PlayerState.PLAYING||y4.getPlayerState()===YT.PlayerState.BUFFERING?(y4.pauseVideo(),c4(!1)):(y4.playVideo(),c4(!0))
  };
  s5.onclick=function(){
    y5.getPlayerState()===YT.PlayerState.PLAYING||y5.getPlayerState()===YT.PlayerState.BUFFERING?(y5.pauseVideo(),c5(!1)):(y5.playVideo(),c5(!0))
  };
  s6.onclick=function(){
    y6.getPlayerState()===YT.PlayerState.PLAYING||y6.getPlayerState()===YT.PlayerState.BUFFERING?(y6.pauseVideo(),c6(!1)):(y6.playVideo(),c6(!0))
  };
  s7.onclick=function(){
    y7.getPlayerState()===YT.PlayerState.PLAYING||y7.getPlayerState()===YT.PlayerState.BUFFERING?(y7.pauseVideo(),c7(!1)):(y7.playVideo(),c7(!0))
  };
  s8.onclick=function(){
    y8.getPlayerState()===YT.PlayerState.PLAYING||y8.getPlayerState()===YT.PlayerState.BUFFERING?(y8.pauseVideo(),c8(!1)):(y8.playVideo(),c8(!0))
  };
  s9.onclick=function(){
    y9.getPlayerState()===YT.PlayerState.PLAYING||y9.getPlayerState()===YT.PlayerState.BUFFERING?(y9.pauseVideo(),c9(!1)):(y9.playVideo(),c9(!0))
  };
  s10.onclick=function(){
    y10.getPlayerState()===YT.PlayerState.PLAYING||y10.getPlayerState()===YT.PlayerState.BUFFERING?(y10.pauseVideo(),c10(!1)):(y10.playVideo(),c10(!0))
  };
  s11.onclick=function(){
    y11.getPlayerState()===YT.PlayerState.PLAYING||y11.getPlayerState()===YT.PlayerState.BUFFERING?(y11.pauseVideo(),c11(!1)):(y11.playVideo(),c11(!0))
  };
  s12.onclick=function(){
    y12.getPlayerState()===YT.PlayerState.PLAYING||y12.getPlayerState()===YT.PlayerState.BUFFERING?(y12.pauseVideo(),c12(!1)):(y12.playVideo(),c12(!0))
  };
/* s13.onclick=function(){
    y13.getPlayerState()===YT.PlayerState.PLAYING||y13.getPlayerState()===YT.PlayerState.BUFFERING?(y13.pauseVideo(),c13(!1)):(y13.playVideo(),c13(!0))
  };
 s14.onclick=function(){
    y14.getPlayerState()===YT.PlayerState.PLAYING||y14.getPlayerState()===YT.PlayerState.BUFFERING?(y14.pauseVideo(),c14(!1)):(y14.playVideo(),c14(!0))
  };
 s15.onclick=function(){
    y15.getPlayerState()===YT.PlayerState.PLAYING||y15.getPlayerState()===YT.PlayerState.BUFFERING?(y15.pauseVideo(),c15(!1)):(y15.playVideo(),c15(!0))
  };
 s16.onclick=function(){
    y16.getPlayerState()===YT.PlayerState.PLAYING||y16.getPlayerState()===YT.PlayerState.BUFFERING?(y16.pauseVideo(),c16(!1)):(y16.playVideo(),c16(!0))
  };
 s17.onclick=function(){
    y17.getPlayerState()===YT.PlayerState.PLAYING||y17.getPlayerState()===YT.PlayerState.BUFFERING?(y17.pauseVideo(),c17(!1)):(y17.playVideo(),c17(!0))
  };
 s18.onclick=function(){
    y18.getPlayerState()===YT.PlayerState.PLAYING||y18.getPlayerState()===YT.PlayerState.BUFFERING?(y18.pauseVideo(),c18(!1)):(y18.playVideo(),c18(!0))
  };
 s19.onclick=function(){
    y19.getPlayerState()===YT.PlayerState.PLAYING||y19.getPlayerState()===YT.PlayerState.BUFFERING?(y19.pauseVideo(),c19(!1)):(y19.playVideo(),c19(!0))
  };
 s20.onclick=function(){
    y20.getPlayerState()===YT.PlayerState.PLAYING||y20.getPlayerState()===YT.PlayerState.BUFFERING?(y20.pauseVideo(),c20(!1)):(y20.playVideo(),c20(!0))
  };
 s21.onclick=function(){
    y21.getPlayerState()===YT.PlayerState.PLAYING||y21.getPlayerState()===YT.PlayerState.BUFFERING?(y21.pauseVideo(),c21(!1)):(y21.playVideo(),c21(!0))
  };
 s22.onclick=function(){
    y22.getPlayerState()===YT.PlayerState.PLAYING||y22.getPlayerState()===YT.PlayerState.BUFFERING?(y22.pauseVideo(),c22(!1)):(y22.playVideo(),c22(!0))
  };
 s23.onclick=function(){
    y23.getPlayerState()===YT.PlayerState.PLAYING||y23.getPlayerState()===YT.PlayerState.BUFFERING?(y23.pauseVideo(),c23(!1)):(y23.playVideo(),c23(!0))
  };
 s24.onclick=function(){
    y24.getPlayerState()===YT.PlayerState.PLAYING||y24.getPlayerState()===YT.PlayerState.BUFFERING?(y24.pauseVideo(),c24(!1)):(y24.playVideo(),c24(!0))
  };
 s25.onclick=function(){
    y25.getPlayerState()===YT.PlayerState.PLAYING||y25.getPlayerState()===YT.PlayerState.BUFFERING?(y25.pauseVideo(),c25(!1)):(y25.playVideo(),c25(!0))
  };*/
  
  var y1=new YT.Player("youtube-player-1",{
    height:"0",
    width:"0",
    videoId:s1.dataset.video,
    playerVars:{
      autoplay:s1.dataset.autoplay,    
      loop:s1.dataset.loop,
    },
    events:{
      onReady:function(s1){
        y1.setPlaybackQuality("small"),
        c1(y1.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(one){
        s1.data===YT.PlayerState.ENDED&&c1(!1)
      }
    }
  })
  
  var y2=new YT.Player("youtube-player-2",{
    height:"0",
    width:"0",
    videoId:s2.dataset.video,
    playerVars:{
      autoplay:s2.dataset.autoplay,    
      loop:s2.dataset.loop,
    },
    events:{
      onReady:function(two){
        y2.setPlaybackQuality("small"),
        c2(y2.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s2){
        s2.data===YT.PlayerState.ENDED&&c2(!1)
      }
    }
  })
  
  var y3=new YT.Player("youtube-player-3",{
    height:"0",
    width:"0",
    videoId:s3.dataset.video,
    playerVars:{
      autoplay:s3.dataset.autoplay,    
      loop:s3.dataset.loop,
    },
    events:{
      onReady:function(s3){
        y3.setPlaybackQuality("small"),
        c3(y3.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s3){
        s3.data===YT.PlayerState.ENDED&&c3(!1)
      }
    }
  })
  
  var y4=new YT.Player("youtube-player-4",{
    height:"0",
    width:"0",
    videoId:s4.dataset.video,
    playerVars:{
      autoplay:s4.dataset.autoplay,    
      loop:s4.dataset.loop,
    },
    events:{
      onReady:function(s4){
        y4.setPlaybackQuality("small"),
        c4(y4.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s4){
        s4.data===YT.PlayerState.ENDED&&c4(!1)
      }
    }
  })
  
  var y5=new YT.Player("youtube-player-5",{
    height:"0",
    width:"0",
    videoId:s5.dataset.video,
    playerVars:{
      autoplay:s5.dataset.autoplay,    
      loop:s5.dataset.loop,
    },
    events:{
      onReady:function(s5){
        y5.setPlaybackQuality("small"),
        c5(y5.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s5){
        s5.data===YT.PlayerState.ENDED&&c5(!1)
      }
    }
  })
  
  var y6=new YT.Player("youtube-player-6",{
    height:"0",
    width:"0",
    videoId:s6.dataset.video,
    playerVars:{
      autoplay:s6.dataset.autoplay,    
      loop:s6.dataset.loop,
    },
    events:{
      onReady:function(s6){
        y6.setPlaybackQuality("small"),
        c6(y6.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s6){
        s6.data===YT.PlayerState.ENDED&&c6(!1)
      }
    }
  })
  
  var y7=new YT.Player("youtube-player-7",{
    height:"0",
    width:"0",
    videoId:s7.dataset.video,
    playerVars:{
      autoplay:s7.dataset.autoplay,    
      loop:s7.dataset.loop,
    },
    events:{
      onReady:function(s7){
        y7.setPlaybackQuality("small"),
        c7(y7.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s7){
        s7.data===YT.PlayerState.ENDED&&c7(!1)
      }
    }
  })
  
  var y8=new YT.Player("youtube-player-8",{
    height:"0",
    width:"0",
    videoId:s8.dataset.video,
    playerVars:{
      autoplay:s8.dataset.autoplay,    
      loop:s8.dataset.loop,
    },
    events:{
      onReady:function(s8){
        y8.setPlaybackQuality("small"),
        c8(y8.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s8){
        s8.data===YT.PlayerState.ENDED&&c8(!1)
      }
    }
  })
  
  var y9=new YT.Player("youtube-player-9",{
    height:"0",
    width:"0",
    videoId:s9.dataset.video,
    playerVars:{
      autoplay:s9.dataset.autoplay,    
      loop:s9.dataset.loop,
    },
    events:{
      onReady:function(s9){
        y9.setPlaybackQuality("small"),
        c9(y9.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s9){
        s9.data===YT.PlayerState.ENDED&&c9(!1)
      }
    }
  })
  
  var y10=new YT.Player("youtube-player-10",{
    height:"0",
    width:"0",
    videoId:s10.dataset.video,
    playerVars:{
      autoplay:s10.dataset.autoplay,    
      loop:s10.dataset.loop,
    },
    events:{
      onReady:function(s10){
        y10.setPlaybackQuality("small"),
        c10(y10.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s10){
        s10.data===YT.PlayerState.ENDED&&c10(!1)
      }
    }
  })
  
  var y11=new YT.Player("youtube-player-11",{
    height:"0",
    width:"0",
    videoId:s11.dataset.video,
    playerVars:{
      autoplay:s11.dataset.autoplay,    
      loop:s11.dataset.loop,
    },
    events:{
      onReady:function(s11){
        y11.setPlaybackQuality("small"),
        c11(y11.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s11){
        s11.data===YT.PlayerState.ENDED&&c11(!1)
      }
    }
  })
  
  var y12=new YT.Player("youtube-player-12",{
    height:"0",
    width:"0",
    videoId:s12.dataset.video,
    playerVars:{
      autoplay:s12.dataset.autoplay,    
      loop:s12.dataset.loop,
    },
    events:{
      onReady:function(s12){
        y12.setPlaybackQuality("small"),
        c12(y12.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s12){
        s12.data===YT.PlayerState.ENDED&&s12(!1)
      }
    }
  })
  
 /* var y13=new YT.Player("youtube-player-13",{
    height:"0",
    width:"0",
    videoId:s13.dataset.video,
    playerVars:{
      autoplay:s13.dataset.autoplay,    
      loop:s13.dataset.loop,
    },
    events:{
      onReady:function(s13){
        y13.setPlaybackQuality("small"),
        c13(y13.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s13){
        s13.data===YT.PlayerState.ENDED&&s13(!1)
      }
    }
  })
  
  var y14=new YT.Player("youtube-player-14",{
    height:"0",
    width:"0",
    videoId:s14.dataset.video,
    playerVars:{
      autoplay:s14.dataset.autoplay,    
      loop:s14.dataset.loop,
    },
    events:{
      onReady:function(s14){
        y14.setPlaybackQuality("small"),
        c14(y14.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s14){
        s14.data===YT.PlayerState.ENDED&&s14(!1)
      }
    }
  })
  
  var y15=new YT.Player("youtube-player-15",{
    height:"0",
    width:"0",
    videoId:s15.dataset.video,
    playerVars:{
      autoplay:s15.dataset.autoplay,    
      loop:s15.dataset.loop,
    },
    events:{
      onReady:function(s15){
        y15.setPlaybackQuality("small"),
        c15(y15.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s15){
        s15.data===YT.PlayerState.ENDED&&s15(!1)
      }
    }
  })
  
  var y16=new YT.Player("youtube-player-16",{
    height:"0",
    width:"0",
    videoId:s16.dataset.video,
    playerVars:{
      autoplay:s16.dataset.autoplay,    
      loop:s16.dataset.loop,
    },
    events:{
      onReady:function(s16){
        y16.setPlaybackQuality("small"),
        c16(y16.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s16){
        s16.data===YT.PlayerState.ENDED&&s16(!1)
      }
    }
  })
  
  var y17=new YT.Player("youtube-player-17",{
    height:"0",
    width:"0",
    videoId:s17.dataset.video,
    playerVars:{
      autoplay:s17.dataset.autoplay,    
      loop:s17.dataset.loop,
    },
    events:{
      onReady:function(s17){
        y17.setPlaybackQuality("small"),
        c17(y17.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s17){
        s17.data===YT.PlayerState.ENDED&&s17(!1)
      }
    }
  })
  
  var y18=new YT.Player("youtube-player-18",{
    height:"0",
    width:"0",
    videoId:s18.dataset.video,
    playerVars:{
      autoplay:s18.dataset.autoplay,    
      loop:s18.dataset.loop,
    },
    events:{
      onReady:function(s18){
        y18.setPlaybackQuality("small"),
        c18(y18.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s18){
        s18.data===YT.PlayerState.ENDED&&s18(!1)
      }
    }
  })
  
  var y19=new YT.Player("youtube-player-19",{
    height:"0",
    width:"0",
    videoId:s19.dataset.video,
    playerVars:{
      autoplay:s19.dataset.autoplay,    
      loop:s19.dataset.loop,
    },
    events:{
      onReady:function(s19){
        y19.setPlaybackQuality("small"),
        c19(y19.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s19){
        s19.data===YT.PlayerState.ENDED&&s19(!1)
      }
    }
  })
  
  var y20=new YT.Player("youtube-player-20",{
    height:"0",
    width:"0",
    videoId:s20.dataset.video,
    playerVars:{
      autoplay:s20.dataset.autoplay,    
      loop:s20.dataset.loop,
    },
    events:{
      onReady:function(s20){
        y20.setPlaybackQuality("small"),
        c20(y20.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s20){
        s20.data===YT.PlayerState.ENDED&&s20(!1)
      }
    }
  })
  
  var y21=new YT.Player("youtube-player-21",{
    height:"0",
    width:"0",
    videoId:s21.dataset.video,
    playerVars:{
      autoplay:s21.dataset.autoplay,    
      loop:s21.dataset.loop,
    },
    events:{
      onReady:function(s21){
        y21.setPlaybackQuality("small"),
        c21(y21.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s21){
        s21.data===YT.PlayerState.ENDED&&s21(!1)
      }
    }
  })
  
  var y22=new YT.Player("youtube-player-22",{
    height:"0",
    width:"0",
    videoId:s22.dataset.video,
    playerVars:{
      autoplay:s22.dataset.autoplay,    
      loop:s22.dataset.loop,
    },
    events:{
      onReady:function(s22){
        y22.setPlaybackQuality("small"),
        c22(y22.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s22){
        s22.data===YT.PlayerState.ENDED&&s22(!1)
      }
    }
  })
  
  var y23=new YT.Player("youtube-player-23",{
    height:"0",
    width:"0",
    videoId:s23.dataset.video,
    playerVars:{
      autoplay:s23.dataset.autoplay,    
      loop:s23.dataset.loop,
    },
    events:{
      onReady:function(s23){
        y23.setPlaybackQuality("small"),
        c23(y23.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s23){
        s23.data===YT.PlayerState.ENDED&&s23(!1)
      }
    }
  })
  
  var y24=new YT.Player("youtube-player-24",{
    height:"0",
    width:"0",
    videoId:s24.dataset.video,
    playerVars:{
      autoplay:s24.dataset.autoplay,    
      loop:s24.dataset.loop,
    },
    events:{
      onReady:function(s24){
        y24.setPlaybackQuality("small"),
        c24(y24.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s24){
        s24.data===YT.PlayerState.ENDED&&s24(!1)
      }
    }
  })
  
  var y25=new YT.Player("youtube-player-25",{
    height:"0",
    width:"0",
    videoId:s25.dataset.video,
    playerVars:{
      autoplay:s25.dataset.autoplay,    
      loop:s25.dataset.loop,
    },
    events:{
      onReady:function(s25){
        y25.setPlaybackQuality("small"),
        c25(y25.getPlayerState()!==YT.PlayerState.CUED)
      },
      onStateChange:function(s25){
        s25.data===YT.PlayerState.ENDED&&s25(!1)
      }
    }
  })*/
  
}
