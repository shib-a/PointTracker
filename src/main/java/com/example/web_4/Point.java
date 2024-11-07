package com.example.web_4;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.context.annotation.Bean;
import org.springframework.web.context.annotation.SessionScope;

//@Bean(name = "pointBean")
@SessionScope
@Entity
@Table(name="points")
public class Point {
    @Id
    @GeneratedValue
    private Long id;
    private double x;
    private double y;
    private double r;
    private boolean hit;
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
}
