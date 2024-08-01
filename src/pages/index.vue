<script setup>
import Typed from 'typed.js'

onMounted(() => {
    let options = {
        strings: [`Hi, 每天都要快乐哦~ (●'◡'●)`],
        typeSpeed: 100,
        loop: false
    }

    let typed = new Typed('#typed', options)

    setTimeout(() => {
        // a标签跳转到blog页面
        let a = document.createElement('a')
        a.href = '/blog'
        a.click()
    }, 4500)
})
</script>

<template>
    <!-- body content -->
    <div class="container d-flex justify-content-center">
        <div class="col-md-3 col-sm-0"></div>

        <div class="d-flex flex-column justify-content-center align-items-center col-md-6 col-sm-12 col-12"  style="height: 75vh;">
            <!-- typed js animate -->
            <div class="fs-5 position-relative">
                <span class="position-absolute top-100 start-0 translate-right badge rounded-pill bg-light text-bg-light mb-5">
                    By typed.js
                </span>
                <span id="typed" class="display-6"></span>
            </div>

        </div>

        <div class="col-md-3 col-sm-0"></div>
    </div>
</template>
