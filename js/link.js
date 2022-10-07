link = {
    init: function() {
        var that = this;
        //这里设置的是刚才的 linklist.json 文件路径
        $.getJSON("/blog/links/linklist.json",//这里我加了/blog，你那边可能不一样
            function(data) {
                that.render(data);
            });
    },
    render: function(data) {
        var html, nickname, avatar, site, li = "";
        for (var i = 0; i < data.length; i++) {
            nickname = data[i].nickname;
            avatar = data[i].avatar;
            site = data[i].site;
            li += '<div class="card">' + '<a href="' + site + '" target="_blank">' + '<div class="thumb" style="background: url( ' + avatar + ');">' + '</div>' + '</a>' + '<div class="card-header">' + '<div><a href="' + site + '" target="_blank">' + nickname + '</a></div>' + '</div>' + '</div>';

        }
        $(".link-navigation").append(li);
    }
}
link.init();