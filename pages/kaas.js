Una.component('kaas-header', {
    template: `
<header class="page-cover bg-white page-about-cover">
    <div class="container">
        <div class="row">
            <div class="col-md-6 left">
                <h1>The Got It KaaS Platform</h1>
                <p class="visible-xs visible-sm m-b-30"><img src="./Got It - Empowering the World’s Brainpower using AI _ KaaS_files/kass-chart@2x.png" width="100%" alt=""></p>
                <p>While there are some specific expert-based services for specific topics, Got It KaaS is the first platform for all topics. An innovative AI algorithm called ExpertRank™, based on a combination of machine learning and human expertise, creates a real-time global auction for a user’s knowledge-based problem, matching the user with the most relevant expert available  within 30 seconds. The AI algorithm also audits every session and updates the ExpertRank™ based on real-time updates from an expert’s  knowledge-time sessions.</p>
            </div>
            <div class="col-md-6 right hidden-xs hidden-sm">
                <div class="cover-image-wrapper">
                    <img src="./Got It - Empowering the World’s Brainpower using AI _ KaaS_files/kass-chart@2x.png" width="100%" alt="" class="cover-image m-t-30">
                </div>
            </div>
        </div>
    </div>
</header>    
`
});


Una.component('kaas', {
    template: `
<div class="page-wrapper page-gotit-kaas">
    <kaas-header></kaas-header>
</div>
`
});