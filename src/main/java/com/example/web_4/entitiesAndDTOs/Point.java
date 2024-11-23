package com.example.web_4.entitiesAndDTOs;
import jakarta.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="points", schema = "public")
public class Point implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", unique = true)
    private Long id;
    @Column(name="x", columnDefinition = "DOUBLE PRECISION")
    private double x;
    @Column(name="y", columnDefinition = "DOUBLE PRECISION")
    private double y;
    @Column(name="r")
    private double r;
    @Column(name="hit")
    private boolean hit;
    @Column(name="user_id", nullable=false)
    private long userID;
    public Point(double x, double y, double r, boolean hit){
        this.x=x;
        this.y=y;
        this.r=r;
        this.hit=hit;
    }

    public Point() {
    }
    public Point(long id, double x, double y, double r, boolean hit){
        this.id=id;
        this.x=x;
        this.y=y;
        this.r=r;
        this.hit=hit;
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
        System.out.println(x);
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }
    public Point(double x, double y, double r){
        this.x=x;
        this.y=y;
        this.r=r;
    }

    public void setR(double r) {
        this.r = r;
    }
    @Override
    public String toString() {
        return "Point{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", hit=" + hit +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
