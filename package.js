Package.describe({
  name: 'dayd:mad-click',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: "Mad Click",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ddaydd/mad-click.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');

  api.use([
    'dayd:core',
    'ecmascript@0.6.3',
    'mongo',
    'less',
    'accounts-base',
    'reactive-dict@1.1.8'
  ]);

  api.use("templating@1.2.15", "client");

  api.add_files(['client/lib/helpers.js', 'client/lib/madClick.js', 'client/template/madClick.html', 'client/template/madClick.less', 'client/template/madClick.js'], ['client']);
  api.add_files(['lib/collections.js', 'lib/methods.js'], ['server', 'client']);
  api.add_files(['server/publish.js'], ['server']);

});
