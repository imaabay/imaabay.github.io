AFRAME.registerComponent('clickhandler', {
    schema:{
      modelId: {default: "#bottle-model"},
      videoId: {default: "#promotional"}
    },

    init: function() {
        const btn = document.querySelector(this.data.modelId);
        var v = document.querySelector(this.data.videoId)
        btn.addEventListener('click', () => {
            v.play();
        });		
}});