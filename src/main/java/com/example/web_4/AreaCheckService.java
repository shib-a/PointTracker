package com.example.web_4;

public class AreaCheckService {
    static Boolean validate(Double x, Double y, Double r){
        return checkRectangle(x, y, r) || checkTriangle(x, y, r) || checkCircle(x, y, r);
    }
    static Boolean checkRectangle(Double x, Double y, Double r){
        return (x>=-r/2 && y>=-r && y<=0 && x<=0);
    }
    static Boolean checkTriangle(Double x, Double y, Double r){
        return (x>=-r/2 && y>=-r && y<=0 && x<=0);
    }
    static Boolean checkCircle(Double x, Double y, Double r){
        return (x>=-r/2 && y>=-r && y<=0 && x<=0);
    }
}
