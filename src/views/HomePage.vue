<template>
    <div class="main-homepage">
        <div class="main-page">
            <aside class="sidebar">
                <ul class="sidebar__menu">
                    <!-- Sidebar Menu -->
                    <li class="sidebar__item" v-for="(label, key) in sidebarItems" :key="key">
                        <div class="sidebar__link" @click="toggleDropdown(key)">
                            {{ label.title }}
                            <span :class="{ 'arrow--down': dropdowns[key] }">▼</span>
                        </div>
                        <ul v-show="dropdowns[key]" class="sidebar__dropdown">
                            <li v-for="(subItem, subKey) in label.subItems" :key="subKey">
                                <template v-if="subItem.hasDropdown">
                                    <div class="sidebar__link" @click.stop="toggleDropdown(subItem.key)">
                                        {{ subItem.name }}
                                        <span :class="{ 'arrow--down': dropdowns[subItem.key] }">▼</span>
                                    </div>
                                    <ul v-show="dropdowns[subItem.key]"
                                        class="sidebar__dropdown sidebar__dropdown--child">
                                        <li v-for="(childItem, childKey) in subItem.childItems" :key="childKey">
                                            <a :href="childItem.link">{{ childItem.name }}</a>
                                        </li>
                                    </ul>
                                </template>
                                <template v-else>
                                    <a :href="subItem.link">{{ subItem.name }}</a>
                                </template>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <main class="content-area">
                <div class="main-content">
                    <div class="img-part">
                        <div class="img-render">
                            <div class="center">
                                <img class="image grandfather" src="../assets/img/grandfather.jpg" alt="Grandfather" />
                                <p>Grandfather</p>
                            </div>
                            <div class="center">
                                <img class="image father" src="../assets/img/father.jpg" alt="Father" />
                                <p>Father</p>
                            </div>
                            <div class="center">
                                <img class="image son" src="../assets/img/son.jpg" alt="Son" />
                                <p>Son</p>
                            </div>
                        </div>
                    </div>
                    <div class="main-about-content" >Lorem ipsum dolor sit amet. Est enim ipsam est quod earum qui unde obcaecati ad adipisci quam.
                        Est ratione
                        voluptate aut odit dolores qui nisi earum.

                        Est tempora fuga eum eligendi magni ut dolores quidem nam dolores dolores sit nobis voluptatem.
                        Ut nobis
                        necessitatibus aut velit rerum est molestiae molestiae ea assumenda molestias eum nihil
                        recusandae aut
                        veritatis recusandae.


                        Est vero cumque et alias enim est ratione adipisci ut aperiam tempora et quia alias eos
                        doloremque iste est
                        commodi dolores! Ea placeat odit ex deserunt repellendus id voluptas beatae aut recusandae
                        dolore ad saepe
                        corporis qui explicabo error aut possimus architecto. At accusamus molestiae 33 rerum itaque nam
                        quidem
                        voluptas sed voluptas ipsam cum aperiam dolorum. Aut iure distinctio non odio nihil At tempora
                        rerum qui
                        architecto tempore est rerum illo.</div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const dropdowns = ref({
    attendence: false,
    employee: false,
    purchases: false,
    khata: false,
    sales: false,
    anlysis: false,
    salary: false, // Added for the "Basic Salary" dropdown
});

const sidebarItems = {
    attendence: {
        title: 'Attendance',
        subItems: [{ name: 'Grain Purchases', link: '#grain' }],
    },
    employee: {
        title: 'Employee',
        subItems: [
            { name: 'Add Form', link: '#add-form' },
            {
                name: 'Salary',
                hasDropdown: true,
                key: 'salary',
                childItems: [
                    { name: 'Bonus', link: '#bonus' },
                    { name: 'Deduction', link: '#deduction' },
                ],
            },
        ],
    },
    purchases: {
        title: 'Purchases',
        subItems: [
            { name: 'Mandi Purchase', link: '#mandi' },
            { name: 'Direct Purchase', link: '#direct' },
        ],
    },
    sales: {
        title: 'Sale',
        subItems: [
            { name: 'Attendance', link: '#attendance' },
            { name: 'Employee', link: '#employee' },
        ],
    },
    khata: {
        title: 'Khata',
        subItems: [
            { name: 'Analysis', link: '#analysis' },
            { name: 'Purchase', link: '#purchase' },
        ],
    },
    anlysis: {
        title: 'Analysis',
        subItems: [
            { name: 'Attendance', link: '#attendance' },
            { name: 'Employee', link: '#employee' },
        ],
    },
};

const toggleDropdown = (dropdown) => {
    dropdowns.value[dropdown] = !dropdowns.value[dropdown];
};
</script>

<style lang="scss" scoped>
.main-homepage {
    display: flex;
    height: 100vh;
    background-color: #f4f7fc;
    color: #333;

    .main-page {
        display: flex;
        width: 100%;
    }

    .sidebar {
        width: 300px;
        // background-color: #1f2937;
        background-color: #ffffff;
        color: #fff;
        padding: 1rem;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        overflow-y: auto;

        .sidebar__menu {
            list-style: none;
            padding: 0;

            .sidebar__item {
                margin-bottom: 1rem;

                .sidebar__link {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 1rem;
                    // color: #fff;
                    color: #000;
                    border-radius: 4px;
                    transition: background 0.3s;

                    &:hover {
                        background-color: #374151;
                        color: #ffff;
                    }

                    .arrow--down {
                        transform: rotate(180deg);
                        transition: transform 0.3s;
                    }
                }

                .sidebar__dropdown {
                    margin-top: 0.5rem;
                    list-style: none;
                    padding-left: 1rem;

                    &.sidebar__dropdown--child {
                        padding-left: 1.5rem;
                    }

                    li {
                        padding: 0.5rem 0;

                        a {
                            color: #000;
                            text-decoration: none;
                            transition: color 0.3s;

                            &:hover {
                                color: #000;
                            }
                        }
                    }
                }
            }
        }
    }

    .content-area {
        flex: 1;
        padding: 1.5rem;

        .main-content {
            display: flex;
            // justify-content: center;
            flex-direction: column;
            align-items: center;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            height: 800px;

            .img-part {
                .img-render {
                    display: flex;
                    gap: 10rem;

                    .center {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 2rem;
                        width: fit-content;

                        .image {
                            border-radius: 12px;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                            transition: transform 0.3s;

                            &:hover {
                                transform: scale(1.05);
                            }
                        }

                        .grandfather {
                            height: 200px;
                            width: 200px;
                            object-fit: cover;
                        }

                        .father {
                            height: 200px;
                            width: 200px;
                            object-fit: cover;
                        }

                        .son {
                            height: 200px;
                            width: 200px;
                            object-fit: cover;
                        }
                    }
                }
            }

            .main-about-content{
                margin-top: 200px;
                padding: 20px
            }
        }
    }
}
</style>
