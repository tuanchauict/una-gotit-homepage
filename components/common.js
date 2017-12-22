Una.component('page-header', {
    template: `
<header class="page-cover bg-white headercls">
    <div class="container">
        <div class="row">
            <div class="{{leftcls}}">
                <h1>{{title}}</h1>
                <p>{{description}}</p>
            </div>
            <div class="{{rightcls}}">
                <div class="cover-image-wrapper">
                    <img src="{{image}}" width="100%" class="cover-image"></img>
                </div>
            </div>
        </div>
    </div>
</header>
`,  props: ['title', 'description', 'image', 'leftcls', 'rightcls', headercls]
});

Una.component('section-white', {
    template: `
<section class="section-gotit {{cls}} bg-white">
    <div class="container"><content></content></div>
</section>
`, props: ['cls']
});

Una.component('section-gray', {
    template: `
<section class="section-gotit {{cls}} bg-gray-lighter">
    <div class="container"><content></content></div>
</section>    
`, props: ['cls']
});