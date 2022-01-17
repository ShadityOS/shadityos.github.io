
//Donate Button Generator - PayPal

(function($){
    window.WebFontConfig = {
    google: { families: [ 'Open+Sans:600,700,400:latin' ] }
    };
    if(donateType == 'left'){
    document.write('<style type="text/css" media="screen">\
    .slide-out-div {\
        width: 250px;\
        background: #f2f2f2;\
        border: none;\
        z-index: 1000;\
    }\
    </style><div class="slide-out-div" id="donate2016BlockContent">\
    <div class="handle">\
    <div class="donate2016" style="background-color: '+btnColor+'; color: '+textColor+'; text-transform: uppercase; white-space: pre-line; box-sizing: content-box; border-top-right-radius: 4px; font-size: 20px; height: 223px; line-height: 30px; overflow: hidden; padding: 29px 20px 0px; text-align: center;">'+btnText+'</div>\
    <div class="donatePlus" style="margin-top: -6px; width: 17px; background-color: '+plusColor+'; border-bottom-right-radius: 4px; font-size: 32px; position: absolute; padding: 0px 19px; line-height: 59px; height: 60px; color: rgb(255, 255, 255); box-sizing: content-box;">+</div>\
    </div>\
    <div id="donateContentBlock" style="text-align: center;">\
            <br><br>\
            <div class="donateAmount">Donation amount</div>\
            <div><div class="donatePrice"><span>5</span> USD</div><div class="donatePrice"><span>15</span> USD</div></div>\
            <div><div class="donatePrice"><span>25</span> USD</div><div class="donatePrice"><span>50</span> USD</div></div>\
            <div><input type="text" id="customDonatePrice" value="100.00" maxlength="9" /><span class="donateUSD">USD</span></div>\
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">\
            <input type="hidden" name="cmd" value="_donations">\
            <input id="donateBusinessEmail" type="hidden" name="business" value="'+yourPaypal+'">\
            <input id="donateBusinessAmount" type="hidden" name="amount" value="100"><input type="hidden" name="lc" value="US">\
            <input type="hidden" name="no_note" value="0">\
            <input type="hidden" name="currency_code" value="USD">\
            <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest">\
            <input type="image" src="https://theseotools.net/uploads/paypalbtn.png" border="0" name="submit" alt="PayPal" /></form>\
</div>');
}else{
    document.write('<style type="text/css" media="screen">\
    .slide-out-div {\
        width: 250px;\
        background: #f2f2f2;\
        border: none;\
        z-index: 1000;\
    }\
    </style><div class="slide-out-div" id="donate2016BlockContent">\
    <div class="handle">\
    <div class="donate2016" style="background-color: '+btnColor+'; color: '+textColor+'; text-transform: uppercase; white-space: pre-line; box-sizing: content-box; border-top-left-radius: 4px; font-size: 20px; height: 223px; line-height: 30px; overflow: hidden; padding: 29px 20px 0px; text-align: center;">'+btnText+'</div>\
    <div class="donatePlus" style="margin-top: -6px; width: 17px; background-color: '+plusColor+'; border-bottom-left-radius: 4px; font-size: 32px; position: absolute; padding: 0px 19px; line-height: 59px; height: 60px; color: rgb(255, 255, 255); box-sizing: content-box;">+</div>\
    </div>\
    <div id="donateContentBlock" style="text-align: center;">\
            <br><br>\
            <div class="donateAmount">Donation amount</div>\
            <div><div class="donatePrice"><span>5</span> USD</div><div class="donatePrice"><span>15</span> USD</div></div>\
            <div><div class="donatePrice"><span>25</span> USD</div><div class="donatePrice"><span>50</span> USD</div></div>\
            <div><input type="text" id="customDonatePrice" value="100.00" maxlength="9" /><span class="donateUSD">USD</span></div>\
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">\
            <input type="hidden" name="cmd" value="_donations">\
            <input id="donateBusinessEmail" type="hidden" name="business" value="'+yourPaypal+'">\
            <input id="donateBusinessAmount" type="hidden" name="amount" value="100"><input type="hidden" name="lc" value="US">\
            <input type="hidden" name="no_note" value="0">\
            <input type="hidden" name="currency_code" value="USD">\
            <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest">\
            <input type="image" src="https://theseotools.net/uploads/paypalbtn.png" border="0" name="submit" alt="PayPal" /></form>\
</div><center><h6 style="font-size: 9px;margin-top: 20px;">Powered by <a target="_blank" href="https://theseotools.net" title="The SEO Tools">The SEO Tools</a></h6></center></div>');
}
    var contdiv = document.getElementById('donate2016BlockContent');
    var css = function(elem, style) {
    	for (var prop in style) {
    		elem.style[prop] = style[prop];
    	}
    }
    var cssClass = function(elem, style) {
    	var nn = elem.length;
        for(var j=0;j<nn;j++){
            for (var prop in style) {
        		elem[j].style[prop] = style[prop];
        	}        
        }
    }
    css(contdiv.getElementsByClassName('donateAmount')[0],{
    marginBottom: '18px',
    fontSize: '19px',
    fontWeight: 'normal',
    color: '#333',
    boxSizing: 'content-box'
    });
    cssClass(contdiv.getElementsByClassName('donatePrice'),{
        width: '72px',
        height: '32px',
        lineHeight: '33px',
        textAlign: 'center',
        marginRight: '14px',
        marginTop: '10px',
        backgroundColor: '#dae1e3',
        color: '#000',
        display: 'inline-block',
        cursor: 'pointer',
        boxSizing: 'content-box'
    });
    cssClass(contdiv.getElementsByClassName('donateActive'),{
        backgroundColor: '#3cb9d8'
    });
    css(document.getElementById('customDonatePrice'),{
        marginRight: '12px',
        outline: 'none',
        border: '1px solid #ddd', 
        width: '70px',
        height: '30px',
        lineHeight: '30px',
        padding: '0 20px 0 14px',
        marginTop: '12px',
        marginBottom: '25px',
        fontWeight: 'Bold',
        MozfontFamily: 'Sans-serif',
        fontSize: '14.5px',
        boxSizing: 'content-box'
    });
    function hasClass(this_, a){
        if(1===this_.nodeType&&(" "+this_.className+" ").indexOf(" "+a+" ")!==-1)return!0;return!1;  
    }  
    function btnClickDn(){
        var donatePrice = contdiv.getElementsByClassName('donatePrice');
        var donateBusinessAmount = document.getElementById('donateBusinessAmount');
        var customDonatePrice = document.getElementById('customDonatePrice');
        var price = 100;
        for(var i=0;i<4;i++){
            donatePrice[i].onclick = function(){
                if(!hasClass(this,'donateActive')){
                    for(var j=0;j<4;j++){
                        donatePrice[j].className = 'donatePrice';
                        donatePrice[j].style.backgroundColor = '#dae1e3';
                    }
                    this.className = 'donatePrice donateActive';
                    this.style.backgroundColor = '#3cb9d8';
                    price = this.children[0].textContent;
                    donateBusinessAmount.setAttribute('value',price);
                    customDonatePrice.value = price+'.00';
                }
            }
        }
        
        customDonatePrice.onclick = function(){ //setAttribute("type", "number")
            for(var j=0;j<4;j++){
                donatePrice[j].className = 'donatePrice';
                donatePrice[j].style.backgroundColor = '#dae1e3';
            }
            donateBusinessAmount.setAttribute('value',customDonatePrice.value);
        }
        customDonatePrice.onkeyup = function(){
            customDonatePrice.value = customDonatePrice.value.replace(/[^\d.]/g, '');
            donateBusinessAmount.setAttribute('value',customDonatePrice.value);
        }
    }
    function fonts(){
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
    }
    $.fn.tabSlideOut = function(callerSettings) {
        var settings = $.extend({
            tabHandle: '.handle',
            speed: 300, 
            action: 'click',
            tabLocation: 'right',
            topPos: '200px',
            leftPos: '20px',
            fixedPosition: false,
            positioning: 'absolute',
            pathToTabImage: null,
            imageHeight: null,
            imageWidth: null,
            onLoadSlideOut: false                       
        }, callerSettings||{});

        settings.tabHandle = $(settings.tabHandle);
        var obj = this;
        if (settings.fixedPosition === true) {
            settings.positioning = 'fixed';
        } else {
            settings.positioning = 'absolute';
        }
        
        //ie6 doesn't do well with the fixed option
        if (document.all && !window.opera && !window.XMLHttpRequest) {
            settings.positioning = 'absolute';
        }
        
        fonts();
        btnClickDn();
        //set initial tabHandle css
        
        if (settings.pathToTabImage != null) {
            settings.tabHandle.css({
            'width' : settings.imageWidth,
            'height': settings.imageHeight
            });
        }
        
        settings.tabHandle.css({ 
            'width' : settings.imageWidth,
            'height': settings.imageHeight,
            'margin-top' : '-1px',
            'margin-left' : '-1px',
            'box-sizing' : 'content-box',
            'cursor' : 'pointer',
            'font-family' : '"Open Sans",sans-serif',
            'position' : 'absolute'
        });
        
        obj.css({
            'line-height' : '1',
            'position' : settings.positioning
        });

        
        var properties = {
                    containerWidth: parseInt(obj.outerWidth(), 10) + 'px',
                    containerHeight: parseInt(obj.outerHeight(), 10) + 'px',
                    tabWidth: parseInt(settings.tabHandle.outerWidth(), 10) + 'px',
                    tabHeight: parseInt(settings.tabHandle.outerHeight(), 10) + 'px'
                };

        //set calculated css
        if(settings.tabLocation === 'top' || settings.tabLocation === 'bottom') {
            obj.css({'left' : settings.leftPos});
            settings.tabHandle.css({'right' : 0});
        }
        
        if(settings.tabLocation === 'top') {
            obj.css({'top' : '-' + properties.containerHeight});
            settings.tabHandle.css({'bottom' : '-' + properties.tabHeight});
        }

        if(settings.tabLocation === 'bottom') {
            obj.css({'bottom' : '-' + properties.containerHeight, 'position' : 'fixed'});
            settings.tabHandle.css({'top' : '-' + properties.tabHeight});
            
        }
        
        if(settings.tabLocation === 'left' || settings.tabLocation === 'right') {
            obj.css({
                'height' : '305px',
                'top' : settings.topPos
            });
            
            settings.tabHandle.css({'top' : 0});
        }
        
        if(settings.tabLocation === 'left') {
            obj.css({ 'left': '-' + properties.containerWidth});
            settings.tabHandle.css({'right' : '-' + properties.tabWidth});
        }

        if(settings.tabLocation === 'right') {
            obj.css({ 'right': '-' + properties.containerWidth});
            settings.tabHandle.css({'left' : '-' + properties.tabWidth});
            
            $('html').css('overflow-x', 'hidden');
        }

        //functions for animation events
        
        settings.tabHandle.click(function(event){
            event.preventDefault();
        });
        
        var slideIn = function() {
            
            if (settings.tabLocation === 'top') {
                obj.animate({top:'-' + properties.containerHeight}, settings.speed).removeClass('open');
            } else if (settings.tabLocation === 'left') {
                obj.animate({left: '-' + properties.containerWidth}, settings.speed).removeClass('open');
            } else if (settings.tabLocation === 'right') {
                obj.animate({right: '-' + properties.containerWidth}, settings.speed).removeClass('open');
            } else if (settings.tabLocation === 'bottom') {
                obj.animate({bottom: '-' + properties.containerHeight}, settings.speed).removeClass('open');
            }    
            
        };
        
        var slideOut = function() {
            
            if (settings.tabLocation == 'top') {
                obj.animate({top:'-3px'},  settings.speed).addClass('open');
            } else if (settings.tabLocation == 'left') {
                obj.animate({left:'-3px'},  settings.speed).addClass('open');
            } else if (settings.tabLocation == 'right') {
                obj.animate({right:'-3px'},  settings.speed).addClass('open');
            } else if (settings.tabLocation == 'bottom') {
                obj.animate({bottom:'-3px'},  settings.speed).addClass('open');
            }
        };

        var clickScreenToClose = function() {
            obj.click(function(event){
                event.stopPropagation();
            });
            
            $(document).click(function(){
                slideIn();
            });
        };
        
        var clickAction = function(){
            settings.tabHandle.click(function(event){
                if (obj.hasClass('open')) {
                    slideIn();
                } else {
                    slideOut();
                }
            });
            
            clickScreenToClose();
        };
        
        var hoverAction = function(){
            obj.hover(
                function(){
                    slideOut();
                },
                
                function(){
                    slideIn();
                });
                
                settings.tabHandle.click(function(event){
                    if (obj.hasClass('open')) {
                        slideIn();
                    }
                });
                clickScreenToClose();
                
        };
        
        var slideOutOnLoad = function(){
            slideIn();
            setTimeout(slideOut, 500);
        };
        
        //choose which type of action to bind
        if (settings.action === 'click') {
            clickAction();
        }
        
        if (settings.action === 'hover') {
            hoverAction();
        }
        
        if (settings.onLoadSlideOut) {
            slideOutOnLoad();
        };
        
    };
})(jQuery);

$(function(){

 $('.slide-out-div').tabSlideOut({
     tabHandle: '.handle',                             
     pathToTabImage: null,    
     imageHeight: '270px',      
     imageWidth: '55px',
     tabLocation: donateType,
     speed: 300,
     action: 'click',
     topPos: '200px',
     leftPos: '100px',
     fixedPosition: true 
 });
 
});
