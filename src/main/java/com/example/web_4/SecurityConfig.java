package com.example.web_4;
//
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
////    protected void configure(HttpSecurity http) throws Exception{
////        http.authorizeRequests().anyRequest().permitAll().and().formLogin().disable();
////    };
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
//        http.authorizeRequests().anyRequest().permitAll().and().formLogin(form -> form.disable());
        http.cors() // Enable CORS if needed
                .and()
                .csrf().disable() // Disable CSRF for testing (not recommended for production)
                .authorizeHttpRequests()
                .requestMatchers("/api/**").permitAll() // Allow all requests to API endpoints
                .anyRequest().authenticated() // Other requests need authentication
                .and()
                .httpBasic(); // Use Basic Auth (optional)
        return http.build();
    }
    @Bean
    public PasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }
}
