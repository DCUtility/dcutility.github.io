
$(document).ready(function () {

    $('#tabsContainer').tabs();

    $("#tabIncubatorItems").html(szIncubator);
    $('#tabIncubatorItems').tabs();
    $("#accordionIncubatorTrading").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorRemoting").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorDebugging").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorNetworking").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorProgramming").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorSecurity").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorDesktop").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorMedia").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorGaming").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionIncubatorOther").accordion({ header: "h3", heightStyle: "content" });

    $("#accordionContribution").html(szContribution);
    $("#accordionContribution").accordion({ header: "h3", heightStyle: "content" });
	
    $("#tabFavoritesItems").html(szFavorites);
	$('#tabFavoritesItems').tabs();
    $("#accordionFavoritesDevOps").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionFavoritesDevelopment").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionFavoritesITField").accordion({ header: "h3", heightStyle: "content" });
    $("#accordionFavoritesOther").accordion({ header: "h3", heightStyle: "content" });
	
    $("input:submit, a, div, button", ".demo").button();

    $('#dialog_link, ul#icons li').hover(
        function () { $(this).addClass('ui-state-hover'); },
        function () { $(this).removeClass('ui-state-hover'); }
    );

    $("#CanvasIncubatorItems").html(szCanvas);
    if (!$("#CanvasIncubatorItems").tagcanvas({
        textFont: 'Calibri',
        textHeight: 8,
        textColour: '#6A9AB8',
        outlineColour: '#D7EBF9',
        outlineMethod: 'block',
        outlineThickness: 1,
        outlineRadius: 5,
	shape: "hcylinder",
	lock: "x",	
	radiusX: 2.90,
        shadow: '#AED0EA',
        shadowBlur: 1,
        shadowOffset: [1, 1],
        imageMode: 'image',
        centreImage: 'images/dcutility.png',
        tooltip: 'div',
    })) {
        $('#CanvasIncubator').hide();
    }
	
    $("#CloudSlider").slider({
		value:1,
		min: 1,
		max: 100,
		step: 1,
		slide: function(event, ui) {

			$('#CanvasIncubatorItems').css('width', ui.value +'%');		  
		}
    });	
	
	$('#CanvasIncubatorItems').css('width', '1%');
	
	let _cloudTime  = 0;
	let _cloudTimer = 0;

	function cloudTimer() {

		_cloudTime += 2;

		let cloudSlider = $('#CloudSlider');
		cloudSlider.slider("value", _cloudTime);
		cloudSlider.slider('option', 'slide').call(cloudSlider, null, {value:_cloudTime});
		
		if (_cloudTime == 100)
			clearInterval(_cloudTimer);
	}	
	
	setTimeout(function(){
		
		_cloudTimer = setInterval(cloudTimer, 5);
		
	}, 5000);
	
});


function ShowFocus(panelHeaderText) {
    try {

        var bFound = false;

        $.each($(".ui-accordion"), function (accordionIndex, accordionObject) {

            $.each($(accordionObject).find('h3'), function (panelIndex, panelObject) {

                if (panelObject.innerText.indexOf(panelHeaderText) > -1) {

                    $(accordionObject).parent().parent().tabs({ active: $(accordionObject).parent().index() - 1 });
                    $(accordionObject).accordion({ active: panelIndex });
                    $(panelObject).focus();

                    bFound = true;
                    return !bFound; //return false to break
                }
            });

            return !bFound;
        });
    }
    catch (err) {
        //alert(err.message);
    }
}
