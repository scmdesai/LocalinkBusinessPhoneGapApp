
   Ext.setup({
    onReady: function() {
        var topToolbar = new Ext.Toolbar({
            dock : 'top',
            ui: 'dark',
            title: 'Facebook Login'
        });        
        var FacebookPanel = Ext.create('Ext.Panel', {
   
    items: [
        {
            xtype: 'panel',
            flex: 1,
            html:'<div id="header"><h2>Facebook app for tweet keywords</h2></div><span>Login with facebook</span><fb:login-button autologoutlink="true" perms="email,user_birthday,status_update,publish_stream,user_about_me"></fb:login-button><div id="login" style ="display:none"></div><img id="image"/><div id="name"></div>'    
    }]});
var myPanel = new Ext.Panel({
            dockedItems: [topToolbar],
            items: [FacebookPanel],
            scroll: 'vertical',
            fullscreen : true
        });
    }
});
 window.fbAsyncInit = function() {
        FB.init({
          appId      : '<app id>'//Give your app id,
          status     : true, 
          cookie     : true,
          xfbml      : true,
          oauth      : true,
        });
         FB.Event.subscribe('auth.login', function(response) {        
         login();
             });
        FB.Event.subscribe('auth.logout', function(response){
        logout();
        });
        };
        
      function login(){
                FB.api('/me', function(response) {
                var image = document.getElementById('image');
              image.src = 'http://graph.facebook.com/' + response.id + '/picture';
                    document.getElementById('login').style.display = "block";
                    document.getElementById('login').innerHTML = response.name + " succsessfully logged in!";
                    
                });
            }
            function logout(){
                document.getElementById('login').style.display = "none";
            }
       (function(d){
         var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
         js = d.createElement('script'); js.id = id; js.async = true;
         js.src = "//connect.facebook.net/en_US/all.js";
         d.getElementsByTagName('head')[0].appendChild(js);
       }(document));    

