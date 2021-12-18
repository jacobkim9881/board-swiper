let siteList = 
	
	{

	  "cafe.naver.com":   {
	    "host" : 'cafe.naver.com',
	    "custom-function" : 1,
	    "wraper-class": "tit_area",
		    "wraper-tag": "div",
		    "a-class": "tit",
	    "isListDifferent" : true,
	    "list-click-event": {
		    "a-class" : "article",
	    "wraper-class": "inner_list",
	    "wraper-tag": "div",
	    }
	  },
	  "hygall.com":  {
	    "host" : 'hygall.com',
	    "custom-function" : function() {
		    return giveEvent()},
	    "wraper-class": "",
		    "wraper-tag": "",
		    "a-class": "",
	    "isListDifferent" : false,
	    "list-click-event": {
		    "a-class" : "",
	    "wraper-class": "",
	    "wraper-tag": "",
	    }
	  },
	  "www.inven.co.kr":  {
	    "host" : 'www.inven.co.kr',
	    "custom-function" : function() {
		    return giveEvent()},
	    "wraper-class": "",
		    "wraper-tag": "",
		    "a-class": "",
	    "isListDifferent" : false,
	    "list-click-event": {
		    "a-class" : "",
	    "wraper-class": "",
	    "wraper-tag": "",
	    }
	  },
	  "www.82cook.com":  {
	    "host" : 'www.82cook.com',
	    "custom-function" : function() {
		    return giveEvent()},
	    "wraper-class": "",
		    "wraper-tag": "",
		    "a-class": "",
	    "isListDifferent" : false,
	    "list-click-event": {
		    "a-class" : "",
	    "wraper-class": "",
	    "wraper-tag": "",
	    }
	  },
	  "www.bobaedream.co.kr":  {
	    "host" : 'www.bobaedream.co.kr',
	    "custom-function" : function(aClass, wraperTag, wraperClass) {
		    return giveEvent3(aClass, wraperTag, wraperClass)},
	    "wraper-class": "author",
		    "wraper-tag": "td",
		    "a-class": "",
	    "isListDifferent" : true,
	    "list-click-event": {
		    "a-class" : "bsubject",
	    "wraper-class": "pl14",
	    "wraper-tag": "td",
	    }
	  },
	  /*
	  "www.clien.net": {
	    "host" : 'www.clien.net',
	    "custom-function" : function(aClass, wraperTag, wraperClass, subClass) {
		    return giveEvent2(aClass, wraperTag, wraperClass, subClass)},
	    "wraper-class": "list_title",
		    "wraper-tag": "div",
		    "a-class": "list_subject",
		    "sub-class": "subject_fixed",
	    "isListDifferent" : true,
	    "list-click-event": {
	      "wraper-class": "list_title",
		    "wraper-tag": "div",
		    "a-class": "list_subject",
	    }
	  },
	  */
	  "www.ddanzi.com": {
	    "host" : "www.ddanzi.com",
	    "custom-function" : function(aClass, wraperTag, wraperClass, subClass) {
		    return giveEvent4(aClass, wraperTag, wraperClass, subClass)},
	    "wraper-class": "title",
		    "wraper-tag": "td",
		    "a-class": "",
		    "sub-class": "",
	    "isListDifferent" : false,
	    "list-click-event": {
	      "wraper-class": "title",
		    "wraper-tag": "td",
		    "a-class": "",
	    }
	  },
	  "bbs.ruliweb.com": {
	    "host" : "bbs.ruliweb.com",
	    "custom-function" : function(aClass, wraperTag, wraperClass, subClass) {
		    return giveEvent5(aClass, wraperTag, wraperClass, subClass)},
	    "wraper-class": "relative",
		    "wraper-tag": "div",
		    "a-class": "deco",
		    "sub-class": "",
	    "isListDifferent" : false,
	    "list-click-event": {
	      "wraper-class": "relative",
		    "wraper-tag": "div",
		    "a-class": "deco",	   
	    }
	  },
	  "cafe.daum.net": {
	    "host" : "cafe.daum.net",
	    "custom-function" : function(aClass, wraperTag, wraperClass, subClass) {
		    return giveEvent6(aClass, wraperTag, wraperClass, subClass)},
	    "wraper-class": "title_wrapper",
		    "wraper-tag": "span",
		    "a-class": "txt_item",
		    "sub-class": "",
	    "isListDifferent" : false,
	    "list-click-event": {
	      "wraper-class": "title_wrapper",
		    "wraper-tag": "span",
		    "a-class": "txt_item",	   
	    }
	  }

	}
	
