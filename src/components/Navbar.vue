<template>
    <v-app-bar :elevation="5" color="black">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title >Pizza Eat</v-app-bar-title>
        <v-btn to ="/" color="red">Home</v-btn>
        <v-btn to ="/Aboutus" color="red"> About Us</v-btn>
        <v-btn to ="/Menu" color="red">Menu</v-btn>
        <v-btn to ="/Contactus" color="red">Contact Us</v-btn>
    </v-app-bar>
</template>
