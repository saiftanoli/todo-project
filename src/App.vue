<template>
<div id="app">
    <div class="wrapper">
        <Header />
        <Main />
        <About />
        <Cards />
        <Team />
        <Roadmap />
        <Footer />
    </div>

</div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import About from "./components/about.vue";
import Roadmap from "./components/roadmap.vue";
import Team from "./components/team.vue";
import Cards from "./components/cards.vue";
import Main from "./components/main.vue";

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        About,
        Roadmap,
        Team,
        Cards,
        Main
    }
}
</script>

<style>
@import './assets/css/bootstrap-grid.css';
</style>
