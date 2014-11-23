    var phonecatApp = angular.module('phonecatApp', []);
     
    phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('./ressources/json/types.json').success(function(data) {
                $scope.listeType = data;
                console.log(data);
            });
            $http.get('./ressources/json/uv.json').success(function(data) {
                $scope.listuv = data;
            });
            $http.get('./ressources/json/contenu.json').success(function(data) {
                $scope.contenu = data;
            });
            $http.get('./ressources/json/xp.json').success(function(data) {
                $scope.xp = data;
            });
            $http.get('./ressources/json/otherXp.json').success(function(data) {
                $scope.otherXp = data;
            });
            $http.get('./ressources/json/skills.json').success(function(data) {
                $scope.skills = data;
            });
            $http.get('./ressources/json/projets.json').success(function(data) {
                $scope.projets = data;
            });
            $http.get('./ressources/json/informations_generales.json').success(function(data) {
                $scope.infos = data;
            });
        }
    ]);

    $scope.query="";

    function displayUv() {
        hideAll();
        $('.uv').show(); 
        $('.uvBtn').addClass("active");
    }

    function displayContent() {
        hideAll();
        $('.cont').show();
        $('.descriptionBtn').addClass("active");
    }

    function displayXp() {
        hideAll();
        $('.xp').show(); 
        $('.xpBtn').addClass("active");

    }

    function displayOtherXp() {
        hideAll();
        $('.other-xp').show(); 
        $('.otherXpBtn').addClass("active");
    }

    function displaySkills() {
        hideAll();
        $('.skills').show(); 
        $('.skillBtn').addClass("active");
    }

    function displayProjets() {
        hideAll();
        $('.projets').show(); 
        $('.projectBtn').addClass("active");
    }

    function hideAll() {
        $('.uv').hide(); 
        $('.cont').hide();
        $('.xp').hide();
        $('.other-xp').hide();
        $('.skills').hide();
        $('.projets').hide();
        $('.descriptionBtn').removeClass("active");
        $('.uvBtn').removeClass("active");
        $('.xpBtn').removeClass("active");
        $('.otherXpBtn').removeClass("active");
        $('.skillBtn').removeClass("active");
        $('.projectBtn').removeClass("active");

    }


    