package com.cgiv.questionnaire.service;

import com.cgiv.questionnaire.entity.RespondentQuestionnaire;
import com.cgiv.questionnaire.entity.Result;
import org.springframework.stereotype.Service;

/**
 * @Author: ZhangKe
 * @Description:
 * @Date: 2018/10/28 14:30
 */
public interface RespondentQuestionnaireService {

    /**
     * 试题提交
     * state:
     */
    Result submitQuestionnaire(RespondentQuestionnaire respondentQuestionnaire);
}
