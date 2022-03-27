package site.metacoding.gamedemo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class GameController {
    
    @GetMapping("/test")
    public String testGo(){
        return "testGame";
    }
    @GetMapping("/testpage")
    public String testGo1(){
        return "ReadybattleTest";
    }
}
