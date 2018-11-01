package com.cgiv.questionnaire.controller;

import com.cgiv.questionnaire.entity.RespondentQuestionnaire;
import com.cgiv.questionnaire.entity.Result;
import com.cgiv.questionnaire.service.RespondentQuestionnaireService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.time.LocalDate;

/**
 * @Author: ZhangKe
 * @Description:
 * @Date: 2018/10/27 20:00
 */
@RestController
@RequestMapping(value = "/questionnaire")
public class QuestionnaireController {

    @Resource
    private RespondentQuestionnaireService questionService;

    /**
     * 试题提交
     * state: OK
     */
    @PostMapping(value = "")
    public Result submitQuestionnaire(
            @RequestBody RespondentQuestionnaire respondentQuestionnaire) {

        return questionService.submitQuestionnaire(respondentQuestionnaire);
    }

    /**
     * 时间传输测试
     * state: OK
     */
    @GetMapping(value = "/time")
    public void timeUpload(@RequestParam @DateTimeFormat(pattern = "yyyy/MM/dd") LocalDate date) {

        System.out.println("----------Zhangke.com----------" + date);
    }
}
