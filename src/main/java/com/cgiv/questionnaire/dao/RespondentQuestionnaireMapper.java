package com.cgiv.questionnaire.dao;

import com.cgiv.questionnaire.entity.RespondentQuestionnaire;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RespondentQuestionnaireMapper {
    int deleteByPrimaryKey(Long id);

    int insert(RespondentQuestionnaire record);

    int insertSelective(RespondentQuestionnaire record);

    RespondentQuestionnaire selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(RespondentQuestionnaire record);

    int updateByPrimaryKey(RespondentQuestionnaire record);
}