<template>
    <div id="vcomments"></div>
</template>


<script>

export default {
    mounted() {
        this.renderVline()
    },
    methods: {
        renderVline() {
            if(typeof window !== 'undefined'){
                this.window = window;
                window.AV = require('leancloud-storage');
            }
            const Valine = require('valine');
            new Valine({
                el: '#vcomments' ,
                appId: 'lb4nk6ft2glTvsduuKwl7Vk0-gzGzoHsz',
                appKey: 'SNNJxd9CVDsnTkiFwI4dWMeg',
                notify:false,
                verify:false,
                avatar:'monsterid',
                path:window.location.pathname,
                placeholder: '欢迎给我留言...'
            })
        }
    }
}
</script>
