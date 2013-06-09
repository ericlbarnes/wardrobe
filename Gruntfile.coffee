module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    # Clean out the source directory
    clean: ["app/assets/src/js/"]

    # Compress and minify
    uglify:
      options:
        banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
        mangle:
          except: ["jQuery", "Backbone"]

      structure:
        files:
          "public/admin/js/structure.min.js": ["public/admin/js/structure.js"]

      app:
        files:
          "public/admin/js/app.min.js": ["public/admin/js/app.js"]

    # Compile coffee files to src/json
    coffee:
      glob_to_multiple:
        options:
          bare: true
        expand: true
        cwd: 'app/assets/coffee'
        src: ['**/*.coffee']
        dest: 'app/assets/src/js/'
        ext: '.js'

    # Compile our less styles
    less:
      development:
        options:
          paths: ["app/assets/less"]
        files:
          "public/admin/style.css": "app/assets/less/style.less"
      production:
        options:
          paths: ["app/assets/less"]
          yuicompress: true
        files:
          "public/admin/style.min.css": "app/assets/less/style.less"

    # Concat all our src files
    concat:
      structure:
        src: [
          'app/assets/vendor/plugins/html5shiv.js'
          'app/assets/vendor/backbone/underscore.js'
          'app/assets/vendor/backbone/backbone.js'
          'app/assets/vendor/backbone-plugins/backbone.marionette.js'
          'app/assets/vendor/plugins/dates/moment.js'
          'app/assets/vendor/plugins/dates/*.js'
          'app/assets/vendor/plugins/editor/*.js'
          'app/assets/vendor/plugins/md5.js'
          'app/assets/vendor/plugins/qtip.js'
          'app/assets/vendor/plugins/bootstrap/*.js'
          'app/assets/vendor/plugins/*.js'
        ]
        dest: 'public/admin/js/structure.js'

      app:
        src: [
          'app/assets/src/js/templates.js'
          'app/assets/src/js/config/**/*.js'
          'app/assets/src/js/app.js'
          'app/assets/src/js/entities/_base/*.js'
          'app/assets/src/js/entities/*.js'
          'app/assets/src/js/controllers/**/*.js'
          'app/assets/src/js/views/**/*.js'
          'app/assets/src/js/utilities/bugsnag.js'
          'app/assets/src/js/*.js'
          'app/assets/src/js/helpers/*.js'
          'app/assets/src/js/**/*.js'
        ]
        dest: 'public/admin/js/app.js'

    jst:
      compile:
        options:
          # templateSettings:
          #   interpolate : /\{\{(.+?)\}\}/g
          processName: (fileName) ->
            return fileName.replace("app/assets/coffee/apps/", "")
        files:
          "app/assets/src/js/templates.js": ["app/assets/coffee/apps/**/*.html"]

    watch:
      coffee:
        files: 'app/assets/coffee/**/*.coffee'
        tasks: ["clean", "jst", "coffee", "concat"]
        options:
          interrupt: true
      html:
        files: 'app/assets/coffee/**/*.html'
        tasks: ["jst", "concat"]
        options:
          interrupt: true
      less:
        files: 'app/assets/**/*.less'
        tasks: ["less"]
        options:
          interrupt: true
      src:
        files: 'app/assets/vendor/**/*.js'
        tasks: ["concat", "livereload"]
        options:
          interrupt: true

  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-less"
  grunt.loadNpmTasks "grunt-contrib-jst"
  grunt.loadNpmTasks "grunt-contrib-livereload"

  # Default task(s).
  # grunt.registerTask('watch', ['livereload-start', 'regarde']);
  grunt.registerTask "default", ["clean", "less", "coffee", "jst", "concat"]
  grunt.registerTask "deploy", ["clean", "less", "coffee", "jst", "concat", "uglify"]
