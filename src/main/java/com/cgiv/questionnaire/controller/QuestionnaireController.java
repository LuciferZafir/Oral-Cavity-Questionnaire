package com.cgiv.questionnaire.controller;

import com.cgiv.questionnaire.entity.RespondentQuestionnaire;
import com.cgiv.questionnaire.entity.Result;
import com.cgiv.questionnaire.util.ResultUtil;
import org.springframework.web.bind.annotation.*;

/**
 * @Author: ZhangKe
 * @Description:
 * @Date: 2018/10/27 20:00
 */
@RestController
@RequestMapping(value = "/questionnaire")
public class QuestionnaireController {

    /**
     *
     * state:
     */
    @GetMapping(value = "")
    public Result getQuestionnaire() {

        return ResultUtil.success("Hello World");
    }
}
