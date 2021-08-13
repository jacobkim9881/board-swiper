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
    }
	}
	
