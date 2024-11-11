<template>
    <div class="main-homepage">
        <HeaderPage />
        <div class="main-page">
            <div class="sidebar">
                <ul class="sidebar__menu">
                    <!-- Mandi Purchases Dropdown -->
                    <li class="sidebar__item">
                        <div class="sidebar__link" @click="toggleDropdown('mandiPurchases')">
                            Mandi Purchases
                            <span :class="{ 'arrow--down': dropdowns.mandiPurchases }">▼</span>
                        </div>
                        <ul v-show="dropdowns.mandiPurchases" class="sidebar__dropdown">
                            <li><a href="#grain">Grain Purchases</a></li>
                            <li><a href="#pulses">Pulses Purchases</a></li>
                            <li><a href="#other">Other Items</a></li>
                        </ul>
                    </li>
                    <!-- Sales Dropdown -->
                    <li class="sidebar__item">
                        <div class="sidebar__link" @click="toggleDropdown('sales')">
                            Sales
                            <span :class="{ 'arrow--down': dropdowns.sales }">▼</span>
                        </div>
                        <ul v-show="dropdowns.sales" class="sidebar__dropdown">
                            <li><a href="#wholesale">Wholesale Sales</a></li>
                            <li><a href="#retail">Retail Sales</a></li>
                            <li><a href="#online">Online Sales</a></li>
                        </ul>
                    </li>
                    <!-- Mustard Oil Purchases Dropdown -->
                    <li class="sidebar__item">
                        <div class="sidebar__link" @click="toggleDropdown('mustardOilPurchases')">
                            Mustard Oil Purchases
                            <span :class="{ 'arrow--down': dropdowns.mustardOilPurchases }">▼</span>
                        </div>
                        <ul v-show="dropdowns.mustardOilPurchases" class="sidebar__dropdown">
                            <li><a href="#bulk">Bulk Purchases</a></li>
                            <li><a href="#packaged">Packaged Oil</a></li>
                            <li><a href="#otherOil">Other Oil Types</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-area">
                <!-- Place your main content here -->
            </div>
        </div>
        <FooterPage/>
    </div>
</template>

<script setup>
import FooterPage from '@/components/FooterPage.vue';
import HeaderPage from '@/components/HeaderPage.vue';
import { ref } from 'vue';

const dropdowns = ref({
    mandiPurchases: false,
    sales: false,
    mustardOilPurchases: false,
});

const toggleDropdown = (dropdown) => {
    dropdowns.value[dropdown] = !dropdowns.value[dropdown];
};
</script>

<style lang="scss" scoped>
.main-homepage {
    // margin-top: 10px;
    width: 100%;
    height: auto;

    .main-page {
        display: flex;
        width: 100%;
        height: 500px;
        // border: 1px solid red;

        .sidebar {
            width: 300px;
            background-color: #ffff;
            color: #0000;
            padding: 1rem;
            height: 100%;
            overflow-y: auto;
            border: 1px solid #4a5b71;

            .sidebar__menu {
                list-style: none;
                padding: 0;
                margin: 0;

                .sidebar__item {
                    border-bottom: 1px solid #000;

                    .sidebar__link {
                        display: flex;
                        justify-content: space-between;
                        padding: 0.75rem;
                        cursor: pointer;
                        font-weight: bold;
                        color: #000;

                        &:hover {
                            background-color: #4a5b71;
                        }

                        .arrow--down {
                            transform: rotate(180deg);
                            transition: transform 0.3s;
                        }
                    }

                    .sidebar__dropdown {
                        list-style: none;
                        padding-left: 1rem;
                        background-color: #3a4b5d;

                        li {
                            padding: 0.5rem 0;

                            a {
                                color: #cfd9e6;
                                text-decoration: none;
                                transition: color 0.3s;

                                &:hover {
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }

        .content-area {
            flex: 1;
            padding: 20px;
        }
    }
}
</style>
