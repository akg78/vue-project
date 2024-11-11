<template>
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__section">
          <h3>About Us</h3>
          <p>We are dedicated to providing quality products and exceptional services to our customers. Our aim is to meet the highest standards in the industry.</p>
        </div>
        <div class="footer__section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer__section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: 123 Main Street, City, Country</li>
          </ul>
        </div>
        <div class="footer__section">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  $footer-bg-color: #1b1b1b;
  $footer-text-color: #10898d;;
  $footer-link-hover: #ffffff;  
  $footer-padding: 2rem;
  $footer-text-small: 0.9rem;
  
  .footer {
    background-color: $footer-bg-color;
    color: $footer-text-color;
    padding: $footer-padding;
    font-family: 'Inter', sans-serif;
    text-align: center;
  
    &__container {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-around;
      padding: 1rem 0;
  
      .footer__section {
        flex: 1 1 200px;
        padding: 1rem;
        
        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
  
        p {
          font-size: $footer-text-small;
        }
  
        ul {
          list-style: none;
          padding: 0;
          li {
            font-size: $footer-text-small;
            margin: 0.3rem 0;
  
            a {
              color: $footer-text-color;
              text-decoration: none;
              transition: color 0.3s;
  
              &:hover {
                color: $footer-link-hover;
              }
            }
          }
        }
      }
  
      .social-icons {
        a {
          margin: 0 0.3rem;
          color: $footer-text-color;
          font-size: 1.2rem;
          transition: color 0.3s;
  
          &:hover {
            color: $footer-link-hover;
          }
        }
      }
    }
  
    &__bottom {
      margin-top: 2rem;
      font-size: $footer-text-small;
    }
  }
  
  @media (max-width: 768px) {
    .footer__container {
      flex-direction: column;
      align-items: center;
    }
  
    .footer__section {
      text-align: center;
    }
  }
  </style>
  