// 多个JSON数组文件多次调用
link = {
  init: function(url, className) {
    var that = this
    $.getJSON(url,
      function(data) {
          that.render(data, className);
      });
  },
  render: function(data, name) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(name).append(li);
  }
}

// link.init("./mine.json", ".mine")
// link.init("./docs.json", ".docs")
// link.init("./code.json", ".code")
// link.init("./skill.json", ".skill")
// link.init("./school.json", ".school")
// link.init("./community.json", ".community")
// link.init("./serve.json", ".serve")
// link.init("./sitetool.json", ".sitetool")
// link.init("./design.json", ".design")
// link.init("./tools.json", ".tools")
