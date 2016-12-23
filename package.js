Package.describe({
  name: 'dayd:mad-click',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Mad Click",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ddaydd/mad-click.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use([
    'mongo',
    'accounts-base',
    'twbs:bootstrap'
  ]);

  api.use("templating", "client");

  api.add_files(['client/lib/madClick.js', 'client/template/madClick.html', 'client/template/madClick.js'], ['client']);
  api.add_files(['lib/collections.js', 'lib/methods.js'], ['server', 'client']);
  api.add_files(['server/publish.js'], ['server']);

  api.export(['Dayd'], 'client');
});
