

    function displayUv() {
        //hideAll();
        //$('.uv').show(); 
        //$('.uvBtn').addClass("active");
    }

    function displayContent() {
        //hideAll();
        //$('.cont').show();
        //$('.descriptionBtn').addClass("active");
    }

    function displayXp() {
        //hideAll();
        //$('.xp').show(); 
        //$('.xpBtn').addClass("active");

    }

    function displayOtherXp() {
        //hideAll();
       //$('.other-xp').show(); 
        //$('.otherXpBtn').addClass("active");
    }

    function displaySkills() {
        //hideAll();
        $('.skills').show(); 
        $('.skillBtn').addClass("active");
    }

    function displayProjets() {
        //hideAll();
        $('.projets').show(); 
        $('.projectBtn').addClass("active");
    }

    function display() {
        hideAll();
        alert($(this).attr("id"));
        $(this).addClass('active');
        document.getElementById("team1").innerHTML="courgette";
        document.getElementById("team2").innerHTML="Tomatte";
        document.getElementById("period").innerHTML="2";
        document.getElementById("timestamp").innerHTML="1:75";
        document.getElementById("score1").innerHTML="2";
        document.getElementById("score2").innerHTML="1";
        document.getElementById("penal1").innerHTML="2";
        document.getElementById("penal2").innerHTML="1";


    }

    function hideAll() {
        $('.buttons').removeClass("active");

    }


    