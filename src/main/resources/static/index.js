/* eslint no-alert: 0 */

'use strict';
// var res_prefix = window.location.origin + "/static/"

var url_prefix = window.location.origin;

//
// Here is how to define your module
// has dependent on mobile-angular-ui
//
var app = angular.module('MobileAngularUiExamples', [
    'ngRoute',
    'mobile-angular-ui',
    // touch/drag feature: this is from 'mobile-angular-ui.gestures.js'.
    // This is intended to provide a flexible, integrated and and
    // easy to use alternative to other 3rd party libs like hammer.js, with the
    // final pourpose to integrate gestures into default ui interactions like
    // opening sidebars, turning switches on/off ..
    'mobile-angular-ui.gestures'
]);

app.run(function($transform) {
    window.$transform = $transform;
});

//
// You can configure ngRoute as always, but to take advantage of SharedState location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false'
// in order to avoid unwanted routing.
//
app.config(function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'home.html', controller:'MainController', reloadOnSearch: false});
    $routeProvider.when('/child', {templateUrl: 'child.html', controller:'ChildController', reloadOnSearch: false});
    $routeProvider.when('/student', {templateUrl: 'student.html', controller:'StudentController', reloadOnSearch: false});
    $routeProvider.when('/adult', {templateUrl: 'adult.html', controller:'AdultController', reloadOnSearch: false});
    $routeProvider.when('/demo', {templateUrl: 'demo.html', controller:'DemoController', reloadOnSearch: false});
    // $routeProvider.when('/audiodemo', {templateUrl: 'audiodemo.html', reloadOnSearch: false, controller:'AudioDemoController'});
    // $routeProvider.when('/post', {templateUrl: 'post.html', reloadOnSearch: false, controller : 'PostController'});
    // $routeProvider.when('/consultonline', {templateUrl: 'consultonline.html', reloadOnSearch: false, controller : 'ConsultonlineController'});
    // $routeProvider.when('/mysetting', {templateUrl: 'mysetting.html', reloadOnSearch: false, controller : 'MysettingController'});
    // $routeProvider.when('/audiodemo', {templateUrl: 'audiodemo.html', reloadOnSearch: false, controller:'AudioDemoController'});
    // $routeProvider.when('/mypatients', {templateUrl: 'mypatients.html', reloadOnSearch: false, controller:'MyPatientsController'});
});

app.controller('MainController', function ($http, $scope, $location) {

    $scope.goToChild = function(){
      $location.path('child');
    };

    $scope.goToStudent = function(){
      $location.path('student');
    };

    $scope.goToAdult = function(){
      $location.path('adult');
    };

    $scope.goToDemo = function(){
      $location.path('demo');
    };

    console.log("MainController");
});

app.controller('ChildController', function ($http, $scope, $location) {

    $scope.questionnaireNotice = "注意：只有孩子的父母和祖父母/外祖父母才能完成本问卷！";

    $scope.respondent = {
        id:'',
        name:'',
        date:null
    };

    $scope.investigatorId = 0;

    $scope.questions = [
        {
            id:1, content:"您是孩子的？（只选一个答案）", answers:[
                {id:'A', answer:"父亲", checked:false},
                {id:'B', answer:"母亲", checked:false},
                {id:'C', answer:"祖父/外祖父", checked:false},
                {id:'D', answer:"祖母/外祖母", checked:false}
            ]
        },
        {
            id:2, content:"您孩子出生后六个月内喂养的方式？（只选一个答案）", answers:[
                {id:'A', answer:"完全母乳喂养", checked:false},
                {id:'B', answer:"母乳喂养为主", checked:false},
                {id:'C', answer:"完全人工喂养", checked:false},
                {id:'D', answer:"人工喂养为主", checked:false},
                {id:'E', answer:"母乳喂养和人工喂养各半", checked:false}
            ]
        },
        {
            id:3, content:"您孩子平时进食甜点心（饼干、蛋糕、面包）及糖果（巧克力、含糖口香糖）" +
                "的频率如何？", answers:[
                {id:'A', answer:"每天 ≥2 次", checked:false},
                {id:'B', answer:"每天 1  次", checked:false},
                {id:'C', answer:"每周 2-6 次", checked:false},
                {id:'D', answer:"每周 1  次", checked:false},
                {id:'E', answer:"每月 1-3 次", checked:false},
                {id:'F', answer:"很少/从不", checked:false}
            ]
        },
        {
            id:4, content:"您孩子平时进食甜饮料（糖水、可乐等碳酸饮料，橙汁、苹果汁等果汁、" +
                "柠檬水等非鲜榨果汁）的频率如何？", answers:[
                {id:'A', answer:"每天 ≥2 次", checked:false},
                {id:'B', answer:"每天 1  次", checked:false},
                {id:'C', answer:"每周 2-6 次", checked:false},
                {id:'D', answer:"每周 1  次", checked:false},
                {id:'E', answer:"每月 1-3 次", checked:false},
                {id:'F', answer:"很少/从不", checked:false}
            ]
        },
        {
            id:5, content:"您孩子平时进食加糖的牛奶、酸奶、奶粉、茶、豆浆、咖啡的频率如何？",
            answers:[
                {id:'A', answer:"每天 ≥2 次", checked:false},
                {id:'B', answer:"每天 1  次", checked:false},
                {id:'C', answer:"每周 2-6 次", checked:false},
                {id:'D', answer:"每周 1  次", checked:false},
                {id:'E', answer:"每月 1-3 次", checked:false},
                {id:'F', answer:"很少/从不", checked:false}
            ]
        },
        {
            id:6, content:"您孩子在晚上睡前吃甜点或喝甜饮料吗？（只选一个答案）", answers:[
                {id:'A', answer:"经常", checked:false},
                {id:'B', answer:"偶尔", checked:false},
                {id:'C', answer:"从不", checked:false}
            ]
        },
        {
            id:7, content:"您孩子刷牙吗？（只选一个答案）", answers:[
                {id:'A', answer:"刷牙", checked:false},
                {id:'B', answer:"偶尔刷或从不刷（选 2 项者不回答第 8 至 12 题）", checked:false}
            ]
        },
        {
            id:8, content:"您孩子从几岁开始刷牙？（只选一个答案）", answers:[
                {id:'A', answer:"半岁", checked:false},
                {id:'B', answer:"1 岁", checked:false},
                {id:'C', answer:"2 岁", checked:false},
                {id:'D', answer:"3 岁", checked:false},
                {id:'E', answer:"4 岁", checked:false},
                {id:'F', answer:"5 岁", checked:false},
                {id:'G', answer:"不记得", checked:false}
            ]
        },
        {
            id:9, content:"您孩子每天刷几次牙？（只选一个答案）", answers:[
                {id:'A', answer:"2 次及以上", checked:false},
                {id:'B', answer:"1 次", checked:false},
                {id:'C', answer:"不是每天刷", checked:false}
            ]
        },
        {
            id:10, content:"您帮助孩子刷牙吗？（只选一个答案）", answers:[
                {id:'A', answer:"每天", checked:false},
                {id:'B', answer:"每周", checked:false},
                {id:'C', answer:"有时", checked:false},
                {id:'D', answer:"偶尔", checked:false},
                {id:'E', answer:"从没做过", checked:false}
            ]
        }

    ];

    // 题目单选按钮
    $scope.radio = function (index1, index2, answer) {

        $scope.questions[index1].answers[index2].checked = true;

        angular.forEach($scope.questions[index1].answers, function (i) {
            if (i.id !== answer.id) {
                i.checked = false;
            }
        });

        console.log($scope.questions);
    };

    // 试题提交
    $scope.submitQuestionnaire = function () {
        $http({
            method: 'POST',
            url: url_prefix + '/questionnaire',
            data: {
                // questionnaire: $scope.questions
                content:"hello world!"
            },
            heasers: {
                'Content-Type':'Application/json',
                'Accept':'*/*'
            }
        }).success(function (res) {
            console.log(res)
        })
    }
});

app.controller('StudentController', function ($http, $scope, $location) {


});

app.controller('AdultController', function ($http, $scope, $location) {


});

app.controller('DemoController', function ($http, $scope, $location) {

    $scope.answers = [
        {id:'A', content:"父亲", checked:false},
        {id:'B', content:"母亲", checked:false},
        {id:'C', content:"祖父/外祖父", checked:false},
        {id:'D', content:"祖母/外祖母", checked:false}
    ];

    $scope.demo = 333;
    $scope.index = 333;

    $scope.selectValue = function (index, id, answer) {
        $scope.demo = id;
        $scope.index = index;
        $scope.answers[index].checked = true;
        angular.forEach($scope.answers, function (i) {
            if (i.id != id) {
                i.checked = false;
            }
        });
    }
});

