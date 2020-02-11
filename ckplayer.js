function ckcpt() {
    var cpt = '';
    cpt += 'definition.swf,2,2,-240,-33,2,1|'; 
    cpt += 'speed.swf,2,2,-330,-33,2,1|'; 
    cpt += 'scaling.swf,0,0,0,0,2,0|'; 
    // cpt += 'time.swf,2,0,-100,50,0|';
    return cpt;
}
function ckstyle() {
	var ck = {
		cpath: "",
		language: "",
		flashvars: "",
		setup: "0,1,1,1,1,2,0,1,0,0,1,1,200,0,2,1,0,1,1,1,1,10,3,0,0,2,1500,0,0,0,0,1,1,1,1,1,1,250,0,90,0,0,0",
		pm_bg: "0x000000,100,230,180",
		mylogo: "logo.swf",
		pm_mylogo: "1,1,-465,-320",
		logo: "null", 
		pm_logo: "2,0,-300,50",
		control_rel: "related.swf,ckplayer/related.xml,0",
		control_pv: "Preview.swf,105,100",
		pm_repc: "",
		pm_spac: "|",
		pm_fpac: "file->f",
		pm_advtime: "2,0,-110,10,0,300,0",
		pm_advstatus: "1,2,2,-200,-40",
		pm_advjp: "1,1,2,2,-100,-40",
		pm_padvc: "2,0,-10,-10",
		pm_advms: "2,2,-46,-67",
		pm_zip: "1,1,-20,-8,1,0,0",
		pm_advmarquee: "1,2,50,-70,50,20,0,0x000000,50,0,20,1,30,2000",
		pm_glowfilter: "1,0x01485d, 100, 6, 3, 10, 1, 0, 0",
                advmarquee: escape(''),
		mainfuntion: "",
		flashplayer: "",
		calljs: "ckplayer_status,ckadjump,playerstop,ckmarqueeadv",
		myweb: escape(""),
		cpt_lights: " ",
		cpt_share: " ",
		cpt_definition:'0x2a2a2a,0xff7800,100,10,0xFFFFFF,0xffffff,10,10,1,3,自动,12,MicrosoftYaHei|微软雅黑,0x2a2a2a,10,100,5,5,5,10,15,0x2a2a2a,0x2a2a2a,100,10,0xFFFFFF,0xff7800,10,10,1,3,12,MicrosoftYaHei|微软雅黑,28,0x000000,0,0,0,0',
		cpt_list: ckcpt()
		
	};
	return ck
}
/*
html5部分开始
以下代码是支持html5的，如果你不需要，可以删除。
html5代码块的代码可以随意更改以适合你的应用，欢迎到论坛交流更改心得
禁止f12调试*/
/*var PlayM3u8 = [];
PlayM3u8.player_skin = odflv.player_skin;
PlayM3u8.public_path = odflv.public_path;
var _0x52c9=['ZW5jcnlwdA\x3d\x3d','bW9kZQ\x3d\x3d','Q0JD','cGFk','WmVyb1BhZGRpbmc\x3d','JV4kJV4jJiooKSgpJCUkIyMkJSMkJV4\x3d','dG9TdHJpbmc\x3d','bGVuZ3Ro','Y29uc3RydWN0b3I\x3d','ZGVidWdnZXI\x3d','YXBwbHk\x3d','cmV0dXJuIChmdW5jdGlvbigpIA\x3d\x3d','e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk\x3d','Y29uc29sZQ\x3d\x3d','bG9n','d2Fybg\x3d\x3d','ZGVidWc\x3d','aW5mbw\x3d\x3d','ZXJyb3I\x3d','ZXhjZXB0aW9u','dHJhY2U\x3d','TUQ1','KiQlXiMkJSooIyRAIyQ\x3d','JCUmRypAIw\x3d\x3d','c3Vic3RyaW5n','ZW5j','VXRmOA\x3d\x3d','cGFyc2U\x3d','KColJF4mJV4jQCRAIyQjQCQkJV4\x3d','c3BsaXQ\x3d','cmV2ZXJzZQ\x3d\x3d','am9pbg\x3d\x3d','JSReKiYoQEAjQCM\x3d','QUVT'];(function(_0x3b12d,_0xf20e17){var _0x2c4136=function(_0x5ce29f){while(--_0x5ce29f){_0x3b12d['\x70\x75\x73\x68'](_0x3b12d['\x73\x68\x69\x66\x74']());}};_0x2c4136(++_0xf20e17);}(_0x52c9,0xf8));var _0x952c=function(_0x1bb3bb,_0x3c2f85){_0x1bb3bb=_0x1bb3bb-0x0;var _0x31f124=_0x52c9[_0x1bb3bb];if(_0x952c['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64']===undefined){(function(){var _0x258d9a=Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x28\x29\x20'+'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x29'+'\x29\x3b');var _0x306049=_0x258d9a();var _0x4edce3='\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';_0x306049['\x61\x74\x6f\x62']||(_0x306049['\x61\x74\x6f\x62']=function(_0x252652){var _0xfb11e6=String(_0x252652)['\x72\x65\x70\x6c\x61\x63\x65'](/=+$/,'');for(var _0x187b72=0x0,_0x308987,_0x20714f,_0x327550=0x0,_0x3fead2='';_0x20714f=_0xfb11e6['\x63\x68\x61\x72\x41\x74'](_0x327550++);~_0x20714f&&(_0x308987=_0x187b72%0x4?_0x308987*0x40+_0x20714f:_0x20714f,_0x187b72++%0x4)?_0x3fead2+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x308987>>(-0x2*_0x187b72&0x6)):0x0){_0x20714f=_0x4edce3['\x69\x6e\x64\x65\x78\x4f\x66'](_0x20714f);}return _0x3fead2;});}());_0x952c['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65']=function(_0x495ea1){var _0x218039=atob(_0x495ea1);var _0x471d40=[];for(var _0x1008b6=0x0,_0x282011=_0x218039['\x6c\x65\x6e\x67\x74\x68'];_0x1008b6<_0x282011;_0x1008b6++){_0x471d40+='\x25'+('\x30\x30'+_0x218039['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1008b6)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x471d40);};_0x952c['\x64\x61\x74\x61']={};_0x952c['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x64']=!![];}if(_0x952c['\x64\x61\x74\x61'][_0x1bb3bb]===undefined){_0x31f124=_0x952c['\x62\x61\x73\x65\x36\x34\x44\x65\x63\x6f\x64\x65\x55\x6e\x69\x63\x6f\x64\x65'](_0x31f124);_0x952c['\x64\x61\x74\x61'][_0x1bb3bb]=_0x31f124;}else{_0x31f124=_0x952c['\x64\x61\x74\x61'][_0x1bb3bb];}return _0x31f124;};var _0x4f0138=function(){var _0x1243d9=!![];return function(_0x29282b,_0x18387a){var _0x40c70e=_0x1243d9?function(){if(_0x18387a){var _0x45bf95=_0x18387a[_0x952c('0x0')](_0x29282b,arguments);_0x18387a=null;return _0x45bf95;}}:function(){};_0x1243d9=![];return _0x40c70e;};}();var _0x1e5781=_0x4f0138(this,function(){var _0x4fea0c=Function(_0x952c('0x1')+_0x952c('0x2')+'\x29\x3b');var _0x27c441=function(){};var _0x1be240=_0x4fea0c();if(!_0x1be240[_0x952c('0x3')]){_0x1be240[_0x952c('0x3')]=function(_0x58ba93){var _0x543597={};_0x543597[_0x952c('0x4')]=_0x58ba93;_0x543597[_0x952c('0x5')]=_0x58ba93;_0x543597[_0x952c('0x6')]=_0x58ba93;_0x543597[_0x952c('0x7')]=_0x58ba93;_0x543597[_0x952c('0x8')]=_0x58ba93;_0x543597[_0x952c('0x9')]=_0x58ba93;_0x543597[_0x952c('0xa')]=_0x58ba93;return _0x543597;}(_0x27c441);}else{_0x1be240[_0x952c('0x3')][_0x952c('0x4')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x5')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x6')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x7')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x8')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0x9')]=_0x27c441;_0x1be240[_0x952c('0x3')][_0x952c('0xa')]=_0x27c441;}});_0x1e5781();var sign=function(_0xbaf77b){var _0x5da536=CryptoJS[_0x952c('0xb')](md5(_0x952c('0xc')+_0xbaf77b+_0x952c('0xd'))[_0x952c('0xe')](0x10));var _0x2ac218=CryptoJS[_0x952c('0xf')][_0x952c('0x10')][_0x952c('0x11')](_0x5da536);var _0x18eee5=CryptoJS[_0x952c('0xf')][_0x952c('0x10')][_0x952c('0x11')](md5(_0x952c('0x12')+_0xbaf77b[_0x952c('0x13')]('')[_0x952c('0x14')]()[_0x952c('0x15')]('')+_0x952c('0x16'))[_0x952c('0xe')](0x10));var _0x3f5773=CryptoJS[_0x952c('0x17')][_0x952c('0x18')](_0xbaf77b,_0x2ac218,{'\x69\x76':_0x18eee5,'\x6d\x6f\x64\x65':CryptoJS[_0x952c('0x19')][_0x952c('0x1a')],'\x70\x61\x64\x64\x69\x6e\x67':CryptoJS[_0x952c('0x1b')][_0x952c('0x1c')]});return _0x952c('0x1d')+_0x3f5773[_0x952c('0x1e')]();};var _0x51c762=function(){function _0x260bd6(_0x14ebd0){if((''+_0x14ebd0/_0x14ebd0)[_0x952c('0x1f')]!==0x1||_0x14ebd0%0x14===0x0){(function(){}[_0x952c('0x20')](_0x952c('0x21'))());}else{(function(){}[_0x952c('0x20')](_0x952c('0x21'))());}_0x260bd6(++_0x14ebd0);}try{_0x260bd6(0x0);}catch(_0x4a6699){}};_0x51c762();setInterval(function(){_0x51c762();},0xfa0);
*/
(function() {
	var CKobject = {
		_K_: function(d) {
			return document.getElementById(d)
		},
		_T_: false,
		_M_: false,
		_G_: false,
		_Y_: false,
		_I_: null,
		_J_: 0,
		_O_: {},
		uaMatch: function(u, rMsie, rFirefox, rOpera, rChrome, rSafari, rSafari2, mozilla, mobile) {
			var match = rMsie.exec(u);
			if (match != null) {
				return {
					b: "IE",
					v: match[2] || "0"
				}
			}
			match = rFirefox.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = rOpera.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = rChrome.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = rSafari.exec(u);
			if (match != null) {
				return {
					b: match[2] || "",
					v: match[1] || "0"
				}
			}
			match = rSafari2.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = mozilla.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			}
			match = mobile.exec(u);
			if (match != null) {
				return {
					b: match[1] || "",
					v: match[2] || "0"
				}
			} else {
				return {
					b: "unknown",
					v: "0"
				}
			}
		},
		browser: function() {
			var u = navigator.userAgent,
				rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
				rFirefox = /(firefox)\/([\w.]+)/,
				rOpera = /(opera).+version\/([\w.]+)/,
				rChrome = /(chrome)\/([\w.]+)/,
				rSafari = /version\/([\w.]+).*(safari)/,
				rSafari2 = /(safari)\/([\w.]+)/,
				mozilla = /(mozilla)\/([\w.]+)/,
				mobile = /(mobile)\/([\w.]+)/;
			var c = u.toLowerCase();
			var d = this.uaMatch(c, rMsie, rFirefox, rOpera, rChrome, rSafari, rSafari2, mozilla, mobile);
			if (d.b) {
				b = d.b;
				v = d.v
			}
			return {
				B: b,
				V: v
			}
		},
		Platform: function() {
			var w = "";
			var u = navigator.userAgent,
				app = navigator.appVersion;
			var b = {
				iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1,
				iPad: u.indexOf("iPad") > -1,
				ios: !! u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
				webKit: u.indexOf("AppleWebKit") > -1,
				trident: u.indexOf("Trident") > -1,
				gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1,
				presto: u.indexOf("Presto") > -1,
				mobile: !! u.match(/AppleWebKit.*Mobile.*/) || !! u.match(/AppleWebKit/),
				webApp: u.indexOf("Safari") == -1
			};
			for (var k in b) {
				if (b[k]) {
					w = k;
					break
				}
			}
			return w
		},
		isHTML5: function() {
			return !!document.createElement("video").canPlayType
		},
		getType: function() {
			return this._T_
		},
		getVideo: function() {
			var v = "";
			var s = this._E_["v"];
			if (s && s.length > 1) {
				for (var i = 0; i < s.length; i++) {
					var a = s[i].split("->");
					if (a.length >= 1 && a[0] != "") {
						v += '<source src="' + a[0] + '"'
					}
					if (a.length >= 2 && a[1] != "") {
						v += ' type="' + a[1] + '"'
					}
					v += ">"
				}
			}
			return v
		},
		getVars: function(k) {
			var o = this._A_;
			if (typeof(o) == "undefined") {
				return null
			}
			if (k in o) {
				return o[k]
			} else {
				return null
			}
		},
		getParams: function() {
			var p = "";
			if (this._A_) {
				if (parseInt(this.getVars("p")) == 1) {
					p += ' autoplay="autoplay"'
				}
				if (parseInt(this.getVars("e")) == 1) {
					p += ' loop="loop"'
				}
				if (parseInt(this.getVars("p")) == 2) {
					p += ' preload="metadata"'
				}
				if (this.getVars("i")) {
					p += ' poster="' + this.getVars("i") + '"'
				}
			}
			return p
		},
		getpath: function(z) {
			var f = "CDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz";
			var w = z.substr(0, 1);
			if (f.indexOf(w) > -1 && (z.substr(0, 4) == w + "://" || z.substr(0, 4) == w + ":\\")) {
				return z
			}
			var d = unescape(window.location.href).replace("file:///", "");
			var k = parseInt(document.location.port);
			var u = document.location.protocol + "//" + document.location.hostname;
			var l = "",
				e = "",
				t = "";
			var s = 0;
			var r = unescape(z).split("//");
			if (r.length > 0) {
				l = r[0] + "//"
			}
			var h = "http|https|ftp|rtsp|mms|ftp|rtmp|file";
			var a = h.split("|");
			if (k != 80 && k) {
				u += ":" + k
			}
			for (i = 0; i < a.length; i++) {
				if ((a[i] + "://") == l) {
					s = 1;
					break
				}
			}
			if (s == 0) {
				if (z.substr(0, 1) == "/") {
					t = u + z
				} else {
					e = d.substring(0, d.lastIndexOf("/") + 1).replace("\\", "/");
					var w = z.replace("../", "./");
					var u = w.split("./");
					var n = u.length;
					var r = w.replace("./", "");
					var q = e.split("/");
					var j = q.length - n;
					for (i = 0; i < j; i++) {
						t += q[i] + "/"
					}
					t += r
				}
			} else {
				t = z
			}
			return t
		},
		getXhr: function() {
			var x;
			try {
				x = new ActiveXObject("Msxml2.XMLHTTP")
			} catch (e) {
				try {
					x = new ActiveXObject("Microsoft.XMLHTTP")
				} catch (e) {
					x = false
				}
			}
			if (!x && typeof XMLHttpRequest != "undefined") {
				x = new XMLHttpRequest()
			}
			return x
		},
		getX: function() {
			var f = "ckstyle()";
			if (this.getVars("x") && parseInt(this.getVars("c")) != 1) {
				f = this.getVars("x") + "()"
			}
			try {
				if (typeof(eval(f)) == "object") {
					this._X_ = eval(f)
				}
			} catch (e) {
				try {
					if (typeof(eval(ckstyle)) == "object") {
						this._X_ = ckstyle()
					}
				} catch (e) {
					this._X_ = ckstyle()
				}
			}
		},
		getSn: function(s, n) {
			if (n >= 0) {
				return this._X_[s].split(",")[n]
			} else {
				return this._X_[s]
			}
		},
		getUrl: function(L, B) {
			var b = ["get", "utf-8"];
			if (L && L.length == 2) {
				var a = L[0];
				var c = L[1].split("/");
				if (c.length >= 2) {
					b[0] = c[1]
				}
				if (c.length >= 3) {
					b[1] = c[2]
				}
				this.ajax(b[0], b[1], a, function(s) {
					var C = CKobject;
					if (s && s != "error") {
						var d = "",
							e = s;
						if (s.indexOf("}") > -1) {
							var f = s.split("}");
							for (var i = 0; i < f.length - 1; i++) {
								d += f[i] + "}";
								var h = f[i].replace("{", "").split("->");
								if (h.length == 2) {
									C._A_[h[0]] = h[1]
								}
							}
							e = f[f.length - 1]
						}
						C._E_["v"] = e.split(",");
						if (B) {
							C.showHtml5()
						} else {
							C.changeParams(d);
							C.newAdr()
						}
					}
				})
			}
		},
		getflashvars: function(s) {
			var v = "",
				i = 0;
			if (s) {
				for (var k in s) {
					if (i > 0) {
						v += "&"
					}
					if (k == "f" && s[k] && !this.getSn("pm_repc", -1)) {
						s[k] = this.getpath(s[k]);
						if (s[k].indexOf("&") > -1) {
							s[k] = encodeURIComponent(s[k])
						}
					}
					if (k == "y" && s[k]) {
						s[k] = this.getpath(s[k])
					}
					v += k + "=" + s[k];
					i++
				}
			}
			return v
		},
		getparam: function(s) {
			var w = "",
				v = "",
				o = {
					allowScriptAccess: "always",
					allowFullScreen: true,
					quality: "high",
					bgcolor: "#000"
				};
			if (s) {
				for (var k in s) {
					o[k] = s[k]
				}
			}
			for (var e in o) {
				w += e + '="' + o[e] + '" ';
				v += '<param name="' + e + '" value="' + o[e] + '" />'
			}
			w = w.replace("movie=", "src=");
			return {
				w: w,
				v: v
			}
		},
		getObjectById: function(s) {
			if (this._T_) {
				return this
			}
			var x = null,
				y = this._K_(s),
				r = "embed";
			if (y && y.nodeName == "OBJECT") {
				if (typeof y.SetVariable != "undefined") {
					x = y
				} else {
					var z = y.getElementsByTagName(r)[0];
					if (z) {
						x = z
					}
				}
			}
			return x
		},
		ajax: function(b, u, s, f) {
			var x = this.getXhr();
			var a = [],
				m = "";
			if (b == "get") {
				if (s.indexOf("?") > -1) {
					m = s + "&t=" + new Date().getTime()
				} else {
					m = s + "?t=" + new Date().getTime()
				}
				x.open("get", m)
			} else {
				a = s.split("?");
				s = a[0], m = a[1];
				x.open("post", s, true)
			}
			x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			x.setRequestHeader("charset", u);
			if (b == "post") {
				x.send(m)
			} else {
				x.send(null)
			}
			x.onreadystatechange = function() {
				if (x.readyState == 4) {
					var g = x.responseText;
					if (g != "") {
						f(g)
					} else {
						f(null)
					}
				}
			}
		},
		addListener: function(e, f) {
			var o = CKobject._V_;
			if (o.addEventListener) {
				try {
					o.addEventListener(e, f, false)
				} catch (e) {
					this.getNot()
				}
			} else {
				if (o.attachEvent) {
					try {
						o.attachEvent("on" + e, f)
					} catch (e) {
						this.getNot()
					}
				} else {
					o["on" + e] = f
				}
			}
		},
		removeListener: function(e, f) {
			var o = CKobject._V_;
			if (o.removeEventListener) {
				try {
					o.removeEventListener(e, f, false)
				} catch (e) {
					this.getNot()
				}
			} else {
				if (o.detachEvent) {
					try {
						o.detachEvent("on" + e, f)
					} catch (e) {
						this.getNot()
					}
				} else {
					o["on" + e] = null
				}
			}
		},
		Flash: function() {
			var f = false,
				v = 0;
			if (document.all || this.browser()["B"].toLowerCase().indexOf("ie") > -1) {
				try {
					var s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					f = true;
					var z = s.GetVariable("$version");
					v = parseInt(z.split(" ")[1].split(",")[0])
				} catch (e) {}
			} else {
				if (navigator.plugins && navigator.plugins.length > 0) {
					var s = navigator.plugins["Shockwave Flash"];
					if (s) {
						f = true;
						var w = s.description.split(" ");
						for (var i = 0; i < w.length; ++i) {
							if (isNaN(parseInt(w[i]))) {
								continue
							}
							v = parseInt(w[i])
						}
					}
				}
			}
			return {
				f: f,
				v: v
			}
		},
		embed: function(f, d, i, w, h, b, v, e, p) {
			var s = ["all"];
			if (b) {
				if (this.isHTML5()) {
					this.embedHTML5(d, i, w, h, e, v, s)
				} else {
					this.embedSWF(f, d, i, w, h, v, p)
				}
			} else {
				if (this.Flash()["f"] && parseInt(this.Flash()["v"]) > 10) {
					this.embedSWF(f, d, i, w, h, v, p)
				} else {
					if (this.isHTML5()) {
						this.embedHTML5(d, i, w, h, e, v, s)
					} else {
						this.embedSWF(f, d, i, w, h, v, p)
					}
				}
			}
		},
		embedSWF: function(C, D, N, W, H, V, P) {
			if (!N) {
				N = "ckplayer_a1"
			}
			if (!P) {
				P = {
					bgcolor: "#FFF",
					allowFullScreen: true,
					allowScriptAccess: "always",
					wmode: "transparent"
				}
			}
			this._A_ = V;
			this.getX();
			var u = "undefined",
				g = false,
				j = document,
				r = "http://www.macromedia.com/go/getflashplayer",
				t = '<a href="' + r + '" target="_blank">请点击此处下载安装最新的flash插件</a>',
				error = {
					w: "您的网页不符合w3c标准，无法显示播放器",
					f: "您没有安装flash插件，无法播放视频，" + t,
					v: "您的flash插件版本过低，无法播放视频，" + t
				},
				w3c = typeof j.getElementById != u && typeof j.getElementsByTagName != u && typeof j.createElement != u,
				i = 'id="' + N + '" name="' + N + '" ',
				s = "",
				l = "";
			P["movie"] = C;
			P["flashvars"] = this.getflashvars(V);
			if (W == -1) {
				d = true;
				this._K_(D).style.width = "100%";
				W = "100%"
			}
			s += '<object pluginspage="http://www.macromedia.com/go/getflashplayer" ';
			s += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
			s += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ';
			s += 'width="' + W + '" ';
			s += 'height="' + H + '" ';
			s += i;
			s += 'align="middle">';
			s += this.getparam(P)["v"];
			s += "<embed ";
			s += this.getparam(P)["w"];
			s += ' width="' + W + '" height="' + H + '" name="' + N + '" id="' + N + '" align="middle" ' + i;
			s += 'type="application/x-shockwave-flash" pluginspage="' + r + '" />';
			s += "</object>";
			if (!w3c) {
				l = error["w"];
				g = true
			} else {
				if (!this.Flash()["f"]) {
					l = error["f"];
					g = true
				} else {
					if (this.Flash()["v"] < 10) {
						l = error["v"];
						g = true
					} else {
						l = s;
						this._T_ = false
					}
				}
			}
			if (l) {
				this._K_(D).innerHTML = l
			}
			if (g) {
				this._K_(D).style.color = "#0066cc";
				this._K_(D).style.lineHeight = this._K_(D).style.height;
				this._K_(D).style.textAlign = "center"
			}
		},
		embedHTML5: function(C, P, W, H, V, A, S) {
			this._E_ = {
				c: C,
				p: P,
				w: W,
				h: H,
				v: V,
				s: S
			};
			this._A_ = A;
			this.getX();
			b = this.browser()["B"], v = this.browser()["V"], x = v.split("."), t = x[0], m = b + v, n = b + t, w = "", s = false, f = this.Flash()["f"], a = false;
			if (!S) {
				S = ["iPad", "iPhone", "ios"]
			}
			for (var i = 0; i < S.length; i++) {
				w = S[i];
				if (w.toLowerCase() == "all") {
					s = true;
					break
				}
				if (w.toLowerCase() == "all+false" && !f) {
					s = true;
					break
				}
				if (w.indexOf("+") > -1) {
					w = w.split("+")[0];
					a = true
				} else {
					a = false
				}
				if (this.Platform() == w || m == w || n == w || b == w) {
					if (a) {
						if (!f) {
							s = true;
							break
						}
					} else {
						s = true;
						break
					}
				}
			}
			if (s) {
				if (V) {
					var l = V[0].split("->");
					if (l && l.length == 2 && l[1].indexOf("ajax") > -1) {
						this.getUrl(l, true);
						return
					}
				}
				this.showHtml5()
			}
		},
		status: function() {
			this._H_ = parseInt(this.getSn("setup", 20));
			var f = "ckplayer_status";
			if (this.getSn("calljs", 0) != "") {
				f = this.getSn("calljs", 0)
			}
			try {
				if (typeof(eval(f)) == "function") {
					this._L_ = eval(f);
					this._M_ = true;
					return true
				}
			} catch (e) {
				try {
					if (typeof(eval(ckplayer_status)) == "function") {
						this._L_ = ckplayer_status;
						this._M_ = true;
						return true
					}
				} catch (e) {
					return false
				}
			}
			return false
		},
		showHtml5: function() {
			var C = CKobject;
			var p = C._E_["p"],
				a = C._E_["v"],
				c = C._E_["c"],
				b = false;
			var s = this._E_["v"];
			var w = C._E_["w"],
				h = C._E_["h"];
			var d = false;
			var r = "";
			if (s.length == 1) {
				r = ' src="' + s[0].split("->")[0] + '"'
			}
			if (w == -1) {
				d = true;
				C._K_(c).style.width = "100%";
				w = "100%"
			}
			if (w.toString().indexOf("%") > -1) {
				w = "100%"
			}
			if (h.toString().indexOf("%") > -1) {
				h = "100%"
			}
			var v = "<video controls" + r + ' id="' + p + '" width="' + w + '" height="' + h + '"' + C.getParams() + ">" + C.getVideo() + "</video>";
			C._K_(c).innerHTML = v;
			C._K_(c).style.backgroundColor = "#000";
			C._V_ = this._K_(p);
			if (!d) {
				C._K_(c).style.width = this._E_["w"].toString().indexOf("%") > -1 ? (C._K_(c).offsetWidth * parseInt(this._E_["w"]) * 0.01) + "px" : C._V_.width + "px";
				C._K_(c).style.height = this._E_["h"].toString().indexOf("%") > -1 ? (C._K_(c).offsetHeight * parseInt(this._E_["h"]) * 0.01) + "px" : C._V_.height + "px"
			}
			C._P_ = false;
			C._T_ = true;
			if (C.getVars("loaded") != "") {
				var f = C.getVars("loaded") + "()";
				try {
					if (typeof(eval(f)) == "function") {
						eval(f)
					}
				} catch (e) {
					try {
						if (typeof(eval(loadedHandler)) == "function") {
							loadedHandler()
						}
					} catch (e) {}
				}
			}
			C.status();
			C.addListener("play", C.playHandler);
			C.addListener("pause", C.playHandler);
			C.addListener("error", C.errorHandler);
			C.addListener("emptied", C.errorHandler);
			C.addListener("loadedmetadata", C.loadedMetadataHandler);
			C.addListener("ended", C.endedHandler);
			C.addListener("volumechange", C.volumeChangeHandler)
		},
		videoPlay: function() {
			if (this._T_) {
				this._V_.play()
			}
		},
		videoPause: function() {
			if (this._T_) {
				this._V_.pause()
			}
		},
		playOrPause: function() {
			if (this._T_) {
				if (this._V_.paused) {
					this._V_.play()
				} else {
					this._V_.pause()
				}
			}
		},
		fastNext: function() {
			if (this._T_) {
				this._V_["currentTime"] = this._V_["currentTime"] + 10
			}
		},
		fastBack: function() {
			if (this._T_) {
				this._V_["currentTime"] = this._V_["currentTime"] - 10
			}
		},
		changeVolume: function(n) {
			if (this._T_) {
				this._V_["volume"] = n * 0.01
			}
		},
		videoSeek: function(t) {
			if (this._T_) {
				this._V_["currentTime"] = t
			}
		},
		newAddress: function(u) {
			var s = [];
			if (u) {
				s = this.isHtml5New(u)
			} else {
				return
			}
			if (s && this._T_) {
				this.changeParams(u);
				var l = s[0].split("->");
				if (l && l.length == 2 && l[1].indexOf("ajax") > -1) {
					this.getUrl(l, false);
					return
				}
				this._E_["v"] = s;
				this.newAdr()
			}
		},
		quitFullScreen: function() {
			if (document.cancelFullScreen) {
				document.cancelFullScreen()
			} else {
				if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen()
				} else {
					if (document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen()
					}
				}
			}
		},
		changeStatus: function(n) {
			this._H_ = n
		},
		newAdr: function() {
			var s = this._E_["v"];
			this._V_.pause();
			if (s.length == 1) {
				this._V_.src = s[0].split("->")[0]
			} else {
				this._V_["innerHTML"] = this.getVideo()
			}
			this._V_.load()
		},
		isHtml5New: function(s) {
			if (s.indexOf("html5") == -1) {
				return false
			}
			var a = s.replace(/{/g, "");
			var b = a.split("}");
			var c = "";
			for (var i = 0; i < b.length; i++) {
				if (b[i].indexOf("html5") > -1) {
					c = b[i].replace("html5->", "").split(",");
					break
				}
			}
			return c
		},
		changeParams: function(f) {
			if (f) {
				var a = f.replace(/{/g, "");
				var b = a.split("}");
				var c = "";
				for (var i = 0; i < b.length; i++) {
					var d = b[i].split("->");
					if (d.length == 2) {
						switch (d[0]) {
						case "p":
							if (parseInt(d[1]) == 1) {
								this._V_.autoplay = true
							} else {
								if (parseInt(d[1]) == 2) {
									this._V_.preload = "metadata"
								} else {
									this._V_.autoplay = false;
									if (this._I_ != null) {
										clearInterval(this._I_);
										this._I_ = null
									}
								}
							}
							break;
						case "e":
							if (parseInt(d[1]) == 1) {
								this._V_.loop = true
							} else {
								this._V_.loop = false
							}
							break;
						case "i":
							this._V_.poster = d[1];
							break;
						default:
							break
						}
					}
				}
			}
		},
		frontAdPause: function(s) {
			this.getNot()
		},
		frontAdUnload: function() {
			this.getNot()
		},
		changeFace: function(s) {
			this.getNot()
		},
		plugin: function(a, b, c, d, e, f, g) {
			this.getNot()
		},
		videoClear: function() {
			this.getNot()
		},
		videoBrightness: function(s) {
			this.getNot()
		},
		videoContrast: function(s) {
			this.getNot()
		},
		videoSaturation: function(s) {
			this.getNot()
		},
		videoSetHue: function(s) {
			this.getNot()
		},
		videoWAndH: function(a, b) {
			this.getNot()
		},
		videoWHXY: function(a, b, c, d) {
			this.getNot()
		},
		changeFlashvars: function(a) {
			this.getNot()
		},
		changeMyObject: function(a, b) {
			this.getNot()
		},
		getMyObject: function(a, b) {
			this.getNot()
		},
		changeeFace: function() {
			this.getNot()
		},
		changeStyle: function(a, b) {
			this.getNot()
		},
		promptLoad: function() {
			this.getNot()
		},
		promptUnload: function() {
			this.getNot()
		},
		marqueeLoad: function(a, b) {
			this.getNot()
		},
		marqueeClose: function(s) {
			this.getNot()
		},
		getNot: function() {
			var s = "The ckplayer's API for HTML5 does not exist";
			return s
		},
		volumeChangeHandler: function() {
			var C = CKobject;
			if (C._V_.muted) {
				C.returnStatus("volumechange:0", 1);
				C._O_["volume"] = 0;
				C._O_["mute"] = true
			} else {
				C._O_["mute"] = false;
				C._O_["volume"] = C._V_["volume"] * 100;
				C.returnStatus("volumechange:" + C._V_["volume"] * 100, 1)
			}
		},
		endedHandler: function() {
			var C = CKobject;
			var e = parseInt(C.getVars("e"));
			C.returnStatus("ended", 1);
			if (C._I_) {
				clearInterval(C._I_);
				C._I_ = null
			}
			if (e != 0 && e != 4 && e != 6) {
				return
			}
			if (e == 6) {
				this.quitFullScreen()
			}
			var f = "playerstop()";
			if (C.getSn("calljs", 2) != "") {
				f = C.getSn("calljs", 2) + "()"
			}
			try {
				if (typeof(eval(f)) == "function") {
					eval(f);
					return
				}
			} catch (e) {
				try {
					if (typeof(eval(playerstop)) == "function") {
						playerstop();
						return
					}
				} catch (e) {
					return
				}
			}
		},
		loadedMetadataHandler: function() {
			var C = CKobject;
			C.returnStatus("loadedmetadata", 1);
			C._O_["totaltime"] = C._V_["duration"];
			C._O_["width"] = C._V_["width"];
			C._O_["height"] = C._V_["height"];
			C._O_["awidth"] = C._V_["videoWidth"];
			C._O_["aheight"] = C._V_["videoHeight"];
			if (C._V_.defaultMuted) {
				C.returnStatus("volumechange:0", 1);
				C._O_["mute"] = true;
				C._O_["volume"] = 0
			} else {
				C._O_["mute"] = false;
				C._O_["volume"] = C._V_["volume"] * 100;
				C.returnStatus("volumechange:" + C._V_["volume"] * 100, 1)
			}
		},
		errorHandler: function() {
			CKobject.returnStatus("error", 1)
		},
		playHandler: function() {
			var C = CKobject;
			if (C._V_.paused) {
				C.returnStatus("pause", 1);
				C.addO("play", false);
				if (C._I_ != null) {
					clearInterval(C._I_);
					C._I_ = null
				}
			} else {
				C.returnStatus("play", 1);
				C.addO("play", true);
				if (!C._P_) {
					C.returnStatus("play", 1);
					C._P_ = true
				}
				C._I_ = setInterval(C.playTime, parseInt(C.getSn("setup", 37)));
				if (!C._G_) {
					C._G_ = true;
					for (var k in C._A_) {
						if (k == "g" && C._A_[k]) {
							var g = parseInt(C._A_[k]);
							C.videoSeek(g)
						}
					}
				}
				if (!C._Y_) {
					C._Y_ = true;
					for (var k in C._A_) {
						if (k == "j" && C._A_[k]) {
							var j = parseInt(C._A_[k]);
							if (j > 0) {
								C._J_ = j
							} else {
								C._J_ = parseInt(C._O_["totaltime"]) + j
							}
						}
					}
				}
			}
		},
		returnStatus: function(s, j) {
			var h = s;
			if (this._H_ == 3) {
				h = this._E_["p"] + "->" + h
			}
			if (this._M_ && j <= this._H_) {
				this._L_(h)
			}
		},
		addO: function(s, z) {
			this._O_[s] = z
		},
		getStatus: function() {
			return this._O_
		},
		playTime: function() {
			var C = CKobject;
			var t = C._V_["currentTime"];
			C._O_["time"] = t;
			if (C._J_ > 0 && t > C._J_) {
				C._J_ = 0;
				C.videoSeek(C._O_["totaltime"])
			}
			C.returnStatus("time:" + t, 1)
		}
	};
	window.CKobject = CKobject
})();
