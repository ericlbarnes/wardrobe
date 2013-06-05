this["JST"] = this["JST"] || {};

this["JST"]["header/list/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar navbar-inverse navbar-fixed-top">\n  <div class="navbar-inner">\n    <a class="brand" href="#">Wardrobe</a>\n    <ul class="nav">\n      <li class="active"><a class="write" href="#">Write</a></li>\n      <li><a  class="posts" href="#post">Posts</a></li>\n    </ul>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["post/list/templates/empty.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td colspan="5">No Posts</td>';

}
return __p
};

this["JST"]["post/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class="table">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>ID</th>\n\t\t\t<th>Title</th>\n\t\t\t<th>Status</th>\n\t\t\t<th>Created</th>\n\t\t\t<th>Updated</th>\n\t\t\t<th>Delete</th>\n\t\t</tr>\n\t</thead>\n\t<tbody></tbody>\n</table>\n';

}
return __p
};

this["JST"]["post/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td class="id">' +
((__t = ( id )) == null ? '' : __t) +
'</td>\n<td class="title"><a href="#" class="details">' +
((__t = ( title )) == null ? '' : __t) +
'</a></td>\n<td class="status">' +
((__t = ( (active == 1) ? "Active" : "Draft" )) == null ? '' : __t) +
'</td>\n<td class="date js-format-date" data-date="' +
((__t = ( created_at )) == null ? '' : __t) +
'">' +
((__t = ( created_at )) == null ? '' : __t) +
'</td>\n<td class="date js-format-date" data-date="' +
((__t = ( updated_at )) == null ? '' : __t) +
'">' +
((__t = ( updated_at )) == null ? '' : __t) +
'</td>\n<td class="actions"><button class="btn delete"><i class="icon-trash"></i></button></td>\n';

}
return __p
};

this["JST"]["post/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form>\n\t<div id="js-errors" class="hide">\n\t\t<div class="alert alert-error">\n\t\t\t<button type="button" class="close" data-dismiss="alert">×</button>\n\t\t\t<span></span>\n\t\t</div>\n\t</div>\n\t<div id="write">\n\t\t<button class="btn large publish pull-right">' +
((__t = ( submitBtnText() )) == null ? '' : __t) +
'</button>\n\t\t<div class="info">\n\t\t\t<div class="field">\n\t\t\t\t<i data-dir="up" class="icon-chevron-sign-right js-toggle" title="Expand for options"></i>\n\t\t\t\t<input type="text" style="width: 50%" name="title" id="title" value="" placeholder="Title">\n\t\t\t</div>\n\t\t\t<div class="details hide">\n\t\t\t\t<div class="field">\n\t\t\t\t\t<i class="icon-terminal" title="URI Slug"></i>\n\t\t\t\t\t<input type="text" style="width: 50%" name="slug" id="slug" value="" placeholder="URI Slug">\n\t\t\t\t</div>\n\t\t\t\t<div class="field status">\n\t\t\t\t\t<i class="icon-off" title="Status"></i>\n\t\t\t\t\t<label class="radio"><input type="radio" name="active" class="js-active" value="1" checked> Published</label>\n\t\t\t\t\t<label class="radio"><input type="radio" name="active" class="js-active" value="0"> Draft</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="field">\n\t\t\t\t\t<i class="icon-calendar" title="Publish Date"></i>\n\t\t\t\t\t<input type="text" style="width: 50%" name="publish_date" id="publish_date" value="" placeholder="Publish Date">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="content-area">\n\t\t\t<textarea name="content" id="content" placeholder="Content Goes Here..."></textarea>\n\t\t\t<div class="tags-bar hide">\n\t\t\t\t<input type="text" id="js-tags" name="tags" class="tags" style="width: 90%" value="" placeholder="Tags">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n';

}
return __p
};

(function(Backbone) {
  var methods, _sync;
  _sync = Backbone.sync;
  Backbone.sync = function(method, entity, options) {
    var sync;
    if (options == null) {
      options = {};
    }
    _.defaults(options, {
      beforeSend: _.bind(methods.beforeSend, entity),
      complete: _.bind(methods.complete, entity)
    });
    sync = _sync(method, entity, options);
    if (!entity._fetch && method === "read") {
      return entity._fetch = sync;
    }
  };
  return methods = {
    beforeSend: function() {
      return this.trigger("sync:start", this);
    },
    complete: function() {
      return this.trigger("sync:stop", this);
    }
  };
})(Backbone);


$.fn.formatDates = function() {
  var $el;
  $el = $(this);
  return $el.each(function(index, param) {
    var format, item, originalDate, time;
    item = $(this);
    format = item.data("format");
    originalDate = item.data("date");
    if (typeof format === "undefined") {
      format = "MMM Do YYYY, hh:mma";
    }
    time = isNaN(originalDate) ? moment.utc(originalDate, "YYYY-MM-DD HH:mm:ss") : moment.unix(originalDate);
    return item.text(time.local().format(format));
  });
};


$.fn.fillJSON = function(json) {
  var $el, key, val;
  $el = $(this);
  for (key in json) {
    val = json[key];
    if (key === "active") {
      return this;
    }
    $el.find("[name='" + key + "']").val(val);
  }
};

$.fn.showAlert = function(title, msg, type) {
  var $el, html;
  $el = $(this);
  html = "<div class='alert alert-block " + type + "'>    <button type='button' class='close' data-dismiss='alert'>×</button>    <h4 class='alert-heading'>" + title + "</h4>    <p>" + msg + "</p>  </div>";
  $el.html(html).fadeIn();
  if (type === "alert-success") {
    return $(".alert").delay(3000).fadeOut(400);
  }
};


(function(Backbone) {
  return _.extend(Backbone.Marionette.Application.prototype, {
    navigate: function(route, options) {
      if (options == null) {
        options = {};
      }
      return Backbone.history.navigate(route, options);
    },
    getCurrentRoute: function() {
      var frag;
      frag = Backbone.history.fragment;
      if (_.isEmpty(frag)) {
        return null;
      } else {
        return frag;
      }
    },
    startHistory: function() {
      if (Backbone.history) {
        return Backbone.history.start();
      }
    },
    register: function(instance, id) {
      var _ref;
      if ((_ref = this._registry) == null) {
        this._registry = {};
      }
      return this._registry[id] = instance;
    },
    unregister: function(instance, id) {
      return delete this._registry[id];
    },
    resetRegistry: function() {
      var controller, key, msg, oldCount, _ref;
      oldCount = this.getRegistrySize();
      _ref = this._registry;
      for (key in _ref) {
        controller = _ref[key];
        controller.region.close();
      }
      msg = "There were " + oldCount + " controllers in the registry, there are now " + (this.getRegistrySize());
      if (this.getRegistrySize() > 0) {
        return console.warn(msg, this._registry);
      } else {
        return console.log(msg);
      }
    },
    getRegistrySize: function() {
      return _.size(this._registry);
    }
  });
})(Backbone);

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

(function(Backbone, Marionette) {
  return Marionette.Region.Dialog = (function(_super) {

    __extends(Dialog, _super);

    function Dialog() {
      _.extend(this, Backbone.Events);
    }

    Dialog.prototype.onShow = function(view) {
      var options,
        _this = this;
      this.setupBindings(view);
      options = this.getDefaultOptions(_.result(view, "dialog"));
      this.$el.on("hidden", function() {
        return _this.closeDialog();
      });
      this.$el.on("shown", function() {
        return Snappy.execute("dialog:shown", view);
      });
      return this.$el.modal(options);
    };

    Dialog.prototype.getDefaultOptions = function(options) {
      if (options == null) {
        options = {};
      }
      return _.defaults(options, {
        backdrop: true,
        keyboard: true,
        show: true,
        remote: false,
        shown: null
      });
    };

    Dialog.prototype.setupBindings = function(view) {
      return this.listenTo(view, "dialog:close", this.closeDialog);
    };

    Dialog.prototype.closeDialog = function() {
      this.stopListening();
      this.close();
      return this.$el.modal("hide");
    };

    return Dialog;

  })(Marionette.Region);
})(Backbone, Marionette);


Backbone.Marionette.Renderer.render = function(template, data) {
  var path;
  path = JST[template + ".html"];
  if (!path) {
    throw "Template " + template + " not found!";
  }
  return path(data);
};


this.Wardrobe = (function(Backbone, Marionette) {
  var App;
  App = new Backbone.Marionette.Application();
  App.on("initialize:before", function(options) {
    return App.environment = $('meta[name=env]').attr("content");
  });
  App.addRegions({
    headerRegion: "#header-region",
    topnavRegion: "#top-region",
    mainRegion: "#main-region",
    footerRegion: "footer-region"
  });
  App.addInitializer(function() {
    return App.module("HeaderApp").start();
  });
  App.reqres.setHandler("default:region", function() {
    return App.mainRegion;
  });
  App.commands.setHandler("register:instance", function(instance, id) {
    if (App.environment === "local") {
      return App.register(instance, id);
    }
  });
  App.commands.setHandler("unregister:instance", function(instance, id) {
    if (App.environment === "local") {
      return App.unregister(instance, id);
    }
  });
  App.on("initialize:after", function() {
    return this.startHistory();
  });
  return App;
})(Backbone, Marionette);


this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return App.commands.setHandler("when:fetched", function(entities, callback) {
    var xhrs;
    xhrs = _.chain([entities]).flatten().pluck("_fetch").value();
    return $.when.apply($, xhrs).done(function() {
      return callback();
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return Entities.Collection = (function(_super) {

    __extends(Collection, _super);

    function Collection() {
      return Collection.__super__.constructor.apply(this, arguments);
    }

    Collection.prototype.initialize = function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      return this.init && this.init(attributes, options);
    };

    Collection.prototype.defaultErrorHandler = function(model, error) {
      switch (error.status) {
        case 401:
          return document.location.href = "/wardrobe/login";
      }
    };

    return Collection;

  })(Backbone.Collection);
});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  return Entities.Model = (function(_super) {

    __extends(Model, _super);

    function Model() {
      this.saveError = __bind(this.saveError, this);

      this.saveSuccess = __bind(this.saveSuccess, this);
      return Model.__super__.constructor.apply(this, arguments);
    }

    Model.prototype.initialize = function(attributes, options) {
      options || (options = {});
      this.bind("error", this.defaultErrorHandler);
      return this.init && this.init(attributes, options);
    };

    Model.prototype.defaultErrorHandler = function(model, error) {
      switch (error.status) {
        case 401:
          return document.location.href = "/wardrobe/login";
      }
    };

    Model.prototype.destroy = function(options) {
      if (options == null) {
        options = {};
      }
      _.defaults(options, {
        wait: true
      });
      this.set({
        _destroy: true
      });
      return Model.__super__.destroy.call(this, options);
    };

    Model.prototype.isDestroyed = function() {
      return this.get("_destroy");
    };

    Model.prototype.save = function(data, options) {
      var isNew;
      if (options == null) {
        options = {};
      }
      isNew = this.isNew();
      _.defaults(options, {
        wait: true,
        success: _.bind(this.saveSuccess, this, isNew, options.collection),
        error: _.bind(this.saveError, this)
      });
      this.unset("_errors");
      return Model.__super__.save.call(this, data, options);
    };

    Model.prototype.saveSuccess = function(isNew, collection) {
      if (isNew) {
        if (collection) {
          collection.add(this);
        }
        if (collection) {
          collection.trigger("model:created", this);
        }
        return this.trigger("created", this);
      } else {
        if (collection == null) {
          collection = this.collection;
        }
        if (collection) {
          collection.trigger("model:updated", this);
        }
        return this.trigger("updated", this);
      }
    };

    Model.prototype.saveError = function(model, xhr, options) {
      if (xhr.status !== 404) {
        return this.set({
          _errors: $.parseJSON(xhr.responseText)
        });
      }
    };

    return Model;

  })(Backbone.Model);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Post = (function(_super) {

    __extends(Post, _super);

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.urlRoot = "/api/post";

    return Post;

  })(Entities.Model);
  Entities.PostCollection = (function(_super) {

    __extends(PostCollection, _super);

    function PostCollection() {
      return PostCollection.__super__.constructor.apply(this, arguments);
    }

    PostCollection.prototype.model = Entities.Post;

    PostCollection.prototype.url = "/api/post";

    return PostCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function() {
      var post;
      post = new Entities.PostCollection;
      post.fetch({
        reset: true
      });
      return post;
    },
    getPost: function(id) {
      var post;
      post = new Entities.Post({
        id: id
      });
      post.fetch();
      return post;
    },
    newPost: function() {
      return new Entities.Post;
    }
  };
  App.reqres.setHandler("post:entities", function() {
    return API.getAll();
  });
  App.reqres.setHandler("post:entity", function(id) {
    return API.getPost(id);
  });
  return App.reqres.setHandler("new:post:entity", function() {
    return API.newPost();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.Tag = (function(_super) {

    __extends(Tag, _super);

    function Tag() {
      return Tag.__super__.constructor.apply(this, arguments);
    }

    Tag.prototype.urlRoot = "/api/tag";

    return Tag;

  })(Entities.Model);
  Entities.TagCollection = (function(_super) {

    __extends(TagCollection, _super);

    function TagCollection() {
      return TagCollection.__super__.constructor.apply(this, arguments);
    }

    TagCollection.prototype.model = Entities.Tag;

    TagCollection.prototype.url = "/api/tag";

    return TagCollection;

  })(App.Entities.Collection);
  API = {
    getAll: function(cb) {
      var tags;
      tags = new Entities.TagCollection;
      tags.fetch({
        reset: true,
        success: function(collection, response, options) {
          if (cb) {
            return cb(tags);
          }
        },
        error: function() {
          throw new Error("Tags not fetched");
        }
      });
      return tags;
    }
  };
  return App.reqres.setHandler("tag:entities", function(cb) {
    return API.getAll(cb);
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

this.Wardrobe.module("Controllers", function(Controllers, App, Backbone, Marionette, $, _) {
  return Controllers.Base = (function(_super) {

    __extends(Base, _super);

    function Base(options) {
      if (options == null) {
        options = {};
      }
      this.region = options.region || App.request("default:region");
      Base.__super__.constructor.call(this, options);
      this._instance_id = _.uniqueId("controller");
      App.execute("register:instance", this, this._instance_id);
    }

    Base.prototype.close = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      delete this.region;
      delete this.options;
      Base.__super__.close.call(this, args);
      return App.execute("unregister:instance", this, this._instance_id);
    };

    Base.prototype.show = function(view) {
      this.listenTo(view, "close", this.close);
      return this.region.show(view);
    };

    return Base;

  })(Marionette.Controller);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.CollectionView = (function(_super) {

    __extends(CollectionView, _super);

    function CollectionView() {
      return CollectionView.__super__.constructor.apply(this, arguments);
    }

    CollectionView.prototype.itemViewEventPrefix = "childview";

    return CollectionView;

  })(Marionette.CollectionView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.CompositeView = (function(_super) {

    __extends(CompositeView, _super);

    function CompositeView() {
      return CompositeView.__super__.constructor.apply(this, arguments);
    }

    CompositeView.prototype.itemViewEventPrefix = "childview";

    return CompositeView;

  })(Marionette.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.ItemView = (function(_super) {

    __extends(ItemView, _super);

    function ItemView() {
      return ItemView.__super__.constructor.apply(this, arguments);
    }

    ItemView.prototype.fillJSON = function() {
      var _ref;
      return this.$('form').fillJSON(((_ref = this.model) != null ? _ref.toJSON() : void 0) || {});
    };

    return ItemView;

  })(Marionette.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.Layout = (function(_super) {

    __extends(Layout, _super);

    function Layout() {
      return Layout.__super__.constructor.apply(this, arguments);
    }

    return Layout;

  })(Marionette.Layout);
});

var __slice = [].slice;

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  var _remove;
  _remove = Marionette.View.prototype.remove;
  return _.extend(Marionette.View.prototype, {
    remove: function() {
      var args, _ref,
        _this = this;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      console.log("removing", this);
      if ((_ref = this.model) != null ? _ref.isDestroyed() : void 0) {
        return this.$el.fadeOut(400, function() {
          return _remove.apply(_this, args);
        });
      } else {
        return _remove.apply(this, args);
      }
    }
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.PostView = (function(_super) {

    __extends(PostView, _super);

    function PostView() {
      return PostView.__super__.constructor.apply(this, arguments);
    }

    PostView.prototype.template = "post/templates/form";

    PostView.prototype.initialize = function() {
      return this.tagsShown = false;
    };

    PostView.prototype.events = {
      "click .publish": "save",
      "click .js-toggle": "toggleDetails",
      "click .icon-tags": "toggleTags",
      "change .js-active": "changeBtn"
    };

    PostView.prototype.modelEvents = {
      "change:_errors": "changeErrors"
    };

    PostView.prototype.templateHelpers = {
      submitBtnText: function() {
        if (!(this.active != null)) {
          "Publish Post";

        }
        if (this.active === "1") {
          return "Publish Post";
        } else {
          return "Save Post";
        }
      }
    };

    PostView.prototype.onShow = function() {
      this.setUpEditor();
      this.setUpTags();
      if (this.model.isNew) {
        $('#slug').slugify('#title');
        return this.$("#publish_date").val(moment().format("YYYY-MM-DD HH:mm:ss"));
      }
    };

    PostView.prototype.setUpEditor = function() {
      var toolbar;
      toolbar = ['bold', 'italic', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image', '|', 'undo', 'redo', '|', 'tags'];
      this.editor = new Editor({
        toolbar: toolbar
      });
      this.editor.render(document.getElementById("content"));
      return this.$('.editor-statusbar').find('.lines').html(this.editor.codemirror.lineCount()).find('.words').html(this.editor.codemirror.getValue().length).find('.cursorActivity').html(this.editor.codemirror.getCursor().line + ':' + this.editor.codemirror.getCursor().ch);
    };

    PostView.prototype.setUpTags = function() {
      var _this = this;
      return App.request("tag:entities", function(tags) {
        return _this.$("#js-tags").selectize({
          persist: true,
          maxItems: null,
          valueField: "tag",
          labelField: "tag",
          searchField: ["tag"],
          options: tags.toJSON(),
          render: {
            item: function(item) {
              return "<div><i class='icon-tag'></i> " + item.tag + "</div>";
            },
            option: function(item) {
              return "<div><i class='icon-tag'></i> " + item.tag + "</div>";
            }
          },
          create: function(input) {
            return {
              "tag": input
            };
          }
        });
      });
    };

    PostView.prototype.toggleTags = function(e) {
      if (this.tagsShown) {
        this.$('.editor-toolbar a, .editor-toolbar i').show();
        this.$(".tags-bar").hide();
      } else {
        this.$('.editor-toolbar a, .editor-toolbar i').hide();
        this.$('.icon-tags').show();
        this.$(".tags-bar").show();
        this.$("js-tags").focus();
      }
      return this.tagsShown = !this.tagsShown;
    };

    PostView.prototype.save = function(e) {
      var data;
      e.preventDefault();
      data = {
        title: this.$('#title').val(),
        slug: this.$('#slug').val(),
        active: this.$('input[type=radio]:checked').val(),
        content: this.editor.codemirror.getValue(),
        tags: this.$("#js-tags").val(),
        publish_date: this.$("#publish_date").val()
      };
      return this.processFormSubmit(data);
    };

    PostView.prototype.processFormSubmit = function(data) {
      return this.model.save(data, {
        collection: this.collection
      });
    };

    PostView.prototype.changeErrors = function(model, errors, options) {
      if (_.isEmpty(errors)) {
        return this.removeErrors();
      } else {
        return this.addErrors(errors);
      }
    };

    PostView.prototype.addErrors = function(errors) {
      var error, name, _results;
      if (errors == null) {
        errors = {};
      }
      this.$("#js-errors").show().find("span").html("<strong>Error</strong> Please fix the following errors");
      _results = [];
      for (name in errors) {
        error = errors[name];
        _results.push(this.addError(error));
      }
      return _results;
    };

    PostView.prototype.addError = function(error) {
      var sm;
      sm = $("<li>").text(error);
      return this.$("#js-errors span").append(sm);
    };

    PostView.prototype.removeErrors = function() {
      return this.$("#js-errors").hide();
    };

    PostView.prototype.collapse = function($toggle) {
      this.$toggle = $toggle;
      this.$toggle.data("dir", "up").addClass("icon-chevron-sign-right").removeClass("icon-chevron-sign-down");
      return this.$(".details.hide").hide();
    };

    PostView.prototype.expand = function($toggle) {
      this.$toggle = $toggle;
      this.$toggle.data("dir", "down").addClass("icon-chevron-sign-down").removeClass("icon-chevron-sign-right");
      return this.$(".details.hide").show();
    };

    PostView.prototype.toggleDetails = function(e) {
      this.$toggle = $(e.currentTarget);
      if (this.$toggle.data("dir") === "up") {
        return this.expand(this.$toggle);
      } else {
        return this.collapse(this.$toggle);
      }
    };

    PostView.prototype.changeBtn = function(e) {
      if (e.currentTarget.value === "1") {
        return this.$(".publish").text("Publish Post");
      } else {
        return this.$(".publish").text("Save Post");
      }
    };

    return PostView;

  })(App.Views.ItemView);
});


this.Wardrobe.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {
  var API;
  this.startWithParent = false;
  API = {
    list: function() {
      return new HeaderApp.List.Controller({
        region: App.headerRegion
      });
    }
  };
  return HeaderApp.on("start", function() {
    return API.list();
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var listView;
      listView = this.getListView();
      return this.show(listView);
    };

    Controller.prototype.getListView = function() {
      return new List.Header;
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Header = (function(_super) {

    __extends(Header, _super);

    function Header() {
      return Header.__super__.constructor.apply(this, arguments);
    }

    Header.prototype.template = "header/list/templates/header";

    Header.prototype.tagName = "header";

    Header.prototype.events = {
      "click .write": "newPost"
    };

    Header.prototype.newPost = function(e) {
      e.preventDefault();
      return App.vent.trigger("post:new:clicked");
    };

    return Header;

  })(App.Views.ItemView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var id, post,
        _this = this;
      post = options.post, id = options.id;
      post || (post = App.request("post:entity", id));
      this.listenTo(post, "updated", function() {
        return App.vent.trigger("post:updated", post);
      });
      return App.execute("when:fetched", post, function() {
        var view;
        view = _this.getEditView(post);
        return _this.show(view);
      });
    };

    Controller.prototype.getEditView = function(post) {
      return new Edit.Post({
        model: post
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Post = (function(_super) {

    __extends(Post, _super);

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.onRender = function() {
      var tags;
      this.fillJSON();
      tags = _.pluck(this.model.get("tags"), "tag");
      this.$("#js-tags").val(tags);
      if (this.model.get("active") === "1") {
        this.$(".publish").text("Publish Post");
        return this.$('input:radio[name="active"]').filter('[value="1"]').attr('checked', true);
      } else {
        this.$(".publish").text("Save Post");
        return this.$('input:radio[name="active"]').filter('[value="0"]').attr('checked', true);
      }
    };

    return Post;

  })(App.Views.PostView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var post,
        _this = this;
      post = App.request("post:entities");
      return App.execute("when:fetched", post, function() {
        var view;
        view = _this.getListView(post);
        _this.show(view);
        return _this.listenTo(view, "childview:post:delete:clicked", function(child, args) {
          var model;
          model = args.model;
          if (confirm("Are you sure you want to delete " + (model.get("title")) + "?")) {
            return model.destroy();
          } else {
            return false;
          }
        });
      });
    };

    Controller.prototype.getListView = function(post) {
      return new List.Posts({
        collection: post
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.PostItem = (function(_super) {

    __extends(PostItem, _super);

    function PostItem() {
      return PostItem.__super__.constructor.apply(this, arguments);
    }

    PostItem.prototype.template = "post/list/templates/item";

    PostItem.prototype.tagName = "tr";

    PostItem.prototype.attributes = function() {
      if (this.model.get("active") === "1") {
        return {
          "class": "post-item"
        };
      } else {
        return {
          "class": "post-item draft"
        };
      }
    };

    PostItem.prototype.triggers = {
      "click .delete": "post:delete:clicked"
    };

    PostItem.prototype.events = {
      "click .details": "edit"
    };

    PostItem.prototype.onShow = function() {
      return this.$('.js-format-date').formatDates();
    };

    PostItem.prototype.edit = function(e) {
      e.preventDefault();
      return App.vent.trigger("post:item:clicked", this.model);
    };

    PostItem.prototype.deletePost = function(e) {
      e.preventDefault();
      if (!confirm("Are you sure you want to delete this?")) {
        return this;
      }
      return this.model.destroy({
        success: function(model, response) {
          return $("#js-alert").showAlert("Success", "The post is deleted.", "alert-success");
        },
        error: function(model, error) {
          return $("#js-alert").showAlert("Error", error.responseText(), "alert-error");
        }
      });
    };

    return PostItem;

  })(App.Views.ItemView);
  List.Empty = (function(_super) {

    __extends(Empty, _super);

    function Empty() {
      return Empty.__super__.constructor.apply(this, arguments);
    }

    Empty.prototype.template = "post/list/templates/empty";

    Empty.prototype.tagName = "tr";

    return Empty;

  })(App.Views.ItemView);
  return List.Posts = (function(_super) {

    __extends(Posts, _super);

    function Posts() {
      return Posts.__super__.constructor.apply(this, arguments);
    }

    Posts.prototype.template = "post/list/templates/grid";

    Posts.prototype.itemView = List.PostItem;

    Posts.prototype.emptyView = List.Empty;

    Posts.prototype.itemViewContainer = "tbody";

    return Posts;

  })(App.Views.CompositeView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function(options) {
      var post, view;
      post = App.request("new:post:entity");
      this.listenTo(post, "created", function() {
        return App.vent.trigger("post:created", post);
      });
      view = this.getNewView(post);
      return this.show(view);
    };

    Controller.prototype.getNewView = function(post) {
      return new New.Post({
        model: post
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp.New", function(New, App, Backbone, Marionette, $, _) {
  return New.Post = (function(_super) {

    __extends(Post, _super);

    function Post() {
      return Post.__super__.constructor.apply(this, arguments);
    }

    Post.prototype.onRender = function() {
      return this.$(".publish").text("Publish Post");
    };

    return Post;

  })(App.Views.PostView);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("PostApp", function(PostApp, App, Backbone, Marionette, $, _) {
  var API;
  PostApp.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      "": "add",
      "post": "list",
      "post/add": "add",
      "post/edit/:id": "edit"
    };

    return Router;

  })(Marionette.AppRouter);
  API = {
    list: function() {
      this.setActive();
      return new PostApp.List.Controller;
    },
    add: function() {
      this.setActive(".write");
      return new PostApp.New.Controller;
    },
    edit: function(id, item) {
      this.setActive();
      return new PostApp.Edit.Controller({
        id: id,
        post: item
      });
    },
    setActive: function(type) {
      if (type == null) {
        type = ".posts";
      }
      return $('ul.nav li').removeClass("active").find(type).parent().addClass("active");
    }
  };
  App.vent.on("post:load", function() {
    App.navigate("post");
    return API.list();
  });
  App.vent.on("post:created post:updated", function() {
    $("#js-alert").showAlert("Success!", "Post was successfully saved.", "alert-success");
    App.navigate("post");
    return API.list();
  });
  App.vent.on("post:new:clicked", function() {
    App.navigate("/");
    return API.add();
  });
  App.vent.on("post:item:clicked", function(item) {
    App.navigate("post/edit/" + item.id);
    return API.edit(item.id, item);
  });
  return App.addInitializer(function() {
    return new PostApp.Router({
      controller: API
    });
  });
});
