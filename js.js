

//make all ready first
$( document ).ready(function() {
   
    //console.log('test js file');
    
    //1.get date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    document.getElementById('todays-date').innerHTML = today
    
    /*
    //2.bold heading on mouse over section (temporaray variable scope)
    for (a = 0; a < document.getElementsByClassName('text-in-image').length; a++) (function(a){
    
        //dientify on mouse over event
        document.getElementsByClassName('text-in-image')[a].onmouseover = function () {
            
            //assign new text
            document.getElementsByClassName('text-in-image')[a].style['font-weight'] = 'bold'
        }
    })(a);
    
    
    //3.de-bold heading on mouse out section (temporaray variable scope)
    for (a = 0; a < document.getElementsByClassName('text-in-image').length; a++) (function(a){
        
        //identify on mouse out event
        document.getElementsByClassName('text-in-image')[a].onmouseout = function () {
            
            //assign normal text
            document.getElementsByClassName('text-in-image')[a].style['font-weight'] = 'normal'
        }
    })(a);*/
    
    
    //4.click to show more or show less
    for (var a = 1; a < 4; a++) (function(a){
    
        //dientify which part
        var part = '.part' + a.toString()
    
        //idnetify click button
        $(".arrow"+part).click(function () {
            //$(".show").toggle(1000)
            $(".show"+part).slideToggle(500)
            
            //check current possition then modification
            if ($(".arrow"+part).hasClass("up") == true) {
                $(".arrow"+part).removeClass("up")
                $(".arrow"+part).addClass("down")
            } else if ($(".arrow"+part).hasClass("down") == true) {
                $(".arrow"+part).removeClass("down")
                $(".arrow"+part).addClass("up")
            }
    
            //show line seperation only close
            $("hr"+part).toggle()
        
        })
    })(a);
    
    //5.change font size of text on imga eusing animation
    
    //identify scroll event
    window.onscroll = function() {
        
        //the delay of ttriger point
        var delay = 150 

        //track current position on screen
        var current_position = this.scrollY;

        //get each part position
        var part_1_pos = document.querySelector('.basic-html').getBoundingClientRect().top + document.documentElement.scrollTop
        var part_2_pos = document.querySelector('.basic-css').getBoundingClientRect().top + document.documentElement.scrollTop + delay
        var part_3_pos = document.querySelector('.basic-JS').getBoundingClientRect().top + document.documentElement.scrollTop + delay

        //get screen size
        var w = window.innerWidth

        //max font size
        max_font_size = w/20

        //trgigger point
        var screen_height = window.screen.height
        var end = screen_height + current_position
        var center_of_screen = (end + current_position)/2

        console.log(center_of_screen,part_2_pos,part_3_pos)

        //part 1
        document.getElementsByClassName('text-in-image')[0].style['font-size'] 
            = Math.min(current_position,max_font_size).toString() + 'px'
    
        //part 2
        if (center_of_screen>= part_2_pos) {
            document.getElementsByClassName('text-in-image')[1].style['font-size'] 
                = Math.min(center_of_screen - part_2_pos,max_font_size).toString() + 'px'

        } else {
            document.getElementsByClassName('text-in-image')[1].style['font-size'] = 0
    
        }
    
        //part 3
        if (center_of_screen>= part_3_pos) {
            document.getElementsByClassName('text-in-image')[2].style['font-size'] 
                = Math.min(center_of_screen - part_3_pos,max_font_size).toString() + 'px'
            
        } else {
            document.getElementsByClassName('text-in-image')[2].style['font-size'] = 0
    
        }
        
    };
    
    //click heading to openup menu
    $('header').click(function () {
        
        //click to hide hidden menu
        $('.hidden-menu-section').slideToggle(500)
    })
    
    
    //make color of hidden menu the same as the header
    var header_color = $('header').css('background-color')
    $('.hidden-menu-section').css('background-color',header_color) //assign new color
    
    
    
    //create button at hidden menu
    for (var a = 1; a < $('section').length; a++) {
        console.log($('section')[a].className)
        //var value = "<li>" + $('section')[a].className + "</li>"
        var value = '<li><button type="button" id = "'+a+'">' + $('section')[a].className.replace('-',' ') + '</button></li>'
        $('.hidden-menu-section').append(value)
    }
    
    //add default button to hidden menu
    var default_button_zone = '<div class = "default-zone"></div>'
    var show_all_button = '<li id = "show-all">show all</li>'
    var hide_all_button = '<li id = "hide-all">hide all</li>'
    $('.hidden-menu-section').append(default_button_zone)
    $('.hidden-menu-section .default-zone').append('<ul></ul>')
    $('.hidden-menu-section .default-zone ul').append(show_all_button)
    $('.hidden-menu-section .default-zone ul').append(hide_all_button)
    
    //on click event of hidden menu
    $('button').click(function (event) {
    
        //identify click button
        var button_id = $(this).attr('id')
        console.log('click: ' + button_id)
    
        //close the hidden menu
        $('.hidden-menu-section').slideToggle(500)
    
        //close all expand
        $(".show").hide()
    
        //open only selected tab
        var part = '.part' + button_id.toString()
        $(".show"+part).show()
    
        //deal with arrow: make all arrow down
        $(".arrow").removeClass("up")
        $(".arrow").addClass("down")  
        
        //deal with arrow: make selected arrow up
        $(".arrow"+part).removeClass("down")
        $(".arrow"+part).addClass("up")     
    
        //deal with line: show all line
        $("hr").show()
    
        //deal with line: hide only selected line
        $("hr"+part).hide()
    
    })
    
    
    //show all button
    $("#show-all").click(function () {
        //close the hidden menu
        $('.hidden-menu-section').slideToggle(500)
    
        //show all
        $(".show").show()
    
        //deal with arrow: make all arrow go up
        $(".arrow").removeClass("down")
        $(".arrow").addClass("up")    
    
        //deal with line: hide all line
        $("hr").hide()
    })
    
    //hide all button
    $("#hide-all").click(function () {
        //close the hidden menu
        $('.hidden-menu-section').slideToggle(500)
    
        //show all
        $(".show").hide()
    
        //deal with arrow: make all arrow go down
        $(".arrow").removeClass("up")
        $(".arrow").addClass("down")    
    
        //deal with line: show all line
        $("hr").show()
    })
});