/* eslint no-alert: 0 */

'use strict';
// var res_prefix = window.location.origin + "/static/"

var url_prefix = window.location.origin + "/oral";

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

    $scope.questionList = [
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
        },
        {
            id:11, content:"您孩子刷牙时用牙膏吗？（只选一个答案）", answers:[
                {id:'A', answer:"是", checked:false},
                {id:'B', answer:"否", checked:false},
                {id:'C', answer:"不知道（选 2 或 3 项者不回答第 12 题）", checked:false}
            ]
        },
        {
            id:12, content:"您孩子刷牙时用含氟牙膏吗？（只选一个答案）", answers:[
                {id:'A', answer:"是", checked:false},
                {id:'B', answer:"否", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:13, content:"在过去的 12 个月内，您孩子是否有过牙痛或不适？（只选一个答案）", answers:[
                {id:'A', answer:"从来没有", checked:false},
                {id:'B', answer:"有时候有", checked:false},
                {id:'C', answer:"经常有", checked:false},
                {id:'D', answer:"不清楚", checked:false}
            ]
        },
        {
            id:14, content:"您孩子去医院看过牙吗？（只选一个答案）", answers:[
                {id:'A', answer:"看过", checked:false},
                {id:'B', answer:"从来没看过（选 2 项者不回答第 15 至 16 题）", checked:false}
            ]
        },
        {
            id:15, content:"您孩子最近一次去医院看牙距离现在多长时间？（只选一个答案）", answers:[
                {id:'A', answer:"6 个月以内", checked:false},
                {id:'B', answer:"6 个月至 12 个月（选 1 或 2 项者不回答第 18 题）", checked:false},
                {id:'C', answer:"12 个月以上（选 3 项者不回答第 16 题）", checked:false}
            ]
        },
        {
            id:16, content:"您孩子最近一次去医院看牙的主要原因是什么？（只选一个答案）", answers:[
                {id:'A', answer:"咨询检查", checked:false},
                {id:'B', answer:"预防", checked:false},
                {id:'C', answer:"治疗", checked:false},
                {id:'D', answer:"不知道", checked:false}
            ]
        },
        {
            id:17, content:"", answers:[
                // {id:'A', answer:"咨询检查", checked:false},
                // {id:'B', answer:"预防", checked:false},
                // {id:'C', answer:"治疗", checked:false},
                // {id:'D', answer:"不知道", checked:false}
            ]
        },
        {
            id:18, content:"您孩子在过去 12 个月里没有看牙的原因是？（可选多个答案）", answers:[
                {id:'A', answer:"孩子的牙没问题", checked:false},
                {id:'B', answer:"孩子的牙坏得不严重", checked:false},
                {id:'C', answer:"乳牙要替换，不需要看", checked:false},
                {id:'D', answer:"因为经济困难，看不起牙", checked:false},
                {id:'E', answer:"看牙不方便", checked:false},
                {id:'F', answer:"太忙、没时间", checked:false},
                {id:'G', answer:"孩子害怕看牙疼痛", checked:false},
                {id:'H', answer:"附近没有牙医", checked:false},
                {id:'I', answer:"害怕传染病", checked:false},
                {id:'J', answer:"很难找到信得过的牙医", checked:false},
                {id:'K', answer:"挂号太难", checked:false},
                {id:'L', answer:"在幼儿园看牙", checked:false},
                {id:'M', answer:"其它原因", checked:false},
            ]
        },
        {
            id:19, content:"您对孩子的全身健康状况评价如何？（只选一个答案）", answers:[
                {id:'A', answer:"很好", checked:false},
                {id:'B', answer:"较好", checked:false},
                {id:'C', answer:"一般", checked:false},
                {id:'D', answer:"较差", checked:false},
                {id:'E', answer:"很差", checked:false}
            ]
        },
        {
            id:20, content:"口腔健康对自己的生活很重要(每小题选一个答案)", answers:[
                {id:'A', answer:"同意", checked:false},
                {id:'B', answer:"不同意", checked:false},
                {id:'C', answer:"无所谓", checked:false},
                {id:'D', answer:"不知道", checked:false}
            ]
        },
        {
            id:21, content:"定期口腔检查是十分必要的(每小题选一个答案)", answers:[
                {id:'A', answer:"同意", checked:false},
                {id:'B', answer:"不同意", checked:false},
                {id:'C', answer:"无所谓", checked:false},
                {id:'D', answer:"不知道", checked:false}
            ]
        },
        {
            id:22, content:"牙齿的好坏是天生的，与自己的保护关系不大(每小题选一个答案)", answers:[
                {id:'A', answer:"同意", checked:false},
                {id:'B', answer:"不同意", checked:false},
                {id:'C', answer:"无所谓", checked:false},
                {id:'D', answer:"不知道", checked:false}
            ]
        },
        {
            id:23, content:"预防牙病首先靠自己(每小题选一个答案)", answers:[
                {id:'A', answer:"同意", checked:false},
                {id:'B', answer:"不同意", checked:false},
                {id:'C', answer:"无所谓", checked:false},
                {id:'D', answer:"不知道", checked:false}
            ]
        },
        {
            id:24, content:"保护孩子六龄牙很重要(每小题选一个答案)", answers:[
                {id:'A', answer:"同意", checked:false},
                {id:'B', answer:"不同意", checked:false},
                {id:'C', answer:"无所谓", checked:false},
                {id:'D', answer:"不知道", checked:false}
            ]
        },
        {
            id:25, content:"母亲牙齿不好会影响孩子的牙齿(每小题选一个答案)", answers:[
                {id:'A', answer:"同意", checked:false},
                {id:'B', answer:"不同意", checked:false},
                {id:'C', answer:"无所谓", checked:false},
                {id:'D', answer:"不知道", checked:false}
            ]
        },
        {
            id:26, content:"刷牙时牙龈出血是正常的(每小题选一个答案)", answers:[
                {id:'A', answer:"正确", checked:false},
                {id:'B', answer:"不正确", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:27, content:"细菌可以引起牙龈发炎(每小题选一个答案)", answers:[
                {id:'A', answer:"正确", checked:false},
                {id:'B', answer:"不正确", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:28, content:"刷牙对预防牙龈出血没有用(每小题选一个答案)", answers:[
                {id:'A', answer:"正确", checked:false},
                {id:'B', answer:"不正确", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:29, content:"细菌可以引起龋齿(每小题选一个答案)", answers:[
                {id:'A', answer:"正确", checked:false},
                {id:'B', answer:"不正确", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:30, content:"吃糖可以导致龋齿(每小题选一个答案)", answers:[
                {id:'A', answer:"正确", checked:false},
                {id:'B', answer:"不正确", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:31, content:"乳牙坏了不用治疗(每小题选一个答案)", answers:[
                {id:'A', answer:"正确", checked:false},
                {id:'B', answer:"不正确", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:32, content:"窝沟封闭能预防儿童龋齿(每小题选一个答案)", answers:[
                {id:'A', answer:"正确", checked:false},
                {id:'B', answer:"不正确", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:33, content:"氟化物对保护牙齿没有用(每小题选一个答案)", answers:[
                {id:'A', answer:"正确", checked:false},
                {id:'B', answer:"不正确", checked:false},
                {id:'C', answer:"不知道", checked:false}
            ]
        },
        {
            id:34, content:"您获得的最高学历是什么？(只选一个答案)", answers:[
                {id:'A', answer:"没有上过学", checked:false},
                {id:'B', answer:"小学", checked:false},
                {id:'C', answer:"初中", checked:false},
                {id:'D', answer:"高中", checked:false},
                {id:'E', answer:"中专", checked:false},
                {id:'F', answer:"大专", checked:false},
                {id:'G', answer:"本科", checked:false},
                {id:'H', answer:"硕士及以上", checked:false}
            ]
        }

    ];

    $scope.answerList = [
        {questionId:1, answerId:''},
        {questionId:2, answerId:''},
        {questionId:3, answerId:''},
        {questionId:4, answerId:''},
        {questionId:5, answerId:''},
        {questionId:6, answerId:''},
        {questionId:7, answerId:''},
        {questionId:8, answerId:''},
        {questionId:9, answerId:''},
        {questionId:10, answerId:''},
        {questionId:11, answerId:''},
        {questionId:12, answerId:''},
        {questionId:13, answerId:''},
        {questionId:14, answerId:''},
        {questionId:15, answerId:''},
        {questionId:16, answerId:''},
        {questionId:17, answerId:''},
        {questionId:18, answerId:''},
        {questionId:19, answerId:''},
        {questionId:20, answerId:''},
        {questionId:21, answerId:''},
        {questionId:22, answerId:''},
        {questionId:23, answerId:''},
        {questionId:24, answerId:''},
        {questionId:25, answerId:''},
        {questionId:26, answerId:''},
        {questionId:27, answerId:''},
        {questionId:28, answerId:''},
        {questionId:29, answerId:''},
        {questionId:30, answerId:''},
        {questionId:31, answerId:''},
        {questionId:32, answerId:''},
        {questionId:33, answerId:''},
        {questionId:34, answerId:''}
    ];

    // 题目单选按钮
    $scope.radio = function (index1, index2, answer) {

        $scope.questionList[index1].answers[index2].checked = true;

        angular.forEach($scope.questionList[index1].answers, function (i) {
            if (i.id !== answer.id) {
                i.checked = false;
            }
        });

        $scope.answerList[index1].answerId = answer.id;

        // console.log($scope.questionList);
        console.log($scope.answerList);
    };

    // 试题提交
    $scope.submitQuestionnaire = function () {
        $http({
            method: 'POST',
            url: url_prefix + '/questionnaire',
            data: {
                respondentId:1,
                scoreTotal:99,
                answer:JSON.stringify($scope.answerList),
                questionnaireId:1
            },
            heasers: {
                'Content-Type':'Application/json',
                'Accept':'*/*'
            }
        }).success(function (res) {
            console.log(res)
        })
    };
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
            if (i.id !== id) {
                i.checked = false;
            }
        });
    };

    var map = new Map();
    map.set(1, "hello");
    map.set("demo", 2);

    $scope.timeUpload = function () {

        // 格式化时间字符串
        var date = new Date().toLocaleDateString().split('/');
        for (var i = 1, len = date.length; i < len; i++) {
            date[i] = "0" + date[i];
        }
        var dateFormat = date[0];
        for (var j = 1; j < len; j++) {
            dateFormat += ("/" + date[j].slice(-2));
        }

        $http({
            method: 'GET',
            url: url_prefix + '/questionnaire/time',
            data: {},
            params: {
                date: dateFormat
            },
            heasers: {
                'Content-Type':'Application/json',
                'Accept':'*/*'
            }
        });


        console.log(map.get("demo"))
    };
});

