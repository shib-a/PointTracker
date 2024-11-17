package com.example.web_4;

public class AreaCheckService {
    public static Boolean validate(Double x, Double y, Double r){
        return checkRectangle(x, y, r) || checkTriangle(x, y, r) || checkCircle(x, y, r);
    }
    public static Boolean checkRectangle(Double x, Double y, Double r){
        return (x>=-r/2 && y>=-r && y<=0 && x<=0);
    }
    public static Boolean checkTriangle(Double x, Double y, Double r){
        return (x>=0 && y<=0 && x<=r/2 && y>=-r && -x+y-r/2<=0);
    }
    public static Boolean checkCircle(Double x, Double y, Double r){
        return ((Math.pow(x,2) + Math.pow(y,2) <= Math.pow(r,2)) && x<=0 && y>=0);
    }
}
