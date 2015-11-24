angular.module('myApp', ['ngMaterial']).controller("mainCtrl", ['$scope', function($scope) {
    console.log("controller called");
    $scope.commentData = {
        "gsc": "700",
        "data": {
            "det": {
                "00a90f37-b554-43f6-b89b-56477c9b6668": {
                    "ty": "com",
                    "id": "00a90f37-b554-43f6-b89b-56477c9b6668",
                    "db": "e58d0ff098406a64",
                    "e": "c420a5d6-13f8-4044-9048-698874d17681",
                    "c": 1.4469067683e12,
                    "txt": "chutiya ho"
                },
                "3f41b404-3e87-479f-ae7e-15dc2e1b7856": {
                    "ty": "com",
                    "id": "3f41b404-3e87-479f-ae7e-15dc2e1b7856",
                    "db": "e58d0ff098406a64",
                    "e": "c420a5d6-13f8-4044-9048-698874d17681",
                    "c": 1.446916327297e12,
                    "txt": "tum chutiya ho"
                },
                "e58d0ff098406a64": {
                    "id": "e58d0ff098406a64",
                    "tick": true,
                    "username": "Samarpita Dasgupta",
                    "hu": false,
                    "image": "http:\/\/img.ropose.com\/userImages\/7406642005525556323315756437121631411631244_circle.png",
                    "ni": {
                        "imgPre": "http:\/\/img.ropose.com\/userImages\/7406642005525556323315756437121631411631244_circle",
                        "50x50": "",
                        "100x100": "",
                        "200x200": "",
                        "30x30": ""
                    },
                    "h": "@myhandle"
                }
            },
            "blocks": [{
                "ty": "cm",
                "id": "00a90f37-b554-43f6-b89b-56477c9b6668"
            }, {
                "ty": "cm",
                "id": "3f41b404-3e87-479f-ae7e-15dc2e1b7856"
            }, {
                "ty": "cm",
                "id": "00a90f37-b554-43f6-b89b-56477c9b6668"
            }, {
                "ty": "cm",
                "id": "3f41b404-3e87-479f-ae7e-15dc2e1b7856"
            }, {
                "ty": "cm",
                "id": "3f41b404-3e87-479f-ae7e-15dc2e1b7856"
            }, {
                "ty": "cm",
                "id": "00a90f37-b554-43f6-b89b-56477c9b6668"
            }]
        }
    }

    function getUniqueIDs(){
    	var unique = {};
        var distinct = [];
        angular.forEach($scope.commentData.data.blocks, function(blocks) {
            if (typeof(unique[blocks.id]) == "undefined") {
                distinct.push(blocks.id);
            }
            unique[blocks.id] = 0;
        })
         return distinct;
    }

    function getModerateCommentsData(uniqueIDs){
    	var moderateCommentsData=[];
        angular.forEach(uniqueIDs,function(id){
           moderateCommentsData.push($scope.commentData.data.det[id]);
        })
        return moderateCommentsData;
    }

    function getModerateCommentCardsData(moderateCommentsData){
    var moderateCommentCardsData=[];
        angular.forEach(moderateCommentsData,function(item){
        	item.doneBy = $scope.commentData.data.det[item.db].username;
            item.profilePic = $scope.commentData.data.det[item.db].image;
        	item.tick =$scope.commentData.data.det[item.db].tick;
        	moderateCommentCardsData.push(item);
        })
        return moderateCommentCardsData;	
    }

    function processData() {
        var uniqueIDs = getUniqueIDs();
        console.log(uniqueIDs);
       
        var moderateCommentsData=getModerateCommentsData(uniqueIDs);
        $scope.moderateCommentCardsData=getModerateCommentCardsData(moderateCommentsData);
        console.log($scope.moderateCommentCardsData);
    }
    processData();
}]).directive("commentCard", function() {
    return {
        scope: {
            data: '='
        },
        templateUrl: 'commentCard.html',
        link: function(scope, element, attribue) {
        	console.log(scope.data);
        }
    }
})