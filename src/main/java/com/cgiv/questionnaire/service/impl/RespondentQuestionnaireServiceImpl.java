package com.cgiv.questionnaire.service.impl;

import com.cgiv.questionnaire.dao.RespondentQuestionnaireMapper;
import com.cgiv.questionnaire.entity.RespondentQuestionnaire;
import com.cgiv.questionnaire.entity.Result;
import com.cgiv.questionnaire.service.RespondentQuestionnaireService;
import com.cgiv.questionnaire.util.ResultUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * @Author: ZhangKe
 * @Description:
 * @Date: 2018/10/28 14:46
 */
@Service
public class RespondentQuestionnaireServiceImpl implements RespondentQuestionnaireService {

    @Resource
    private RespondentQuestionnaireMapper questionnaireMapper;

    @Override
    public Result submitQuestionnaire(RespondentQuestionnaire questionnaire) {

        if (questionnaire == null) {
            return ResultUtil.error("试题提交参数为空");
        }

        questionnaire.setDataStatus((short) 1);
        questionnaire.setRecDate(LocalDate.now());
        LocalDateTime now = LocalDateTime.now();
        questionnaire.setCreateTime(now);
        questionnaire.setUpdateTime(now);

        int insertResult = questionnaireMapper.insert(questionnaire);

        if (insertResult <= 0) {
            return ResultUtil.error("试题提交失败");
        }

        return ResultUtil.success("试题提交成功");
    }
}
