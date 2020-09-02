Package.describe({
  name: 'nepho:accounts-kakao',
  version: '0.0.3',
  summary: 'Login service for Kakao',
  git: 'https://github.com/nepho8/meteor-accounts-kakao',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('nepho:kakao@0.0.5', ['client', 'server']);

  api.addFiles('kakao_login_button.css', 'client');

  api.addFiles('kakao.js');
});
