$('.boat').parallaxie({
    speed: 0.4
});
$('.header').parallaxie({
    speed: 0.5
});
$('.counter').counterUp({
    delay: 20,
    time: 3000
});
$('.counter').addClass('animated fadeIn');


var app1 = new Vue({
    el: '#app1',
    data: {
        destinations: [
            {name:'Figueira da Foz', country:'Portugal', image:'offer_1.jpg', flag:'730'},
            {name:'Ibiza', country:'Spain', image:'offer_2.jpg', flag:'621'},
            {name:'Palma de Mallorca', country:'Spain', image:'offer_3.jpg', flag:'543'},
            {name:'Hamilton Princess & Beach Club', country:'Bermuda', image:'offer_4.jpg', flag:'954'},
            {name:'Portofino', country:'Italy', image:'offer_5.jpg', flag:'495'},
            {name:'Port Hercules', country:'Monaco', image:'offer_6.jpg', flag:'402'}
        ]
    },
    methods: {
        add_destinations () {
            for (let i=0; i<6; i++) {
                this.destinations.push(this.destinations[i]);
            }
        },

        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            console.log("why");
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '370px' },
                    { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay)
        }
    }
})

var app2 = new Vue({
    el: '#boats',
    data: {
        boats: [
            {name:'Delphia 47', country:'Gdansk, Poland', image:'boat_1.jpg', price:'580', pass:'8'},
            {name:'Sence 55', country:'Portofino, Italy', image:'boat_2.jpg', price:'950', pass:'12'},
            {name:'Cruiser 51', country:'Palma de Mallorca, Spain', image:'boat_3.jpg', price:'820', pass:'10'},
            {name:'Arianna 4', country:'Lisbon, Portugal', image:'boat_4.jpg', price:'400', pass:'8'}
        ]
    },
    methods: {
        add_boats () {
            for (let i=0; i<4; i++) {
                this.boats.push(this.boats[i]);
            }

        },
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, height: '1.6em' },
                    { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay)
        }
    }
})

// register modal component
Vue.component('modal', {
    template: '#modal-template'
})

// start app
new Vue({
    el: '#logger',
    data: {
        showModal: false
    }
})

