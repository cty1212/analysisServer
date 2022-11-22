## 前后端分离型客户端对接OAuth2.0服务器案例

> 该项目案例是针对前后端分离型的项目如何对接OAuth2.0的简单实现，类似的项目可以参考该项目在项目中进行对接。

对接OAuth服务器需了解相关概念，可参考以下文章

   	1. [OAuth 2.0协议](https://tools.ietf.org/html/rfc6749)
   	2. [Open ID Connect Core协议](http://openid.net/specs/openid-connect-core-1_0.html)
   	3. [理解OAuth 2.0](http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)

### 该项目主要实现以下几个功能

1. 前端项目登录取得Access_Token作为身份认证；
2. 前端项目利用Access_Token从认证服务器获取用户信息；
3. 前端项目从资源服务器获取资源；
4. 后端项目如何利用我司单点登录SDK进行Access_Token身份校验。
5. 前端项目登出；



### 前端项目实现

#### 1.  项目配置

项目的配置文件放置于路径：src/config/config.js

具体配置：

```js
var config={
  //请求授权地址
  userAuthorizationUri:"https://linksso-test.yuexiu.com/sso/oauth2/authorize",
  //accessToken请求地址
  accessTokenUri : "https://linksso-test.yuexiu.com/sso/oauth2/token",
  //用户信息请求地址
  userInfoUri:"https://linksso-test.yuexiu.com/sso/oauth2/userinfo",
  //登出请求地址
  logoutUri:"https://linksso-test.yuexiu.com/sso/oauth2/logout",
  //项目地址
  localuri :"http://localhost:9999",
  redirect_uri : "http://localhost:9999/login",
  //案例资源服务器地址
  resUri:"http://localhost:8080",
  //客户端相关标识，请从认证服务器申请
  clientId: "你的客户端",
  client_secret:"你的秘钥",
  //申请的权限范围
  scope:"user",
  //可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
  state:"",
  //一些固定的请求参数
  response_type:"code",
  grant_type : "authorization_code",
  code:"",
}

export default config;

```

#### 2. 用户登录并获取Access_Token

1. 登录开始，配置登录信息并重定向认证地址，等待用户授权

   ```js
   文件地址：src/util/loginUtils.js  
   login:function (vue) {
       vue.$config.code = RndNum(4);
       var authorUrl = vue.$config.userAuthorizationUri;
       authorUrl = authorUrl +'?'+'client_id='+vue.$config.clientId;
       authorUrl = authorUrl +'&'+'response_type='+vue.$config.response_type;
       authorUrl = authorUrl +'&'+'scope='+vue.$config.scope;
       authorUrl = authorUrl +'&'+'state='+vue.$config.state;
       authorUrl = authorUrl +'&'+'redirect_uri='+vue.$config.redirect_uri;
       window.location.href = authorUrl;
     }
   ```

2. 用户授权，认证服务器将重定向地址到1中配置的redirect_uri地址，并携带授权码和1中所配置的state。前端携带授权码和配置相关信息申请Access_Token

   ```js
   文件地址：src/components/ssologin.vue  
   mounted:function () {
       this.code = this.$route.query.code;
       this.state = this.$route.query.state;
       this.getToken();
   }

   getToken:function(){
         this.$token.getTokenFromService(this,this.code,(response)=>{
           this.$token.savetoken(response.data);
           this.$router.push('/user');
         },function (error) {
           alert(error);
         });
    }
   ```

   ```js
   文件地址：src/util/token.js

   getTokenFromService:function (vue,code,callback,error) {
       let tokenUrl = vue.$config.accessTokenUri;
       tokenUrl = tokenUrl + "?" +"grant_type="+vue.$config.grant_type;
       tokenUrl = tokenUrl + "&"+"code="+code;
       tokenUrl = tokenUrl + "&"+"redirect_uri="+vue.$config.redirect_uri;
       tokenUrl = tokenUrl + "&"+"client_id="+vue.$config.clientId;
       tokenUrl = tokenUrl + "&"+"client_secret="+vue.$config.client_secret;
       vue.$ajax({
         url:tokenUrl,
         method:'post',
       })
         .then(callback)
         .catch(error);
   }
   ```

3. 储存access_token，请根据项目需求自行实现

#### 3. 利用Access_token获取用户信息

```js
文件地址：src/components/userIndex.vue 
//获取身份信息时候，认证服务以资源服务器身份被请求资源
//向资源服务器发起请求的时候将携带access_token信息作为身份认证
getUserInfo:function () {
 var tokenInfo = this.$token.loadToken();
 this.$ajax({
     url:this.userInfoUri+"?"+"access_token="+tokenInfo.access_token,
  })
 .then((response) =>{
      this.user = response.data;
  })
  .catch((error) =>{
      this.login();
  });
}
```

#### 4. 前端项目从资源服务器获取资源 

```js
文件地址：src/components/getInfoFromRes.vue 
//向资源服务器发起请求的时候将携带access_token信息作为身份认证
getResourceInfo:function () {
    var uri = this.resUri + "?access_token="+this.$token.loadToken().access_token;
    this.$ajax({
      url:uri,
      dataType: 'jsonp'
    })
    .then((response) =>{
      this.res = response.data;;
     })
     .catch((error)=> {
       alert(error);
     });
}
```

#### 5. 后端项目如何利用我司单点登录SDK进行Access_Token身份校验。

后端项目接收携带Access_token信息的请求是作为资源服务器的身份接收的，在接收到请求之后，资源服务器将向认证服务器校验Access_token的有效性，如果有必要将请求用户的身份信息作为身份识别。这里我司提供了java端后台的身份认证sdk，直接接入即可。

具体文档信息请查阅：[品高单点登录客户端](https://github.com/bingo-oss/sso-client)

1. Maven安装sdk

   ```xml
   <dependency>
      <groupId>net.bingosoft.oss</groupId>
      <artifactId>sso-client</artifactId>
      <version>[3.0.1,]</version>
   </dependency>
   ```

2. 配置认证服务器相关信息

   ```java
   可参考资源服务器项目,类：com.bingo.auth.SSOAuthUtils

   // 创建SSOConfig对象
   SSOConfig config = new SSOConfig();
   // 设置应用标识
   config.setClientId("clientId");
   // 设置应用密钥
   config.setClientSecret("clientSecret");
   // 设置应用资源名称，作为服务时，需要在SSO注册资源名称,没设置的情况下，默认使用clientId属性
   config.setResourceName("resourceName");
   // 设置回调地址
   config.setRedirectUri(redirectUri);
   // 根据SSO地址自动配置其他地址
   config.autoConfigureUrls("http://sso.example.com");

   // 创建client对象
   SSOClient client = new SSOClient(config);
   ```

3. 身份校验并回复请求

   ```java
   可参考资源服务器项目,类：com.bingo.servlet.ResourceServlet

   HttpServletRequest req;

   // 获取access token
   String accessToken = SSOUtils.extractAccessToken(req);

   Authentication authc = null;
   try{
       //该方法将根据配置信息为资源服务器做身份认证并取得用户信息
       authc = client.verifyAccessToken(accessToken);            
   }catch (InvalidTokenException e){
       // 处理access token无效的情况
   }catch (TokenExpiredException e){
       // 处理access token过期的情况
   }
   // userId:用户ID,username:用户登录名(loginName),clientId:应用ID,scope:授权列表，expires:过期时间
   String userId = authc.getUserId();
   String username = authc.getUsername();
   String client = authc.getClientId();
   String scope = authc.getScope();
   // 获取access token的过期时间，这个过期时间指的是距离标准日期1970-01-01T00:00:00Z UTC的秒数
   long expires = authc.getExpires();
   ```

#### 6.前端项目登出

```js
mounted:function () {
    //清除Access_token缓存
  	this.$token.deleteToken();
    //重定向到登出地址，在登出后将回调到post_logout_redirect_uri地址
	var logouturi = this.$config.logoutUri+"?post_logout_redirect_uri="+this.$config.localuri+"/";
    window.location.href = logouturi;
}
```

