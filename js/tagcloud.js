<% if="" (site.tags.length){="" %="">
    <script type="text/javascript" charset="utf-8" src="/js/tagcloud.js"></script>
    <script type="text/javascript" charset="utf-8" src="/js/tagcanvas.js"></script>
    <div class="widget-wrap">
        <h3 class="widget-title"><%= __('tagcloud')="" %=""></%=></h3>
        <div id="myCanvasContainer" class="widget tagcloud">
            <canvas width="250" height="250" id="resCanvas" style="width=100%">
                <%- tagcloud()="" %="">
            </%-></canvas>
        </div>
    </div>
<% }="" %=""></%></%><link href="/css/prism-tomorrow.css" rel="stylesheet">