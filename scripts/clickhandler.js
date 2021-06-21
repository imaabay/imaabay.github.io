AFRAME.registerComponent('clickhandler', {
    schema:{
      modelId: {default: "#bottle-model"},
      videoId: {default: "#promotional"}
    },

    init: function() {
        console.log('In');
        const btn = document.querySelector(this.data.modelId);
        console.log(this.el);
        var v = document.querySelector(this.data.videoId);
        console.log(v);
        btn.addEventListener("click", (e) => {
            v.play();
        });		
}});