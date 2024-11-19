package com.example.web_4;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import java.util.Date;

public class JwtUtil {
    private static final String SECRET_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9asodgfqbi34ugriqvfvqfio3v4fq4i3vfq4o3yvqf34vf4ufegaiogrfieawgaifgfaweioafwefgfwaeygaw";
    public static String generateToken(String username){
        return Jwts.builder().setSubject(username).setIssuedAt(new Date()).compact();
    }
    public static Claims getAllClaims(String token){
        return Jwts.parserBuilder().build().parseClaimsJwt(token).getBody();
//        return Jwts.parser().setSigningKey(Decoders.BASE64.decode(SECRET_KEY)).parseClaimsJwt(token).getBody();
    }
    public static String getUsername(String token){
        return getAllClaims(token).getSubject();
    }
    public static boolean validateToken(String token, String username){
        return getUsername(token).equals(username);
    }

}
