<template>
    <nav class="navbar">
        <div class="navbar__logo">Logo</div>
        <ul class="navbar__links" :class="{ 'navbar__links--active': isMenuOpen }">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button class="navbar__signup">Sign Up</button>
        <div class="navbar__toggle" @click="toggleMenu">
            <span :class="{ 'navbar__toggle--open': isMenuOpen }"></span>
            <span :class="{ 'navbar__toggle--open': isMenuOpen }"></span>
            <span :class="{ 'navbar__toggle--open': isMenuOpen }"></span>


            <div v-if="isMenuOpen">
                toggleMenu
            </div>



        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
/* Variables */
$navbar-bg-color: #1b1b1b;
$navbar-link-color: #10898d;
$navbar-hover-color: #ffffff;
$navbar-toggle-color: #fff;
$navbar-signup-bg-color: #f9a826;
$navbar-signup-hover-color: darken($navbar-signup-bg-color, 10%);
$breakpoint: 768px;
$font-family: 'Inter';

/* Navbar Container */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: $navbar-bg-color;
    color: $navbar-link-color;
    font-family: $font-family;

    &__logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: $navbar-link-color;
    }

    &__links {
        list-style: none;
        display: flex;
        gap: 1.5rem;

        li {
            a {
                color: $navbar-link-color;
                text-decoration: none;
                font-size: 1rem;
                transition: color 0.3s;
                font-weight: 500;


                &:hover {
                    color: $navbar-hover-color;
                }
            }
        }

        /* Show links in a vertical stack when active on smaller screens */
        &--active {
            display: block;
        }
    }

    /* Sign Up Button */
    &__signup {
        padding: 0.5rem 1rem;
        background-color: $navbar-signup-bg-color;
        color: $navbar-bg-color;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: $navbar-signup-hover-color;
        }
    }

    /* Toggle Button for Mobile */
    &__toggle {
        display: none;
        cursor: pointer;
        flex-direction: column;
        gap: 0.3rem;

        span {
            display: block;
            width: 25px;
            height: 3px;
            background-color: $navbar-toggle-color;
            transition: transform 0.3s;
        }

        /* Toggle Animation */
        &--open {
            &:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
        }
    }
}

/* Responsive Styles */
@media (max-width: $breakpoint) {
    .navbar {
        &__links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: $navbar-bg-color;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            display: none;
        }

        &__links--active {
            display: flex;
        }

        &__signup {
            display: none;
        }

        &__toggle {
            display: flex;
        }
    }
}
</style>