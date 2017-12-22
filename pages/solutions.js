Una.component('solutions-header', {
    template: `
<page-header
    u:headercls="page-solution-cover"
    u:leftcls="col-md-6"
    u:rightcls="col-md-5 col-md-offset-1 hidden-xs hidden-sm"
    u:title="Solutions"
    u:description="We’re empowering every person to trade their knowledge with each other through instant, AI-powered chat sessions. From professionals to students to lifelong learners, Got It users get instant solutions to their knowledge problems -- all within seconds. Over 2.5 million chat sessions have already been held with 20,000 qualified worldwide Experts. By adding new topics each month, we’re growing our Knowledge-as-a-Service (KaaS) to solve every existing knowledge problem."
    u:image="imgs/kaas-benefits@2x.png"
></page-header> 
`
});

Una.component('solution-icon', {
   template: `
<li><img src="{{image}}" width="{{width}}"><br/>{{title}}</li>
`, props: ['image', 'title', 'width']
});

Una.component('solution-info', {
    template: `
<div class="col-sm-6 col-md-5 {{cls}}">
    <p class="text-center"><img src="{{logo}}" height="90" class="img-responsive"></p>
    <div class="h3 m-t-30">{{subtitle}}</div>
    <p class="m-t-20">{{description}}</p>
    <ul class="list-inline m-t-30 m-b-30">
        <!--<solution-icon u:image="{{image.image}}" u:item="{{image.title}}" u:width="{{imageWidth}}" u-for="image in images"></solution-icon>-->
    </ul>
    <a class="btn btn-default {{btnCls}}" href="{{btnUrl}}">{{btnTitle}}</a>

</div>    
`, props: ['cls', 'logo', 'subtitle', 'description', 'images', 'imageWidth', 'btnCls', 'btnUrl', 'btnTitle'],
    data: {
        // btnCls: 'text-primary',
        // btnUrl: '',
        // btnTitle: 'Visit',
        // imageWidth: 48
    }
});

Una.component('solution-info-container', {
    template: `
<section-gray u:cls="section-solution-intro">
    <div class="row">
        <solution-info
            u:cls="left"
            u:logo="imgs/gotit-pro-logo@2x.png"
            u:subtitle="Work smarter, not harder."
            u:description="Got It Pro is for professionals in business or technology fields. Professional topics include:"
            u:imageWidth="48"
            u:btnCls="text-primary"
            u:btnUrl="https://www.got-it.co/solutions/pro/spreadsheets"
            u:btnTitle="Visit Got It Pro"
            u:images="{{proImages}}"
        ></solution-info>
        <!--<solution-info-->
            <!--u:cls="right"-->
            <!--u:logo="imgs/gotit-pro-logo@2x.png"-->
            <!--u:subtitle="Work smarter, not harder."-->
            <!--u:description="Got It Pro is for professionals in business or technology fields. Professional topics include:"-->
            <!--u:images="{{studyImages}}"-->
            <!--u:imageWidth="48"-->
            <!--u:btnCls="text-primary"-->
            <!--u:btnUrl="https://www.got-it.co/solutions/pro/spreadsheets"-->
            <!--u:btnTitle="Visit Got It Pro"-->
        <!--&gt;</solution-info>-->
    </div>
</section-gray>
`, data: {
        proImages: [
            {
                image: "imgs/icon-excel@2x.png",
                title: "Excel",
            },
            {
                image: "icon-gsheet@2x.png",
                title: "Google Sheets",
            },
        ],
        studyImages: [
            {
                image: "imgs/icon-excel@2x.png",
                title: "Excel",
            },
            {
                image: "icon-gsheet@2x.png",
                title: "Google Sheets",
            },
        ]
    }
});

Una.component('solutions', {
    template: `
<div class="page-wrapper page-gotit-solution">
    <solutions-header ></solutions-header>
    <solution-info-container></solution-info-container>
</div>
`
});