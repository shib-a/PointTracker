package com.example.web_4.entitiesAndDTOs;


public class PointDTO {
    private double x;
    private double y;
    private double r;
    private boolean hit;
    private long id;
    public PointDTO(double x, double y, double r, boolean hit){
        this.x=x;
        this.y=y;
        this.r=r;
        this.hit=hit;
    }
    public PointDTO(double x, double y, double r, boolean hit, long id){
        this.x=x;
        this.y=y;
        this.r=r;
        this.id=id;
    }
    public double getR() {
        return r;
    }

    public double getY() {
        return y;
    }

    public double getX() {
        return x;
    }
    public boolean getHit(){
        return hit;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setX(double x) {
        this.x = x;
    }
    public PointDTO(Point p){
        this.x=p.getX();
        this.y=p.getY();
        this.r=p.getR();
        this.hit=p.getHit();
    }
    public void setHit(boolean hit) {
        this.hit = hit;
    }
    public void setR(double r) {
        this.r = r;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
