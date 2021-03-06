




const View = Backbone.View.extend({
    initialize: function () {
        this.render()
    },
    htmlTemplate: _.template($('#item-template').html()),
    render: function () {
        return this.htmlTemplate(this.model)
    }
})

// const myView = new View({
//     model: { title: "hehe", text: 'hahaha' }
// })


const Views = Backbone.View.extend({
    initialize: function () {
        this.render()
    },
    // id: 'textInfo', // todo 为什么不能使用 this.$el 获取节点渲染到页面
    htmlObj: $('#textInfo'),
    render: function () {
        let model = this.model
        _.each(model, m => {
            let m_view = new View({ model: m })
            // this.$el.html(m_view.render().$el)
            this.htmlObj.append(m_view.render())
        })
        console.log('this.$el: ', this.$el);
        return this
    }
})

const vs = new Views({
    model: [
        { title: "status", text: 'selling' },
        { title: "domain", text: window.location.hostname },
        { title: "mail", text: '346243440@qq.com' }
    ]
})


const ViewSelling = Backbone.View.extend({
    initialize: function () {
        this.render()
    },
    htmlTemplate: _.template($('#selling-template').html()),
    render: function () {
        return this.htmlTemplate(this.model)
    }
})
const ViewSells = Backbone.View.extend({
    initialize: function () {
        this.render()
    },
    htmlObj: $('#selling-domain'),
    render: function () {
        let model = this.model
        _.each(model, m => {
            let m_view = new ViewSelling({ model: m })
            // this.$el.html(m_view.render().$el)
            this.htmlObj.append(m_view.render())
        })
    }
})


new ViewSells({
    model: [
        { name: '360vip' },
        { name: 'vip360' },
        { name: 'ai360' },
        { name: 'applets' },
        { name: 'hxyxt' },
        { name: 'goldwind' },
        { name: 'allegion' },
        { name: 'mbalib' },
        { name: 'skyworksinc' },
        { name: 'take2games' },
        { name: 'globalpaymentsinc' },
    ]
})




// vs.render()
