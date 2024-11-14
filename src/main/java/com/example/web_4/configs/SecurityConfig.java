package com.example.web_4.configs;
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
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
//        http.authorizeRequests().anyRequest().permitAll().and().formLogin(form -> form.disable());
//        http.cors() // Enable CORS if needed
//                .and()
//                .csrf().disable() // Disable CSRF for testing (not recommended for production)
//                .authorizeHttpRequests()
//                .requestMatchers("/api/**").permitAll() // Allow all requests to API endpoints
//                .anyRequest().authenticated() // Other requests need authentication
//                .and()
//                .httpBasic(); // Use Basic Auth (optional)
//        return http.build();
        http
                .cors()
                .and()
                .csrf().disable()
                .authorizeHttpRequests().requestMatchers("/login","/api/users/login", "/api/users/register").permitAll()
                .anyRequest().authenticated()
                .and().formLogin()
                .loginPage("/")
                .defaultSuccessUrl("/main", true)
                .permitAll()
                .and().logout()
                .logoutSuccessUrl("/")
                .permitAll();
        return http.build();
    }
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOriginPattern("http://localhost:3000"); // Allow all origins (use specific origins in production)
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
    @Bean
    public PasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

}
