const app = new Una({
    el: 'app',
    data: {
        tabs: [
            {title: 'Home', active: true},
            {title: 'KaaS Platform'},
            {title: 'Solutions'},
            {title: 'About'},
            {title: 'Team'},
            {title: 'Experts'},
        ]
    },
    methods: {
        active: function(item){
            console.log(item);
            for (let i = 0; i < this.tabs.length; i++) {
                this.tabs[i].active = false;
            }
            item.active = true;
        }
    }
});