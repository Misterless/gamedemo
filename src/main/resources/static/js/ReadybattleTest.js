        //let canvas; //도화지 객체
        //let context; //컨텍스트 객체
 
        // 플레이어 이동 방향과 속도
        //let dx=0;
        //let dy=0;
 
        // 키 이벤트로 인해 인식된 keycode변수
        //let keycode;
 /*
        // 전역변수로서 이미지 객체 생성
        //let imgChar= new Image();
        //imgChar.src="/image/ryan.png";
        //let imgBg= new Image();
        //imgBg.src="/image/bgbg.png";
        //let imgEnemy= new Image();
        //imgEnemy.src="/image/enemy.png";
        // 플레이어 캐릭터의 중심좌표
        //let x=720, y=360; //일단 적당한곳으로 좌표 설정
        //let w=40, h=40; //플레이어 이미지의 사이즈
 
        function loaded(){
            canvas= document.getElementById('c1');
            context= canvas.getContext('2d');
 
            runGame(); //게임 진행하는 메서드
            //35ms 마다 runGame()를 다시 호출
            setInterval(runGame,25); //
        }
 
        function runGame(){
            moveAll(); //캐릭터 움직이기
            drawAll(); // 이미지들 그리기
        }
 */
        
 


     /*   function keydown(){
            //눌러진 key의 코드값
            keycode=event.keyCode;
            switch(keycode){
                case 37: if (x >40 ) {
                    dx = -5;
                }else {break;
                } break;//left
                case 38: if(y>40){
                    dy = -5;} break;
                 //up
                case 39:if(x<1360) {dx = 5;} break; //right
                case 40: if(y<680){dy= +5; break;}; //down
            }
        }
        function keypress(){
            //키 누를 때 
            keycode=event.keyCode;
            switch(keycode){
                case 37: if (x = 0) {
                    dx = 0;
                }else {break;
                } break;//left
                case 38: if(y>40){
                    dy = -5;} break;
                 //up
                case 39:if(x<1360) {dx = +5;} break; //right
                case 40: if(y<680){dy= +5; break;}; //down
            }
        }
        function keyup(){
            //키놓을때 
            keycode=event.keyCode;
            switch(keycode){
                case 37 : dx=0; break;
                //case 37: $("#ryan.png").position.left(30);
                case 38: dy=0; break;
                case 39: dx=0; break;
                case 40: dy=0; break;
            }
            */

             //let ryan= #""   
            $("#testdown-btn").click(function() { 
                
                $("#testryan").animate({ top : '+=30' }, 800);
                checkPosition();
            });
            $("#testup-btn").click(function() { 
                $("#testryan").animate({ top : `-=30` }, 800);
            checkPosition();
            });
            $("#testright-btn").click(function() { 
                $("#testryan").animate({ left : `+=30` }, 800);
            checkPosition();
            });
            $("#testleft-btn").click(function() { 
                $("#testryan").animate({ left : `-=30` }, 800);
            checkPosition();
            });


            function  checkPosition() {
                setTimeout(function() {
                $(".testryan").text("left:" + $(".testryan").css("left") + " top:" + $(".testryan").css("top"));
                }, 1200);
                };

         
         
        