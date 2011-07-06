var QUESTIONS = ["Are you originally from Cambridgeshire?", "Do you live in an East London flat?", "Do you have a moustache?", "Do you own a low-cut vest?", "Do you own purple leggings?", "Do you have a sailor-style tattoo?","Do you have a fixie bike?", "Have you recently played a gig where you had a guestlist?", "Do you play synth?", "Do you wear glasses without prescription lenses?", "Do you dress like a nerd despite getting low grades at school?", "Did you get called names by kids at school?", "Do you live on an estate?", "Do you have an iPhone?", "Do you use a photo app on your iPhone that adds 'vintage' effects to pictures?", "Have you ever taken pictures on London Fields?", "Do you frequently share these pictures on the internet somehow?", "Do you often have new age fun?", "Do you like 'vintage' things?", "Have you ever been to a warehouse rave?", "Have you ever been on the guestlist for a warehouse rave?", "Do you only smoke roll-ups?", "Do you ever plug in your laptop in coffee shops?", "Do you work in media?", "Do you lie about working in media?", "Are you on the dole?", "Do you consider yourself cool?", "Do you ever wear loafers with no socks?", "Do you ever express a preference for musical styles involving the cross-pollenation of esoteric genres?","Are you ever ambiguous about your sexual preference?", "Do you have a necklace with something 'retro' on it?","Are you a blogger?","Do you make your own line of jewellery?","Are you a vegan?","Do you organise niche musical events?","Do you run a magazine about your balls?","Are you generally ignorant about current affairs yet claim to care about the troubles in the world?"]
var score = 0;
var current_question_index = 0;
$(function(){
    $("#result").hide();
    
    var flashResult = function(){
        var COLOURS = [
        "#4F1B74",
        "#8B0D53",
        "#E40063",
        "#C3328B",
        "#31A635",
        "#77B923",
        "#D3D800",
        "#EFF100",
        "#E9001B",
        "#F43F13",
        "#F18000",
        "#EEA229",
        "#333"   ,
        "#005DB5",
        "#40A3D6"];
        var colour_index = 0;
        setInterval(function(){
            colour_index ++;
            if(colour_index==COLOURS.length) colour_index = 0;
            $("#score").css({color:COLOURS[colour_index]})
        }, 500)
    }
    
    var finished = function(){
        var percent = Math.round(100 * score / QUESTIONS.length);
        $("#score").text(percent + "%");
        var message = escape("I scored "+ percent + "% on the Dickheadometer: http://dickheadometer.grimaceworks.com");
        $("#twitter_share").attr("href","http://twitter.com/home?status="+ message);
        $("#facebook_share").attr("href","http://www.facebook.com/connect/prompt_feed.php?&message=" + message);
        $("#quiz").slideUp(function(){
            flashResult();
            $("#result").slideDown(1000);
        });
    }
    var nextQuestion = function(){
        current_question_index ++;
        var n = QUESTIONS.length;
        if(current_question_index < n){
            $("#quiz").fadeOut(function(){
                $("#question_number").text("Question " + (current_question_index+1) + ":");
                $("#question").text(QUESTIONS[current_question_index]);            
                $(this).fadeIn();
            })
        }else{
            finished();
        }
    }
    $("#yes").click(function(){
        score ++;
        nextQuestion();
    });
    $("#no").click(nextQuestion);
	
})