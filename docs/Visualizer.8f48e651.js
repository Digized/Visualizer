parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Sbzl":[function(require,module,exports) {
"use strict";var t=function(){var r="https://api.spotify.com/v1",e=null,o=null,n=function(t,r){return t.abort=r,t},a=function(){var t=Array.prototype.slice.call(arguments),r=t[0],e=t.slice(1);return r=r||{},e.forEach(function(t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])}),r},s=function(t,r){var a=new XMLHttpRequest,s=function(o,n){var s=t.type||"GET";if(a.open(s,function(t,r){var e="";for(var o in r)if(r.hasOwnProperty(o)){var n=r[o];e+=encodeURIComponent(o)+"="+encodeURIComponent(n)+"&"}return e.length>0&&(t=t+"?"+(e=e.substring(0,e.length-1))),t}(t.url,t.params)),e&&a.setRequestHeader("Authorization","Bearer "+e),t.contentType&&a.setRequestHeader("Content-Type",t.contentType),a.onreadystatechange=function(){if(4===a.readyState){var t=null;try{t=a.responseText?JSON.parse(a.responseText):""}catch(e){console.error(e)}a.status>=200&&a.status<300?function(t){o&&o(t),r&&r(null,t)}(t):(n&&n(a),r&&r(a,null))}},"GET"===s)a.send(null);else{var p=null;t.postData&&(p="image/jpeg"===t.contentType?t.postData:JSON.stringify(t.postData)),a.send(p)}};return r?(s(),null):function(t,r){var e;if(null!==o){var a=o.defer();t(function(t){a.resolve(t)},function(t){a.reject(t)}),e=a.promise}else window.Promise&&(e=new window.Promise(t));return e?new n(e,r):null}(s,function(){a.abort()})},p=function(t,r,e,o){var n={},p=null;return"object"==typeof r?(n=r,p=e):"function"==typeof r&&(p=r),"GET"!==(t.type||"GET")&&t.postData&&!o?t.postData=a(t.postData,n):t.params=a(t.params,n),s(t,p)},i=function(){};return(i.prototype={constructor:t}).getGeneric=function(t,r){return p({url:t},r)},i.prototype.getMe=function(t,e){return p({url:r+"/me"},t,e)},i.prototype.getMySavedTracks=function(t,e){return p({url:r+"/me/tracks"},t,e)},i.prototype.addToMySavedTracks=function(t,e,o){return p({url:r+"/me/tracks",type:"PUT",postData:t},e,o)},i.prototype.removeFromMySavedTracks=function(t,e,o){return p({url:r+"/me/tracks",type:"DELETE",postData:t},e,o)},i.prototype.containsMySavedTracks=function(t,e,o){var n={url:r+"/me/tracks/contains",params:{ids:t.join(",")}};return p(n,e,o)},i.prototype.getMySavedAlbums=function(t,e){return p({url:r+"/me/albums"},t,e)},i.prototype.addToMySavedAlbums=function(t,e,o){return p({url:r+"/me/albums",type:"PUT",postData:t},e,o)},i.prototype.removeFromMySavedAlbums=function(t,e,o){return p({url:r+"/me/albums",type:"DELETE",postData:t},e,o)},i.prototype.containsMySavedAlbums=function(t,e,o){var n={url:r+"/me/albums/contains",params:{ids:t.join(",")}};return p(n,e,o)},i.prototype.getMyTopArtists=function(t,e){return p({url:r+"/me/top/artists"},t,e)},i.prototype.getMyTopTracks=function(t,e){return p({url:r+"/me/top/tracks"},t,e)},i.prototype.getMyRecentlyPlayedTracks=function(t,e){return p({url:r+"/me/player/recently-played"},t,e)},i.prototype.followUsers=function(t,e){var o={url:r+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"user"}};return p(o,e)},i.prototype.followArtists=function(t,e){var o={url:r+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"artist"}};return p(o,e)},i.prototype.followPlaylist=function(t,e,o){return p({url:r+"/playlists/"+t+"/followers",type:"PUT",postData:{}},e,o)},i.prototype.unfollowUsers=function(t,e){var o={url:r+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"user"}};return p(o,e)},i.prototype.unfollowArtists=function(t,e){var o={url:r+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"artist"}};return p(o,e)},i.prototype.unfollowPlaylist=function(t,e){return p({url:r+"/playlists/"+t+"/followers",type:"DELETE"},e)},i.prototype.isFollowingUsers=function(t,e){var o={url:r+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"user"}};return p(o,e)},i.prototype.isFollowingArtists=function(t,e){var o={url:r+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"artist"}};return p(o,e)},i.prototype.areFollowingPlaylist=function(t,e,o){var n={url:r+"/playlists/"+t+"/followers/contains",type:"GET",params:{ids:e.join(",")}};return p(n,o)},i.prototype.getFollowedArtists=function(t,e){return p({url:r+"/me/following",type:"GET",params:{type:"artist"}},t,e)},i.prototype.getUser=function(t,e,o){var n={url:r+"/users/"+encodeURIComponent(t)};return p(n,e,o)},i.prototype.getUserPlaylists=function(t,e,o){var n;return"string"==typeof t?n={url:r+"/users/"+encodeURIComponent(t)+"/playlists"}:(n={url:r+"/me/playlists"},o=e,e=t),p(n,e,o)},i.prototype.getPlaylist=function(t,e,o){return p({url:r+"/playlists/"+t},e,o)},i.prototype.getPlaylistTracks=function(t,e,o){return p({url:r+"/playlists/"+t+"/tracks"},e,o)},i.prototype.createPlaylist=function(t,e){return p({url:r+"/me/playlists",type:"POST",postData:t},t,e)},i.prototype.changePlaylistDetails=function(t,e,o){return p({url:r+"/playlists/"+t,type:"PUT",postData:e},e,o)},i.prototype.addTracksToPlaylist=function(t,e,o,n){return p({url:r+"/playlists/"+t+"/tracks",type:"POST",postData:{uris:e}},o,n,!0)},i.prototype.replaceTracksInPlaylist=function(t,e,o){return p({url:r+"/playlists/"+t+"/tracks",type:"PUT",postData:{uris:e}},{},o)},i.prototype.reorderTracksInPlaylist=function(t,e,o,n,a){return p({url:r+"/playlists/"+t+"/tracks",type:"PUT",postData:{range_start:e,insert_before:o}},n,a)},i.prototype.removeTracksFromPlaylist=function(t,e,o){var n=e.map(function(t){return"string"==typeof t?{uri:t}:t});return p({url:r+"/playlists/"+t+"/tracks",type:"DELETE",postData:{tracks:n}},{},o)},i.prototype.removeTracksFromPlaylistWithSnapshotId=function(t,e,o,n){var a=e.map(function(t){return"string"==typeof t?{uri:t}:t});return p({url:r+"/playlists/"+t+"/tracks",type:"DELETE",postData:{tracks:a,snapshot_id:o}},{},n)},i.prototype.removeTracksFromPlaylistInPositions=function(t,e,o,n){return p({url:r+"/playlists/"+t+"/tracks",type:"DELETE",postData:{positions:e,snapshot_id:o}},{},n)},i.prototype.uploadCustomPlaylistCoverImage=function(t,e,o){var n={url:r+"/playlists/"+t+"/images",type:"PUT",postData:e.replace(/^data:image\/jpeg;base64,/,""),contentType:"image/jpeg"};return p(n,{},o)},i.prototype.getAlbum=function(t,e,o){return p({url:r+"/albums/"+t},e,o)},i.prototype.getAlbumTracks=function(t,e,o){return p({url:r+"/albums/"+t+"/tracks"},e,o)},i.prototype.getAlbums=function(t,e,o){var n={url:r+"/albums/",params:{ids:t.join(",")}};return p(n,e,o)},i.prototype.getTrack=function(t,e,o){var n={};return n.url=r+"/tracks/"+t,p(n,e,o)},i.prototype.getTracks=function(t,e,o){var n={url:r+"/tracks/",params:{ids:t.join(",")}};return p(n,e,o)},i.prototype.getArtist=function(t,e,o){return p({url:r+"/artists/"+t},e,o)},i.prototype.getArtists=function(t,e,o){var n={url:r+"/artists/",params:{ids:t.join(",")}};return p(n,e,o)},i.prototype.getArtistAlbums=function(t,e,o){return p({url:r+"/artists/"+t+"/albums"},e,o)},i.prototype.getArtistTopTracks=function(t,e,o,n){return p({url:r+"/artists/"+t+"/top-tracks",params:{country:e}},o,n)},i.prototype.getArtistRelatedArtists=function(t,e,o){return p({url:r+"/artists/"+t+"/related-artists"},e,o)},i.prototype.getFeaturedPlaylists=function(t,e){return p({url:r+"/browse/featured-playlists"},t,e)},i.prototype.getNewReleases=function(t,e){return p({url:r+"/browse/new-releases"},t,e)},i.prototype.getCategories=function(t,e){return p({url:r+"/browse/categories"},t,e)},i.prototype.getCategory=function(t,e,o){return p({url:r+"/browse/categories/"+t},e,o)},i.prototype.getCategoryPlaylists=function(t,e,o){return p({url:r+"/browse/categories/"+t+"/playlists"},e,o)},i.prototype.search=function(t,e,o,n){var a={url:r+"/search/",params:{q:t,type:e.join(",")}};return p(a,o,n)},i.prototype.searchAlbums=function(t,r,e){return this.search(t,["album"],r,e)},i.prototype.searchArtists=function(t,r,e){return this.search(t,["artist"],r,e)},i.prototype.searchTracks=function(t,r,e){return this.search(t,["track"],r,e)},i.prototype.searchPlaylists=function(t,r,e){return this.search(t,["playlist"],r,e)},i.prototype.getAudioFeaturesForTrack=function(t,e){var o={};return o.url=r+"/audio-features/"+t,p(o,{},e)},i.prototype.getAudioFeaturesForTracks=function(t,e){return p({url:r+"/audio-features",params:{ids:t}},{},e)},i.prototype.getAudioAnalysisForTrack=function(t,e){var o={};return o.url=r+"/audio-analysis/"+t,p(o,{},e)},i.prototype.getRecommendations=function(t,e){return p({url:r+"/recommendations"},t,e)},i.prototype.getAvailableGenreSeeds=function(t){return p({url:r+"/recommendations/available-genre-seeds"},{},t)},i.prototype.getMyDevices=function(t){return p({url:r+"/me/player/devices"},{},t)},i.prototype.getMyCurrentPlaybackState=function(t,e){return p({url:r+"/me/player"},t,e)},i.prototype.getMyCurrentPlayingTrack=function(t,e){return p({url:r+"/me/player/currently-playing"},t,e)},i.prototype.transferMyPlayback=function(t,e,o){var n=e||{};return n.device_ids=t,p({type:"PUT",url:r+"/me/player",postData:n},e,o)},i.prototype.play=function(t,e){var o="device_id"in(t=t||{})?{device_id:t.device_id}:null,n={};return["context_uri","uris","offset","position_ms"].forEach(function(r){r in t&&(n[r]=t[r])}),p({type:"PUT",url:r+"/me/player/play",params:o,postData:n},"function"==typeof t?t:{},e)},i.prototype.pause=function(t,e){var o="device_id"in(t=t||{})?{device_id:t.device_id}:null;return p({type:"PUT",url:r+"/me/player/pause",params:o},t,e)},i.prototype.skipToNext=function(t,e){var o="device_id"in(t=t||{})?{device_id:t.device_id}:null;return p({type:"POST",url:r+"/me/player/next",params:o},t,e)},i.prototype.skipToPrevious=function(t,e){var o="device_id"in(t=t||{})?{device_id:t.device_id}:null;return p({type:"POST",url:r+"/me/player/previous",params:o},t,e)},i.prototype.seek=function(t,e,o){var n={position_ms:t};return"device_id"in e&&(n.device_id=e.device_id),p({type:"PUT",url:r+"/me/player/seek",params:n},e,o)},i.prototype.setRepeat=function(t,e,o){var n={state:t};return"device_id"in e&&(n.device_id=e.device_id),p({type:"PUT",url:r+"/me/player/repeat",params:n},e,o)},i.prototype.setVolume=function(t,e,o){var n={volume_percent:t};return"device_id"in e&&(n.device_id=e.device_id),p({type:"PUT",url:r+"/me/player/volume",params:n},e,o)},i.prototype.setShuffle=function(t,e,o){var n={state:t};return"device_id"in e&&(n.device_id=e.device_id),p({type:"PUT",url:r+"/me/player/shuffle",params:n},e,o)},i.prototype.getAccessToken=function(){return e},i.prototype.setAccessToken=function(t){e=t},i.prototype.setPromiseImplementation=function(t){var r=!1;try{var e=new t(function(t){t()});"function"==typeof e.then&&"function"==typeof e.catch&&(r=!0)}catch(n){console.error(n)}if(!r)throw new Error("Unsupported implementation of Promises/A+");o=t},i}();"object"==typeof module&&"object"==typeof module.exports&&(module.exports=t);
},{}],"KQTT":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),e=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{a(r.next(t))}catch(e){i(e)}}function c(t){try{a(r.throw(t))}catch(e){i(e)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,c)}a((r=r.apply(t,e||[])).next())})},n=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};exports.__esModule=!0;var o=r(require("spotify-web-api-js")),i=function(r){function o(){var t=r.call(this)||this;return t.onplay=function(){},t}return t(o,r),o.prototype.authorize=function(t){var r=t.client_id,o=t.response_type,i=t.redirect_uri,s=t.state,c=t.scope,a=t.show_dialog;return e(this,void 0,Promise,function(){var t,e,u,l;return n(this,function(n){switch(n.label){case 0:return window.location.hash||(t="https://accounts.spotify.com/authorize",t+="?client_id="+r,t+="&response_type="+o,t+="&redirect_uri="+encodeURIComponent(i),s&&(t+="&state="+s),c&&(t+="&scope="+c.join(" ")),a&&(t+="&show_dialog="+a),window.location.replace(t)),e=window.location.hash,u={},e.split("&").map(function(t,e){var n=t.split("="),r=n[0],o=n[1];0===e&&(r=r.slice(1)),u[r]=o}),u.error?[2,Promise.reject(u)]:(this.setAccessToken(u.access_token),l=this,[4,this.getMyCurrentPlayingTrack()]);case 1:return l.track=n.sent(),[2,Promise.resolve(u)]}})})},o.prototype.getInfo=function(){return e(this,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return[4,this.getAudioAnalysisForTrack(this.track.item.id)];case 1:return[2,t.sent()]}})})},o}(o.default);exports.DigizedSpotify=i;
},{"spotify-web-api-js":"Sbzl"}],"pvLl":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(s,o){function a(t){try{h(n.next(t))}catch(e){o(e)}}function r(t){try{h(n.throw(t))}catch(e){o(e)}}function h(t){t.done?s(t.value):new i(function(e){e(t.value)}).then(a,r)}h((n=n.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var i,n,s,o,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(s=(s=a.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){a.label=o[1];break}if(6===o[0]&&a.label<s[1]){a.label=s[1],s=o;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(o);break}s[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(r){o=[6,r],n=0}finally{i=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}};exports.__esModule=!0;var i=require("./Spotify"),n=function(){function t(t,e,i,n,s){this.x=t,this.y=e,this.width=i,this.height=n,this.style=s}return t.prototype.draw=function(t){t.fillStyle=this.style,t.fillRect(this.x,this.y,this.width,this.height)},t.prototype.update=function(t){this.y+=t/30},t.prototype.getY=function(){return this.y+this.height},t}(),s=function(){function s(){var t=this;this.boxes=[],this.timeouts=[],this.canvas=document.createElement("canvas"),document.body.append(this.canvas),this.ctx=this.canvas.getContext("2d"),this.spotify=new i.DigizedSpotify,this.spotify.authorize({client_id:"611f3dd4bae743bca1dcf8603d53ea32",response_type:"token",redirect_uri:"http://localhost:3000",scope:["user-modify-playback-state"]}),window.onresize=function(){return t.updateBounds()},this.updateBounds(),this.update()}return s.prototype.updateBounds=function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight},s.prototype.update=function(){this._update(),this.draw()},s.prototype._update=function(){var t=this;this.boxes.forEach(function(e){return e.update(t.speed)}),this.boxes.length>0&&this.boxes[0].getY()>this.canvas.height&&this.boxes.shift()},s.prototype.draw=function(){var t=this;this.ctx.fillStyle="#000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.boxes.forEach(function(e){return e.draw(t.ctx)})},s.prototype.addRect=function(t,e,i,s){this.boxes.push(new n((void 0!==s?s:1)*(Math.random()*this.canvas.width),0,10*e,10*t,i))},s.prototype.updateSpeed=function(t){this.speed=t},s.prototype.play=function(){return t(this,void 0,void 0,function(){var t,i=this;return e(this,function(e){switch(e.label){case 0:return[4,this.spotify.getInfo()];case 1:return t=e.sent(),this.handleBeat(t.tatums,"#f00"),this.handleBeat(t.beats,"#00f"),this.handleBeat(t.bars,"#0f0"),this.handleSegments(t.segments,"#fff"),this.handleSections(t.sections),this.interval=setInterval(function(){return i.update()},1),[2]}})})},s.prototype.pause=function(){clearInterval(this.interval),this.timeouts.forEach(function(t){return clearTimeout(t)}),this.timeouts=[],this.boxes=[],this.speed=0,this.update()},s.prototype.toggle=function(){this.spotify.track.is_playing?(this.spotify.pause(),this.pause()):(this.spotify.seek(0,{}),this.spotify.play(),this.play()),this.spotify.track.is_playing=!this.spotify.track.is_playing},s.prototype.handleSections=function(t){var e=this;t.forEach(function(t){e.timeouts.push(setTimeout(function(){e.speed=t.tempo},1e3*t.start))})},s.prototype.handleBeat=function(t,e){var i=this;t.forEach(function(t){i.timeouts.push(setTimeout(function(){i.addRect(t.duration,t.confidence,e,0)},1e3*t.start))})},s.prototype.handleSegments=function(t,e){var i=this;t.forEach(function(t){i.timeouts.push(setTimeout(function(){t.pitches.forEach(function(n){i.addRect(t.duration,t.confidence,e)})},1e3*t.start))})},s}();exports.Visualizer=s;
},{"./Spotify":"KQTT"}],"7QCb":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var e=require("./Visualizer"),r=new e.Visualizer;document.onkeypress=function(e){32===e.keyCode&&r.toggle()};
},{"./Visualizer":"pvLl"}]},{},["7QCb"], null)
//# sourceMappingURL=/Visualizer.8f48e651.map