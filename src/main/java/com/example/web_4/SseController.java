package com.example.web_4;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/sse")
public class SseController {
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();
    @GetMapping("/updates")
    public SseEmitter hasUpdate(){
        SseEmitter emitter = new SseEmitter();
        Executors.newSingleThreadScheduledExecutor().scheduleAtFixedRate(() ->{
            try{
                emitter.send(SseEmitter.event().name("update").data(true));
            } catch (IOException e){
                emitter.completeWithError(e);
            }
        }, 0, 5, TimeUnit.SECONDS);
        return emitter;
    }
    public void sendUpdate(Object data){
//        List<SseEmitter> usedEmitters = new ArrayList<>();
//        for(SseEmitter emitter: emitters){
//            try{
//                emitter.send(SseEmitter.event().name("update").data(data));
//            }catch (IOException e){
//                usedEmitters.add(emitter);
//            }
//        }
//        emitters.removeAll(usedEmitters);
    }
}
