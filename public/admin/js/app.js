this["JST"] = this["JST"] || {};

this["JST"]["account/edit/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-horizontal">\n  <div id="js-errors" class="hide">\n    <div class="alert alert-error">\n      <button type="button" class="close" data-dismiss="alert">×</button>\n      <span></span>\n    </div>\n  </div>\n  <div class="alert alert-success hide">\n    <strong>Success!</strong> Your account has been saved!\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="first_name">First Name</label>\n    <div class="controls">\n      <input type="text" id="first_name" name="first_name" placeholder="First Name">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="last_name">Last Name</label>\n    <div class="controls">\n      <input type="text" id="last_name" name="last_name" placeholder="Last Name">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="email">Email</label>\n    <div class="controls">\n      <input type="text" id="email" name="email" placeholder="Email">\n    </div>\n  </div>\n  <div class="control-group">\n    <label class="control-label" for="password">Password</label>\n    <div class="controls">\n      <input class="input-xlarge" id="password" type="password" name="password" value="">\n      <span class="help-inline">Enter a new password to change password</span>\n    </div>\n  </div>\n  <div class="control-group">\n    <div class="controls">\n      <button type="submit" class="btn save">Save</button>\n    </div>\n  </div>\n</form>';

}
return __p
};

this["JST"]["header/list/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav>\n  <ul>\n    <li><a class="write" href="#"><i class="icon-plus"></i> Write </a></li>\n    <li><a class="posts" href="#post"><i class="icon-list"></i> Posts </a></li>\n    <li><a class="edit-account" href="#"><i class="icon-user"></i> Account </a></li>\n    <li><a href="/wardrobe/logout"><i class="icon-off"></i> Logout</a></li>\n  </ul>\n</nav>\n';

}
return __p
};

this["JST"]["post/_base/templates/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form>\n  <input type="hidden" name="publish_date" id="publish_date" value="">\n  <div id="js-errors" class="hide">\n    <div class="alert alert-error">\n      <button type="button" class="close" data-dismiss="alert">×</button>\n      <span></span>\n    </div>\n  </div>\n  <div id="write">\n    <button class="btn btn-mini publish pull-right">' +
((__t = ( submitBtnText() )) == null ? '' : __t) +
'</button>\n    <div class="info">\n      <div class="field">\n        <i data-dir="up" class="icon-chevron-sign-right js-toggle" title="Expand for options"></i>\n        <input type="text" style="width: 50%" name="title" id="title" value="" placeholder="Title">\n      </div>\n      <div class="details hide">\n        <div class="field">\n          <i class="icon-terminal" title="URI Slug"></i>\n          <input type="text" style="width: 50%" name="slug" id="slug" value="" placeholder="URI Slug">\n        </div>\n        <div class="field status">\n          <i class="icon-off" title="Status"></i>\n          <label class="radio"><input type="radio" name="active" class="js-active" value="1" checked> Published</label>\n          <label class="radio"><input type="radio" name="active" class="js-active" value="0"> Draft</label>\n        </div>\n      </div>\n    </div>\n    <div class="content-area">\n      <textarea name="content" id="content" placeholder="Content Goes Here..."></textarea>\n      <div class="tags-bar hide">\n        <input type="text" id="js-tags" name="tags" class="tags" style="width: 90%" value="" placeholder="Tags">\n      </div>\n    </div>\n  </div>\n</form>\n\n<div id="date-form" style="display: none">\n  <form class="form-inline">\n    <label for="date">Publish Date</label><br>\n    <input type="text" name="date" class="js-date" id="date" value="" placeholder="Next Thursday 10am">\n    <button class="btn js-setdate">Set</button>\n  </form>\n</div>\n';

}
return __p
};

this["JST"]["post/list/templates/empty.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td colspan="4">No Posts</td>';

}
return __p
};

this["JST"]["post/list/templates/grid.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class="table">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Title</th>\n\t\t\t<th>Status</th>\n\t\t\t<th>Published</th>\n\t\t\t<th></th>\n\t\t</tr>\n\t</thead>\n\t<tbody></tbody>\n</table>\n';

}
return __p
};

this["JST"]["post/list/templates/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td class="title">\n  <a href="#" class="details">' +
((__t = ( title )) == null ? '' : __t) +
'</a>\n</td>\n<td class="status">' +
((__t = ( (active == 1) ? "Active" : "Draft" )) == null ? '' : __t) +
'</td>\n<td class="date js-format-date" data-date="' +
((__t = ( publish_date )) == null ? '' : __t) +
'">' +
((__t = ( publish_date )) == null ? '' : __t) +
'</td>\n<td class="actions"><a href="#" class="delete"><i class="icon-trash"></i></a></td>\n';

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


$.fn.avatar = function(email, size) {
  if (size == null) {
    size = 28;
  }
  return $(this).attr("src", '//www.gravatar.com/avatar/' + md5(email) + '?s=' + (size * 2));
};


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
  return $(".alert").delay(3000).fadeOut(400);
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
    App.environment = $('meta[name=env]').attr("content");
    this.currentUser = App.request("set:current:user", options.user);
    return this.baseUrl = options.base_url;
  });
  App.reqres.setHandler("get:current:user", function() {
    return App.currentUser;
  });
  App.reqres.setHandler("get:base:url", function() {
    return App.baseUrl;
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

    Post.prototype.urlRoot = function() {
      return App.request("get:base:url") + "/api/post";
    };

    return Post;

  })(App.Entities.Model);
  Entities.PostCollection = (function(_super) {

    __extends(PostCollection, _super);

    function PostCollection() {
      return PostCollection.__super__.constructor.apply(this, arguments);
    }

    PostCollection.prototype.model = Entities.Post;

    PostCollection.prototype.url = function() {
      return App.request("get:base:url") + "/api/post";
    };

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

    Tag.prototype.urlRoot = function() {
      return App.request("get:base:url") + "/api/tag";
    };

    return Tag;

  })(App.Entities.Model);
  Entities.TagCollection = (function(_super) {

    __extends(TagCollection, _super);

    function TagCollection() {
      return TagCollection.__super__.constructor.apply(this, arguments);
    }

    TagCollection.prototype.model = Entities.Tag;

    TagCollection.prototype.url = function() {
      return App.request("get:base:url") + "/api/tag";
    };

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
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  var API;
  Entities.User = (function(_super) {

    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.urlRoot = function() {
      return App.request("get:base:url") + "/api/user";
    };

    return User;

  })(App.Entities.Model);
  Entities.UsersCollection = (function(_super) {

    __extends(UsersCollection, _super);

    function UsersCollection() {
      return UsersCollection.__super__.constructor.apply(this, arguments);
    }

    UsersCollection.prototype.model = Entities.User;

    UsersCollection.prototype.url = function() {
      return App.request("get:base:url") + "/api/user";
    };

    return UsersCollection;

  })(App.Entities.Collection);
  API = {
    setCurrentUser: function(currentUser) {
      return new Entities.User(currentUser);
    },
    getUserEntities: function(cb) {
      var users;
      users = new Entities.UsersCollection;
      return users.fetch({
        success: function() {
          return cb(users);
        }
      });
    }
  };
  App.reqres.setHandler("set:current:user", function(currentUser) {
    return API.setCurrentUser(currentUser);
  });
  return App.reqres.setHandler("user:entities", function(cb) {
    return API.getUserEntities(cb);
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
      if (App.environment === "local") {
        console.log("removing", this);
      }
      if ((_ref = this.model) != null ? typeof _ref.isDestroyed === "function" ? _ref.isDestroyed() : void 0 : void 0) {
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

this.Wardrobe.module("AccountApp", function(AccountApp, App, Backbone, Marionette, $, _) {
  var API;
  AccountApp.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.appRoutes = {
      "account/edit": "edit"
    };

    return Router;

  })(Marionette.AppRouter);
  API = {
    edit: function() {
      return new AccountApp.Edit.Controller({
        region: App.mainRegion
      });
    }
  };
  App.vent.on("account:edit:clicked", function() {
    App.navigate("/account/edit");
    return API.edit();
  });
  return App.addInitializer(function() {
    return new AccountApp.Router({
      controller: API
    });
  });
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var user, view;
      user = App.request("get:current:user");
      view = this.getEditView(user);
      return this.show(view);
    };

    Controller.prototype.getEditView = function(user) {
      return new Edit.User({
        model: user
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

this.Wardrobe.module("AccountApp.Edit", function(Edit, App, Backbone, Marionette, $, _) {
  return Edit.User = (function(_super) {

    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    User.prototype.template = "account/edit/templates/form";

    User.prototype.className = "span6 offset3";

    User.prototype.events = {
      "click .save": "save"
    };

    User.prototype.modelEvents = {
      "change:_errors": "changeErrors"
    };

    User.prototype.onRender = function() {
      return this.fillJSON();
    };

    User.prototype.save = function(e) {
      var data,
        _this = this;
      e.preventDefault();
      data = {
        first_name: this.$('#first_name').val(),
        last_name: this.$('#last_name').val(),
        email: this.$('#email').val(),
        password: this.$('#password').val(),
        active: 1
      };
      return this.model.save(data, {
        success: function(model, response) {
          App.request("set:current:user", data);
          return _this.$(".alert-success").show();
        }
      });
    };

    User.prototype.changeErrors = function(model, errors, options) {
      if (_.isEmpty(errors)) {
        return this.removeErrors();
      } else {
        return this.addErrors(errors);
      }
    };

    User.prototype.addErrors = function(errors) {
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

    User.prototype.addError = function(error) {
      var sm;
      sm = $("<li>").text(error);
      return this.$("#js-errors span").append(sm);
    };

    User.prototype.removeErrors = function() {
      return this.$("#js-errors").hide();
    };

    return User;

  })(App.Views.ItemView);
});


this.Wardrobe.module("DropzoneApp", function(DropzoneApp, App, Backbone, Marionette, $, _) {
  var API;
  API = {
    setupDropzone: function() {
      var myDropzone;
      myDropzone = new Dropzone(document.body, {
        url: App.request("get:base:url") + "/api/dropzone",
        method: "POST",
        clickable: false
      });
      myDropzone.on("drop", function(file) {
        return App.vent.trigger("post:new");
      });
      myDropzone.on("error", function(file, message, xhr) {
        var msg;
        msg = $.parseJSON(message);
        return $("#js-alert").showAlert("Error!", msg.error.message, "alert-error");
      });
      return myDropzone.on("success", function(file, contents) {
        return App.vent.trigger("post:new:seed", contents);
      });
    }
  };
  return DropzoneApp.on("start", function() {
    return API.setupDropzone();
  });
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
      "click .write": "newPost",
      "click .edit-account": "editAccount"
    };

    Header.prototype.onRender = function() {
      return this.generateAvatar(App.request("get:current:user"));
    };

    Header.prototype.generateAvatar = function(user) {
      var $avEl;
      $avEl = this.$(".avatar");
      return $avEl.avatar(user.get("email"), $avEl.attr("width"));
    };

    Header.prototype.editAccount = function(e) {
      e.preventDefault();
      return App.vent.trigger("account:edit:clicked");
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

this.Wardrobe.module("Views", function(Views, App, Backbone, Marionette, $, _) {
  return Views.PostView = (function(_super) {

    __extends(PostView, _super);

    function PostView() {
      return PostView.__super__.constructor.apply(this, arguments);
    }

    PostView.prototype.template = "post/_base/templates/form";

    PostView.prototype.className = "span12";

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
        if ((this.active != null) || this.active === "1") {
          return "Publish Post";
        } else {
          return "Save Post";
        }
      }
    };

    PostView.prototype.onShow = function() {
      var publish,
        _this = this;
      this.setUpEditor();
      this.setupCalendar();
      if (this.model.isNew()) {
        $('#slug').slugify('#title');
      } else {
        publish = moment(this.model.get("publish_date"), "YYYY-MM-DD HH:mm");
        this.$("#publish_date").val(publish.format("MMM Do, YYYY h:mm A"));
      }
      return App.request("tag:entities", function(tags) {
        return _this.setUpTags(tags);
      });
    };

    PostView.prototype.setUpEditor = function() {
      var toolbar;
      toolbar = ['bold', 'italic', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image', 'code', '|', 'undo', 'redo', '|', 'tags', 'calendar'];
      this.editor = new Editor({
        toolbar: toolbar
      });
      this.editor.render(document.getElementById("content"));
      return this.$('.editor-statusbar').find('.lines').html(this.editor.codemirror.lineCount()).find('.words').html(this.editor.codemirror.getValue().length).find('.cursorActivity').html(this.editor.codemirror.getCursor().line + ':' + this.editor.codemirror.getCursor().ch);
    };

    PostView.prototype.setUpTags = function(tags) {
      return this.$("#js-tags").select2({
        tags: _.without(tags.pluck("tag"), ""),
        allowClear: true
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

    PostView.prototype.insertCode = function(e) {
      return e.preventDefault();
    };

    PostView.prototype.setupCalendar = function() {
      return this.$(".icon-calendar").qtip({
        show: {
          event: "click"
        },
        content: {
          text: $("#date-form").html()
        },
        position: {
          at: "right center",
          my: "left center",
          viewport: $(window),
          effect: false
        },
        events: {
          render: function(event, api) {
            $(".js-date").each(function() {
              return $(this).val($("#publish_date").val());
            });
            return $(".js-setdate").click(function(e) {
              var pubDate;
              e.preventDefault();
              pubDate = $(e.currentTarget).parent().find('input').val();
              $("#publish_date").val(pubDate);
              return $('.icon-calendar').qtip("hide");
            });
          }
        },
        hide: "unfocus"
      });
    };

    PostView.prototype.save = function(e) {
      e.preventDefault();
      return this.processFormSubmit({
        title: this.$('#title').val(),
        slug: this.$('#slug').val(),
        active: this.$('input[type=radio]:checked').val(),
        content: this.editor.codemirror.getValue(),
        tags: this.$("#js-tags").val(),
        publish_date: this.$("#publish_date").val()
      });
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
      this.fillJSON();
      this._setDate();
      this._setActive();
      return this._setTags();
    };

    Post.prototype._setDate = function() {
      var date;
      date = moment.utc(this.model.get("publish_date"), "YYYY-MM-DDTHH:mm:ss");
      return this.$(".js-date").val(date.format("MMM Do YYYY, hh:mma"));
    };

    Post.prototype._setActive = function() {
      if (this.model.get("active") === "1") {
        this.$(".publish").text("Publish Post");
        return this.$('input:radio[name="active"]').filter('[value="1"]').attr('checked', true);
      } else {
        this.$(".publish").text("Save Post");
        return this.$('input:radio[name="active"]').filter('[value="0"]').attr('checked', true);
      }
    };

    Post.prototype._setTags = function() {
      var tags;
      tags = _.pluck(this.model.get("tags"), "tag");
      return this.$("#js-tags").val(tags);
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

    Posts.prototype.className = "span8 offset2";

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

    Post.prototype.initialize = function() {
      var _this = this;
      return App.vent.on("post:new:seed", function(contents) {
        return _this.fillForm(contents);
      });
    };

    Post.prototype.onRender = function() {
      return this.$(".publish").text("Publish Post");
    };

    Post.prototype.fillForm = function(contents) {
      this.$("#slug").val(contents.fields.slug);
      this.$("#title").val(contents.fields.title);
      this.editor.codemirror.setValue(contents.content);
      this.$("#publish_date").val(contents.fields.date);
      if (contents.fields.tags.length > 0) {
        return this.fillTags(contents.fields.tags);
      }
    };

    Post.prototype.fillTags = function(tags) {
      return $("#js-tags").val(tags.join());
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
  App.vent.on("post:new:clicked post:new", function() {
    App.navigate("/", {
      trigger: false
    });
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
