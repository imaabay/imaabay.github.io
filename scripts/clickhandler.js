AFRAME.registerComponent('clickhandler', {
    schema:{
      modelId: {default: "#bottle-model"},
      videoId: {default: "#promotional"}
    },

    init: function() {
        console.log('In');
        console.log(this.el.sceneEl);
        this.targetElement = this.data.modelId && document.querySelector(this.data.modelId);
        console.log(this.targetElement);
        var v = document.querySelector(this.data.videoId);
        console.log(v);
        this.targetElement.addEventListener("click", (e) => {
            console.log('In Listener');
            alert('Clicked');
            v.play();
        });		
}});